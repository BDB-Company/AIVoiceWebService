import type {IDropdownProps} from "../../../models/interfaces/IDropdownProps.ts";
import {DropdownItems} from "../../../models/collections/DropdownItems.ts";
import {useActions} from "../../../hooks/useActions.ts";

const Format = ({ref}:IDropdownProps) => {

    const {updateFormat, toggleDropdown} = useActions()

    return (
        <>
            <div className="wrap-select-lg-s" style={{maxWidth:'100px'}} ref={ref}>
                <div className="line-select"></div>
                <ul className="list-lg">
                    {DropdownItems.Format.map((item) => (
                        <li key={item.name} className="list-lg-item" style={{maxWidth:'100px'}} onClick={() => {updateFormat(item.name);toggleDropdown(0)}}>
                            <div className="name-item" style={{paddingLeft:'5px'}}>{item.name}</div>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}
export default Format;