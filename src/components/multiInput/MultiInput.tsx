import './style.css';
import type {IMultiInputProps} from "../../models/interfaces/IMultiInputProps.ts";

const MultiInput = ({text, onChange}: IMultiInputProps) => {

    return (
        <>
            <textarea
                className="multi-input"
                value={text}
                rows={13}
                cols={136}
                placeholder={'Введите ваш текст для озвучки'}
                onChange = {e => onChange(e)}
            />
        </>
    )
}

export default MultiInput;
