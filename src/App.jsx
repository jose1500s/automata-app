import './index.css'
import { useState, useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 
function App() {
  const [q, setQ] = useState('')
  const [subQ, setSubQ] = useState("0")

  const checkQ0 = (token) => {
    if (isNaN(token) && token !== 'E' && token !== 'e' && token !== '-' && token !== '0'){
      error()
      setSubQ(0)
    } else if(!isNaN(token) && token !== '0' && token !== '') {
      setSubQ(2)
      setQ('')
      // si el token es un numero
      toast.success(`Ingresaste '${token}' avanzaste a Q${subQ}`)
      setQ(token)
    } else if (token === 'E' || token === 'e') {
      setSubQ(4)
      toast.success(`Ingresaste '${token}' avanzaste a Q${subQ}`)
      setQ(token)
      console.log('se movio a q4 y el valor de q es: ' + q, ' y el valor de subQ es: ' + subQ)
    } else if (token === '-') {
      setSubQ(1)
      toast.success(`Ingresaste '${token}' avanzaste a Q${subQ}`)
      setQ(token)
      console.log('se movio a q1 y el valor de q es: ' + q, ' y el valor de subQ es: ' + subQ)
    } else if (token === '0') {
      setSubQ(5)
      toast.success(`Ingresaste '${token}' avanzaste a Q${subQ}`)
      setQ('')
      console.log('se movio a q5 y el valor de q es: ' + q, ' y el valor de subQ es: ' + subQ)
    }
  }

  // funciones para cambiar el estado de la Q
  const error = () => toast.error("Error: Solo soporta números, E , e , - y 0(zero)")

  const token = () => {
    // leer el texto ingresado en el input y guardarlo en una variable
    const token = document.getElementById("txtNumber").value

    
    if (subQ === '0') {
      checkQ0(token)
    } else if (subQ === 2 ) {
        toast.success(`Ingresaste '${token}' sigues en Q${subQ}`)
    }
  }

 

  return (
    <main className='w-full'>
    <ToastContainer />
      <h1 className='text-center text-3xl'>Autómata de Números</h1>
      <div className='flex justify-center w-1/3 m-auto'>
        <label
          htmlFor="txtNumber"
          className="relative block overflow-hidden rounded-md border border-gray-200 px-3 pt-3 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600 dark:border-gray-700 dark:bg-gray-800 w-full mt-4"
        >
          <input
            type="text"
            id="txtNumber"
            placeholder="Número"
            value={q}
            className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 dark:text-white sm:text-sm"
            onChange={token}
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
