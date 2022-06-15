import React from 'react'

const LogIn = () => {
  return (
    <div>
        <h3>Log In</h3>
        <p>Usuario</p>
        <input
        type='text'
        placeholder='Ingrese su usuario'/>
        <p>Contraseña</p>
        <input
        type='password'
        placeholder='Ingrese su contraseña'/>
        <br></br>

        <button>Ingresar</button>
        <button>Registrarse</button>
     
    </div>
  )
}

export default LogIn