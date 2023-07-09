import {PlusCircle} from 'phosphor-react'
import styles from './Button.module.css'


interface PropsButton {
      label: string,
      type?: "button" | "submit" | "reset" 
}

export function Button({label,type, ...props}:PropsButton){
      return(
        <button type={type} className={styles.buttonStyle} {...props}>
          {label}
          <PlusCircle/>
        </button>
      )
}