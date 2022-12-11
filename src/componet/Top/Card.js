import React, { useEffect, useState } from 'react';
import './Card.css'
const Card = () => {
    const[items, setInfo] = useState([])

    useEffect(()=>{
        fetch('dumble.json')
        .then(res => res.json())
        .then(data =>setInfo(data))
    },[])
    return (
      <div className='containers-info'>
        {items.map((item) => (
          <div className="card">
            <div className="img-box">
              <img src={item.img} alt="User"></img>
            </div>
            <div className="text-box">
              <h4>{item.title}</h4>
              <p className="description">{item.body}</p>
              <p>For Age: {item.age}</p>
              <p>Time required : {item.time}</p>
              <button>Add To List</button>
            </div>
          </div>
        ))}
      </div>
    );
};

export default Card;