import './style.css'
import { RiArrowDropDownLine } from "react-icons/ri";
import MultiInput from "../multiInput/MultiInput.tsx";
import {type ChangeEvent, useEffect, useRef, useState} from "react";
import { RiDeleteBinLine } from "react-icons/ri";
import Lg from "../dropdown/select-lg/Lg.tsx"
import Person from "../dropdown/select-person/Person.tsx"
import Speed from "../dropdown/select-speed/Speed.tsx";
import Volume from "../dropdown/select-volume/Volume.tsx";
import Format from "../dropdown/select-format/Format.tsx";

const Main = () => {

    const [text, setText] = useState<string>("");
    const [countSymbol, setCountSymbol] = useState<number>(0);
    const [selected, setSelected] = useState<number>(0);
    const modalRef = useRef<HTMLDivElement>(null);
    const lgButtonRef = useRef<HTMLDivElement>(null);
    const personButtonRef = useRef<HTMLDivElement>(null);
    const speedButtonRef = useRef<HTMLDivElement>(null);
    const volumeButtonRef = useRef<HTMLDivElement>(null);
    const formatButtonRef = useRef<HTMLDivElement>(null);
    const onChange = (e:ChangeEvent<HTMLTextAreaElement>) => {
        setText(e.target.value);
        setCountSymbol(e.target.value.length);
    };

    const onClear = () => {
        setText("");
        setCountSymbol(0);
    }

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            const activeButtonRef =
                selected === 1 ? lgButtonRef:
                selected === 2 ? personButtonRef:
                selected === 3 ? speedButtonRef:
                selected === 4 ? volumeButtonRef:
                selected === 5 ? formatButtonRef: null;
            if (
                modalRef.current &&
                !modalRef.current.contains(event.target as Node)
                && activeButtonRef?.current &&
                !activeButtonRef.current.contains(event.target as Node)
            ) {
                setSelected(0)
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };

    }, [selected]);

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
                                <div className="wrap-select">
                                    <div className="lg-set" ref={lgButtonRef} onClick={()=> selected === 1 ? setSelected(0): setSelected(1)}
                                         style={{border: selected === 1 ? '1px solid #039BE5' : undefined}}>
                                        <div className="icon-s">
                                            <img src="/Flag_of_Russia.svg.png" alt=""/>
                                        </div>
                                        <p className="name-s">Русский</p>
                                        <div className="btn-s">
                                            <RiArrowDropDownLine
                                                size='40px'
                                                className="btn-s-R"
                                                style={{ transform: selected === 1 ? 'rotate(180deg)': undefined}}
                                            />
                                        </div>
                                    </div>
                                    {selected === 1 && <Lg ref={modalRef as React.RefObject<HTMLDivElement>} />}
                                </div>
                                <div className="wrap-select">
                                    <div className="lg-set" ref={personButtonRef} onClick={()=> selected === 2 ? setSelected(0): setSelected(2)}
                                         style={{border: selected === 2 ? '1px solid #039BE5' : undefined}}>
                                        <div className="icon-s">
                                            <img src="/user_men.png" alt=""/>
                                        </div>
                                        <p className="name-s" style={{paddingRight:'10px'}}>Айдар</p>
                                        <div className="btn-s">
                                            <RiArrowDropDownLine
                                                size='40px'
                                                className="btn-s-R"
                                                style={{ transform: selected === 2 ? 'rotate(180deg)': undefined}}
                                            />
                                        </div>
                                    </div>
                                    {selected === 2 && <Person ref={modalRef as React.RefObject<HTMLDivElement>} />}
                                </div>
                            </div>
                            <div className="right-settings">
                                <div className="wrap-select">
                                    <div className="speed-set" ref={speedButtonRef} onClick={()=> selected === 3 ? setSelected(0): setSelected(3)}
                                         style={{border: selected === 3 ? '1px solid #039BE5' : undefined}}>
                                        <p className="name-s" style={{paddingLeft:'20px'}}>Скорость</p>
                                        <div className="btn-s">
                                            <RiArrowDropDownLine
                                                size='40px'
                                                className="btn-s-R"
                                                style={{ transform: selected === 3 ? 'rotate(180deg)': undefined}}
                                            />
                                        </div>
                                    </div>
                                    {selected === 3 && <Speed ref={modalRef as React.RefObject<HTMLDivElement>}/>}
                                </div>
                                <div className="wrap-select">
                                    <div className="speed-set" ref={volumeButtonRef} onClick={()=> selected === 4 ? setSelected(0): setSelected(4)}
                                         style={{border: selected === 4 ? '1px solid #039BE5' : undefined}}>
                                        <p className="name-s" style={{paddingLeft:'15px'}}>Громскость </p>
                                        <div className="btn-s">
                                            <RiArrowDropDownLine
                                                size='40px'
                                                className="btn-s-R"
                                                style={{ transform: selected === 4 ? 'rotate(180deg)': undefined}}
                                            />
                                        </div>
                                    </div>
                                    {selected === 4 && <Volume ref={modalRef as React.RefObject<HTMLDivElement>}/>}
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
                                <div className="wrap-format">
                                    <div className="format" ref={formatButtonRef} onClick={()=> selected === 5 ? setSelected(0): setSelected(5)}
                                         style={{border: selected === 5 ? '1px solid #039BE5' : undefined}}>
                                        <p className="name-format">mp3</p>
                                        <div className="btn-s2">
                                            <RiArrowDropDownLine
                                                size='35px'
                                                className="btn-s-R"
                                                style={{ transform: selected === 5 ? 'rotate(180deg)': undefined}}
                                            />
                                        </div>
                                    </div>
                                    {selected === 5 && <Format ref={modalRef as React.RefObject<HTMLDivElement>}/>}
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
