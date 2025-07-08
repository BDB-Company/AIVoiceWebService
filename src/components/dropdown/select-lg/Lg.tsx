import "./style.css"
import type {IDropdownProps} from "../../../models/interfaces/IDropdownProps.ts";
import {DropdownItems} from '../../../models/collections/DropdownItems.ts';

const Lg = ({ref}:IDropdownProps) => {

    return (
        <>
            <div className="wrap-select-lg-s" ref={ref}>
                <div className="line-select"></div>
                <ul className="list-lg">
                    {DropdownItems.Lg.name.map((item,index) => (
                        <li key={item} className="list-lg-item">
                            <div className="icon-item">
                                <img src={DropdownItems.Lg.iconSrc[index]} alt=""/>
                            </div>
                            <div className="name-item">{item}</div>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}
export default Lg;