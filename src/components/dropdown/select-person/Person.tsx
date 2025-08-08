import type {IDropdownProps} from "../../../models/interfaces/IDropdownProps.ts";
import {DropdownItems} from "../../../models/collections/DropdownItems.ts";
import {useActions} from "../../../hooks/useActions.ts";

const Person = ({ref}:IDropdownProps) => {

    const {updatePerson, toggleDropdown, setChange} = useActions()

    return (
        <>
            <div className="wrap-select-lg-s" ref={ref}>
                <div className="line-select" style={{marginTop:'8px'}}></div>
                <ul className="list-lg">
                    {DropdownItems.Person.map((item) => (
                        <li key={item.name} className="list-lg-item" style={{paddingLeft:'14px'}} onClick={() => {updatePerson(item.value);toggleDropdown(0);setChange(true)}}>
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
export default Person;