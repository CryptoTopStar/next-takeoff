export default function SearchBar() {
  return (
    <div className='flex items-center justify-center'>
      <div className='border-b border-gray-800'>
        <input
          type='text'
          name='name'
          id='name'
          className='w-full pb-1 border-rounded border-0 border-b border-gray-700 bg-transparent text-sm'
          placeholder='Type something...'
        />
      </div>
        <button
          type='button'
          className='flex ml-4 items-center justify-center px-4 py-2 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-b-yellow hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500'
        >
          <h5 className="ml-auto">Search&nbsp;</h5>
          <img src="/search.svg" alt="search"/>
        </button>
    </div>
  )
}
