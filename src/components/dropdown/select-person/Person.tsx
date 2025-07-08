import type {IDropdownProps} from "../../../models/interfaces/IDropdownProps.ts";
import {DropdownItems} from "../../../models/collections/DropdownItems.ts";

const Person = ({ref}:IDropdownProps) => {
    return (
        <>
            <div className="wrap-select-lg-s" ref={ref}>
                <div className="line-select" style={{marginTop:'8px'}}></div>
                <ul className="list-lg">
                    {DropdownItems.Person.name.map((item,index) => (
                        <li key={item} className="list-lg-item" style={{paddingLeft:'14px'}}>
                            <div className="icon-item">
                                <img src={DropdownItems.Person.iconSrc[index]} alt=""/>
                            </div>
                            <div className="name-item">{item}</div>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}
export default Person;