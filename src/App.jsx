import { Banner } from './components/Banner/Banner'
import { Departments } from './components/Departments/Departments'
import { Head } from './components/Head/Head'
import { NavMenu } from './components/NavMenu/NavMenu'

function App() {

  return (
    <div className='app'>
      <Head />
      <NavMenu />
      <Banner/>
      <Departments />
    </div>
  )
}

export default App
