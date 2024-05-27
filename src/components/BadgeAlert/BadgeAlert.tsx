import { ClipboardText } from "@phosphor-icons/react";
import styles from "./BadgeAlert.module.css"

export function BadgeAlert () {
  return(
    <div className={styles.BadgeContainer}>
      <ClipboardText size={56}/>
      <h4>Você ainda não tem tarefas cadastradas</h4>
      <span>Crie tarefas e organize seus itens a fazer</span>
    </div>
  )
}