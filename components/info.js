const Info = ({num, text}) => {
  return (
    <div className='flex flex-col items-center gap-y-3'>
      <p className='inline text-gray-50 font-medium'>{num}</p>
      <p className='inline text-gray-400'>{text}</p>
    </div>
  )
}

export default Info
