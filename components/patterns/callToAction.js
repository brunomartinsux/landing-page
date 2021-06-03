export default function CallToAction() {

    return (
    <div className="bg-gray-50 py-12 space-y-8 sm:flex sm:justify-between">
        <div className="px-4 sm:px-40">
            <h1 className="text-3xl sm:text-6xl font-medium text-gray-700">Cadastro em 2 minutos</h1>
            <h1 className="text-3xl sm:text-6xl font-medium text-blue-500">Tecnologia a favor do devedor.</h1>
        </div>
        <div className="px-4 sm:px-40 space-x-3 ">
            <button className="px-5 sm:px-10 py-3 sm:py-6 sm:text-xl bg-blue-500 font-medium text-white rounded-lg">Cadastre-se</button>
            <button className="px-5 sm:px-10 py-3 sm:py-6 sm:text-xl bg-white shadow-2xl font-medium text-blue-500 rounded-lg"><a href="https://api.whatsapp.com/send?phone=5547997401187&text=Quero%20iniciar%20minha%20recupera%C3%A7%C3%A3o%20fiscal!">Saiba mais</a></button>
        </div>
    </div>  
)
}