import {Header} from "./components/header/Header.tsx";
import {Main} from "./components/main/Main.tsx";
import {Footer} from "./components/footer/Footer.tsx";
import './App.css'
import LoadAudio from "./components/modals-window/LoadAudio.tsx";
import {useTypedSelector} from "./hooks/useTypedSelector.ts";
import Info from "./components/modals-window/Info.tsx";

function App() {
    const {loading} = useTypedSelector((state) => state);

    return (
    <>
        <div className="main-container">
          {loading.load && <LoadAudio/>}
          {loading.isOpenInfo && <Info/>}
          <Header />
          <Main />
          <Footer />
        </div>
    </>
    )
}

export default App
