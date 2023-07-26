import { Banner } from './components/Banner/Banner'
import { Departments } from './components/Departments/Departments'
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
    </div>
  )
}

export default App
