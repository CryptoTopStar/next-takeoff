import Navbar from './navbar'
import Footer from './footer'

export default function Layout(props) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-1 mx-6 sm:mx-12 md:mx-28 my-6 sm:my-12 md:my-3">{props.children}</main>

      <Footer />
    </div>
  )
}
