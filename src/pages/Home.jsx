import { About } from '../components/About';
import { partners } from '../components/partners';
import { Contacts } from '../components/Contact';
import { Counter } from '../components/Counter';
import { FAQs } from '../components/FAQs';
import { Gallery } from '../components/Gallery';
import { Hero } from '../components/Hero';
import { Mentors } from '../components/Mentors';
import { Team } from '../components/Team';
import { Genie } from '../components/Genie';
import { Tabs } from '../components/Tabs';
import { Testimonials } from '../components/Testimonials';
import { useEffect } from 'react';


export const Home = () =>{
  useEffect(() => {
    document.body.style.backgroundImage = "none";
    
    document.getElementById("header").style.top = "0%"; 
    document.getElementById("footer").style.display = "block"; 
  }, [])
  
  return (
    <>
      <Hero />
      <main id="main">
        <Client />
        <About />
        <Counter />
        <Tabs />
        <Services />
        <Gallery />
        <Testimonials />
        <Team />
        <FAQs />
        <Mentors />
        <Contacts />
      </main>
    </>
  );
}

