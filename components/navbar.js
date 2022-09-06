import Link from 'next/link'
import { useState } from 'react'
import cn from 'classnames'
import Image from 'next/image'

export default function Header() {
  const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false)

  return (
    <navbar>
      <div className='flex flex-wrap items-center justify-between mx-6 sm:mx-12 md:mx-28 mt-12 '>
        <div>
          <Link href='/'>
            <Image
              className='m-0 p-0'
              src='/logo.svg'
              width={145}
              height={50}
              priority
              alt='logo'
            />
          </Link>
        </div>

        <button
          className='flex items-center px-3 py-2 text-white border border-white rounded md:hidden'
          onClick={() => setMobileMenuIsOpen(!mobileMenuIsOpen)}
        >
          <svg
            className='w-3 h-3 fill-current'
            viewBox='0 0 20 20'
            xmlns='http://www.w3.org/2000/svg'
          >
            <title>Menu</title>
            <path d='M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z' />
          </svg>
        </button>

        <ul
          className={cn(
            'md:flex flex-col rounded shadow-sm bg-b-gray md:bg-transparent p-6 md:flex-row md:items-center md:justify-center text-sm w-full md:w-auto',
            mobileMenuIsOpen ? `block menu-drop` : `hidden`
          )}
        >
          {[
            { title: 'Home', route: '/' },
            { title: 'Dashboard', route: '/dashboard' },
            { title: 'Status', route: '/dashboard2' },
            { title: 'Create Presale', route: '/presale' },
          ].map(({ route, title }) => (
            <li className='mt-3 md:mt-0 md:ml-6' key={title}>
              <Link href={route}>
                <a className='inline-block md:block text-white link'>{title}</a>
              </Link>
            </li>
          ))}
          <div
            className={cn(
              'flex mt-6 justify-between',
              mobileMenuIsOpen ? `block` : `hidden`
            )}
          >
            <div className='flex space-x-3'>
              <Link href='#support'>
                <img src='/support.svg' alt='support' />
              </Link>
              <Link href='#faq'>
                <img src='/faq.svg' alt='faq' />
              </Link>
            </div>
            <button
              type='button'
              className='inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-b-blue hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
            >
              Connect
              <img src='/wallet.svg' alt='wallet' className='ml-2' />
            </button>
          </div>
        </ul>
        <div className='hidden md:flex space-x-2'>
          <Link href='#support'>
            <img src='/support.svg' alt='support' />
          </Link>
          <Link href='#faq'>
            <img src='/faq.svg' alt='faq' />
          </Link>
        </div>
        <button
          type='button'
          className='hidden md:inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-b-blue hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
        >
          Connect
          <img src='/wallet.svg' alt='wallet' className='ml-2' />
        </button>
      </div>
    </navbar>
  )
}
