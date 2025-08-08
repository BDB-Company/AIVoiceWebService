import './style.css'
import {useActions} from "../../hooks/useActions.ts";
// import { RiArrowDropDownLine } from "react-icons/ri";
const Header = () => {

    // const [isOpen, setIsOpen] = useState(false);
    // const modalRef = useRef<HTMLDivElement>(null);
    // const selectButtonRef = useRef<HTMLDivElement>(null);

    // useEffect(() => {
    //     const handleClickOutside = (event: MouseEvent) => {
    //         if (
    //             modalRef.current &&
    //             !modalRef.current.contains(event.target as Node) &&
    //             selectButtonRef.current &&
    //             !selectButtonRef.current.contains(event.target as Node)
    //         ) {
    //             setIsOpen(false);
    //         }
    //     };
    //
    //     document.addEventListener("mousedown", handleClickOutside);
    //
    // }, []);

    const {setOpenModalInfo} = useActions()
        return (
            <>
                <div className="header">
                    <div className="wrap-header">
                        <div className="wrap-logo">
                            {/*<a href="" className="logo-link">*/}
                            {/*    <img src="/LOGO.jpeg" alt=""/>*/}
                            {/*</a>*/}
                        </div>
                        <div className="wrap-but-info">
                            <button className="info" onClick={() => setOpenModalInfo(true)}>
                                <div className="text-but-info">О нас</div>
                            </button>
                        </div>
                        {/*<div className="select-lg">*/}
                        {/*    <div className="wrap-select-lg">*/}
                        {/*        <div className="img-lg">*/}
                        {/*            <img src="/Flag_of_Russia.svg.png" alt=""/>*/}
                        {/*        </div>*/}
                        {/*        <p className="name-lg">Русский</p>*/}
                        {/*        <div className="select-lg-bt" onClick={() => setIsOpen(!isOpen)} ref={selectButtonRef}>*/}
                        {/*            <RiArrowDropDownLine size='30x' className="seleclt-icons" />*/}
                        {/*        </div>*/}
                        {/*    </div>*/}
                        {/*    {isOpen && <div className="window-choice" ref={modalRef}>*/}
                        {/*        <div className="wrap-select-lg-c">*/}
                        {/*            <div className="img-lg">*/}
                        {/*                <img src="/Flag_of_Russia.svg.png" alt=""/>*/}
                        {/*            </div>*/}
                        {/*            <p className="name-lg-c">Русский</p>*/}
                        {/*        </div>*/}
                        {/*        <div className="wrap-select-lg-c">*/}
                        {/*            <div className="img-lg">*/}
                        {/*                <img src="/Flag_of_England.svg" alt=""/>*/}
                        {/*            </div>*/}
                        {/*            <p className="name-lg-c">Английский</p>*/}
                        {/*        </div>*/}
                        {/*    </div>}*/}
                        {/*</div>*/}
                    </div>
                </div>
            </>
        )
}

export { Header }
