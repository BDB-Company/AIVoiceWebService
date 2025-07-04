import './style.css'
import { RiArrowDropDownLine } from "react-icons/ri";

const Header = () => {
        return (
            <>
                <div className="header">
                    <div className="wrap-header">
                        <div className="wrap-logo">
                            <a href="" className="logo-link">
                                <img src="/Logo.png" alt=""/>
                            </a>
                        </div>
                        <div className="select-lg">
                            <div className="wrap-select-lg">
                                <div className="img-lg">
                                    <img src="/Flag_of_Russia.svg.png" alt=""/>
                                </div>
                                <p className="name-lg">Русский</p>
                                <div className="select-lg-bt">
                                    <RiArrowDropDownLine size='30x' className="seleclt-icons" />
                                </div>
                            </div>
                            {/*<div className="window-choice">*/}
                            {/*    <div className="wrap-select-lg-c">*/}
                            {/*        <div className="img-lg">*/}
                            {/*            <img src="/Flag_of_Russia.svg.png" alt=""/>*/}
                            {/*        </div>*/}
                            {/*        <p className="name-lg-c">Русский</p>*/}
                            {/*    </div>*/}
                            {/*    <div className="wrap-select-lg-c">*/}
                            {/*        <div className="img-lg">*/}
                            {/*            <img src="/Flag_of_England.svg" alt=""/>*/}
                            {/*        </div>*/}
                            {/*        <p className="name-lg-c">Английский</p>*/}
                            {/*    </div>*/}
                            {/*</div>*/}
                        </div>
                    </div>
                </div>
            </>
        )
}

export { Header }
