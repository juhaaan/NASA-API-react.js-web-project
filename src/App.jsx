import SideBar from './components/SideBar/SideBar'
import Main from './components/Main/Main'
import Footer from './components/Footer/Footer'
import { useState } from 'react'

function App() {
  const [showModal,setShowModal] = useState(false)


  return (
    <>
    <Main></Main>
    {showModal && <SideBar></SideBar>}
    <Footer></Footer>
    </>
  )
}

export default App
