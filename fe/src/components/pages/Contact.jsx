import React from 'react';
import './Contact.css'; // Assicurati che il tuo stile CSS sia importato correttamente

const Contact = () => {
  return (
    <div className="container-fluid" id='main-form'>
      <div className="row justify-content-center">
        <div className="col-md-6" id='form-div'>
          <div className="card">
            <div className="card-body">
              <h2 className="card-title text-center mb-4">Contattaci</h2>
              <form>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">Nome:</label>
                  <input type="text" id="name" name="name" className="form-control" required />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email:</label>
                  <input type="email" id="email" name="email" className="form-control" required />
                </div>
                <div className="mb-3">
                  <label htmlFor="message" className="form-label">Messaggio:</label>
                  <textarea id="message" name="message" rows="4" className="form-control" required></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Invia</button>
              </form>
            </div>

          </div>
          <div className="container-fluid">
            <iframe src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d45535.83384209473!2d11.301416813958964!3d44.4948795948921!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m5!1s0x477fd498e951c40b%3A0xa2e17c015ba49441!2sBologna%2C%20Citt%C3%A0%20Metropolitana%20di%20Bologna!3m2!1d44.494887!2d11.3426162!4m0!5e0!3m2!1sit!2sit!4v1699995000344!5m2!1sit!2sit"></iframe>
          </div>
        </div>
      </div>
    </div>




  );
}

export default Contact;
