import Link from 'next/link';

const Custom404 = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center p-4">
      <h1 className="text-9xl font-bold text-gray-800 mb-4">Sorry</h1>
      <h2 className="text-3xl font-semibold text-gray-700 mb-2">This page is unavailable right now.</h2>
      <p className="text-gray-600 mb-6">Sorry, the page youre looking for doesnt exist.</p>

      <Link href="/services">
        <p className="bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg shadow-md hover:bg-blue-700 transition duration-300">
          Go Service Page
        </p>
      </Link>
    </div>
  );
};

export default Custom404;
