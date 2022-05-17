import { ChevronDownIcon, ChevronUpIcon, LocationMarkerIcon, ShoppingCartIcon, StarIcon, TrashIcon } from '@heroicons/react/outline'
import { useAppDispatch, useAppSelector } from 'hooks/redux'
import React from 'react'
import { addToCart, Item, removeFromCart } from 'redux/reducers/cart'

export const ItemCard = ({ item }: { item: Item }) => {
    const dispatch = useAppDispatch()
    const { selectedItems } = useAppSelector(state => state.$cart)
    return (
        <div className='flex flex-row p-2 md:p-4 gap-2 md:gap-4'>
            <img
                alt='place_image'
                loading='lazy'
                className='w-[72px] h-[72px] md:w-32 md:h-32 rounded-lg shadow-lg bg-slate-100 flex-shrink-0'
                src={item.image}
            />
            <div className='flex flex-col  space-y-4'>
                <div className='flex flex-col h-[72px] md:h-32 justify-between px-2'>
                    <h4 className='text-primary-black text-sm md:text-xl font-medium line-clamp-1'>{item.name}</h4>
                    <p className='text-accent-full text-xs md:text-lg line-clamp-2'>{item.description}</p>
                    <div className='flex flex-row space-x-4'>
                        <div className='inline-flex items-center'>
                            <StarIcon className='w-3 h-3 md:h-5 md:w-5' />
                            <span className='text-primary-black text-xs md:text-lg'>{(item.point / 10)}</span>
                        </div>
                        <div className='inline-flex items-center'>
                            <LocationMarkerIcon className='w-3 h-3 md:h-5 md:w-5' />
                            <span className='text-primary-black text-xs md:text-lg'>{`${item.distance / 10} KM`}</span>
                        </div>
                    </div>
                </div>
                <div className='flex'>
                    {
                        selectedItems[item.id] ? <div className='flex flex-row bg-red-100 rounded-lg shadow-md items-center justify-center overflow-hidden select-none'>
                            <div onClick={() => dispatch(removeFromCart(item))} className='py-2 px-3 hover:bg-red-400 '>
                                {selectedItems[item.id] === 1 ? <TrashIcon className='w-3 h-3 md:h-5 md:w-5' /> : <ChevronDownIcon className='w-3 h-3 md:h-5 md:w-5' />}
                            </div>
                            <div className='px-5'>
                                {selectedItems[item.id]}
                            </div>
                            <div onClick={() => dispatch(addToCart(item))} className='py-2 px-3 hover:bg-red-400 '>
                                <ChevronUpIcon className='w-3 h-3 md:h-5 md:w-5' />
                            </div>
                        </div> :
                            <div onClick={() => dispatch(addToCart(item))} className='flex flex-row space-x-1 hover:bg-slate-100 rounded-lg px-2 py-1 items-center cursor-pointer text-primary-button'>
                                <ShoppingCartIcon className='w-3 h-3 md:h-5 md:w-5' />
                                <span className='uppercase text-sm md:text-lg'>Add To Cart</span>
                            </div>
                    }
                </div>
            </div>

        </div>
    )
}
