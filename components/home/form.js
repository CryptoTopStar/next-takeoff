const Form = () => {
  return (
    <div className='lg:w-10/12 w-full mx-auto'>
      <div className='bg-b-gray p-8 rounded'>
        <div className='flex gap-x-2 items-center justify-center mb-6'>
          <img src='/support.svg' alt='com' />
          <h4>Support</h4>
        </div>
        <label
          htmlFor='email'
          className='block text-sm font-medium text-gray-500'
        >
          Email
        </label>
        <div className='mt-1'>
          <input
            type='text'
            name='email'
            id='email'
            className='shadow-sm p-2 bg-t-border border border-gray-700 focus:ring-gray-500 focus:border-gray-500 block w-full sm:text-sm rounded-sm'
            placeholder='you@example.com'
          />
        </div>
        <label
          htmlFor='email'
          className='block text-sm font-medium text-gray-500 mt-5'
        >
          Message
        </label>
        <div className='mt-1'>
          <textarea
            type='text'
            name='message'
            id='message'
            rows='6'
            className='shadow-sm p-2 bg-t-border border border-gray-700 focus:ring-gray-500 focus:border-gray-500 block w-full sm:text-srounded-sm'
            placeholder='Type here...'
          />
        </div>
        <button
          type='button'
          className='flex mt-6 ml-auto items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-b-blue hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
        >
          Send
        </button>
      </div>
    </div>
  )
}

export default Form
