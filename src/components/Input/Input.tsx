import React from 'react'
import { InputProps } from './Input.types'

export const Input = ({ type = "text", placeholder, value, onChange, className = "", ...rest }: InputProps) => {
    return (
        <input
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={(e) => onChange(e.target.value, e)}
            className={`${className} mt-0
            block
            w-full
            px-0.5
            border-0 border-b-2 border-gray-200
            focus:ring-0 focus:border-accent-turquoise
            transition-colors
            `}
            {...rest}
        />
    )
}
