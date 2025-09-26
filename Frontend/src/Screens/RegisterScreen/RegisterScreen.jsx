import React, { useState } from 'react'
import useForm from '../../hooks/useForm'
import { register } from '../../services/authService'
import useFetch from '../../hooks/useFetch'

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

const RegisterScreen = () => {

    const {
        sendRequest,
        loading,
        response,
        error
    } = useFetch()

    const onRegister = (form_state) => {
        sendRequest( () => {
            register(
                form_state[FORM_FIELDS.NAME], 
                form_state[FORM_FIELDS.EMAIL], 
                form_state[FORM_FIELDS.PASSWORD]
            )
        })
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


    console.log(loading)
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
                {
                    !response
                    ? <button type='submit' disabled={loading}>Registrarse</button>
                    : <>
                        <button type='submit' disabled={true}>Registrado</button>
                        <span style={{color: 'green'}}>{response.message}</span>
                    </>
                }
                {
                    error && <span style={{color: 'red'}}>{error.message}</span>
                }
               
                
            </form>
        </div>
    )
}

export default RegisterScreen