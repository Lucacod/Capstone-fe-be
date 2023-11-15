import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './login.css'

const Login = () => {

  const [loginData, setLoginData] = useState()
  const [login, setLogin] = useState(null)

  console.log(login);
  const navigate = useNavigate()

  const handleInputChange = (e) => {
    const { name, value } = e.target;


    setLoginData({
      ...loginData,
      [name]: value
    })
  }

  const onSubmit = async (e) => {
    e.preventDefault(); //refresh della pagina

    try {
      const response = await fetch(`${process.env.REACT_APP_SERVER_BASE_URL}/login`, {
        headers: {
          "Content-type": "Application/json"
        },

        method: 'POST',
        body: JSON.stringify(loginData)
      })

      const data = await response.json()

      if (data.token) {
        localStorage.setItem('loggedInUser', JSON.stringify(data.token))
        navigate('/home')

      }

    } catch (error) {
      console.log(error);
    }
  }


  return (

    <div className='d-flex justify-content-center align-items-center h-screen p-5' id='bg-login'>
      <h1 className='position-absolute top-0 start-0 m-4' id='custom-h1'>MUSIC ACADEMY</h1>
      <form className='p-4 border rounded shadow' style={{ width: '330px' }} onSubmit={onSubmit}>

        <h2 className="mb-4">LOGIN</h2>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input
            className='form-control'
            type='text'
            name='email'
            placeholder='Inserisci il tuo indirizzo email'
            required
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input
            className='form-control'
            type='password'
            name='password'
            placeholder='Inserisci la tua password'
            required
            onChange={handleInputChange}
          />
        </div>
        <button type='submit' className='btn btn-dark rounded-pill'>Login</button>
      </form>
    </div>

  )
}

export default Login
