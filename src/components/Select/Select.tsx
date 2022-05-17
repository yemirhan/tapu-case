import React from 'react'
import { OptionProps, SelectProps } from './Select.types'

const Select = ({ children, onChange, value }: SelectProps) => {
    return (<div className='flex flex-col space-y-2'>
        <label htmlFor='s' className='text-gray-500 text-xs ml-1'>Locale</label>
        <select
            value={value}
            onChange={onChange}
            id='s'
            className='block
        w-full
        px-0.5
        border-0 border-b-2 border-gray-200
        focus:ring-0 focus:border-accent-turquoise'
        >
            {children}
        </select>
    </div>
    )
}

const Option = ({ children, value }: OptionProps) => {
    return <option value={value}>{children}</option>
}

Select.Option = Option

export { Select }