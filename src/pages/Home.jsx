import React, { useState, useEffect } from 'react';
import FrontPageLoader from './FrontPageLoader';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import "./Home.css"

const Home = ({ isLoggedIn }) => {
  const [loading, setLoading] = useState(true);

  // Simulate loading delay with useEffect
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 9000); // Adjust the delay time as needed

    return () => clearTimeout(timer); // Cleanup the timer on component unmount
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      {loading ? (
        // Show FrontPageLoader while loading is true
        <FrontPageLoader />
      ) : (
        // Show Home content once loading is false
        <>
          <div className='flex mt-2 main justify-center welcome items-center mb-20 text-white text-8xl h-full font-bold'>
            Welcome to SyncTube
          </div>
          <div className='flex items-center gap-x-6'>
            {!isLoggedIn && (
              <Link to="/login">
                <button className='bg-blue-500  btn-pink text-richblack-100 py-[8px] px-[12px] border border-richblack-700'>
                  Login
                </button>
              </Link>
            )}
            {!isLoggedIn && (
              <Link to="/signup">
                <button className='bg-richblack-800 btn-pink text-richblack-100 py-[8px] px-[12px] border border-richblack-700'>
                  SignUp
                </button>
              </Link>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default Home;
