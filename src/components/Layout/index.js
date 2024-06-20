import { Outlet } from 'react-router-dom'
import TopBar from '../TopBar/'
import '../../index.scss'

const Layout = () => {
  return (
    <div className="App">
      <TopBar />
      <div className="page">

        <Outlet />
      </div>
    </div>
  )
}

export default Layout