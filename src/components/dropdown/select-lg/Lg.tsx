import "./style.css"
import type {IDropdownProps} from "../../../models/interfaces/IDropdownProps.ts";
import {DropdownItems} from '../../../models/collections/DropdownItems.ts';
import {useActions} from "../../../hooks/useActions.ts";

const Lg = ({ref}:IDropdownProps) => {

    const {updateLg, toggleDropdown} = useActions()

    return (
        <>
            <div className="wrap-select-lg-s" ref={ref}>
                <div className="line-select"></div>
                <ul className="list-lg">
                    {DropdownItems.Lg.map((item) => (
                        <li key={item.name} className="list-lg-item" onClick={() => {updateLg(item.name);toggleDropdown(0)}}>
                            <div className="icon-item">
                                <img src={item.iconSrc} alt=""/>
                            </div>
                            <div className="name-item">{item.name}</div>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}
export default Lg;