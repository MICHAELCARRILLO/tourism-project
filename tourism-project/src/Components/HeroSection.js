import React from 'react'
import './HeroSection.css'
import '../App.css'
import { Button } from './Button'

function HeroSection() {
  return (
    <>
    <div className='hero-container'>
        <p>Tours & walking trips</p>
        <h1>FOR THE ADVENTURE</h1>
        <div className='hero-btns'>
        <Button className='btn' buttonStyle='btn--primary' buttonSize='btn--large' >
            DESTINATIONS            
        </Button>
        <Button className='btn' buttonStyle='btn--outline' buttonSize='btn--large' >
            MOST POPULAR            
        </Button>
        </div>
    </div>
    </>
  )
}

export default HeroSection