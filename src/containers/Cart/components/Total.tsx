import { useAppSelector } from 'hooks/redux'
import React, { useEffect, useState } from 'react'

export const Total = () => {
    const [price, setPrice] = useState(0)
    const { items, selectedItems } = useAppSelector(state => state.$cart)
    useEffect(() => {
        const list = Object
            .entries(selectedItems)
            .map(d => (items?.find(i => i.id === d[0])?.price || 0) * (d?.[1] || 0))
            .reduce((pSum, a) => pSum + a, 0);
        setPrice(list)

        return () => {
            setPrice(0)
        }
    }, [items, selectedItems])

    return (
        <div className='w-full flex flex-col border-t-2 border-accent-light text-primary-black space-y-4 pt-4 pb-4'>
            <h2 className='font-semibold text-2xl md:text-3xl'>Ürünlerin Toplamı: </h2>
            <div>
                <p className=' font-normal text-lg md:text-xl'>Toplam: {`${formatNumber(price)} TL`}</p>
                <p className='font-normal text-lg md:text-xl'>Vergi + Kargo: {`${formatNumber(price * 0.18)} TL`}</p>
            </div>

            <h4 className='font-semibold text-xl md:text-2xl'>{`Genel toplam: ${formatNumber(price * 1.18)} TL`}</h4>

        </div>
    )
}

export const formatNumber = (number: number) => Intl.NumberFormat("en-US", { maximumFractionDigits: 1 }).format(number)