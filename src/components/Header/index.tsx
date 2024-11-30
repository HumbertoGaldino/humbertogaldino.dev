import Link from 'next/link'
import Logo from '../Logo'
import BurguerMenu from '../BurguerMenu'
import {content} from './content'

export default function Header() {
    const linkClass = 'relative underline-link pb-2 uppercase'
    
    return (
        <>
            <div className="flex items-center justify-between space-x-2 text-lg w-full text-indigo-100">
                <Logo />
                <nav className="flex space-x-5 font-bold items-center hidden lg:flex">
                    {content.map(({ label, url } : {label:string, url:string}) => {
                        return (
                            <li className='list-none' key={label}>
                                <Link href={url} className={linkClass}>
                                    {label}
                                </Link>
                            </li>
                        )
                    })}
                </nav>
            </div>

            <div className='lg:hidden'>
                <BurguerMenu/>
            </div>
        </>
    )
}

