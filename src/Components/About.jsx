import React from 'react'
import './About.css'
import Card from './Card'
import dsa from '../Assests/dsa.png'
import webdev from '../Assests/webdev.png'
import codinglang from '../Assests/codinglang.png'
import { useGSAP } from '@gsap/react';
import { gsap } from "gsap";
import {ScrollTrigger} from 'gsap/all';
gsap.registerPlugin(ScrollTrigger)
export default function About() {
  useGSAP(()=>{
    gsap.from(".circle",{
      x:-100,
      duration:1,
      opacity:0,
      stagger:1,
      scrollTrigger:{
        trigger:".circle",
        scroll:"body",
        scrub:2,
        
        start:"top 60%",
        end:"top 30%"
      }
      
    })
    gsap.from(".line",{
      x:-100,
      duration:1,
      opacity:0,
      stagger:1,
      scrollTrigger:{
        trigger:".line",
        scroll:"body",
        scrub:2,
        
        start:"top 60%",
        end:"top 30%"
      }
      
    })
    gsap.from(".about-details h1",{
      x:-100,
      duration:1,
      opacity:0,
      stagger:1,
      scrollTrigger:{
        trigger:"h1",
        scroll:"body",
        scrub:2,
        
        start:"top 60%",
        end:"top 30%"
      }
      
    })
    gsap.from(".about-details ul ",{
      y:100,
      duration:1,
      opacity:0,
      stagger:1,
      scrollTrigger:{
        trigger:".about-details ul",
        scroll:"body",
        scrub:2,
        
        start:"top 60%",
        end:"top 30%"
      }
      
    })
    
  })
  return (
    <div id="about">
      <div className="leftAbout">
        <div className="circle-line">
          <div className="circle"></div>
          <div className="line"></div>
          <div className="circle"></div>
          <div className="line"></div>
          <div className="circle"></div>
        </div>
        <div className="about-details">
        <div className="personalInfo common">
          <h1>Personal Info</h1>
          <ul>
            <li>
              <span>Name</span> : Anisha Paul
              </li>
               <li>
              <span>Age</span> : 20
               </li>
                <li>
              <span>Gender</span> : Female
               </li>
                <li>
              <span>Language Known</span> : English,Hindi,Bengali
            </li>
          </ul>
        </div>
        <div className="education common">
          <h1>Education</h1>
        <ul>
          <li>
            <span>Degree</span> : Btech
          </li>
          <li>
            <span>Branch</span> : artificial intelligence and macine learning
          </li>
          <li>
            <span>cgpa</span> : 8.7
          </li>
        </ul>
        </div>
        <div className="skills common">
          <h1>Skills</h1>
          <ul>
          <li>
            frontend developer
          </li>
          <li>
            dsa in c++
          </li>
          <li>
            <span>Languages</span> : java,Python,C
          </li>
          </ul>
        </div>
      </div>
      </div>
      
      <div className="rightAbout" data-aos="fade-up-left">
        <Card title="FRONTEND DEVELOPER" image={webdev} />
        <Card title="DSA" image={dsa} />
        <Card title="CODING LANGUAGES" image={codinglang} />
        </div>
    </div>
  )
}
