import './style.css'
import { RiArrowDropDownLine } from "react-icons/ri";
import MultiInput from "../multiInput/MultiInput.tsx";
import {type ChangeEvent, useEffect, useRef, useState} from "react";
import { RiDeleteBinLine } from "react-icons/ri";
import { FaFileUpload } from "react-icons/fa";
import Lg from "../dropdown/select-lg/Lg.tsx"
import Person from "../dropdown/select-person/Person.tsx"
import Speed from "../dropdown/select-speed/Speed.tsx";
import Volume from "../dropdown/select-volume/Volume.tsx";
import Format from "../dropdown/select-format/Format.tsx";
import {useTypedSelector} from "../../hooks/useTypedSelector.ts";
import type {ISettingValue} from "../../models/interfaces/ISettingValue.ts";
import {DropdownItems} from "../../models/collections/DropdownItems.ts";
import {useActions} from "../../hooks/useActions.ts";

const Main = () => {

    const [text, setText] = useState<string>("");
    const [countSymbol, setCountSymbol] = useState<number>(0);

    const modalRef = useRef<HTMLDivElement>(null);
    const lgButtonRef = useRef<HTMLDivElement>(null);
    const personButtonRef = useRef<HTMLDivElement>(null);
    const speedButtonRef = useRef<HTMLDivElement>(null);
    const volumeButtonRef = useRef<HTMLDivElement>(null);
    const formatButtonRef = useRef<HTMLDivElement>(null);

    const {audioSet, dropdown, error} = useTypedSelector((state) => state);
    const {toggleDropdown, setError} = useActions()


    const onSubstitute = () => {
        if (text == '') {
            setError('Введите текст для озвучки')
            return
        }
        setError('')
    }

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
                dropdown.activeId === 1 ? lgButtonRef:
                dropdown.activeId === 2 ? personButtonRef:
                dropdown.activeId === 3 ? speedButtonRef:
                dropdown.activeId === 4 ? volumeButtonRef:
                dropdown.activeId === 5 ? formatButtonRef: null;
            if (
                modalRef.current &&
                !modalRef.current.contains(event.target as Node)
                && activeButtonRef?.current &&
                !activeButtonRef.current.contains(event.target as Node)
            ) {
                toggleDropdown(0)
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };

    }, [dropdown.activeId]);

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
                                    <div className="lg-set" ref={lgButtonRef} onClick={() => toggleDropdown(1)}
                                         style={{border: dropdown.activeId === 1 ? '1px solid #039BE5' : undefined}}>
                                        <div className="icon-s">
                                            <img src={DropdownItems.Lg.find((s:ISettingValue) => s.name === audioSet.lg)?.iconSrc} alt=""/>
                                        </div>
                                        <p className="name-s">{audioSet.lg}</p>
                                        <div className="btn-s">
                                            <RiArrowDropDownLine
                                                size='40px'
                                                className="btn-s-R"
                                                style={{ transform: dropdown.activeId === 1 ? 'rotate(180deg)': undefined}}
                                            />
                                        </div>
                                    </div>
                                    {dropdown.activeId === 1 && <Lg ref={modalRef as React.RefObject<HTMLDivElement>} />}
                                </div>
                                <div className="wrap-select">
                                    <div className="lg-set" ref={personButtonRef} onClick={() => toggleDropdown(2)}
                                         style={{border: dropdown.activeId === 2 ? '1px solid #039BE5' : undefined}}>
                                        <div className="icon-s">
                                            <img src={DropdownItems.Person.find((s:ISettingValue) => s.name === audioSet.person)?.iconSrc} alt=""/>
                                        </div>
                                        <p className="name-s" style={{paddingRight:'10px'}}>{audioSet.person}</p>
                                        <div className="btn-s">
                                            <RiArrowDropDownLine
                                                size='40px'
                                                className="btn-s-R"
                                                style={{ transform: dropdown.activeId === 2 ? 'rotate(180deg)': undefined}}
                                            />
                                        </div>
                                    </div>
                                    {dropdown.activeId === 2 && <Person ref={modalRef as React.RefObject<HTMLDivElement>} />}
                                </div>
                            </div>
                            <div className="right-settings">
                                <div className="wrap-select">
                                    <div className="speed-set" ref={speedButtonRef} onClick={() => toggleDropdown(3)}
                                         style={{border: dropdown.activeId === 3 ? '1px solid #039BE5' : undefined}}>
                                        <p className="name-s" style={{paddingLeft:'15px'}}>Скорость: {<span style={{color:'#039BE5'}}>{audioSet.speed}</span>}</p>
                                        <div className="btn-s">
                                            <RiArrowDropDownLine
                                                size='40px'
                                                className="btn-s-R"
                                                style={{ transform: dropdown.activeId === 3 ? 'rotate(180deg)': undefined}}
                                            />
                                        </div>
                                    </div>
                                    {dropdown.activeId === 3 && <Speed ref={modalRef as React.RefObject<HTMLDivElement>}/>}
                                </div>
                                <div className="wrap-select">
                                    <div className="speed-set" ref={volumeButtonRef} onClick={() => toggleDropdown(4)}
                                         style={{border: dropdown.activeId === 4 ? '1px solid #039BE5' : undefined, width:'237px'}}>
                                        <p className="name-s" style={{paddingLeft:'15px'}}>Громскость: {<span style={{color:'#039BE5'}}>{audioSet.volume} dB</span>}</p>
                                        <div className="btn-s">
                                            <RiArrowDropDownLine
                                                size='40px'
                                                className="btn-s-R"
                                                style={{ transform: dropdown.activeId === 4 ? 'rotate(180deg)': undefined}}
                                            />
                                        </div>
                                    </div>
                                    {dropdown.activeId === 4 && <Volume ref={modalRef as React.RefObject<HTMLDivElement>}/>}
                                </div>
                            </div>
                        </div>
                        <div className="text-wrap">
                            <div className="textbox">
                                <MultiInput text={text} onChange={onChange} />
                                <div className="clear-input">
                                    <button className="load-file">
                                        <div className="icon-btn-load">
                                            <FaFileUpload size='23px' color='#039BE5'/>
                                        </div>
                                        <div className="text-btn-load">Загрузить</div>
                                    </button>
                                    <RiDeleteBinLine size='25px' className="btn-clear" color='#039BE5' onClick={onClear}/>
                                </div>
                            </div>
                            <div className="count-symbol">
                                <p className="count">Кол-во символов: {countSymbol}</p>
                            </div>
                            <div className="error-line">
                                <p className="error">{error.error}</p>
                            </div>
                        </div>
                        <div className="voice-actions">
                            <button className="btn-sub" onClick={() => onSubstitute()}>
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
                                    <div className="format" ref={formatButtonRef} onClick={() => toggleDropdown(5)}
                                         style={{border: dropdown.activeId === 5 ? '1px solid #039BE5' : undefined}}>
                                        <p className="name-format">{audioSet.format}</p>
                                        <div className="btn-s2">
                                            <RiArrowDropDownLine
                                                size='35px'
                                                className="btn-s-R"
                                                style={{ transform: dropdown.activeId === 5 ? 'rotate(180deg)': undefined}}
                                            />
                                        </div>
                                    </div>
                                    {dropdown.activeId === 5 && <Format ref={modalRef as React.RefObject<HTMLDivElement>}/>}
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
