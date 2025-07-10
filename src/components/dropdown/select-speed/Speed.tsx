import type {IDropdownProps} from "../../../models/interfaces/IDropdownProps.ts";
import {DropdownItems} from "../../../models/collections/DropdownItems.ts";
import {useActions} from "../../../hooks/useActions.ts";

const Speed = ({ref}:IDropdownProps) => {

    const {updateSpeed, toggleDropdown} = useActions()

    return (
        <>
            <div className="wrap-select-lg-s" ref={ref}>
                <div className="line-select"></div>
                <ul className="list-lg">
                    {DropdownItems.Speed.map((item) => (
                        <li key={item.name} className="list-lg-item" onClick={() => {updateSpeed(item.name);toggleDropdown(0)}}>
                            <div className="name-item" style={{paddingLeft:'10px'}}>{item.name}</div>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}
export default Speed;