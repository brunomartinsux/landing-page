export default function Prices() {

return(
    <div className="pb-20">
        <div id="prices" className="mt-24 text-center space-y-4">
            <h1 className="font-medium text-3xl text-gray-700">Nossos Preços</h1>
            <h3 className="text-xl text-gray-600">Planos e preços para todos os modelos de negócio.</h3>
        </div>
        <div className="mt-8 space-y-10 sm:space-y-0 sm:justify-between sm:flex sm:px-40">
            <div className="text-center  mx-12 py-2 shadow-2xl space-y-4">
                <div>
                    <img className="mx-auto h-12" src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/285/department-store_1f3ec.png"/>
                    <h2 className="font-medium text-3xl text-gray-700 mt-2">Mensal</h2>
                    <h3 className="line-through text-xl text-gray-600 mt-2">R$1350</h3>
                </div>
                <div className="px-4">
                    <hr className="mt-4"/>
                    <h1 className="font-medium text-5xl text-blue-500 mt-4">R$945</h1>
                    <h2 className="text-xl text-gray-600 mt-4">por mês</h2>
                    <h2 className="text-2xl bg-green-100 px-4 py-4 rounded-3xl text-green-500 mt-4 mb-5">30% de desconto</h2>
                </div>
            </div>
            <div className="text-center  mx-12 py-2 shadow-2xl space-y-4">
                <div>
                    <img className="mx-auto h-12" src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/285/office-building_1f3e2.png"/>
                    <h2 className="font-medium text-3xl text-gray-700 mt-2">Semestral</h2>
                    <h3 className="line-through text-xl text-gray-600 mt-2">R$1350</h3>
                </div>
                <div className="px-4">
                    <hr className="mt-4"/>
                    <h1 className="font-medium text-5xl text-blue-500 mt-4">R$1150</h1>
                    <h2 className="text-xl text-gray-600 mt-4">por mês</h2>
                    <h2 className="text-2xl bg-green-100 px-4 py-4 rounded-3xl text-green-500 mt-4 mb-5">15% de desconto</h2>
                </div>
            </div>
            <div className="text-center  mx-12 py-2 shadow-2xl space-y-4">
                <div>
                    <img className="mx-auto h-12" src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/285/classical-building_1f3db-fe0f.png"/>
                    <h2 className="font-medium text-3xl text-gray-700 mt-2">Anual</h2>
                    <h3 className="line-through text-xl text-gray-600 mt-2">R$1350</h3>
                </div>
                <div className="px-4">
                    <hr className="my-4"/>
                    <h1 className="font-medium text-5xl text-blue-500 mt-4">R$810</h1>
                    <h2 className="text-xl text-gray-600 mt-4">por mês</h2>
                    <h2 className="text-2xl bg-green-100 px-4 py-4 rounded-3xl text-green-500 mt-4 mb-5">40% de desconto</h2>
                </div>
            </div>
        </div>
    </div>
    )
}