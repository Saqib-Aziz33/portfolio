import React from 'react';
import { Link } from 'react-router-dom';
import errorImg from '../assets/error.svg';
import 'animate.css/animate.min.css'
import Breadcrum from '../components/Breadcrum';

function NotFound() {
  return <div className='container my-8 mx-auto'>
    <Breadcrum current='Not Found' />
    <div className='flex flex-col items-center animate__animated animate__zoomInLeft'>
      <img src={errorImg} alt="" className='max-w-sm h-auto block m-auto' />
      <div>
        <Link className='btn btn-link' to={'/'}>Back to Home</Link>
      </div>
    </div>
  </div>;
}

export default NotFound;
