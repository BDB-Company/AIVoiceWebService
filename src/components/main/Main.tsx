import './style.css'
import { RiArrowDropDownLine } from "react-icons/ri";

const Main = () => {

    return (
        <>
            <div className="main">
                <div className="wrap-main">
                    <div className="title-main">
                        <p className="title">AIVoice</p>
                        <p className="text">Озвучивай текст с помощью ИИ (искуственный интелект)</p>
                    </div>
                    <div className="voice-container">
                        <div className="voice-settings">
                            <div className="left-settings">
                                <div className="lg-set">
                                    <div className="icon-s">
                                        <img src="/Flag_of_Russia.svg.png" alt=""/>
                                    </div>
                                    <p className="name-s">Русский</p>
                                    <div className="btn-s">
                                        <RiArrowDropDownLine size='40px' className="btn-s-R"/>
                                    </div>
                                </div>
                                <div className="lg-set">
                                    <div className="icon-s">
                                        <img src="/user.png" alt=""/>
                                    </div>
                                    <p className="name-s" style={{paddingRight:'10px'}}>Айдар</p>
                                    <div className="btn-s">
                                        <RiArrowDropDownLine size='40px' className="btn-s-R"/>
                                    </div>
                                </div>
                            </div>
                            <div className="right-settings">
                                <div className="speed-set">
                                    <p className="name-s" style={{paddingLeft:'20px'}}>Скорость</p>
                                    <div className="btn-s">
                                        <RiArrowDropDownLine size='40px' className="btn-s-R"/>
                                    </div>
                                </div>
                                <div className="speed-set">
                                    <p className="name-s" style={{paddingLeft:'20px'}}>Громскость</p>
                                    <div className="btn-s">
                                        <RiArrowDropDownLine size='40px' className="btn-s-R"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="text-wrap">
                            <div className="textbox">
                                <input type="text" className="input-text"/>
                                <div className="clear-input"></div>
                            </div>
                            <div className="count-symbol">
                                <p className="count">Кол-во символов: 200</p>
                            </div>
                        </div>
                        <div className="voice-actions"></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export { Main }
