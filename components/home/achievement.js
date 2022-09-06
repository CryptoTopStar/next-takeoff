import Image from 'next/image'
import Infobox from './infobox'

const Achievement = () => {
  return (
    <section className='mt-16 md:mt-40 flex md:flex-row flex-col md:flex-nowrap flex-wrap justify-between items-center gap-10 md:gap-24'>
      <div className='w-1/2 grid grid-cols-1 lg:grid-cols-2 gap-5'>
        <Infobox number='23' text='Total Presale' />
        <Infobox number='640BNB/65ETH' text='Raised In Total' />
        <Infobox number='2,455,180' text='Holders' />
        <Infobox number='234/day' text='Transactions' />
      </div>
      <div className='md:w-1/2 w-full'>
        <Image src='/arrow.svg' width={54} height={25} alt='arrow' />
        <h2>Large Achievement</h2>
        <p className='mt-4'>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet.
        </p>
        <span className='b-pink mt-1 flex items-center'>
          <p className='text-b-pink hover:pink-800 focus:pink-900'>
            Read more{' '}
          </p>
          <img
            className='ml-1'
            src='/readmore.svg'
            width='30'
            height='auto'
            alt='arrow'
          />{' '}
        </span>
      </div>
    </section>
  )
}

export default Achievement
