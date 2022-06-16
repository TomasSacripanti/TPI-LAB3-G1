import React from 'react'

const LoginForm = () => {
  return (
    <div>
        <form>
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
        </form>
    </div>
  )
}

export default LoginForm;