
import UserContextProvider from './context/UsercontextProvider'
import Profile from './components/profile'
import Login from './components/login'

function App() {

  return (
    <UserContextProvider>
     <h1>Hello from Parth Pandey</h1>
     <Login/>
     <Profile/>
    </UserContextProvider>
  )
}

export default App
