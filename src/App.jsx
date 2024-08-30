import SideBar from './components/SideBar/SideBar'
import Main from './components/Main/Main'
import Footer from './components/Footer/Footer'
import { useEffect, useState } from 'react'
import axios from 'axios'

function App() {
  const [showModal,setShowModal] = useState(false)
  const [apiData,setApiData] = useState(null)

  const handleClick = (state) => {
		if (state === true) {
			setShowModal(true)
		}
		else {
			setShowModal(false)
		}
	}

  useEffect(()=>{
    const NASA_KEY = import.meta.env.VITE_NASA_API_KEY
    const url = 'https://api.nasa.gov/planetary/apod' + `?api_key=${NASA_KEY}`
    axios.get(url).then(res=> {
      setApiData(res.data)
    }).catch(err=>{
      console.log(err)
    })
  },[])
  

  return (
    <>
    <Main data={apiData}></Main>
    {showModal && <SideBar data={apiData} handleClick={()=>handleClick(false)}></SideBar>}
    <Footer data={apiData} handleClick={() => handleClick(true)}></Footer>
    </>
  )
}

export default App
