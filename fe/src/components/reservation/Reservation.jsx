import React from 'react'
import './reservation.css'

const Reservation = () => (
    <section>
        <h2>Descrizione della Sala Musicale</h2>
        <p>
            Benvenuto nella nostra sala musicale! La sala è completamente attrezzata con una vasta gamma di strumenti musicali di alta qualità, creando l'ambiente perfetto per le tue prove musicali.
        </p>
        <p>Ecco cosa contiene la nostra sala musicale:</p>
        <ul>
            <li>Batteria professionale</li>
            <li>Chitarre elettriche e acustiche</li>
            <li>Basso elettrico</li>
            <li>Amplificatori e effetti</li>
            <li>Pianoforte digitale</li>
        </ul>
    </section>
);

const ReservationForm = () => (
    <section id='form-reserve'>
        <h2>Prenota la Tua Sala</h2>
        <form>
            <label htmlFor="nome">Nome completo:</label>
            <input type="text" id="nome" name="nome" required />

            <label htmlFor="email">Indirizzo email:</label>
            <input type="email" id="email" name="email" required />

            <label htmlFor="telefono">Numero di telefono:</label>
            <input type="tel" id="telefono" name="telefono" required />
        

            <label htmlFor="data">Data di prenotazione:</label>
            <input type="date" id="data" name="data" required />

            <label htmlFor="orario">Orario di prenotazione:</label>
            <input type="time" id="orario" name="orario" required />

            <label htmlFor="messaggio">Messaggio aggiuntivo:</label>
            <textarea id="messaggio" name="messaggio" rows="4" />

            <button type="submit" id='click'>Prenota Sala</button>
        </form>
    </section>
);
const ReservationPage = () => (
    <div className="reservation-page-container">
    <Reservation />
    <ReservationForm />
  </div>
);

export default ReservationPage