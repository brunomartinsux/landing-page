import Head from 'next/head'
import { useState } from 'react'

export default function Home() {

  

 

  return (
    <div className="w-full min-h-screen">
    <Head>
      <title>Create Next App</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main className="bg-gray-50 min-h-screen w-full">
      <Header/>
      <div className="flex flex-col sm:flex-row sm:mt-14 justify-between">
        <div className="pt-16 pb-20 px-4 sm:ml-36 sm:w-2/5 space-y-5 sm:space-y-8">
          <div className="space-y-3 sm:space-y-4">
            <h1 className="text-2xl sm:text-8xl text-gray-700 font-medium">Data to enrich your <spanc className="text-blue-500">online business</spanc></h1>
            <h3 className="text-xl sm:text-4xl text-gray-600">Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.</h3>
          </div>
          <div className="flex flex-col sm:flex-row space-y-6 sm:space-y-0 sm:space-x-7">
            <button className="bg-blue-500 py-3 rounded-lg font-medium text-white sm:w-40">Ver preços</button>
            <button className=" py-3 rounded-lg font-medium text-blue-500 h-auto sm:w-auto">Ver preços</button>
          </div>
        </div>
        <div className="bg-white p-4 sm:px-6 sm:mr-36 sm:w-1/4 rounded-lg shadow-xl">
          <div className="pb-9 sm:pb-18 sm:pt-8 space-y-4">
            <h1 className="text-2xl text-gray-700">Comece agora a recuperar a saúde da sua empresa. ⚖️</h1>
            <h3 className="text-lg text-gray-600">Lorem ipsum dolor sit amet, consectetur elit.</h3>
          </div>
          <form className="space-y-6 sm:space-y-9">
            <div className="flex flex-col space-y-1">
              <label className="text-lg text-gray-600">Email</label>
              <input className="h-9 sm:h-11 rounded-lg border-2"></input>
            </div>
            <div className="flex flex-col space-y-1">
              <label className="text-lg text-gray-600">Telefone</label>
              <input className="h-9 sm:h-11 rounded-lg border-2"></input>
            </div>
            <div className="flex flex-col space-y-1">
              <label className="text-lg text-gray-600">CNPJ</label>
              <input className="h-9 sm:h-11 rounded-lg border-2"></input>
            </div>
          </form>
          <button className="mt-4 sm:mt-8 py-3 sm:py-4 w-full rounded-lg  border-2 border-blue-500 text-blue-500 font-semibold">Continuar</button>
        </div>
      </div>
      <div className="px-4 mt-20 justify-between">
          <div>
            <h3>NOSSOS SERVIÇOS</h3>
          </div>
        </div>
      
    </main>



  </div>
  )
}

function Header() {

  const [mobileMenu, setMobileMenu] = useState(false)

  function changeMobileMenu() {
    const newState = !mobileMenu
    setMobileMenu(newState)
  }

  return (
    <header className="bg-gray-50 sm:flex sm:justify-between">
          <div className="flex items-center justify-between px-6 sm:px-16 py-6">
            <div>
              <img className="h-10" src="https://i.ibb.co/Kj60KM4/Logo.png"></img>
            </div>
            <div className="sm:hidden border-2 border-blue-400 px-1 py-1 rounded-lg">
              <button type="button" className="block" onClick={changeMobileMenu}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 18H20M4 6H20H4ZM4 12H20H4Z" stroke="#60A5FA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              </button>
            </div>
            </div>
            <div className={mobileMenu? "text-gray-500  px-4 pt-2 pb-4 space-y-3 sm:flex sm:space-x-8": "text-gray-500 px-16 py-6 hidden sm:flex sm:space-x-8"}>
              <a href="#" className="sm:mt-1 block sm:text-xl font-medium rounded hover:bg-gray-200 sm:hover:underline">Serviços</a>
              <a href="#" className="mt-1 block sm:text-xl font-medium rounded hover:bg-gray-200 sm:hover:underline">Benefícios</a>
              <a href="#" className="mt-1 block sm:text-xl font-medium rounded hover:bg-gray-200 sm:hover:underline">Preços</a>
              <a href="#" className="mt-1 block sm:text-xl font-medium rounded hover:bg-gray-200 sm:hover:underline">Faq</a>
              <button className="block sm:text-xl font-medium rounded-lg sm:border-blue-400 text-blue-500 focus:outline-none sm:border-2 sm:px-6 sm:py-1.5">Cadastre-se</button>
            </div>
            
          

        </header>
  )

}
