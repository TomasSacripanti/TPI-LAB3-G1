import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const RegisterForm = () => {

    let regularExpression  = /^[a-zA-Z]\w{3,14}$/;

    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    const [passwordIsValid, setPasswordIsValid] = useState(true);

    const userChangeHandler = (e) => {
        setUser(e.target.value);
    }
    
    const passwordChangeHandler = (e) => {
        setPassword(e.target.value);
    }
    const passwordValidate = (e) =>{
        setPasswordIsValid(regularExpression.test(e.target.value));
        console.log(regularExpression.test(e.target.value));
        console.log(e.target.value);
    }


  return (
    <div>        
        <form>
            <h3>Registrarse</h3>
            
            <p>Usuario</p>
            
            <input
            value={user}
            type='text'
            placeholder='Ingrese su usuario'
            onChange={userChangeHandler}/>
            
            <p>Contraseña</p>
            
            <input
            value={password}
            type='password'
            placeholder='Ingrese su contraseña'
            onChange={passwordChangeHandler}
            onBlur={passwordValidate}
            />
            {passwordIsValid ? '' : <p>La contraseña debe contener al menos una letra minuscula, una mayuscula, un numero,
                 un caracter especial y debe ser minimo de 8 caracteres</p> }
            
            <br></br>

            <button>Registrarse</button>
            <Link to='/login'><button>Ya tengo una cuenta</button></Link>
        </form>
    </div>
  )
}

export default RegisterForm;