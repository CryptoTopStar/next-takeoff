const Notification = ({text}) => {
  return (
    <div className='flex items-center gap-3 border border-dashed p-4 border-gray-600 lg:w-10/12 w-full'>
      <img src='/bell.svg' alt='bell' width='20' />
      <p>{text}</p>
    </div>
  )
}

export default Notification
