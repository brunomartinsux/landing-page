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
<<<<<<< HEAD
        <div className="py-20 space-y-8 sm:space-y-20">
          <h1 id="faq" className="px-4 sm:text-center text-3xl sm:text-5xl">Perguntas frequentes</h1>
          <div className="sm:px-48 space-y-8">
            <AcordionStep
            title="Processos novos estarão inclusos no acompanhamento? Algum valor a mais?"
            subtitle="Ao contratar nossos serviços, nos comprometemos assessoria tributária de até 10 processos inclusos. Caso surjam novos processos, será cobrado um plus adicional por processo."
            />
            <AcordionStep
            title="Como faço para contratar o serviço e quais os métodos de pagamento?"
            subtitle="Preencha seus dados em nosso Cadastro, nossa equipe entrará em contato com você requerendo os documentos necessários para o prosseguimento de sua defesa bem como a melhor forma de pagamento. Os pagamentos são feitos através do Mercado Pago, portanto, aceitamos todas as formas de pagamento da plataforma."
            />
            <AcordionStep
            title="Como faço para cancelar o serviço?"
            subtitle="Trabalhamos com contrato de prestação de serviços. Em caso de cancelamento, a única exigência é o pagamento de uma mensalidade adicional, uma vez que em caso de renúncia de mandato, nossos profissionais por lei, o representarão por mais 10 dias úteis, conforme Lei 13.105/2015."
            />
            <AcordionStep
            title="E se eu tiver mais de uma empresa?"
            subtitle="No caso de 2 empresas ou mais, será adicionado um desconto exponencial na mensalidade dos outros CNPJ's."
            />
            <AcordionStep
            title="Como faço para tirar uma dúvida sobre o processo ou serviço sendo executado pela Datajus?"
            subtitle="A Datajus disponibiliza ferramentas e aplicativos para que seus clientes consigam elucidar qualquer questionamento referente ao seus processos diretamente com sua equipe jurídica. Em menos de 24 horas nossa equipe entrará em contato com a melhor orientação atinente ao caso."
            />
          </div>
        </div>
        <footer className="bg-gray-800 text-center py-14 space-y-8">
          <h3 className="text-xl sm:text-2xl text-gray-300">Cadastro em 2 minutos</h3>
          <h1 className="text-4xl sm:text-6xl text-white">Inteligência Tributária</h1>
          <a href="https://9ry4w2x347i.typeform.com/to/uJhg5eLd">
          <button className="mt-5 px-10 py-5 bg-white rounded-lg font-medium text-blue-500">Cadastre-se</button>
          </a>
          
          <div className="flex flex-col space-y-4 text-white text-lg">
            <a href="#services">Serviços</a>
            <a href="#prices">Preços</a>
            <a href="#faq">Perguntas Frequentes</a>
          </div>
          <h3 className="text-lg text-gray-300 px-24">Copyright  © 2021. 
Política de privacidade e 
Termos de Uso</h3>

        </footer>
=======
        <Faq/>
        <Footer/>        
>>>>>>> 4b1a0feacb0f2761355d49f08f48a36c0cfcb478
      </div>
    </main>
  </div>
  )
}






