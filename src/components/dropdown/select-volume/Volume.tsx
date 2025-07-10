import type {IDropdownProps} from "../../../models/interfaces/IDropdownProps.ts";
import {DropdownItems} from "../../../models/collections/DropdownItems.ts";
import {useActions} from "../../../hooks/useActions.ts";

const Volume = ({ref}:IDropdownProps) => {

    const {updateVolume, toggleDropdown} = useActions()

    return (
        <>
            <div className="wrap-select-lg-s" ref={ref} style={{width:'237px'}}>
                <div className="line-select"></div>
                <ul className="list-lg">
                    {DropdownItems.Volume.map((item) => (
                        <li key={item.name} className="list-lg-item" onClick={() => {updateVolume(item.name);toggleDropdown(0)}} style={{width:'237px'}}>
                            <div className="name-item" style={{paddingLeft:'12px'}}>{item.name} dB</div>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}
export default Volume;