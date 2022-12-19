import { ReactNode } from "react";

export interface INavigation {
    id: string;
    title?: string;
    subtitle?: string;
    type:
        | 'basic'
        | 'group';
    path: string;
    icon?: string;
    badge?: {
        title?: string;
        classes?: string;
    };
    children?: INavigation[];
}