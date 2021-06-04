import Head from 'next/head'
import Faq from '../components/patterns/faq'
import CallToAction from '../components/patterns/callToAction'
import Prices from '../components/patterns/prices'
import Benefites from '../components/patterns/benefites'
import Services from '../components/patterns/services'
import CallToActionDobra from '../components/patterns/dobraCTA'
import FormDobra from '../components/patterns/dobraForm'
import Header from '../components/patterns/header'
import Footer from '../components/patterns/footer'


export default function Home() {

  return (
    <div className="w-full min-h-screen">
    <Head>
      <title>Datajus</title>
      <link rel="icon" href="https://i.ibb.co/WF2YQ9L/Icon.png" />
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
        <Faq/>
        <Footer/>        
      </div>
    </main>
  </div>
  )
}






