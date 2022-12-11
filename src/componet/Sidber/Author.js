import React from 'react';
import './Author.css'
import image from './2 (1).jpg'
const Author = () => {
    return (
      <div className='authorBox'>
        <div className='img-boxs'>
          <img src={image} alt="user" />
        </div>
        <div className='author-name'>
          <h3>Shefaul Islam</h3>
          <p>
            <i class="fa-solid fa-location-dot"></i>
          </p>
        </div>
      </div>
    );
};

export default Author;