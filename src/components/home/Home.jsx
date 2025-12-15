import React from 'react'
import Navbar from '../Navbar/Navbar'
import slide1  from '../image/slide1.jpg' ;
import slide2  from '../image/slide2.jpg' ;
import slide3  from '../image/slide3.jpg' ;
import Imageslider from '../Imageslider/Imageslider';

function Home() {

  const slides = [
    {url:slide1,title:'slide1'},
    {url:slide2,title:"slide2"},
    {url:slide3,title:"slide3"}
  ]
  return (
    <div>
      <Navbar/>
      <div className=''>
      <div className=''>
              <Imageslider slides={slides} />
      </div>
</div>
    </div>
  )
}

export default Home
