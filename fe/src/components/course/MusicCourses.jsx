import React from 'react'
import Button from 'react-bootstrap/esm/Button';
import './course.css'

const MusicCourses = () => {
  return (

    <div className='course'>
      <div className="title">
        <h2>METODO YAMAHA</h2>
      </div>
      <div className="description">
        <p>Da più di 50 anni Yamaha è impegnata nello sviluppo di corsi di musica destinati ad allievi di tutte le età.
          Questi corsi si sono sviluppati nelle Scuole Musicali Yamaha di tutto il mondo.
          La prima Scuola di Musica Yamaha fu aperta nel 1954 in Giappone. Attualmente più di 600.000 allievi studiano, sotto la guida di più di 20.000 insegnanti in 6.000 scuole musicali di tutto il mondo.
          Yamaha si augura di potere contribuire allo sviluppo delle attitudini musicali di ciascuno, attraverso una vasta e ricca scelta di corsi di musica e di lezioni di musica.
          Affermati musicisti ed educatori hanno contribuito alla creazione e allo sviluppo dei materiali didattici e delle guide per la loro pratica attuazione, mentre il materiale audio accluso ai libri di testo costituisce una base e uno stimolo molto interessante per l'apprendimento degli allievi.
          Imparare divertendosi, non soltanto la pura teoria: questo è ciò che crediamo. Yamaha offre un percorso di apprendimento per il pianoforte, la chitarra acustica, la chitarra elettrica, la chitarra classica, il basso, il canto e la batteria, su misura per le varie fasce di età.
          Le lezioni sono collettive, con piccoli gruppi di 3/4 persone. Le attività che coinvolgono gli allievi comprendono anche la lettura della musica, la musica d'insieme, l'improvvisazione, il cantare accompagnandosi.
          Tutti i corsi sono attentamente progettati per garantire agli allievi un ingresso divertente nel mondo della musica, con un'attenzione particolare al fattore creatività.
        </p>
      </div>
      <div className='myycourses container'>
      <Button variant="primary">Corso di Chitarra</Button>
      <Button variant="secondary">Corso di Basso</Button>
      <Button variant="success">Corso di Canto</Button>
      <Button variant="warning">Corso di Pianoforte</Button>
      <Button variant="danger">Corso Tecnico/Audio</Button>
      <Button variant="info">Info</Button>
      {/* <Button variant="light">Light</Button>
      <Button variant="dark">Dark</Button> */}
      </div>
    </div>


  )
}
export default MusicCourses
