import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client' 
// react-dom 파일 안에 여러개 함수 중 하나, 중괄호 사용

import './index.css'
import App from './App.jsx'
import SignIn from './page/SignIn.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {/* <SignIn /> */}
  </StrictMode>,
)
