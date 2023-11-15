import { Produktu } from "./Produktu"
import bizikleta from "../assets/images/bizi.jpg"
import eskiak from "../assets/images/skiak.jpg"
import estatik from "../assets/images/estatik.jpg"
import pc from "../assets/images/pc.jpeg"

export const Produktuak=()=> {

    return (
      <>
      <div >
        <label >ECO produktuak</label>
      </div>
        <div class="flex row ">
            <Produktu 
                irudia={bizikleta}
                izena='Ghost bizikleta'
                balorazioa='3 izar'
                erabiltzailea='Peio Reparaz'
                testua="Egunon geurko egunean bizikleta bat salduko dugu"
                prezioa="34€"
                data="/hil"
            />
            <Produktu 
                irudia={eskiak}
                izena='Eskiak'
                balorazioa='1 izar'
                erabiltzailea='Julian Iantzi'
                testua="Lesakan ez dago elurra, beraz eskiak alokatzeko jarri ditut"
                prezioa="18€"
                data="/astea"

            />
            <Produktu 
                irudia={estatik}
                izena='Bizikleta estatikoa'
                balorazioa='4 izar'
                erabiltzailea='Kai Nakai'
                testua="Nahiago dut Iker Atxagarekin bizikletaz ibili"
                prezioa="33€"
                data="/hil"

            />
            <Produktu 
                irudia={pc}
                izena='Ordenagailua'
                balorazioa='2 izar'
                erabiltzailea='Irutxuluko hitza'
                testua="Azken aldian ez dut argirik, ez da pizten"
                prezioa="14€"
                data="/hil"
            />
        </div>
      </>
    )
  }
  