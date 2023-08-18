import './App.css'
import AddTodo from './components/AddTodo';
/* import ButtonArea from './components/ButtonArea'; */
import TaskList from './components/TaskList';
import Footer from './components/Footer';
import { useEffect, useState } from 'react';

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    if(tasks.length === 0) return;
    localStorage.setItem("tasks", JSON.stringify(tasks))
  }, [tasks]);

  useEffect(() => {
    const tasks = JSON.parse(localStorage.getItem("tasks"));
    setTasks(tasks);
  }, [])

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks"));
    setTasks(storedTasks || []);
  }, []);

  const addTask = (name) => {
    setTasks(prev => {
      return [...prev, {
        name: name,
        done: false
      }];
    })
  };

  const deleteTask = (index) => {
    setTasks(prev => {
      const newTasks = [...prev];
      newTasks.splice(index, 1);
      updatedLocalStorage(newTasks);
      return newTasks;
    });
  };

  const updatedLocalStorage = (newTasks) => {
    if (newTasks.length === 0) {
      localStorage.removeItem("tasks");
    } else {
      localStorage.setItem("tasks", JSON.stringify(newTasks));
    }
  };

  const renameTask = (index, newName) => {
    setTasks(prev => {
      const newTasks = [...prev];
      newTasks[index].name = newName
      return newTasks;
    })
  }

  const updatedTaskDone = (taskIndex, newDone) => {
    setTasks(prev => {
      const newTasks = [...prev];
      newTasks[taskIndex].done = newDone;
      return newTasks;
    })
  };

  return (
    <div className="App">
      <div className='todo-wrapper'>
        <h1>#todo</h1>
        {/* <ButtonArea /> */}
        <AddTodo onAdd={addTask} />
        {tasks.map((task, i) => (
          <TaskList 
            key={i} 
            {...task} 
            onRename={newName => renameTask(i, newName)}
            onTrash={() => deleteTask(i)}
            onToggle={done => updatedTaskDone(i, done)} 
          />
        ))}
      </div>
      <Footer />
    </div>
  )
}

export default App
