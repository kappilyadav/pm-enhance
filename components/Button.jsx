"use client"

import Image from "next/image"


const Button = ({ label, iconURL, backgroundColor, borderColor, textColor, fullWidth }) => {
    return (
        <button className={`flex justify-center items-center 
        gap-2 border  rounded-full px-7 py-4 font-montserrat text-lg
         leading-none ${fullWidth && `w-full`} ${backgroundColor ? `${backgroundColor} ${textColor}
            ${borderColor}` : "bg-coral-red text-white border-coral-red"}`
        }>

            {label}

            {
                iconURL && <Image className="ml-2 h-5 w-5 bg-white 
            rounded-full" src={iconURL}
                    alt="arrow right icon" />
            }
        </button >
    )
}

export default Button