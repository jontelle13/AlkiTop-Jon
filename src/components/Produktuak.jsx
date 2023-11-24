/*import { Produktu } from "./Produktu"
import bizikleta from "../assets/images/bizi.jpg"
import eskiak from "../assets/images/skiak.jpg"
import estatik from "../assets/images/estatik.jpg"
import pc from "../assets/images/pc.jpeg"
import { Carousel } from 'react-bootstrap'; // Import Bootstrap Carousel
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export const Produktuak = ({ kategoria }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="mb-5">
      <div className="col-12 mx-5">
        <label className="h2 col-6 mb-3">{kategoria}</label>
      </div>
      <Slider {...settings}>
        <Produktu
          irudia={bizikleta}
          izena="Ghost bizikleta"
          balorazioa="3 izar"
          erabiltzailea="Peio Reparaz"
          testua="Egunon gaurko egunean bizikleta bat salduko dugu. ZZZ"
          prezioa="34€"
          data="/hil"
        />
        <Produktu
          irudia={eskiak}
          izena="Eskiak"
          balorazioa="1 izar"
          erabiltzailea="Julian Iantzi"
          testua="Lesakan ez dago elurra, beraz eskiak alokatzeko jarri ditut."
          prezioa="18€"
          data="/astea"
        />
        <Produktu
          irudia={estatik}
          izena="Bizikleta estatikoa"
          balorazioa="4 izar"
          erabiltzailea="Martin Berasategi"
          testua="Nahiago dut Iker Atxagarekin bizikletaz ibili. 'Garrotee'"
          prezioa="33€"
          data="/hil"
        />
        <Produktu
          irudia={pc}
          izena="Ordenagailua"
          balorazioa="2 izar"
          erabiltzailea="Irutxuluko hitza"
          testua="Azken aldian ez dut argirik, ez da pizten."
          prezioa="14€"
          data="/hil"
        />
      </Slider>
    </div>
  );
};*/

import { Produktu } from "./Produktu"
import bizikleta from "../assets/images/bizi.jpg"
import eskiak from "../assets/images/skiak.jpg"
import estatik from "../assets/images/estatik.jpg"
import pc from "../assets/images/pc.jpeg"

export const Produktuak=({kategoria})=> {

    return (
      <>
      <div class=" mb-5">
      <div class="col-12  mx-5">
        <label class="h2 col-6 mb-3">{kategoria}</label>
      </div>
        <div class="flex row mx-4">
            <Produktu 
                irudia={bizikleta}
                izena='Ghost bizikleta'
                balorazioa='3 izar'
                erabiltzailea='Peio Reparaz'
                testua="Egunon gaurko egunean bizikleta bat salduko dugu. ZZZ"
                prezioa="34€"
                data="/hil"
            />
            <Produktu 
                irudia={eskiak}
                izena='Eskiak'
                balorazioa='1 izar'
                erabiltzailea='Julian Iantzi'
                testua="Lesakan ez dago elurra, beraz eskiak alokatzeko jarri ditut."
                prezioa="18€"
                data="/astea"

            />
            <Produktu 
                irudia={estatik}
                izena='Bizikleta estatikoa'
                balorazioa='4 izar'
                erabiltzailea='Martin Berasategi'
                testua="Nahiago dut Iker Atxagarekin bizikletaz ibili.   'Garrotee'"
                prezioa="33€"
                data="/hil"

            />
            <Produktu 
                irudia={pc}
                izena='Ordenagailua'
                balorazioa='2 izar'
                erabiltzailea='Irutxuluko hitza'
                testua="Azken aldian ez dut argirik, ez da pizten."
                prezioa="14€"
                data="/hil"
            />
        </div>
      </div>
      
      </>
    )
  }