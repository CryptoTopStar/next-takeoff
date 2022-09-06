const FeatItem = ({number, title}) => {
  return (
    <div className='md:flex md:flex-row md:justify-between md:items-center flex flex-col justify-center items-center'>
      <div className='text-center animated rounded-full bg-b-blue opacity-75 z-10'>
        <p className='text-gray-100 flex justify-center items-center w-10 h-10 my-auto rounded-full bg-b-blue z-20 br'>
          {number}
        </p>
      </div>
      <h6 className='md:ml-6 md:mt-0 mt-6 ml-0 font-medium w-28 md:text-left text-center'>
        {title}
      </h6>
    </div>
  )
}

export default FeatItem
