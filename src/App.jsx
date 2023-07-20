import { Banner } from './components/Banner/Banner'
import { Data } from './components/Data/data'
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
      <Data />
    </div>
  )
}

export default App
