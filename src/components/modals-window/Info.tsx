import './style.css'
import {useActions} from "../../hooks/useActions.ts";
import {useEffect, useRef} from "react";



const Info = () => {

    const {setOpenModalInfo} = useActions()
    const modalRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                modalRef.current &&
                !modalRef.current.contains(event.target as Node)
            ) {
                console.log('ClickOutside');
                setOpenModalInfo(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };

    }, []);

    return (
        <>
            <div className="modal-container" >
                <div className="modal-content" ref={modalRef} style={{width:'600px', height:'350px'}}>
                    <div className="title_modal-info">О нас</div>
                    <div className="text_modal-info" style={{textAlign:'center',paddingBottom: '50px', paddingLeft:'0px'}}>Проект создан для для лиц с инвалидностью и иностранных студентов</div>
                    <div className="text_modal-info">Руководитель проекта: <b>Иванов.В.В</b></div>
                    <div className="text_modal-info">Создатели проекта: <b>Иванов.В.В и Иванов.В.В</b></div>
                </div>
            </div>
        </>
    )
}

export default Info;