import { Trash } from "phosphor-react";
import styles from './Card.module.css'

interface PropsCard{
      content: string;
}


export function Card({content}:PropsCard){
      return(
       <div className={styles.container}>
            <input type="checkbox"/>
            <label>{content}</label>
            <Trash/>
       </div>
      )
}