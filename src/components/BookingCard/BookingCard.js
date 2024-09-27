'use client'
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { getServices } from '@/api/api';
import Shimmer from '../Shimmer/Shimmer';


const BookingCard = () => {
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await getServices(); 
        const filteredData = response
          .filter(service => service.bookingCard && Array.isArray(service.bookingCard))
          .flatMap(service => service.bookingCard);

        setFilter(filteredData);
      } catch (error) {
        console.error('Error:', error.message);
      }
      setLoading(false);
    };

    fetchData();
  }, []);

  if (loading) {
    return <Shimmer/>;
  }

  return (
    <section className="w-fit  grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2  gap-y-20 gap-x-14 mt-10 mb-5 p-5">
      {filter.length === 0 && <p>No bookings available.</p>}
     
      {filter.map((service, index) => (
        <div key={index} className="w-85 bg-white  shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
      
         <Image
            className=" w-85 h-96 object-cover rounded-t-xl "
            src={service.image}
            alt={service.name}
            width={535}
            height={664}
          />
    
          <div className="px-6 py-4">
            <h2 className="servicecard_name mb-2 text-center">{service.name}</h2>
            <p className="servicecard_des text-center">{service.description}</p>
          </div>
          <div className="px-6 py-4 text-center">
            <button className="bg-red-500 text-white font-bold py-2 px-4 rounded hover:bg-red-700 transition duration-300">
              Book Now
            </button>
          </div>
        </div>
      ))}
    </section>
  );
};

export default BookingCard;
