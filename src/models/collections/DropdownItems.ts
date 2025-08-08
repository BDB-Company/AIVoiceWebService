import type {IDropdownItems} from '../interfaces/IDropdownItems';

export const DropdownItems:IDropdownItems = {
    Lg:[
        {name: 'Русский', iconSrc: 'Flag_of_Russia.svg.png', value:'ru'},
        {name: 'Англиский', iconSrc: 'Flag_of_England.svg', value:'en'}
    ],
    Person:[
        {name: 'Мужчина', iconSrc: '/user_men.png', value:'male'},
        {name: 'Женщина', iconSrc: '/user_girl.png', value:'female'}
    ],
    Speed:[
        {name: '0.5',iconSrc:'', value:'0.5'},
        {name: '0.6',iconSrc:'', value:'0.6'},
        {name: '0.7',iconSrc:'', value:'0.7'},
        {name: '0.8',iconSrc:'', value:'0.8'},
        {name: '0.9',iconSrc:'', value:'0.9'},
        {name: '1',iconSrc:'', value:'1'},
        {name: '1.1',iconSrc:'', value:'1.1'},
        {name: '1.2',iconSrc:'', value:'1.2'},
        {name: '1.3',iconSrc:'', value:'1.3'},
        {name: '1.4',iconSrc:'', value:'1.4'},
        {name: '1.5',iconSrc:'', value:'1.5'},
        {name: '1.6',iconSrc:'', value:'1.6'},
        {name: '1.7',iconSrc:'', value:'1.7'},
        {name: '1.8',iconSrc:'', value:'1.8'},
        {name: '1.9',iconSrc:'', value:'1.9'},
        {name: '2',iconSrc:'', value:'2'},
    ],
    Volume:[
        {name: '-25',iconSrc:'', value:'-25'},
        {name: '-20',iconSrc:'', value:'-20'},
        {name: '-25',iconSrc:'', value:'-15'},
        {name: '-10',iconSrc:'', value:'-10'},
        {name: '-5',iconSrc:'', value:'-5'},
        {name: '0',iconSrc:'', value:'0'},
        {name: '+5',iconSrc:'', value:'+5'},
        {name: '+10',iconSrc:'', value:'+10'},
        {name: '+15',iconSrc:'', value:'+15'},
        {name: '+20',iconSrc:'', value:'+20'},
        {name: '+25',iconSrc:'', value:'+25'},
    ],
    Format:[
        {name: 'mp3', iconSrc: '', value:'mp3'},
        {name: 'wav', iconSrc: '', value:'wav'}
    ],
} as const;
