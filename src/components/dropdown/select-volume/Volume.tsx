import type {IDropdownProps} from "../../../models/interfaces/IDropdownProps.ts";
import {DropdownItems} from "../../../models/collections/DropdownItems.ts";

const Volume = ({ref}:IDropdownProps) => {
    return (
        <>
            <div className="wrap-select-lg-s" ref={ref}>
                <div className="line-select"></div>
                <ul className="list-lg">
                    {DropdownItems.Volume.name.map((item) => (
                        <li key={item} className="list-lg-item">
                            <div className="name-item" style={{paddingLeft:'10px'}}>{item} dB</div>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}
export default Volume;