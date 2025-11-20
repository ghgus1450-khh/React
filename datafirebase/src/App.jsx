import { BrowserRouter as Router , Routes, Route, Link } from "react-router-dom"
import TodoPage from "./page/TodoPage"
import SignUp from "./page/SignUp"
import SignIn from "./page/SignIn"
import AuthStatus from "./component/AuthStatus"
import ProductPage from "./component/ProductPaga"

function App() {
  
  return (
    <div>
      <Router>
      <AuthStatus />

        <Routes>
          <Route path="/" element={ 
            <ProductPage>
              <TodoPage />
            </ProductPage>
        
        } />
          <Route path="/signUp" element={  <SignUp /> } />
          <Route path="/signIn" element={ <SignIn />  } />
        </Routes>
      </Router>
    </div>
  )
}

export default App



/* 
  인증, 인가

  인증 : 당신은 누구냐! 를 확인하는 과정 - 로그인
  인가 : 권한부여 어디까지 할 수 있니?

  파이어베이스에서는 인증을 해줄 수 있다.
  로그인 성공하면 성공했다라는 값을 준다 그것을 토큰이라고 한다
  새로고침해도 토큰만 존재하면 로그인 상태 유지가 가능하다.

  

*/
