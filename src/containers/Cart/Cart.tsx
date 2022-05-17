import { LoadingSpinner } from 'components/LoadingSpinner'
import { useAppDispatch, useAppSelector } from 'hooks/redux'
import React, { useEffect } from 'react'
import { fetchItemsFromServer } from 'redux/reducers/cart'
import { ItemCard } from './components/ItemCard'
import { Total } from './components/Total'

export const Cart = () => {
    const { loading, items, last_updated } = useAppSelector(state => state.$cart)
    const dispatch = useAppDispatch()
    useEffect(() => {
        if (last_updated === 0) dispatch(fetchItemsFromServer())
    }, [])

    if (loading) return <LoadingSpinner />
    return (
        <div className='mx-auto md:px-4 mb-32'>
            <div className='w-full py-4 border-b border-accent-light sticky top-0 left-0 right-0 bg-white'>
                <h1 className='text-4xl md:text-5xl font-semibold md:font-medium'>List</h1>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-2 md:gap-4'>
                {(items || []).map(item => <ItemCard key={item.id} item={item} />)}
            </div>
            <Total />
        </div>
    )
}
