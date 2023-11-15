import React from 'react'
import Avalon from '../studio/assets/avalon.jpeg'
import mixer from '../studio/assets/mixer.jpg'
import banner from '../studio/assets/_Banner.jpeg'
import mic from '../studio/assets/mic-pic2.avif'
import board from '../studio/assets/board.png'
import outboard from '../studio/assets/outboards.jpeg'
import './studio.css'
import { Carousel } from 'react-bootstrap';



const RecStudio = () => {

  return (

    <div className='studio'>
      <Carousel className='custom-carousel'>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={mixer}  // Sostituisci con il percorso della tua prima immagine
            alt="Prima immagine"
          />
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Avalon}  // Sostituisci con il percorso della tua seconda immagine
            alt="Seconda immagine"
          />
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src={banner}  // Sostituisci con il percorso della tua terza immagine
            alt="Terza immagine"
          />
        </Carousel.Item>
      </Carousel>
      <div>

        <div className="container text-center">
          <h2 className="my-3">STUDIO DI REGISTRAZIONE</h2>
          <p>In Playsound potrete venire non solo a provare, ma anche a concretizzare un vostro progetto artistico, grazie alla presenza interna di NOVENOVE STUDIO, studio di registrazione, struttura di produzione musicale, composizione, registrazione e post produzione, attiva da anni nel settore televisivo e pubblicitario.
            Cuore dello studio è il banco Neve Genesys Black G32 che, grazie all'architettura analogica, ai preamplificatori 1073, agli eq 88 R Series e ai VCA comp 88 R Series, offre l'inconfondibile qualità e calore del classico suono Neve.
            Fader motorizzati e total recall ci permettono di richiamare le sessioni istantaneamente.
            Nei nostri studi potrete trovare la soluzione di registrazione che maggiormente si adatta alle vostre esigenze.
            Contattaci per conoscere tutti i dettagli e studiare insieme il pacchetto più adatto! info@novenovestudio.com</p>
          <div className="row">
            <div className="col-md-6">
              <div className="p-3">
                <h2>OUTBOARDS E VARIE</h2>
                <ul>
                  <li>AMS NEVE GENESYS BLACK G32 con VCA DYNAMICS</li>
                  <li>LAVRY BLUE 4496</li>
                  <li>ANTELOPE ISOCHRONE OCX</li>
                  <li>APOGEE SYMPHONY I/O 16x16</li>
                  <li>liAPOGEE AD16X</li>
                  <li>APOGEE DA16X</li>
                  <li>APOGEE QUARTET</li>
                  <li>AVALON AD2022</li>
                  <li>NEVE 1073 DPA</li>
                  <li>2 API 512c SERIE 500</li>
                  <li>SHADOW HILLS INDUSTRIES MONO GAMA 500</li>
                  <li>GREAT RIVER MP-500 NV</li>
                  <li> MILLENNIA HV-3D</li>
                  <li>NEVE 1073 DPA</li>
                  <li>TUBETECH CL1B OPTO COMPRESSOR</li>
                  <li>THERMIONIC CULTURE THE PHOENIX</li>
                  <li>THERMIONIC CULTURE "THE FAT BUSTARD" valve mixer</li>
                  <li>DOEPFER LMK2+</li>
                  <li>MELODYNE 3 STUDIO</li>
                  <li>PLUG-INS E VIRTUAL INSTRUMENTS IN VARI BUNDLES E MARCHE</li>
                  <li>FOCAL TWIN6 BE</li>
                  <li>FOCAL SOLO6 BE</li>
                </ul>
              </div>
            </div>
            <div className="col-md-6">
              <div className="p-3">
                <h2>MICROFONI</h2>
                <ul>
                  <li>NEUMANN U87</li>
                  <li>NEUMANN TLM 103</li>
                  <li>NEUMANN KM 184 (2 coppie matched)</li>
                  <li>SCHOEPS CMC 6 U con capsula MK5 (coppia matched)</li>
                  <li>ROYER LABS R10 (stereo set)</li>
                  <li>AKG SOLID TUBE</li>
                  <li>AKG C 414 B-XLS</li>
                  <li>AKG SE 300 B + CK 93</li>
                  <li>AKG D112</li>
                  <li>ELECTRO VOICE RE-20 Series</li>
                  <li>SENNHEISER MD 441</li>
                  <li>SENNHEISER MD 421 (2)</li>
                  <li>SENNHEISER E 604</li>
                  <li>SHURE PG52</li>
                  <li>SHURE SM 57</li>
                  <li>SHURE SM 58</li>
                  <li>SOLOMON MiCS LoFReQ sub-mic BLACK</li>
                  <li>RODE NT1</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Carousel className='carousel-bottom'>
        <Carousel.Item>
          <img
            
            src={mic}  // Sostituisci con il percorso della tua prima immagine
            alt="Prima immagine"
          />
        </Carousel.Item>

        <Carousel.Item>
          <img
            src={board}  // Sostituisci con il percorso della tua seconda immagine
            alt="Seconda immagine"
          />
        </Carousel.Item>

        <Carousel.Item>
          <img
            src={outboard}  // Sostituisci con il percorso della tua terza immagine
            alt="Terza immagine"
          />
        </Carousel.Item>
      </Carousel>
    </div>

  )
}

export default RecStudio