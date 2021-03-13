import React, {useState, Fragment} from 'react';
import { Task } from './Task';
import { TasksCollection } from "../../imports/api/TasksCollection";
//Enables the reactivity for the data
import { useTracker } from 'meteor/react-meteor-data';
import { TaskForm } from "./TaskForm";
import { LoginForm } from "./LoginForm";


export const App = () => {
  const [hideCompleted, setHideCompleted] = useState(false);
  const user = useTracker(() => Meteor.user());
  //Select the field where it's not equal to the value
  const hideCompletedFilter = { isChecked: { $ne: true } };
  const userFilter = user ? { userId: user._id } : {};

  //Track if a user is connected

  
  const logout = () => Meteor.logout();
  const { tasks, pendingTasksCount, isLoading } = useTracker(() => {
    const noDataAvailable = { tasks: [], pendingTasksCount: 0 };
    if (!Meteor.user()) {
      return noDataAvailable;
    }
    const handler = Meteor.subscribe('tasks');

    if (!handler.ready()) {
      return { ...noDataAvailable, isLoading: true };
    }

    const tasks = TasksCollection.find(
      hideCompleted ? pendingOnlyFilter : userFilter,
      {
        sort: { createdAt: -1 },
      }
    ).fetch();
    const pendingTasksCount = TasksCollection.find(pendingOnlyFilter).count();

    return { tasks, pendingTasksCount };
  });


  const pendingOnlyFilter = { ...hideCompletedFilter, ...userFilter };
  

  const toggleChecked = ({ _id, isChecked }) => {
    Meteor.call('tasks.setIsChecked', _id, !isChecked); 
  };
  
  const deleteTask = ({ _id }) => Meteor.call('tasks.remove', _id) 

  
 return(
  <div className="app">
  <header>
    <div className="app-bar">
      <div className="app-header">
        <h1>Welcome to Meteor!</h1>
      </div>
    </div>
  </header>

  <div className="main">
        {!user ? (
          <Fragment>
              <div className="user" onClick={logout}>
                
              </div>
            <TaskForm />

            <div className="filter">
              <button onClick={() => setHideCompleted(!hideCompleted)}>
                {hideCompleted ? 'Show All' : 'Hide Completed'}
              </button>
            </div>
            {isLoading && <div className="loading">loading...</div>}
            <ul className="tasks">
              {tasks.map(task => (
                <Task
                  key={task._id}
                  task={task}
                  onCheckboxClick={toggleChecked}
                  onDeleteClick={deleteTask}
                />
              ))}
            </ul>
          </Fragment>
        ) : (
          <LoginForm />
        )}
      </div>
      </div>
)};
