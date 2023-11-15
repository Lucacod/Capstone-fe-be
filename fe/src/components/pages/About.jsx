import React from 'react'
import './About.css'
import foto1 from './assetsabout/pexels-tima-miroshnichenko-4988130.jpg'
import foto2 from './assetsabout/pexels-brett-sayles-4001269.jpg'
import foto3 from './assetsabout/sala_tre_small.jpeg'



const About = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        <h1>Chi Siamo</h1>
        <p>Siamo MUSIC ACADEMY, un luogo di passione e ispirazione per gli amanti della musica. La nostra missione è quella di coltivare l'amore per l'arte e l'espressione musicale. Con anni di esperienza e dedizione, offriamo servizi di alta qualità per aiutarti a raggiungere i tuoi obiettivi musicali.</p>
        <p>Ci occupiamo di:</p>
        <ul>
          <li><strong>SALE PROVE:</strong> Le nostre sale prove all'avanguardia sono progettate per fornirti uno spazio creativo con attrezzature di prima classe.</li>
          <li><strong>STUDI DI REGISTRAZIONE:</strong> I nostri studi di registrazione sono dotati delle ultime tecnologie per garantire la qualità del suono per le tue registrazioni musicali.</li>
          <li><strong>CORSI DI MUSICA:</strong> Offriamo corsi personalizzati per sviluppare le tue abilità musicali, dalle lezioni per principianti alle masterclass avanzate.</li>
        </ul>
        <p>La musica è una forza potente e ci impegniamo a coltivarla in te. Siamo qui per ispirare la tua creatività e supportarti in ogni fase del tuo percorso musicale. Unisciti a noi e libera il tuo talento musicale!</p>
      </div>

      <div className="image-gallery">
        <img src={foto1} alt="Sala Prove" />
        <img src={foto2} alt="Studio di Registrazione" />
        <img src={foto3} alt="Corsi di Musica" />
      </div>
    </div>
  )
}

export default About