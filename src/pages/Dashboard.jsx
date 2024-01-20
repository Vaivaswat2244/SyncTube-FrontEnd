import React from 'react'
import reviews from '../assets/review'
import CreatorData from '../components/CreatorData'


const Dashboard = () => {
  return (
    <div className='flex justify-center items-center text-white text-3xl h-full     ' >
       <CreatorData reviews={reviews}  />
    </div>
  )
}

export default Dashboard
