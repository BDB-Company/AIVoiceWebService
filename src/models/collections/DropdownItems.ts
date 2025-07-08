import type {IDropdownItems} from '../interfaces/IDropdownItems';

export const DropdownItems:Record<string,IDropdownItems>  = {
    Lg:{
        name:['Русский', 'Англиский'],
        iconSrc:['/Flag_of_Russia.svg.png', 'Flag_of_England.svg'],
    },
    Person:{
        name:['Мужчина', 'Женщина'],
        iconSrc:['user_men.png', 'user_girl.png'],
    },
    Speed: {
        name:['0.5', '0.6','0.7','0.8','0.9','1','1.2','1.3','1.4','1.5','1.7','1.8','1.9','2'],
        iconSrc:'',
    },
    Volume:{
        name:['-25', '-20', '-15', '-10', '-5', '5', '10', '15', '20', '25'],
        iconSrc:'',
    },
    Format:{
        name:['mp3', 'wav'],
        iconSrc:'',
    }


} as const;
