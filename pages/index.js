import Head from 'next/head'
import { useState } from 'react'

export default function Home() {

  

 

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header/>
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
                <path d="M4 18H20M4 6H20H4ZM4 12H20H4Z" stroke="#60A5FA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
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
