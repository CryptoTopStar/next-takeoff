import Toggle from './../toggle'

const Stats = () => {
  return (
    <div className='grid grid-cols-3 mt-8 gap-y-5'>
      <div className='flex items-center justify-start'>
        <h5 className='text-gray-50'>Liquidity:</h5>
      </div>
      <div className='flex items-center justify-center'>
        <Toggle />
      </div>
      <div className='flex items-center justify-start'></div>
      <div className='flex items-center justify-start'>
        <h5 className='text-gray-50'>Soft Cap:</h5>
      </div>
      <div className='flex items-center justify-center'>
        <input
          type='number'
          name='liquidity'
          id='liquidity'
          className='w-12 text-center border-rounded border-0 border-b border-gray-700 bg-transparent'
          placeholder='0'
        />
      </div>
      <div className='flex items-center justify-end'>
        <img src='/bsc-yellow.svg' alt='bsc' />
      </div>
      <div className='flex items-center justify-start'>
        <h5 className='text-gray-50'>Owner Liquidity:</h5>
      </div>
      <div className='flex items-center justify-center'>
        <input
          type='number'
          name='target'
          id='target'
          className='w-12 text-center border-rounded border-0 border-b border-gray-700 bg-transparent'
          placeholder='0'
        />
      </div>
      <div className='flex items-center justify-end'>%</div>
      <div className='flex items-center justify-start'>
        <h5 className='text-gray-50'>Target Filled:</h5>
      </div>
      <div className='flex items-center justify-center'>
        <input
          type='number'
          name='target'
          id='target'
          className='w-12 text-center border-rounded border-0 border-b border-gray-700 bg-transparent'
          placeholder='0'
        />
      </div>
      <div className='flex items-center justify-end'>%</div>
      <div className='flex items-center justify-start'>
        <h5 className='text-gray-50'>Hard Cap:</h5>
      </div>
      <div className='flex items-center justify-center'>
        <input
          type='number'
          name='liquidity'
          id='liquidity'
          className='w-8 text-center border-rounded border-0 border-b border-gray-700 bg-transparent'
          placeholder='0'
        />
      </div>
      <div className='flex items-center justify-end'>
        <img src='/bsc-yellow.svg' alt='bsc' />
      </div>
      <div className='flex items-center justify-start'>
        <h5 className='text-gray-50'>Investment:</h5>
      </div>
      <div className='flex items-center justify-center space-x-1'>
        <p className='text-b-pink text-sm'>Min</p>
        <input
          type='number'
          name='liquidity'
          id='liquidity'
          className='w-8 text-center border-rounded border-0 border-b border-gray-700 bg-transparent'
          placeholder='0'
        />
        <p className='text-b-pink text-sm'>Max</p>
        <input
          type='number'
          name='liquidity'
          id='liquidity'
          className='w-8 text-center border-rounded border-0 border-b border-gray-700 bg-transparent'
          placeholder='0'
        />
      </div>
      <div className='flex items-center justify-end'>
        <img src='/bsc-yellow.svg' alt='bsc' />
      </div>
    </div>
  )
}

export default Stats
