import React from 'react';
import Card from "./Card";
import { Link } from 'react-router-dom';



const CreatorData = ({ reviews }) => {
  return ( 

      <div className='grid grid-cols-3 h-full gap-4 w-[1197px]  mt-28  '>
      {reviews.map((review, index) => (
        <Card className='' key={index} review={review} index={index} />
      ))}
      </div>
      
  );
};

export default CreatorData;
