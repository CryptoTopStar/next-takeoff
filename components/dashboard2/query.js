import SearchBar from './searchbar'
import Stats from './stats'

const Query = () => {
  return (
    <div className='lg:w-10/12 w-full'>
      <div className='bg-b-gray py-8 rounded px-8'>
        <SearchBar />
        <Stats />
      </div>
    </div>
  )
}

export default Query
