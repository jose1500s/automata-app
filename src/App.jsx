import './index.css'
import { useState, useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 
<script src="https://cdn.jsdelivr.net/npm/party-js@latest/bundle/party.min.js"></script>

function App() {
  const [q, setQ] = useState('')
  const [subQ, setSubQ] = useState("0")
  const [correcto, setCorrecto] = useState(false)

  const checkQ0 = (token) => {
    if (isNaN(token) && token !== 'E' && token !== 'e' && token !== '-' && token !== '0'){
      error()
      setSubQ(0)
    } else if(!isNaN(token) && token !== '0' && token !== '') {
      setSubQ(2)
      setQ('')
      // si el token es un numero
      toast.success(`Ingresaste '${token}' ahora estas en Q2`)
      setQ(token)
    } else if (token === 'E' || token === 'e') {
      setSubQ(4)
      toast.success(`Ingresaste '${token}' ahora estas en Q4`)
      setQ(token)
      console.log('se movio a q4 y el valor de q es: ' + q, ' y el valor de subQ es: ' + subQ)
    } else if (token === '-') {
      setSubQ(1)
      toast.success(`Ingresaste '${token}' ahora estas en Q1`)
      setQ(token)
      console.log('se movio a q1 y el valor de q es: ' + q, ' y el valor de subQ es: ' + subQ)
    } else if (token === '0') {
      setSubQ(5)
      toast.success(`Ingresaste '${token}' ahora estas en Q5`)
      setQ('')
      console.log('se movio a q5 y el valor de q es: ' + q, ' y el valor de subQ es: ' + subQ)
    }
  }

  const checkQ1 = (token) => {
    if(token.slice(-1) === 'e' || token.slice(-1) === 'E') {
      setSubQ(4)
      toast.success(`Ingresaste '${token}' ahora estas en Q4`)
      setQ(q + token)
    } else if (token.slice(-1) === '0' || token.slice(-1) === '0') {
      setSubQ(5)
      toast.success(`Ingresaste '${token}' ahora estas en Q5`)
      setQ(q + token)
    } else if(!isNaN(token.slice(-1)) && token.slice(-1) !== '0') {
      setSubQ(2)
      toast.success(`Ingresaste '${token}' ahora estas en Q2`)
      setQ(q + token)
    }
     else {
      toast.error(`Ingresaste '${token}' no se puede avanzar, ingresa un digito, E, e, ó 0(Zero)`)
    }
  }

  const checkQ2 = (token) => {
    if(!isNaN(token.slice(-1)) && token.slice(-1) !== '0') {
      setSubQ(2)
      toast.success(`Ingresaste '${token}' sigues en Q2`)
      setQ(q + token)
    } else if (token.slice(-1) === '0' ) {
      setSubQ(2)
      toast.success(`Ingresaste '${token}' ahora estas en Q2`)
      setQ(q + token)
    } else if(token.slice(-1) === 'e' || token.slice(-1) === 'E') {
      setSubQ(8)
      toast.success(`Ingresaste '${token}' ahora estas en Q8`)
      setQ(q + token)
    } else if (token.slice(-1) === '.') {
      setSubQ(3)
      toast.success(`Ingresaste '${token}' ahora estas en Q3`)
      setQ(q + token)
    } else if (token.slice(-1) === '-') {
      setSubQ(10)
      toast.success(`Ingresaste '${token}' ahora estas en Q10`)
      setQ(q + token)
    } else if (token.slice(-1) === 'v') {
      setSubQ('QF')
      toast.success('FINAL, Número Correcto', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: 1,
        theme: "light",
        });
      setQ(q + token)
    }
  }

  const checkQ3 = (token) => {
    if(!isNaN(token.slice(-1)) && token.slice(-1) !== '0') {
      setSubQ(7)
      toast.success(`Ingresaste '${token}' ahora estas en Q7`)
      setQ(q + token)
    } else if (token.slice(-1) === 'e' || token.slice(-1) === 'E') {
      setSubQ(6)
      toast.success(`Ingresaste '${token}' ahora estas en Q6`)
      setQ(q + token)
    } else if (token.slice(-1) === '-') {
      setSubQ(11)
      toast.success(`Ingresaste '${token}' ahora estas en Q11`)
      setQ(q + token)
    } else if (token.slice(-1) === '0') {
      setSubQ(7)
      toast.success(`Ingresaste '${token}' ahora estas en Q7`)
      setQ(q + token)
    } else if (token.slice(-1) === '.') {
      toast.error(`Ingresaste '${token}' no se puede avanzar, ingresa digitos, E, e, ó 0(Zero)`)
    }
  }

  const checkQ4 = (token) => {
    if(!isNaN(token.slice(-1)) && token.slice(-1) !== '0') {
      setSubQ(2)
      toast.success(`Ingresaste '${token}' ahora estas en Q2`)
      setQ(q + token)
    } else if (token.slice(-1) === '0') {
      setSubQ(2)
      toast.success(`Ingresaste '${token}' ahora estas en Q2`)
      setQ(q + token)
    } else if (token.slice(-1) === '-' || token.slice(-1) === '.' || token.slice(-1) === 'e' ||     token.slice(-1) === 'E') {
      toast.error(`Ingresaste '${token}' no se puede avanzar, ingresa digitos o 0(Zero)`)
    }
  }

  const checkQ5 = (token) => {
    if (token.slice(-1) === '0') {
      setSubQ(5)
      toast.success(`Ingresaste '${token}' sigues en Q5`)
      setQ(q + token)
    } else if (token.slice(-1) === '.') {
      setSubQ(3)
      toast.success(`Ingresaste '${token}' ahora estas en Q3`)
      setQ(q + token)
    } else if (token.slice(-1) === 'e' || token.slice(-1) === 'E' || !isNaN(token.slice(-1)) || token.slice(-1) === '-') {
      toast.error(`Ingresaste '${token}' no se puede avanzar, ingresa un punto ó 0(Zero)`)
    }
  }

  const checkQ6 = (token) => {
    if(!isNaN(token.slice(-1)) && token.slice(-1) !== '0') {
      setSubQ(7)
      toast.success(`Ingresaste '${token}' ahora estas en Q7`)
      setQ(q + token)
    } else if (token.slice(-1) === '0') {
      setSubQ(7)
      toast.success(`Ingresaste '${token}' ahora estas en Q7`)
      setQ(q + token)
    } else if (token.slice(-1) === '-' || token.slice(-1) === '.' || token.slice(-1) === 'e' ||     token.slice(-1) === 'E') {
      toast.error(`Ingresaste '${token}' no se puede avanzar, ingresa digitos o 0(Zero)`)
    }
  }

  const checkQ7 = (token) => {
    if(!isNaN(token.slice(-1)) && token.slice(-1) !== '0') {
      setSubQ(7)
      toast.success(`Ingresaste '${token}' sigues en Q7`)
      setQ(q + token)
    } else if (token.slice(-1) === '0') {
      setSubQ(7)
      toast.success(`Ingresaste '${token}' sigues en Q7`)
      setQ(q + token)
    } else if (token.slice(-1) === '-' || token.slice(-1) === '.' || token.slice(-1) === 'e' ||     token.slice(-1) === 'E') {
      toast.error(`Ingresaste '${token}' no se puede avanzar, ingresa digitos o 0(Zero)`)
    }
  }

  const checkQ8 = (token) => {
    if(!isNaN(token.slice(-1)) && token.slice(-1) !== '0') {
      setSubQ(9)
      toast.success(`Ingresaste '${token}' ahora estas en Q9`)
      setQ(q + token)
    } else if (token.slice(-1) === '0') {
      setSubQ(9)
      toast.success(`Ingresaste '${token}' ahora estas en Q9`)
      setQ(q + token)
    } else if (token.slice(-1) === '-' || token.slice(-1) === '.' || token.slice(-1) === 'e' ||     token.slice(-1) === 'E') {
      toast.error(`Ingresaste '${token}' no se puede avanzar, ingresa digitos o 0(Zero)`)
    }
  }

  const checkQ9 = (token) => {
    if(!isNaN(token.slice(-1)) && token.slice(-1) !== '0') {
      setSubQ(9)
      toast.success(`Ingresaste '${token}' sigues en Q9`)
      setQ(q + token)
    } else if (token.slice(-1) === '0') {
      setSubQ(9)
      toast.success(`Ingresaste '${token}' sigues en Q9`)
      setQ(q + token)
    } else if (token.slice(-1) === '.') {
      setSubQ(13)
      toast.success(`Ingresaste '${token}' ahora estas en Q3`)
      setQ(q + token)
    } else if (token.slice(-1) === '-' || token.slice(-1) === 'e' ||     token.slice(-1) === 'E') {
      toast.error(`Ingresaste '${token}' no se puede avanzar, ingresa digitos, 0(Zero) o un punto`)
    }
  }

  const checkQ10 = (token) => {
    if (token.slice(-1) === 'e' || token.slice(-1) === 'E') {
      setSubQ(8)
      toast.success(`Ingresaste '${token}' ahora estas en Q8`)
      setQ(q + token)
    } else if (token.slice(-1) === '-' || token.slice(-1) === '.' || !isNaN(token.slice(-1)) || token.slice(-1) === '0') {
      toast.error(`Ingresaste '${token}' no se puede avanzar, ingresa un E ó e`)
    }
  }

  const checkQ11 = (token) => {
    if (token.slice(-1) === 'e' || token.slice(-1) === 'E') {
      setSubQ(6)
      toast.success(`Ingresaste '${token}' ahora estas en Q6`)
      setQ(q + token)
    } else if (token.slice(-1) === '-' || token.slice(-1) === '.' || !isNaN(token.slice(-1)) || token.slice(-1) === '0') {
      toast.error(`Ingresaste '${token}' no se puede avanzar, ingresa un E ó e`)
    }
  }

  // funciones para cambiar el estado de la Q
  const error = () => toast.error("Error: Solo soporta números, E , e , - y 0(zero)")

  const token = () => {
    // leer el texto ingresado en el input y guardarlo en una variable
    const token = document.getElementById("txtNumber").value

    if (subQ === '0') {
      checkQ0(token)
    } else if (subQ === 1 ) {
      checkQ1(token)
    } else if (subQ === 2) {
      checkQ2(token)
    } else if (subQ === 3) {
      checkQ3(token)
    } else if (subQ === 4) {
      checkQ4(token)
    } else if (subQ === 5) {
      checkQ5(token)
    } else if (subQ === 6) {
      checkQ6(token)
    } else if (subQ === 7) {
      checkQ7(token)
    } else if (subQ === 8) {
      checkQ8(token)
    } else if (subQ === 9) {
      checkQ9(token)
    } else if (subQ === 10) {
      checkQ10(token)
    } else if (subQ === 11) {
      checkQ11(token)
    }
  }


  return (
    <main className='w-full'>
    <ToastContainer />
      <h1 className='text-center text-3xl'>Autómata de Números</h1>
      <p className='text-center text-xl'>'Epsilon' = v</p>
      <div className='flex justify-center w-1/3 max-sm:w-3/4 m-auto'>
        <label
          htmlFor="txtNumber"
          className="relative block overflow-hidden rounded-md border border-gray-200 px-3 pt-3 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600 dark:border-gray-700 dark:bg-gray-800 w-full mt-4"
        >
          <input
            type="text"
            id="txtNumber"
            placeholder="Número"
            className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 dark:text-white sm:text-sm"
            onKeyUp={token}
          />

          <span
            className="absolute left-3 top-2 -translate-y-1/2 text-base text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs dark:text-gray-200"
          >
            Número
          </span>
        </label>
        <div>
          <p className='ml-2 text-xl font-bold text-white'>
            Q
            <sub className='pl-1 text-sm'>{subQ}</sub>
          </p>
        </div>
      </div>
    </main>
  )
}

export default App
