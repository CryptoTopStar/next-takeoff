import Image from 'next/image'

const Header = () => {
  return (
    <header className='flex flex-wrap md:flex-nowrap justify-between'>
      <div className='w-auto md:max-w-lg	mt-14 md:order-first order-last md:mx-0 mx-auto'>
        <Image src='/arrow.svg' width={54} height={25} alt='arrow'/>
        <h1>MULTI CHAIN DECENTRALIZED PROTOCOLS & SERVICES</h1>
        <p className='mt-3 mr-0 md:mr-10'>
          It was popularised in the 1960s with the release of Letraset sheets
          containing Lorem Ipsum passages, and more recently with desktop
          publishing software like Aldus PageMaker including versions of Lorem
          Ipsum.
        </p>
        <div className='flex mt-10'>
          <button
            type='button'
            className='inline-flex z-10 items-center px-4 py-2 border border-transparent text-base font-medium rounded-2xl shadow-sm text-white bg-b-blue hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
          >
            <img src='/BSC.svg' alt='wallet' className='mr-2' width='40' />
            <h6 className='pr-10'>BSC</h6>
          </button>
          <button
            type='button'
            className='inline-flex z-20 -ml-8 pl-10 items-center px-4 py-2 border border-transparent text-base font-medium rounded-2xl shadow-sm text-white bg-b-pink hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500'
          >
            <h6 className='mr-2'>ETH</h6>
            <img src='/ETH.svg' alt='wallet' width='40' />
          </button>
        </div>
      </div>
      <Image
        src='/header.svg'
        width={553}
        height={520}
        alt='header'
        className='md:order-last order-first'
      />
    </header>
  )
}

export default Header
