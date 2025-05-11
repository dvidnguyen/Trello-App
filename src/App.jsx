import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { AccessAlarm, ThreeDRotation } from '@mui/icons-material';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <AccessAlarm />
      <ThreeDRotation/>
    </>
  )
}

export default App
