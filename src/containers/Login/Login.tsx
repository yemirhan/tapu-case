import { Button } from 'components/Button/Button'
import { LoadingSpinner } from 'components/LoadingSpinner'
import { Select } from 'components/Select/Select'
import { useAppDispatch, useAppSelector } from 'hooks/redux'
import React, { useState } from 'react'
import { changeLocale, login } from 'redux/reducers/user'
import { Input } from '../../components/Input/Input'

export const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const { locale, loggedIn } = useAppSelector(state => state.$user)
    const dispatch = useAppDispatch()

    if (loggedIn) return <LoadingSpinner />
    return (
        <div className='md:flex md:flex-col h-full items-center justify-center'>
            <div className='w-full md:max-w-[440px] md:border-2 md:shadow-lg rounded-lg md:px-8 md:py-14 md:border-accent-light mt-20 align-middle md:mt-0 h-auto md:mx-auto flex flex-col font-sans space-y-6'>
                <h1 className='font-medium text-4xl font-sans'>Account</h1>
                <Input type='email' placeholder='E-mail' value={email} onChange={e => setEmail(e)} />
                <Input type='password' placeholder='Password' value={password} onChange={e => setPassword(e)} />
                <Select value={locale} onChange={({ target: { value } }) => dispatch(changeLocale(value))}>
                    <Select.Option value="tur">Türkçe</Select.Option>
                    <Select.Option value={"eng"}>English</Select.Option>
                </Select>
                <Button onClick={() => dispatch(login({
                    email,
                    password,
                    username: "",
                    locale
                }))} disabled={(!email.length) || (!password.length)}>Sign Up</Button>
            </div>
        </div>

    )
}
