import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react';
import { Task } from '../Task/Task';
import { BadgeAlert } from '../BadgeAlert/BadgeAlert';

import styles from './ToDo.module.css'

interface NewTaskProps {
  id: number
  text: string
  isComplete: boolean
}

export function ToDo () {
  const [tasks, setTasks] = useState<NewTaskProps[]>([]);
  const [newTaskText, setNewTaksText] = useState('');

  const filteredTasks = tasks.filter(item => item.isComplete).length
  
  function handleCompleteTask (id: number) {
    const completedTasks = [...tasks]
    completedTasks.map(task => task.id === id ? task.isComplete = !task.isComplete : task)

    setTasks(completedTasks)
  }

  function hadnleCreateNewTask (event: FormEvent) {
    event.preventDefault();
    const newTask ={
        id: Math.floor(Math.random() * 1000),
        text: newTaskText,
        isComplete: false,
    }
    setTasks([...tasks, newTask])
    setNewTaksText('')
  }
1
  function handleRemoveTask(taskToDelete: number) {
    const deleteTask = [...tasks]
    
    const removeTaskText = deleteTask.filter(task => {
      return task.id !== taskToDelete
    })

    setTasks(removeTaskText)
  }

  function handleNewTaskTextChange(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity('');
    setNewTaksText(event.target.value);
  }

  function handleNewTextTaskInvalid (event: InvalidEvent<HTMLInputElement>) {
    event.target.setCustomValidity('Campo obrigatorio!')
  }

  const isNewTaskEmpty = newTaskText.length === 0;

  return(
   <article>
     <form onSubmit={hadnleCreateNewTask}  className={styles.formContainer}>
        <input
          type="text"
          name='task'
          value={newTaskText}
          placeholder='Adicione uma nova tarefa'
          onChange={handleNewTaskTextChange}
          onInvalid={handleNewTextTaskInvalid}
          required
        />
        <button type="submit" disabled={isNewTaskEmpty}>
          Criar
        </button>
    </form>
    
    <main> 
      <header className={styles.formHeader}>
      
        <p className={styles.totalTasks}>Tarefas criadas <span>{tasks.length}</span></p>
        <p className={styles.completedTasks}>Tarefas concluidas <span>{filteredTasks}</span></p>
      
      </header>

      <div>
        {tasks.length? tasks.map((item) => (
          <Task
            key={item.id} 
            item={item}  
            remove={handleRemoveTask}
            completeTask={handleCompleteTask}
        />
        )): <BadgeAlert />}
        
      </div>
    </main>

  </article>
  )
}