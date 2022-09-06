import Howinfo from './howinfo'

const How = () => {
  return (
    <section className='mt-16 md:mt-40'>
      <div className='max-w-lg mx-auto space-y-5'>
        <h2 className='text-center'>How it works</h2>
        <p className='text-center'>
          Consectetur adipiscing elit duis tristique sollicitudin nibh sit amet
          commodo nulla facilisi nullam vehicula ipsum a arcu cursus vitae
          congue
        </p>
      </div>
      <div className='flex md:flex-nowrap flex-wrap gap-2 mt-10 md:mt-20'>
        <Howinfo
          img='account.svg'
          number='01'
          title='Account'
          brief='Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint. Velit officia'
        />
        <Howinfo
          img='connect.svg'
          number='02'
          title='Connect wallet'
          brief='Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint. Velit officia'
        />
        <Howinfo
          img='start.svg'
          number='03'
          title='Start trading'
          brief='Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint. Velit officia'
        />
        <Howinfo
          img='earn.svg'
          number='04'
          title='Earn money'
          brief='Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint. Velit officia'
        />
      </div>
    </section>
  )
}

export default How
