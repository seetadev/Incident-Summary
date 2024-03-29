import React from "react";

import { logo } from "../assets";

const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
      <nav className='flex justify-between items-center w-full mb-10 pt-3'>
        <img src={logo} alt='sumz_logo' className='w-28 object-contain' />

        <button
          type='button'
          onClick={() =>
            window.open("https://ethercalc.net/", "_blank")
          }
          className='black_btn'
        >
          ConnectKit XLS Analytics Page
        </button>
      </nav>

      <h1 className='head_text'>
        Incident Summarizer <br className='max-md:hidden' />
        <span className='orange_gradient '>Incident Summary as a QR Code Image File</span>
      </h1>
      <h2 className='desc'>
      Incident Summarizer
      </h2>
    </header>
  );
};

export default Hero;