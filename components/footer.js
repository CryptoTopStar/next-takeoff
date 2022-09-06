export default function Footer() {
  return (
  <>
    <hr className='border-t border-t-border mt-20'/>
    <footer className='flex flex-wrap gap-x-20 gap-y-3 md:gap-y-0 justify-center items-center md:justify-between py-6 mx-6 sm:mx-12 md:mx-28'>
      <p className=' '>Copyright @ 2021 TAKEOFF LLC. - All Rights Reserved</p>
      <ul className=' flex text-center md:text-left space-x-6'>
        <li>
          <a
            href='https://design.com'
            target='_blank'
            rel='noopener noreferrer'
          >
            Terms of Service
          </a>
        </li>

        <li>
          <a
            href='https://github.com/'
            target='_blank'
            rel='noopener noreferrer'
          >
            Privacy Policy
          </a>
        </li>
        <li>
          <a
            href='https://github.com/'
            target='_blank'
            rel='noopener noreferrer'
          >
            Cookie Policy
          </a>
        </li>
      </ul>
    </footer>
    </>
  )
}
