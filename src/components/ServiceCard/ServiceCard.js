'use client'
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { getServices } from '@/api/api';
import Shimmer from '../Shimmer/Shimmer';


const ServiceCard = () => {
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await getServices(); 
        const filteredData = response
          .filter(service => service.serviceCard && Array.isArray(service.serviceCard))
          .flatMap(service => service.serviceCard);

        setFilter(filteredData);
      } catch (error) {
        console.error('Error:', error.message);
      }
      setLoading(false);
    };

    fetchData();
  }, []);
console.log(filter,'filter')
  if (loading) {
    return <Shimmer/>
  }

  return (
    <section className="w-fit  grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2  gap-y-20 gap-x-8 mt-10 mb-5 p-5">
      {filter.length === 0 && <p>No Service available.</p>}
     
      {filter.map((service, index) => (
        <div key={index} className="w-50 bg-white shadow-md border border-black rounded-xl duration-500 hover:scale-105 hover:shadow-xl ">
         <div className="flex  justify-center mt-3">
         <Image
            className="h-50 w-50  object-cover"
            src={service.image}
            alt={service.name}
            width={76}
            height={88}
          />
         </div>
          <div className="px-6 py-4 mb-5">
            <h2 className="servicecard_name mb-2 text-center">{service.name}</h2>
            <p className="servicecard_des text-center">{service.description}</p>
          </div>
         
        </div>
      ))}
    </section>
  );
};

export default ServiceCard;
