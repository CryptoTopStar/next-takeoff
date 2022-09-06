const Howinfo = ({number, title, brief, img}) => {
  return (
    <div className='flex flex-col items-center justify-center text-center space-y-5'>
      <img src={img} alt='account' width='96' height='auto' />
      <p><small>{number}</small></p>
      <h5>{title}</h5>
      <p>
        {brief}
      </p>
    </div>
  )
}

export default Howinfo
