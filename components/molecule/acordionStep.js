import { useState } from 'react'

export default function AcordionStep( props ) {

const [isOpen, setOpen] = useState(false)

function changeAcordion() {
    const newState = !isOpen
    setOpen(newState)
}

return (
    <div>
        <div className="flex px-4 space-x-2">
            <button onClick={changeAcordion} className="text-xl sm:text-2xl font-medium text-gray-600 sm:mx-auto">{props.title}</button>
            <button onClick={changeAcordion}>
            <svg width="15" height="15" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.5 1.75L6 6.25L10.5 1.75" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            </button>
        </div>
            <hr className="my-4"/>
            <div className={isOpen ? "px-4" : "px-4 hidden"}>
            <h2 className="text-xl sm:text-2xl text-gray-500">{props.subtitle}</h2>
        </div>
    </div>
)
}