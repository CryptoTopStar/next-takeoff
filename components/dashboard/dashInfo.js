import Link from 'next/link';

const DashInfo = ({title, text, info, link}) => {
  return (
    <div className='lg:w-10/12 w-full '>
      <div className='bg-b-gray p-8 rounded'>
        <div className='flex flex-col gap-y-2 mb-6'>
          <h4>{title}</h4>
          <p>{text}</p>
        </div>
        <div className='flex flex-col gap-y-2 mb-6'>
          <h4>{info}</h4>
          <Link href='/'>
            <p className='text-b-yellow hover:yellow-800 cursor-pointer	'>
              {link}
            </p>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default DashInfo
