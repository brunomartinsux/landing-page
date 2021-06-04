import { mask, unMask } from 'remask'
import { useState } from 'react'
import axios from 'axios'

export default function FormDobra() {

const apiEndpoint = 'https://landHeadering-page-apis.herokuapp.com/'
const [email, setEmail] = useState('')
const [phone, setPhone] = useState('')
const [cnpj, setCNPJ] = useState('')

function FormSubmit() {
    
    const requestObject = { 
    email, 
    phone: `+55${unMask(phone)}`, 
    cnpj: unMask(cnpj)  
    }

    axios({
    method: 'POST',
    url: apiEndpoint,
    data: requestObject
    }, (err, data) => {
    if(err) {
    console.log(err)
    }
    else {
    console.log(data)
    }
    })
    
}

function FormData(event) {

    const setFunctions = {
    email: setEmail,
    phone: setPhone, 
    cnpj: setCNPJ
    }

    const masksOptions = {
    phone: '(99) 9 9999 9999',
    cnpj: '99.999.999/9999-99'
    }

    const { value, id } = event.target

    if (id === 'email') {
    setFunctions[id](value)
    } 
    
    if (id !== 'email') {
    const pattern = masksOptions[id]
    setFunctions[id](mask(value, pattern))
    }
    

}

return (
<div className="bg-white p-4 sm:px-6 sm:mr-36 sm:w-1/4 rounded-lg shadow-xl">
        <div className="pb-9 sm:pb-10 sm:pt-8 space-y-4">
            <h1 className="text-2xl text-gray-700">Comece agora a recuperar a saúde da sua empresa. ⚖️</h1>
            <h3 className="text-lg text-gray-600">Nossos consultores entrarão em contato.</h3>
        </div>
        <form className="space-y-6 sm:space-y-9" onSubmit={FormSubmit}>
            <div className="flex flex-col space-y-1">
            <label className="text-lg text-gray-600">Email</label>
            <input id="email" onChange={FormData} onSelect={FormData} onClick={FormData} className="h-9 sm:h-11 rounded-lg border-2 px-3 focus:outline-none focus:ring focus:ring-blue-400"></input>
            </div>
            <div className="flex flex-col space-y-1">
            <label className="text-lg text-gray-600">Telefone</label>
            <input value={phone} id="phone" onChange={FormData} onSelect={FormData} onClick={FormData} className="h-9 sm:h-11 rounded-lg border-2 px-3 focus:outline-none focus:ring focus:ring-blue-400"></input>
            </div>
            <div className="flex flex-col space-y-1">
            <label className="text-lg text-gray-600">CNPJ</label>
            <input value={cnpj} id="cnpj" onChange={FormData} onSelect={FormData} onClick={FormData} className="h-9 sm:h-11 rounded-lg border-2 px-3 focus:outline-none focus:ring focus:ring-blue-400"></input>
            </div>
        </form>
        <button onClick={FormSubmit} className="mt-4 sm:mt-8 py-3 sm:py-4 w-full rounded-lg  border-2 border-blue-500 text-blue-500 font-semibold">Continuar</button>
        </div>
)
}