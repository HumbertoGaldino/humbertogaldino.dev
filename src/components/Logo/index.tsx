import Link from 'next/link'

export default function Logo() {
    
    const spanClass = ''

    return (
        <Link href="/" className='text-indigo-100 font-bold text-4xl italic'>
            <span className='text-yellow'>&#123;</span>
                HG
            <span className='text-yellow'>&#125;</span>
        </Link> 
    )
}