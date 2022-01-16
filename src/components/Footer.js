import logo from "../assets/header/logo.svg";
import facebook from "../assets/shared/logos/facebook.svg";
import twitter from "../assets/shared/logos/twitter.svg";
import instagram from "../assets/shared/logos/instagram.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <main className='grid text-xs t:pl-8 d:grid-cols-2 d:pb-12 d:px-40 d:items-center bg-footer gap-10'>
      <section className='grid grid-cols-3 gap-5'>
        <img
          src={logo}
          alt='audiophile'
          className='col-start-2 t:col-start-1 justify-self-center t:justify-self-start t:ml-4 d:ml-0 pt-10 border-t-8 border-moderate-orange'
        />
      </section>
      <nav className='grid text-white text-center gap-5 t:grid-flow-col t:auto-cols-max t:w-4/5 t:justify-items-start t:pl-4 t:gap-10 d:pl-48 d:pt-12'>
        <Link to='/'>
          <button className='font-medium tracking-widest hover:text-moderate-orange'>
            HOME
          </button>
        </Link>
        <Link to='/headphones'>
          <button className='font-medium tracking-widest hover:text-moderate-orange'>
            HEADPHONES
          </button>
        </Link>
        <Link to='/speakers'>
          <button className='font-medium tracking-widest hover:text-moderate-orange'>
            SPEAKERS
          </button>
        </Link>
        <Link to='/earphones'>
          <button className='font-medium tracking-widest hover:text-moderate-orange'>
            EARPHONES
          </button>
        </Link>
      </nav>

      <p className='font-light text-sm leading-7 text-white text-opacity-50 px-6 text-center t:px-4 t:text-left t:w-4/5 d:px-0'>
        Audiophile is an all in one stop to fulfill your audio needs. We're a
        small team of music lovers and sound specialists who are devoted to
        helping you get the most out of personal audio. Come and visit our demo
        facility - we’re open 7 days a week.
      </p>
      <section className='d:grid grid-flow-col auto-cols-max justify-self-end text-white mx-auto pb-10 gap-4 hidden d:pb-0 d:mx-0 d:pt-12'>
        <button className='hover:bg-moderate-orange'>
          <img src={facebook} alt='facebook' />
        </button>
        <button className='hover:bg-moderate-orange'>
          <img src={twitter} alt='twitter' className='pt-1' />
        </button>
        <button className='hover:bg-moderate-orange'>
          <img src={instagram} alt='instagram' />
        </button>
      </section>
      <section className='grid t:grid-cols-2 d:grid-cols-1 gap-10 t:gap-40'>
        <h5 className='text-sm text-white text-opacity-60 text-center t:text-left t:pl-4 d:pl-0'>
          Copyright 2022. All Rights Reserved
        </h5>
        <nav className='grid grid-flow-col auto-cols-max justify-self-end mx-auto pb-10 gap-4 text-white d:hidden'>
          <button>
            <img src={facebook} alt='facebook' />
          </button>
          <button>
            <img src={twitter} alt='twitter' className='pt-1' />
          </button>
          <button>
            <img src={instagram} alt='instagram' />
          </button>
        </nav>
      </section>
    </main>
  );
};

export default Footer;
