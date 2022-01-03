import React from 'react';

import CardCar from "./card";


export default function List({cars, setCars}) {

    console.log(cars);
    if (cars.length > 0) 
        console.log(cars[0].title);

  return (
      <div>
          <h2>Cars</h2>
          <ul>
          {cars.map((value, index) => {
            return <CardCar key={index} car={value} cars={cars} setCars={setCars}/>
           })}
        </ul>
          
      </div>
  )
}