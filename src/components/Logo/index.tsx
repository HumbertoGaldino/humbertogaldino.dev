import Link from 'next/link'

export default function Logo() {

    return (
        <Link href="/" className='text-almostWhite font-bold text-4xl italic'>
            <span className='text-yellow drop-shadow-[_0_0_5px_yellow]'>&#60;</span>
                HG
            <span className='text-yellow drop-shadow-[_0_0_5px_yellow]'>&#47;&#62;</span>
        </Link> 
    )
}