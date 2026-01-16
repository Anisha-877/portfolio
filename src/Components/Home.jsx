import React from 'react'
import './Home.css'
import woman2 from '../Assests/woman2.png'
import { Typewriter } from "react-simple-typewriter";
import { useGSAP } from '@gsap/react';
import { gsap } from "gsap";
export default function Home() {

  useGSAP(()=>{
        let tl2=gsap.timeline()
        tl2.from(".line1",{
          y:100,
          duration:1,
          opacity:0
        })
        tl2.from(".line2",{
          y:80,
          duration:1,
          opacity:0,
        })
        tl2.from(".line3",{
          y:80,
          duration:1,
          opacity:0,
        })
        gsap.from(".rightHome img",{
          x:200,
          duration:1,
          opacity:0,
        })
      })
  return (
    <div id="home">
      <div className='leftHome'>
        <div className='homeDetails'>
          <div className="line1">I'm</div>
          <div className="line2">ANISHA PAUL</div>
          <div className="line3">
            <Typewriter
            words={["FRONTEND DEVELOPER", "WEB DEVELOPER"]}
            loop={true}
            cursor
            cursorStyle="|"
            typeSpeed={100}
            deleteSpeed={60}
            delaySpeed={1500}
            />
          </div>
          <button>Hire Me</button>
        </div>
      </div>
      <div className='rightHome'>
        <img src={woman2} alt="man" />
      </div>
    </div>
  )
}
