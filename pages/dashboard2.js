import Notification from '../components/notification'
import Help from '../components/help'
import DashInfo from '../components/dashboard/dashInfo'
import InfoBar from './../components/infoBar';
import Query from './../components/dashboard2/query';

export default function Dashboard2() {
  return (
    <>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6 my-16 md:my-20'>
        <div className='flex flex-col'>
          <Query />
        </div>
        <div className='flex flex-col justify-between items-end gap-y-6'>
          <Notification text='Notice ipsum dolor sit amet consectetur adipisicing elit. Ipsam, fugiat.' />
          <DashInfo
            title='Description'
            text='As crypto designed to safely reach publicity, thus increasing its value in longterm. A safe investment for anyone.'
            info='Read More'
            link='www.takeoff.com/live-presale '
          />
        </div>
      </div>
      <div className="space-y-5">
        <InfoBar percent='25%' color='DeepPink'/>
        <InfoBar percent='50%' color='blue'/>
        <InfoBar percent='75%' color='yellow'/>
        <InfoBar percent='100%' color='green'/>
        <img src="/loadmore.svg" alt="load" className='mx-auto cursor-pointer'/>
      </div>
      <Help />
    </>
  )
}
