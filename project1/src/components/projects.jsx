import React from 'react'
import '../global.css'
import Image from '../image/256606.jpg'

function projects() {
  return (
    <div className='projects'>
  <h2>Features</h2>
  <h1>Our Features & services</h1>
  <div className="row">
    <div className="box">
      <img src={Image} alt="256606.jpg" />
{/* <h3>Communications</h3> */}
<p>pretium lectus quam id leo in vitea mattis ellentesque id nibh tortor id</p>
<button className='btn'>See More</button>
    </div>
    <div className="box">
      <img src={Image} alt="256606.jpg" />
      {/* <h3>Communications</h3> */}
       <p>pretium lectus quam id leo in vitea mattis ellentesque id nibh tortor id</p>
      <button className='btn'>See More</button>
    </div>
    <div className="box">
      <img src={Image} alt="256606.jpg" />
       {/* <h3>Communications</h3> */}
      <p>pretium lectus quam id leo in vitea mattis ellentesque id nibh tortor id</p>
       <button className='btn'>See More</button>
    </div>
  </div>
    </div>
  )
}

export default projects