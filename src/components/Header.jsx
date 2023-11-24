import React from 'react';
import logo from "../assets/images/logo.png";
import logged from "../assets/images/logged.svg";
import gehitu from "../assets/Icons/plus-borobil.svg";

export const Header = () => {
  return (
    <header className="navbar navbar-collapse bg-dark justify-content-between column sticky-top">
      <img src={logo} alt='' className="logo mx-5 my-3"></img>
      <form className="col-7 row mr-10">
        <input className="form-control bilatu w-50 me-1 " type="search" placeholder="Bilatu" />
        <button className="btn btn-outline-success w-25" type="submit">Bilatu</button>
      </form>
      <button className='btn-gehituProdukt col-2 btn  hover:bg-transparent border align-items-center'>
        <img src={gehitu} alt='' className='gehituProdukt'></img>
        <label className="text-white px-3 ">Produktu bat gehitu</label>
      </button>
      <img src={logged} alt='' className="logged mx-5" />
    </header>
  );
};
