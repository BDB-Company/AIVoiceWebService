import "./style.css"
import type {IDropdownProps} from "../../../models/interfaces/IDropdownProps.ts";
import {DropdownItems} from '../../../models/collections/DropdownItems.ts';
import {useActions} from "../../../hooks/useActions.ts";

type IChange = {
    onClear: () => void,
}

type DropdownComponentProps = IDropdownProps & IChange;

const Lg = ({ref, onClear}:DropdownComponentProps ) => {

    const {updateLg, toggleDropdown, setChange} = useActions()

    return (
        <>
            <div className="wrap-select-lg-s" ref={ref}>
                <div className="line-select"></div>
                <ul className="list-lg">
                    {DropdownItems.Lg.map((item) => (
                        <li key={item.name} className="list-lg-item" onClick={() => {updateLg(item.value); toggleDropdown(0); setChange(true);onClear()}}>
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