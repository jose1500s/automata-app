import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    <App  />
)

 
    //Q0, si no es numero, E, e, - o 0(zero) entonces error
    /*  FUNCIONA pero solo con el primer caracter ingresado

    if (isNaN(token) && token !== 'E' && token !== 'e' && token !== '-' && token !== '0'){
      error()
      setSubQ(0)
      return
    } else if(!isNaN(token) && token !== '' && token !== 'E' && token !== 'e' && token !== '-' && token !== '0') {
      // si el token es un numero
      setSubQ(2)
    } 

    // si el campo esta vacio subQ = 0
    if (token === '') {
      setSubQ(0)
    }
    */
