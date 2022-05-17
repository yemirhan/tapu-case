import React from 'react'
import { ButtonProps } from './Button.types'

export const Button = ({ children, className, onClick, disabled = false, type = "primary" }: ButtonProps) => {
    return (
        <button
            disabled={disabled}
            className={`${className} 
            rounded-lg disabled:bg-primary-disabled 
            ${type === "primary" ?
                    "bg-primary-button hover:bg-primary-button/90 text-white" :
                    "border border-primary-button text-primary-button"
                }
            
            hover:scale-105 text-sm font-semibold 
            py-4 transition-all`}
            onClick={onClick}>
            {children}
        </button>
    )
}
