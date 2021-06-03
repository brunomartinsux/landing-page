export default function Footer() {
    return (
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
        <h3 className="text-lg text-gray-300 px-24">Copyright © 2021. 
        Política de privacidade e 
        Termos de Uso</h3>
    </footer>
    )
}