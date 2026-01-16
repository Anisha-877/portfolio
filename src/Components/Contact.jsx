import React from 'react'
import con from '../Assests/contact.png'
import './Contact.css'
import { useGSAP } from '@gsap/react';
import { gsap } from "gsap";
import {ScrollTrigger} from 'gsap/all';
export default function Contact(){
    useGSAP(()=>{
        gsap.from(".left-contact img",{
          x:-100,
          duration:1,
          opacity:0,
          stagger:1,
          scrollTrigger:{
            trigger:".left-contact img",
            scroll:"body",
            scrub:2,
            
            start:"top 80%",
            end:"top 30%"
          }
          
        })
        gsap.from(".right-contact form",{
          x:100,
          duration:1,
          opacity:0,
          stagger:1,
          scrollTrigger:{
            trigger:".right-contact form",
            scroll:"body",
            scrub:2,
            
            start:"top 80%",
            end:"top 30%"
          }
          
        })
      })
  return (
    <div id="contact">
        <div className="left-contact">
            <img src={con} alt=""/>
        </div>
        <div className="right-contact">
            <form action="https://formspree.io/f/xlggdpwz"  method="POST">
                <input name='Username' type='text' placeholder='Name'/>
                <input name='Email' type='email' placeholder='email'/>
                <textarea name='Message' id='textarea' placeholder='Message Me'></textarea>
                <button type='submit' id='btn'>SUBMIT</button>
            </form>
        </div>
    </div>
  )
}
