
import styles from './Input.module.css'


interface PropsIputed{
      placeholder: string;
      name:string;
}


export function Input({placeholder,name}:PropsIputed){
      return(
        <input placeholder={placeholder} name={name} className={styles.inputStyles}/>
      )
}