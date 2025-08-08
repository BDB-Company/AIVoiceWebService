import type {IPatterns} from "../interfaces/IPatterns.ts";


export const Patterns:IPatterns = {
    ru: /^(?=.*[а-яА-ЯёЁ])[а-яА-ЯёЁ0-9\s\-.,!?;:()"]+$/,
    en: /^(?=.*[a-zA-Z])[a-zA-Z0-9\s\-.,!?;:()"]+$/

} as const;
