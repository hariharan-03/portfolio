import Navbar from '../../components/Navbar'
import Home from '../../components/home'
import Resume from '../../components/resume'
import Work from '../../components/work'
import Contact from '../../components/contact'

export default function Page() {
  return (
    <main className="relative overflow-x-hidden">
      <Navbar />
      <Home />
      <Resume />
      <Work />
      <Contact />
    </main>
  )
}
