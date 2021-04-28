import "./App.css"
import Header from "./components/Header/Header"

import Main from "./components/Main/Main"

const App = ({ loading }) => {
  return (
    <>
      {loading && "загрузка..."}
      <Header />
      <Main />
    </>
  )
}

export default App
