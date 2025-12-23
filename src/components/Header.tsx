import Link from 'next/link'

export default function Header() {
    return (
        <div className='flex justify-between px-4 py-2'>

            <h1 className='font-extrabold' >Logo</h1>
            <nav className='space-x-5'>
                <Link href={'/employees/add'} className='capitalize font-semibold'>Add Employee</Link>
                <Link href={'/about'} className='capitalize font-semibold'>about</Link>
                <Link href={'/contact'} className='capitalize font-semibold'>contact</Link>
                <Link href={'/posts'} className='capitalize font-semibold'>posts</Link>
            </nav>
        </div>
    )
}
   