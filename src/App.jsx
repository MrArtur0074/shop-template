import './App.css'
import router from './app/index.jsx'
import {RouterProvider} from 'react-router-dom'
import Modal from './components/Modal'

function App() {
  return (
    <div className="App">
      <RouterProvider
        router={router}
      />
    </div>
  )
}

export default App
