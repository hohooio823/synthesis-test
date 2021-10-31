import { ChangeEvent } from 'react';

export default interface InputProps {
    className?: string;
    placeholder: string;
    value?: string;
    onChange?: (event:ChangeEvent<HTMLInputElement>) => void;
}