import React from 'react'
import landing from "../assets/images/illustration-intro.png";

function Landing() {
  return (
   <section>
    <div className="conatiner">
        <div>
           <img src={landing} alt="landing-img" />
        </div>
    </div>
   </section>
  )
}

export default Landing