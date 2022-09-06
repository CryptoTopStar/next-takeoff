import Community from "./community"
import Form from "./form"

const Support = () => {
  return (
    <section className='mt-16 md:mt-40' id='support'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-10 justify-between'>
          <Community/>
          <Form/>
      </div>
    </section>
  )
}

export default Support
