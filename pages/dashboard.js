import MoonerForm from '../components/dashboard/mooonerForm'
import Notification from '../components/notification'
import Help from '../components/help'
import DashInfo from '../components/dashboard/dashInfo'
import DashRaised from './../components/dashboard/dashRaised';

export default function Dashboard() {
  return (
    <>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6 my-16 md:my-20'>
        <div className='flex flex-col'>
          <MoonerForm />
        </div>
        <div className='flex flex-col justify-between items-end gap-y-6'>
          <Notification text='Notice ipsum dolor sit amet consectetur adipisicing elit. Ipsam, fugiat.' />
          <DashInfo
            title='Description'
            text='As crypto designed to safely reach publicity, thus increasing its value in longterm. A safe investment for anyone.'
            info='Social'
            link='https://www.mooner.com'
          />
        </div>
      </div>
      <DashRaised />
      <Help />
    </>
  )
}
