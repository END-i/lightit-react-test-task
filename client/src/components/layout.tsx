import { Outlet } from 'react-router-dom'
import Footer from './footer'
import Header from './header'

export default function Layout() {
  return (
    <main className='main'>
      <Header />
      <section className='content-layout'>
        <Outlet />
      </section>
      <Footer />
    </main>
  )
}
