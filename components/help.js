import Link from 'next/link';

const Help = () => {
  return (
    <div className='mt-20 flex flex-wrap items-center justify-center gap-4 md:gap-0 md:justify-between'>
      <div className='flex items-center'>
        <img src='/chat.svg' alt='chat' /> Support
      </div>
      <div className='flex gap-x-2'>
        <Link href='/'>
          <div className='flex bg-gray-700 px-3 py-3 rounded gap-2 justify-center items-center'>
            <img src='/discord.svg' alt='dis' width='30' />
            <h5>Discord</h5>
          </div>
        </Link>
        <Link href='/'>
          <div className='flex bg-gray-500 px-3 py-3 rounded gap-2 justify-center items-center'>
            <img src='/telegram.svg' alt='dis' width='40' />
            <h5>Telegram</h5>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default Help
