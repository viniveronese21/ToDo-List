import { Circle, CheckCircle,Trash } from "@phosphor-icons/react";
import { IconButton } from "../Button/Button";

import styles from "./Task.module.css"

interface taskProps {
  item: {
    id: number
    text: string;
    isComplete: boolean;
  }
  remove: (id: number) => void;
  completeTask: (id: number) => void;
}

export function Task({item, remove, completeTask}: taskProps) {
  
  function handleDeleteTask() {
    remove(item.id)
  }

  return (
    <div className={styles.container} >

      <IconButton onClick={()=> completeTask(item.id)} type="confirm">
        {item.isComplete === false? <Circle size={24} /> : <CheckCircle size={24} weight="fill" className={styles.completedTask}/> }
      </IconButton>
    
      <span className={item.isComplete === true? styles.CompleteTask : ''}>{item.text}</span>
      
      <IconButton type="trash"  onClick={handleDeleteTask} >
        <Trash size={24} />
      </IconButton>
    </div> 
  )
}