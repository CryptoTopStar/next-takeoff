const Infobox = ({number, text}) => {
  return (
    <div className='info-box flex flex-col text-center gap-2 px-12 py-5'>
      <h5 className='font-bold'>{number}</h5>
      <p>{text}</p>
    </div>
  )
}

export default Infobox
