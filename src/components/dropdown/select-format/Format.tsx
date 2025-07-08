import type {IDropdownProps} from "../../../models/interfaces/IDropdownProps.ts";
import {DropdownItems} from "../../../models/collections/DropdownItems.ts";

const Format = ({ref}:IDropdownProps) => {
    return (
        <>
            <div className="wrap-select-lg-s" style={{maxWidth:'100px'}} ref={ref}>
                <div className="line-select"></div>
                <ul className="list-lg">
                    {DropdownItems.Format.name.map((item) => (
                        <li key={item} className="list-lg-item" style={{maxWidth:'100px'}} >
                            <div className="name-item" style={{paddingLeft:'5px'}}>{item}</div>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}
export default Format;