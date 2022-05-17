import React from 'react'
import { TemplateIcon, UserIcon, UsersIcon } from "@heroicons/react/outline"
import { useNavigate, Link } from 'react-router-dom'
const listItems = [
    {
        name: "List",
        icon: TemplateIcon,
        path: "/cart"
    },
    {
        name: "Account",
        icon: UserIcon,
        path: "/"
    }
]
export class NavigationBar extends React.Component {
    render() {
        return <>
            <div
                className='flex flex-row md:flex-col items-center justify-center md:justify-start
            fixed md:sticky  md:top-0 bottom-0 left-0 xxs:right-0
            bg-accent-light md:border-accent-light text-accent-dark
            space-x-4 md:space-x-0 md:space-y-4 
            py-4 md:border-r-2  w-auto px-3 '
            >
                {
                    (listItems || []).map((item, index) => {
                        const Logo = item.icon
                        return <Link to={item.path}>
                            <div
                                key={`navbar_icon_${index}`}
                                className='flex hover:scale-105 flex-col items-center justify-center hover:bg-accent-dark/20 transition-colors cursor-pointer p-2 rounded-lg'
                            >
                                <Logo className='w-8 h-8' />
                                <span className='text-xs'>{item.name}</span>
                            </div>
                        </Link>
                    })
                }

            </div>
        </>
    }
}
