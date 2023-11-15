import React from 'react';
import titulua from "../assets/images/titulua.png"
import house from "../assets/Icons/house.svg"
import airplane from "../assets/Icons/airplane-fill.svg"
import car from "../assets/Icons/car-front-fill.svg"
import music from "../assets/Icons/music-note-list.svg"
import pc from "../assets/Icons/pc-display.svg"
import plus from "../assets/Icons/plus.svg"



export const  Container=() =>{
  return (
   <container className="d-flex justify-content-center flex-wrap">
      <div className='col-12 d-flex justify-content-center mt-3 mb-4'>
        <label class="titulua">AlkiTop</label>
      </div>
      <div class="d-flex justify-content-around col-6 mb-4" role="group" aria-label="Basic example">
        <button type="button" class="btn w-auto mx-2 btn-kategoria px-4"><img src={house} alt='' class='icon-kategoria'/></button>
        <button type="button" class="btn w-auto mx-2 btn-kategoria px-4"><img src={car} alt='' class='icon-kategoria'/></button>
        <button type="button" class="btn w-auto mx-2 btn-kategoria px-4"><img src={music} alt='' class='icon-kategoria'/></button>
        <button type="button" class="btn w-auto mx-2 btn-kategoria px-4"><img src={pc} alt='' class='icon-kategoria'/></button>
        <button type="button" class="btn w-auto mx-2 btn-kategoria px-4"><img src={airplane} alt='' class='icon-kategoria'/></button>
        <button type="button" class="btn w-auto mx-2 btn-kategoria px-4"><img src={plus} alt='' class='icon-kategoria'/></button>
      </div>
   </container>
  )
}

