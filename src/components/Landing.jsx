import React from 'react'
import img from "../assets/images/illustration-intro.png";

function Landing() {
  return (
   <section>
    <div className="conatiner">
        <div>
           <img src={img} alt="landing-img" />
        </div>
    </div>
   </section>
  )
}

export default Landing