const Progressbar = ({percent='0%', color}) => {
  return (
    <div className='relative '>
      <div className='overflow-hidden h-2  text-xs flex rounded bg-gray-700'>
        <div
          style={{ width: percent, backgroundColor: color }}
          className='shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center'
        ></div>
      </div>
    </div>
  )
}

export default Progressbar
