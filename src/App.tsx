import {Header} from "./components/header/Header.tsx";
import {Main} from "./components/main/Main.tsx";
import {Footer} from "./components/footer/Footer.tsx";
import './App.css'

function App() {

  return (
    <>
      <div className="main-container">
          <Header />
          <Main />
          <Footer />
      </div>
    </>
  )
}

export default App
