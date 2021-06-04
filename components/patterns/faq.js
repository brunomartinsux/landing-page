import AcordionStep from '../molecule/acordionStep'

export default function Faq() {
    return (
    <div className="py-20 space-y-8 sm:space-y-20">
        <h1 id="faq" className="px-4 sm:text-center text-3xl sm:text-5xl">Perguntas frequentes</h1>
        <div className="sm:px-48 space-y-8">
            <AcordionStep
            title="Processos novos estarão inclusos no acompanhamento? Algum valor a mais?"
            subtitle="Ao contratar nossos serviços, nos comprometemos assessoria tributária de até 10 processos inclusos. Caso surjam novos processos, será cobrado um plus adicional por processo."
            />
            <AcordionStep
            title="Como faço para contratar o serviço e quais os métodos de pagamento?"
            subtitle="Preencha seus dados em nosso Cadastro, nossa equipe entrará em contato com você requerendo os documentos necessários para prosseguir com sua defesa, bem como a melhor forma de pagamento. Os pagamentos são feitos através do Mercado Pago, portanto, aceitamos todas as formas de pagamento da plataforma."
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
    
    )
}