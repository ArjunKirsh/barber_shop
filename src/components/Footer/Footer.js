import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram } from 'react-icons/fa';
import white_logo from '../../assets/images/white_logo.png'
const Footer = () => {
  return (
    <footer className="bg-black text-white py-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-24 p-1">
       
        <div>
          <h2 className=" footer_title">RAZER CUTS</h2>
          <p className="mt-4 footer_text">
            Mollis rhoncus sem nisl dictumst mauris. At faucibus arcu, scelerisque ultricies accumsan arcu, molestie. Sed ac elit varius enim venenatis ac, id.
          </p>
          <p className="mt-4 text-lg">
            A Dui Aliquam Ultrices Eros Lorem Nibh Vivamus. Quis Aliquam Duis Pharetra Faucibus Ultrices Volutpat Quisque.
          </p>
        </div>

    
        <div>
          <h2 className=" footer_title">PRODUCTS</h2>
          <ul className="mt-4 space-y-2 text-xl">
            <li>Hair Care</li>
            <li>Shave</li>
            <li>Skin Care</li>
            <li>Body Care</li>
            <li>Lifestyle</li>
          </ul>
        </div>

   
        <div>
          <h2 className=" footer_title">SUBSCRIBE OUR NEWSLETTER</h2>
          <form className="mt-4">
            <div className="flex">
              <input
                type="email"
                placeholder="Your Email Address"
                className="p-2 rounded-l-md focus:outline-none w-full bg-transparent border border-white-50"
              />
              <button type="submit" className="bg-red-600 text-white px-4 rounded-r-md">
                SUBSCRIBE
              </button>
            </div>
            <p className="mt-8 text-lg">
              Join Our Newsletter And Get 15% Discount And Become The Member Of Our Community.
            </p>
          </form>
        </div>
      </div>

    
      <div className="max-w-7xl mx-auto mt-5 px-4 flex items-center">
      
        <div className="flex space-x-4 mt-10 me-12">
          <a href="#" aria-label="Facebook">
            <FaFacebookF className="w-6 h-6 hover:text-gray-400" />
          </a>
          <a href="#" aria-label="Twitter">
            <FaTwitter className="w-6 h-6 hover:text-gray-400" />
          </a>
          <a href="#" aria-label="Y ouTube">
            <FaYoutube className="w-6 h-6 hover:text-gray-400" />
          </a>
          <a href="#" aria-label="Instagram">
            <FaInstagram className="w-6 h-6 hover:text-gray-400" />
          </a>
        </div>
        <div className="flex items-center">
          <Link href="/">
          <Image src={white_logo} className='white'/>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
