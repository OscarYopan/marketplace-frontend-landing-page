import { Banner } from './components/Banner/Banner'
import { Departments } from './components/Departments/Departments'
import { Footer } from './components/Footer/Footer'
import { Head } from './components/Head/Head'
import { NavMenu } from './components/NavMenu/NavMenu'
import { Products } from './components/Products/Products'

function App() {

  return (
    <div className='app'>
      <Head />
      <NavMenu />
      <Banner/>
      <Products />
      <Departments />
      <Footer />
    </div>
  )
}

export default App
