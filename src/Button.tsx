import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

const Button = () => {
  const [count, setCount] = useState(0);
  return (
    <button onClick={() => setCount((count) => count + 1)}>
      count is {count}
    </button>
  )
}
export default Button;