import React from "react"

const ClassicAlert = ({ text, color, width, height }) => {
    return (
        <div class={`w-[${width}] h-auto md:h-[${height}] py-2 rounded-md  bg-gray-800 flex items-center justify-center px-4`}>
            <svg class="flex-shrink-0 inline w-4 h-4 mr-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="#f87171" viewBox="0 0 20 20">
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z">
                </path>
            </svg>
            <span class={`text-sm mr-auto text-${color}-400`}>{text}</span>
        </div>
    )
}

export default ClassicAlert