import './style.css'
import { RiArrowDropDownLine } from "react-icons/ri";
import MultiInput from "../multiInput/MultiInput.tsx";
import {type ChangeEvent, useState} from "react";
import { RiDeleteBinLine } from "react-icons/ri";

const Main = () => {

    const [text, setText] = useState<string>("");
    const [countSymbol, setCountSymbol] = useState<number>(0);

    const onChange = (e:ChangeEvent<HTMLTextAreaElement>) => {
        setText(e.target.value);
        setCountSymbol(e.target.value.length);
    };

    const onClear = () => {
        setText("");
        setCountSymbol(0);
    }

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
                                <MultiInput text={text} onChange={onChange} />
                                <div className="clear-input">
                                    <RiDeleteBinLine size='25px' className="btn-clear" onClick={onClear}/>
                                </div>
                            </div>
                            <div className="count-symbol">
                                <p className="count">Кол-во символов: {countSymbol}</p>
                            </div>
                        </div>
                        <div className="voice-actions">
                            <button className="btn-sub">
                                <div className="icon-btn-sub">
                                    <img src="/Воспроизведение.svg" alt=""/>
                                </div>
                                <div className="text-btn-sub">Озвучить</div>
                            </button>
                            <div className="wrap-btn-save">
                                <button className="btn-sub" style={{paddingRight:'20px', width:'210px'}}>
                                    <div className="icon-btn-sub">
                                        <img src="/Скачать.png" alt=""/>
                                    </div>
                                    <div className="text-btn-sub">Сохранить</div>
                                </button>
                                <div className="format">
                                    <p className="name-format">mp3</p>
                                    <div className="btn-s2">
                                        <RiArrowDropDownLine size='35px' className="btn-s-R"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export { Main }
