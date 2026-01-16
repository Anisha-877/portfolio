import React from 'react'
import Card from './Card'
import './Projects.css'
import weather from '../Assests/weather.png'
import password from '../Assests/password.png'
import form from '../Assests/form.png'
import car from '../Assests/car.png'
import todo from '../Assests/todo.png'
import game from '../Assests/game.png'
import amazon from '../Assests/amazon.png'
import clock from '../Assests/clock.png'
import spotify from '../Assests/spotify.png'
import tictactoe from '../Assests/tictactoe.png'
import { useGSAP } from '@gsap/react';
import { gsap } from "gsap";
import {ScrollTrigger} from 'gsap/all';
gsap.registerPlugin(ScrollTrigger)
export default function Projects(){
  useGSAP(()=>{
    gsap.from(".para",{
      y:100,
      duration:1,
      opacity:0,
      stagger:1,
      scrollTrigger:{
        trigger:".para",
        scroll:"body",
        scrub:2,
        
        start:"top 80%",
        end:"top 30%"
      }
      
    })
    gsap.from(".slider",{
      y:100,
      duration:1,
      opacity:0,
      stagger:1,
      scrollTrigger:{
        trigger:".slider",
        scroll:"body",
        scrub:2,
        
        start:"top 80%",
        end:"top 30%"
      }
      
    })
  })
  return (
    <div id="projects">
        <h1 className='para'>PROJECTS</h1>
        <div className="slider">
            <Card title="React-Weather-App" image={weather}/>
            <Card title="React-Password-Generator" image={password}/>
            <Card title="React-Enquiry-Form" image={form}/>
            <Card title="Animated-Car" image={car}/>
            <Card title="React-ToDo-App" image={todo}/>
            <Card title="Stone-Paper-Cissor-Game" image={game}/>
            <Card title="Amazon-clone" image={amazon}/>
            <Card title="Analog-Clock-Using-JS" image={clock}/>
            <Card title="Mini-Spotify-Clone" image={spotify}/>
            <Card title="Tic-Tac-Toe-Game" image={tictactoe}/>
        </div>
    </div>
  );
}
