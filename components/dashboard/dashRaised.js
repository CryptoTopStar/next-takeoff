import RaisedItem from "./raisedItem"
import Progressbar from './../progressbar';

const DashRaised = () => {
  return (
    <div className='bg-b-gray p-8 rounded'>
      <p className='font-medium text-b-yellow mb-8'>Information</p>
      <div className='grid md:grid-cols-3 grid-cols-1 gap-8 divide-y-1 divide-yellow-500'>
        <RaisedItem
          info='Total Supply'
          number='500,000,000 MNR'
          img='/monner.svg'
        />
        <RaisedItem
          info='Presale Rate'
          number='100 / BNB '
          img='/bsc-yellow.svg'
        />
        <RaisedItem info='Soft Cap' number='10 BNB' img='/bsc-yellow.svg' />
        <RaisedItem
          info='For Presale'
          number='100,000,000 MNR'
          img='/monner.svg'
        />
        <RaisedItem info='Governance rate' number='21%' />
        <RaisedItem info='Hard Cap' number='20 BNB' img='/bsc-yellow.svg' />
        <RaisedItem
          info='For Liquidity'
          number='500,000,000 MNR'
          img='/monner.svg'
        />
        <RaisedItem
          info='Min / Max'
          number='0.5 / 10 BNB'
          img='/bsc-yellow.svg'
        />
        <RaisedItem info='Raised' number='60 / 500 BNB' img='/bsc-yellow.svg' />
        <RaisedItem
          info='Release Date'
          number='28.07.2021 18:00'
        />
        <RaisedItem
          info='End Date'
          number='28.10.2021 10:00'
        />
        <div className=''>
          <p className='font-medium text-b-yellow mb-2'>Total Raised:</p>
          <Progressbar percent='70%' color='blue' />
        </div>
      </div>
    </div>
  )
}

export default DashRaised
