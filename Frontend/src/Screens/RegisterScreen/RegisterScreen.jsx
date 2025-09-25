import React, { useState } from 'react'
import useForm from '../../hooks/useForm'

const RegisterScreen = () => {
    const FORM_FIELDS = {
        NAME: 'name',
        EMAIL: 'email',
        PASSWORD: 'password'
    }
    const initial_form_state = {
        [FORM_FIELDS.NAME]: '',
        [FORM_FIELDS.EMAIL]: '',
        [FORM_FIELDS.PASSWORD]: ''
    }

    const onRegister = (form_state) => {
        console.log(form_state)
    }

    const {
        form_state: register_form_state, 
        handleSubmit, 
        handleInputChange 
    } = useForm(
        {
            initial_form_state,
            onSubmit: onRegister
        }
    )

  return (
    <div>
        <h1>Registrate</h1>
        <form onSubmit={handleSubmit}>

            <div>
                <label htmlFor={FORM_FIELDS.NAME} >Nombre:</label>
                <input 
                    name={FORM_FIELDS.NAME}  
                    id={FORM_FIELDS.NAME} 
                    type='text' 
                    onChange={handleInputChange}
                />
            </div>
            <div>

            
                <label htmlFor={FORM_FIELDS.EMAIL} >Email:</label>
                <input 
                    name={FORM_FIELDS.EMAIL}  
                    id={FORM_FIELDS.EMAIL} 
                    type='email' 
                    onChange={handleInputChange}
                />
            </div>
            <div>
                <label htmlFor={FORM_FIELDS.PASSWORD} >Contraseña:</label>
                <input 
                    name={FORM_FIELDS.PASSWORD}  
                    id={FORM_FIELDS.PASSWORD} 
                    type='password' 
                    onChange={handleInputChange}
                />
            </div>
            <button type='submit'>Registrarse</button>
        </form>
    </div>
  )
}

export default RegisterScreen