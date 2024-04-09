import { ChangeEvent } from 'react';
import styles from './Input.module.css'


interface InputProps {
    value: string;
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
  }


export function Input({value, onChange, placeholder }:InputProps){
      return (
            <input
              type="text"
              value={value}
              onChange={onChange}
              placeholder={placeholder}
              className={styles.inputStyles}
            />
          );
}