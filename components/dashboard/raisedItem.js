const RaisedItem = ({info, number, img}) => {
  return (
        <div className='flex justify-between items-end border-b border-b-yellow pb-2'>
          <p>{info}</p>
          <p className='ml-auto mr-2'>{number}</p>
         {img && <img src={img} alt='monner' width='20' />}
        </div>
  )
}

export default RaisedItem
