import Head from 'next/head'
import { useState } from 'react'

export default function Home() {
  

  return (
    <div className="w-full min-h-screen">
    <Head>
      <title>Datajus</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main className="bg-gray-50 min-h-screen w-full">
      <Header/>
      <div className="flex flex-col sm:flex-row sm:mt-14 justify-between">
        <CallToActionDobra/>
        <FormDobra/>
      </div>
      <div className="bg-white">
        <Services/>
        <Benefites/>
        <Prices/>
        <CallToAction/>
        <div className="pt-20 space-y-8 sm:space-y-20">
          <h1 className="px-4 sm:text-center text-3xl sm:text-5xl">Perguntas frequentes</h1>
          <div className="sm:px-48 space-y-8">
            <AcordionStep/>
            <AcordionStep/>
            <AcordionStep/>
            <AcordionStep/>
            <AcordionStep/>
          </div>
        </div>
      </div>
      
      
      
    </main>



  </div>
  )
}

function AcordionStep() {

  const [isOpen, setOpen] = useState(false)

  function changeAcordion() {
    const newState = !isOpen
    setOpen(newState)
  }
  
  return (
  <div>
      <div className="flex px-4 space-x-2">
        <h2 className="text-xl sm:text-4xl font-medium text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet?</h2>
        <button onClick={changeAcordion}>
          <svg width="15" height="15" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1.5 1.75L6 6.25L10.5 1.75" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
      <hr className="my-4"/>
      <div className={isOpen ? "px-4" : "px-4 hidden"}>
      <h2 className="text-xl sm:text-2xl text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisi orci, dictum lobortis in ullamcorper. Est vel fames cras massa nulla. Mi praesent pharetra egestas vestibulum sed sodales. Imperdiet orci morbi nibh in massa. Ultricies aliquam proin amet pellentesque ipsum, ante eu, nunc dignissim. Imperdiet magna laoreet iaculis eu urna dignissim id ut.</h2>
      </div>
    </div>
  )
}


function CallToAction() {

  return (
    <div className="bg-gray-50 py-12 space-y-8 sm:flex sm:justify-between">
    <div className="px-4 sm:px-40">
      <h1 className="text-3xl sm:text-6xl font-medium text-gray-700">Ready to dive in?</h1>
      <h1 className="text-3xl sm:text-6xl font-medium text-blue-500">Start your free trial today.</h1>
    </div>
    <div className="px-4 sm:px-40 space-x-3 ">
      <button className="px-5 sm:px-10 py-3 sm:py-6 sm:text-xl bg-blue-500 font-medium text-white rounded-lg">Cadastre-se</button>
      <button className="px-5 sm:px-10 py-3 sm:py-6 sm:text-xl bg-white shadow-2xl font-medium text-blue-500 rounded-lg">Saiba mais</button>
    </div>
  </div>
  )
}

function Prices() {

  return(
    <div className="pb-20">
    <div className="mt-24 text-center space-y-4">
      <h1 className="font-medium text-3xl text-gray-700">Nossos Preços</h1>
      <h3 className="text-xl text-gray-600">Lorem ipsum dolor sit amet consect adipisicing elit. </h3>
    </div>
    <div className="mt-8 space-y-10 sm:space-y-0 sm:justify-between sm:flex sm:px-40">
    <div className="text-center  mx-12 py-2 shadow-2xl space-y-4">
      <div>
        <img className="mx-auto h-12" src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/285/department-store_1f3ec.png"/>
        <h2 className="font-medium text-3xl text-gray-700 mt-2">Mensal</h2>
        <h3 className="line-through text-xl text-gray-600 mt-2">R$1300</h3>
      </div>
      <div className="px-4">
        <hr className="mt-4"/>
        <h1 className="font-medium text-5xl text-blue-500 mt-4">R$960</h1>
        <h2 className="text-xl text-gray-600 mt-4">por mês</h2>
        <h2 className="text-2xl bg-green-100 px-4 py-4 rounded-3xl text-green-500 mt-4 mb-5">15% de desconto</h2>
      </div>
    </div>
    <div className="text-center  mx-12 py-2 shadow-2xl space-y-4">
      <div>
        <img className="mx-auto h-12" src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/285/office-building_1f3e2.png"/>
        <h2 className="font-medium text-3xl text-gray-700 mt-2">Semestral</h2>
        <h3 className="line-through text-xl text-gray-600 mt-2">R$1300</h3>
      </div>
      <div className="px-4">
        <hr className="mt-4"/>
        <h1 className="font-medium text-5xl text-blue-500 mt-4">R$1170</h1>
        <h2 className="text-xl text-gray-600 mt-4">por mês</h2>
        <h2 className="text-2xl bg-green-100 px-4 py-4 rounded-3xl text-green-500 mt-4 mb-5">15% de desconto</h2>
      </div>
    </div>
    <div className="text-center  mx-12 py-2 shadow-2xl space-y-4">
      <div>
        <img className="mx-auto h-12" src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/285/classical-building_1f3db-fe0f.png"/>
        <h2 className="font-medium text-3xl text-gray-700 mt-2">Anual</h2>
        <h3 className="line-through text-xl text-gray-600 mt-2">R$1300</h3>
      </div>
      <div className="px-4">
        <hr className="my-4"/>
        <h1 className="font-medium text-5xl text-blue-500 mt-4">R$935</h1>
        <h2 className="text-xl text-gray-600 mt-4">por mês</h2>
        <h2 className="text-2xl bg-green-100 px-4 py-4 rounded-3xl text-green-500 mt-4 mb-5">15% de desconto</h2>
      </div>
    </div>
    

    </div>
  </div>
  )
}

function Benefites() {

  return (
    <div className="px-4 sm:px-56 sm:w-7/12">
            <div className="space-y-4">
              <h1 className="text-3xl font-medium text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h1>
              <h3 className="text-xl text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. A est placerat at blandit turpis lacus eget.</h3>
            </div>
            <div className="mt-10 space-y-6">
              <div className="flex flex-row space-x-2">
              <div className="bg-blue-500 p-2 rounded-full">
                <svg width="12" height="12" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.75 1.1875L3.59375 6.34375L1.25 4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-lg">Lorem ipsum dolor sit amet, consectetur.</h3>
              </div>
              <div className="flex flex-row space-x-2">
              <div className="bg-blue-500 p-2 rounded-full">
                <svg width="12" height="12" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.75 1.1875L3.59375 6.34375L1.25 4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-lg">Lorem ipsum dolor sit amet, consectetur.</h3>
              </div>
              <div className="flex flex-row space-x-2">
              <div className="bg-blue-500 p-2 rounded-full">
                <svg width="12" height="12" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.75 1.1875L3.59375 6.34375L1.25 4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-lg">Lorem ipsum dolor sit amet, consectetur.</h3>
              </div>
              <div className="flex flex-row space-x-2">
              <div className="bg-blue-500 p-2 rounded-full">
                <svg width="12" height="12" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.75 1.1875L3.59375 6.34375L1.25 4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-lg">Lorem ipsum dolor sit amet, consectetur.</h3>
              </div>
              <div className="flex flex-row space-x-2">
              <div className="bg-blue-500 p-2 rounded-full">
                <svg width="12" height="12" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.75 1.1875L3.59375 6.34375L1.25 4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-lg">Lorem ipsum dolor sit amet, consectetur.</h3>
              </div>
            </div>
          </div>
  )
}

function Services() {
  return (
    <div className="bg-white">
    <div className="mt-20 mb-16 justify-between px-4 sm:px-56">
      <div className="space-y-2 sm:pt-24 sm:text-center">
        <h3 className="text-xl text-blue-500 font-medium">NOSSOS SERVIÇOS</h3>
        <h1 className="text-4xl text-gray-700 font-medium">A better way to send money</h1>
        <h3 className="text-2xl text-gray-600">Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in accusamus quisquam.</h3>
      </div>
      <div className="py-10 space-y-10 sm:space-y-0 sm:space-x-8 sm:flex justify-between">
        <div className="flex flex-row space-x-4 sm:w-1/2">
          <div className="bg-blue-500 max-h-12 max-w-12 px-4 pt-3 rounded-xl">
            <svg width="22" height="22" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19 10C19 14.9706 14.9706 19 10 19M19 10C19 5.02944 14.9706 1 10 1M19 10H1M10 19C5.02944 19 1 14.9706 1 10M10 19C11.6569 19 13 14.9706 13 10C13 5.02944 11.6569 1 10 1M10 19C8.34315 19 7 14.9706 7 10C7 5.02944 8.34315 1 10 1M1 10C1 5.02944 5.02944 1 10 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <div>
            <h1 className="text-2xl text-gray-700">Competitive exchange rates</h1>
            <h3 className="text-xl text-gray-600">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione. </h3>
          </div>
        </div>
        <div className="flex flex-row space-x-4 sm:w-1/2">
          <div className="bg-blue-500 max-h-12 max-w-12 px-4 pt-3 rounded-xl">
          <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 4L4 5M4 5L1 14C2.77253 15.3334 5.22866 15.3334 7.00119 14M4 5L7.00006 14M4 5L10 3M16 5L19 4M16 5L13 14C14.7725 15.3334 17.2287 15.3334 19.0012 14M16 5L19.0001 14M16 5L10 3M10 1V3M10 19V3M10 19H7M10 19H13" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          </div>
          <div>
            <h1 className="text-2xl text-gray-700">No hidden fees</h1>
            <h3 className="text-xl text-gray-600">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione. </h3>
          </div>
        </div>
      </div>
      <div className="pb-10 space-y-10 sm:space-y-0 sm:space-x-8 sm:flex justify-between">
        <div className="flex flex-row space-x-4 sm:w-1/2">
            <div className="bg-blue-500 max-h-12 max-w-12 px-4 pt-3 rounded-xl">
            <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path    d="M10 8V1L1 12H8L8 19L17 8L10 8Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
            </div>
            <div>
              <h1 className="text-2xl text-gray-700">Transfers are instant</h1>
              <h3 className="text-xl text-gray-600">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione. </h3>
            </div>
          </div>
          <div className="flex flex-row space-x-4 sm:w-1/2">
            <div className="bg-blue-500 max-h-12 max-w-12 px-4 pt-3 rounded-xl">
            <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 5H15M5 9H9M10 17L6 13H3C1.89543 13 1 12.1046 1 11V3C1 1.89543 1.89543 1 3 1H17C18.1046 1 19 1.89543 19 3V11C19 12.1046 18.1046 13 17 13H14L10 17Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            </div>
            <div>
              <h1 className="text-2xl text-gray-700">Mobile notifications</h1>
              <h3 className="text-xl text-gray-600">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione. </h3>
            </div>
          </div>
      </div>
    </div>
  </div>
  )
}

function FormDobra() {
  return (
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
  )
}

function CallToActionDobra() {

  return (
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
