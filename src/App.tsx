// import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Navbar from "./components/Navabar"
import {useState} from 'react'
import { HashRouter, Route, Routes} from 'react-router-dom'
import routes from './config/routes'
import { Auth0Provider } from '@auth0/auth0-react'
import { auth0Config } from './config/auth0.config'


function App() {
  const [isVisible, setIsVisible] = useState(false)

  const handleOpen = () => {
    setIsVisible(true)
  }
  const handleClose = () => {
    setIsVisible(false)
  }



  return (
<Auth0Provider
  domain={auth0Config.domain}
  clientId={auth0Config.clientId}
  authorizationParams={{
    redirect_uri: window.location.origin
  }}
>
  
      <HashRouter>
        <div  onMouseOver= {handleClose}>
  
          <Navbar
            open = {isVisible}
            onClose = {handleClose}
            onOpen = {handleOpen}
          />
          <div className ='bg-indigo-300 overflow-y-auto pb-8 h-screen'>
            
          <Routes>
  
                  { routes.map((route, index) => (
                  <Route
                    key = {index}
                    path = {route.path}
                    element = {<route.component/>}
                    />
                      ))}
          </Routes>
          </div>
  
        </div>
      </HashRouter>
</Auth0Provider>
  )
}

export default App
