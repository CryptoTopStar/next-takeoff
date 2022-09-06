const MoonerForm = () => {
  return (
    <div className='lg:w-10/12 w-full '>
      <div className='bg-b-gray p-8 rounded'>
        <div className='flex flex-col gap-y-2 items-center justify-center mb-6'>
          <img src='/monner.svg' alt='mooner' width='50' />
          <h4>Purchase Mooner</h4>
        </div>
        <label
          htmlFor='mooner'
          className='block text-sm font-medium text-gray-500'
        >
          Mooner
        </label>
        <div className='mt-1'>
          <input
            type='text'
            name='mooner'
            id='mooner'
            className='shadow-sm p-2 bg-t-border border border-gray-700 focus:ring-gray-500 focus:border-gray-500 block w-full sm:text-sm rounded-sm'
            placeholder='MNR'
          />
        </div>
        <img src="/convert.svg" alt="convert" width='35' className='mt-4 -mb-1 mx-auto'/>
        <label
          htmlFor='bnb'
          className='block text-sm font-medium text-gray-500'
        >
          BNB
        </label>
        <div className='mt-1'>
          <input
            type='text'
            name='bnb'
            id='bnb'
            className='shadow-sm p-2 bg-t-border border border-gray-700 focus:ring-gray-500 focus:border-gray-500 block w-full sm:text-sm rounded-sm'
            placeholder='BNB'
          />{' '}
        </div>
        <button
          type='button'
          className='flex mt-6 ml-auto items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-b-yellow hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500'
        >
          Buy Now
        </button>
      </div>
    </div>
  )
}

export default MoonerForm
