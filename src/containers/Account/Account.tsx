import { Button } from 'components/Button/Button'
import { LoadingSpinner } from 'components/LoadingSpinner'
import { Select } from 'components/Select/Select'
import { useAppDispatch, useAppSelector } from 'hooks/redux'
import { changeLocale, logout } from 'redux/reducers/user'

export const Account = () => {

    const dispatch = useAppDispatch()
    const { loggedIn, email, locale, password } = useAppSelector(state => state.$user)
    if (loggedIn === false) return <LoadingSpinner />
    return (
        <div className='md:flex md:flex-col h-full items-center justify-center'>
            <div className='w-full md:max-w-[440px] md:border-2 md:shadow-lg rounded-lg md:px-8 md:py-14 md:border-accent-light mt-20 align-middle md:mt-0 h-auto md:mx-auto flex flex-col font-sans space-y-6'>
                <h1 className='font-medium text-4xl font-sans'>Account</h1>
                <h1 className='font-medium text-5xl font-sans capitalize'>{email.split("@")[0].replaceAll("_", " ").replaceAll("-", " ")}</h1>
                <div>
                    <p>Email: {email}</p>
                    <p>Password: {password}</p>
                    <p>Current Locale: {locale}</p>

                </div>
                <Select value={locale} onChange={({ target: { value } }) => dispatch(changeLocale(value))}>
                    <Select.Option value="tur">Türkçe</Select.Option>
                    <Select.Option value={"eng"}>English</Select.Option>
                </Select>
                <Button type='secondary' onClick={() => dispatch(logout())}>Log Out</Button>
            </div>
        </div>

    )
}
