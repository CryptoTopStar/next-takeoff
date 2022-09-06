import Link from 'next/link';

const Community = () => {
  return (
    <div className='flex flex-col space-y-5'>
      <div className='flex gap-x-2 items-center'>
        <img src='/community.svg' alt='com' />
        <h4>Community</h4>
      </div>
        <div className="flex gap-x-2">
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

export default Community
