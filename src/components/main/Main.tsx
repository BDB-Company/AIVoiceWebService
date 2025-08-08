import './style.css'
import { RiArrowDropDownLine } from "react-icons/ri";
import MultiInput from "../multiInput/MultiInput.tsx";
import {type ChangeEvent, useEffect, useRef, useState} from "react";
import { RiDeleteBinLine } from "react-icons/ri";
import { BsSoundwave } from "react-icons/bs";
import { GrDownload } from "react-icons/gr";
// import { FaFileUpload } from "react-icons/fa";
import Lg from "../dropdown/select-lg/Lg.tsx"
import Person from "../dropdown/select-person/Person.tsx"
import Speed from "../dropdown/select-speed/Speed.tsx";
import Volume from "../dropdown/select-volume/Volume.tsx";
import Format from "../dropdown/select-format/Format.tsx";
import {useTypedSelector} from "../../hooks/useTypedSelector.ts";
import type {ISettingValue} from "../../models/interfaces/ISettingValue.ts";
import {DropdownItems} from "../../models/collections/DropdownItems.ts";
import {useActions} from "../../hooks/useActions.ts";
import {useGetAudioFileMutation} from "../../api/api.ts";
import {Patterns} from "../../models/collections/Patterns.ts";

const Main = () => {
    const [text, setText] = useState<string>("");
    const [countSymbol, setCountSymbol] = useState<number>(0);
    const [dataBlob, setDataBlob] = useState<Blob>();
    const [audioSrc, setAudioSrc] = useState<string | null>(null);

    const modalRef = useRef<HTMLDivElement>(null);
    const lgButtonRef = useRef<HTMLDivElement>(null);
    const personButtonRef = useRef<HTMLDivElement>(null);
    const speedButtonRef = useRef<HTMLDivElement>(null);
    const volumeButtonRef = useRef<HTMLDivElement>(null);
    const formatButtonRef = useRef<HTMLDivElement>(null);
    const audioPlayerRef = useRef<HTMLAudioElement>(null);

    const {audioSet, dropdown, error, changeParameters} = useTypedSelector((state) => state);
    const {toggleDropdown, setError, updateText, setLoading, setChange, setChangeFormat} = useActions()
    const [getAudioFile] = useGetAudioFileMutation()



    const handleDownloadFile = async () => {
        try{
            if(dataBlob){
                let rData: Blob = dataBlob;

                if(changeParameters.changeFormat){
                    setLoading(true);
                    const {data:blob} = await getAudioFile(audioSet);
                    setDataBlob(blob);
                    setChangeFormat(false);
                    setLoading(false);
                    if(blob)rData = blob
                }
                const url = URL.createObjectURL(rData);
                const a = document.createElement('a');
                a.href = url;
                a.download = `audio-${Date.now()}.${audioSet.format}`;
                document.body.appendChild(a);
                a.click();
                setTimeout(() =>{
                    a.remove();
                    URL.revokeObjectURL(url);
                }, 100);
            }
        }
        catch(e){
            console.log(e)
        }
    }

    const onSubstitute = async () => {
        if (text == '') {
            setError('Введите текст для озвучки')
            return
        }
        setError('')

        if(changeParameters.change){
            try{
                audioPlayerRef?.current?.pause()
                setLoading(true);
                const {data:blob} = await getAudioFile(audioSet);
                setDataBlob(blob);
                setChangeFormat(false);
                if(blob){
                    const audioUrl = URL.createObjectURL(blob);
                    setAudioSrc(audioUrl);
                    setChange(false);
                }
                setLoading(false);
            }
            catch(e){
                console.log(e)
            }
        }
    }

    const onChange = (e:ChangeEvent<HTMLTextAreaElement>) => {
        if(text.length === 2501)
            return;
        setChange(true);
        const inputValue = e.target.value;
        const language = audioSet.language as keyof typeof Patterns;

        if (inputValue === '') {
            updateText('');
            setText('');
            setCountSymbol(0);
            return;
        }
        const isPaste = (e.nativeEvent as InputEvent).inputType === 'insertFromPaste';

        if (isPaste) {
            let filteredText = '';
            let firstCharValid = false;
            const isLetterOrDigit = language === 'ru'
                ? /[а-яА-ЯёЁ0-9]/
                : /[a-zA-Z0-9]/;
            const allowedSymbols = /[\s\-.,!?;:()"]/; // Разрешенные пробелы и знаки

            if (inputValue.length > 0) {
                firstCharValid = isLetterOrDigit.test(inputValue[0]);
            }

            if (!firstCharValid && inputValue.length > 0) {
                setText(prev => prev);
                return;
            }

            for (const char of inputValue) {
                if (isLetterOrDigit.test(char)) {
                    filteredText += char;
                }
                else if (filteredText.length > 0 && allowedSymbols.test(char)) {
                    filteredText += char;
                }
            }
            updateText(filteredText);
            setText(filteredText);
            setCountSymbol(filteredText.length);
        }
        else if (Patterns[language].test(inputValue)) {
            updateText(inputValue);
            setText(inputValue);
            setCountSymbol(inputValue.length);
        }
    };

    const onClear = () => {
        setText("");
        setCountSymbol(0);
        setChange(false);
    }

    useEffect(() => {
        if(countSymbol > 2000)
        {
            const trimmedText = text.slice(0, 2000);
            setText(trimmedText);
            updateText(trimmedText);
            setCountSymbol(2000);
        }
    }, [countSymbol]);

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
                        <p className="title">Голосовая лаборатория</p>
                        <p className="text">Озвучивай текст с помощью ИИ (искуственный интелект)</p>
                    </div>
                    <div className="voice-container">
                        <div className="voice-settings">
                            <div className="left-settings">
                                <div className="wrap-select">
                                    <div className="lg-set" ref={lgButtonRef} onClick={() => toggleDropdown(1)}
                                         style={{border: dropdown.activeId === 1 ? '1px solid #039BE5' : undefined}}>
                                        <div className="icon-s">
                                            <img src={DropdownItems.Lg.find((s:ISettingValue) => s.value === audioSet.language)?.iconSrc} alt=""/>
                                        </div>
                                        <p className="name-s">{DropdownItems.Lg.find((s:ISettingValue) => s.value === audioSet.language)?.name}</p>
                                        <div className="btn-s">
                                            <RiArrowDropDownLine
                                                size='40px'
                                                className="btn-s-R"
                                                style={{ transform: dropdown.activeId === 1 ? 'rotate(180deg)': undefined}}
                                            />
                                        </div>
                                    </div>
                                    {dropdown.activeId === 1 && <Lg onClear={onClear} ref={modalRef as React.RefObject<HTMLDivElement>} />}
                                </div>
                                <div className="wrap-select">
                                    <div className="lg-set" ref={personButtonRef} onClick={() => toggleDropdown(2)}
                                         style={{border: dropdown.activeId === 2 ? '1px solid #039BE5' : undefined}}>
                                        <div className="icon-s">
                                            <img src={DropdownItems.Person.find((s:ISettingValue) => s.value === audioSet.gender)?.iconSrc} alt=""/>
                                        </div>
                                        <p className="name-s" style={{paddingRight:'10px'}}>{DropdownItems.Person.find((s:ISettingValue) => s.value === audioSet.gender)?.name}</p>
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
                                         style={{border: dropdown.activeId === 4 ? '1px solid #039BE5' : undefined, width:'237px', gap:'0px'}}>
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
                                    {/*<button className="load-file">*/}
                                    {/*    <div className="icon-btn-load">*/}
                                    {/*        <FaFileUpload size='23px' color='#039BE5'/>*/}
                                    {/*    </div>*/}
                                    {/*    <div className="text-btn-load">Загрузить</div>*/}
                                    {/*</button>*/}
                                    <RiDeleteBinLine size='25px' className="btn-clear" color='#039BE5' onClick={onClear}/>
                                </div>
                            </div>
                            <div className="count-symbol">
                                <p className="count">Кол-во символов: {countSymbol}</p>
                            </div>
                            <div className="error-line">
                                <p className="error">{error.error}</p>
                            </div>
                            <div className="voice-panel">
                                {audioSrc && (
                                    <audio
                                        ref={audioPlayerRef}
                                        controls
                                        src={audioSrc}
                                        autoPlay
                                        className='audioPlayer'
                                    />
                                )}
                            </div>
                        </div>
                        <div className="voice-actions">
                            <button className="btn-sub" onClick={() => onSubstitute()}>
                                <div className="icon-btn-sub">
                                    <BsSoundwave color='white' size='35px'/>
                                </div>
                                <div className="text-btn-sub">Озвучить</div>
                            </button>
                            <div className="wrap-btn-save">
                                <button className="btn-sub" style={{paddingRight:'20px', width:'210px'}} onClick={() => handleDownloadFile()} disabled={!dataBlob}>
                                    <div className="icon-btn-sub">
                                        <GrDownload size='30px' color='white'/>
                                    </div>
                                    <div className="text-btn-sub" >Сохранить</div>
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
