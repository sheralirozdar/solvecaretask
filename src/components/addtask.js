import React, { useState ,useEffect} from 'react';
import { useDispatch ,useSelector} from 'react-redux';
import { addTask ,fetchTask,updateTask} from '../actions/tasks';
import './task.css'; 
import { useNavigate, useParams } from 'react-router-dom';

const initialState = {
    name:"",
    description:"",
    priority:"",
    dueDate:"",
    completed: false
  };
const AddTaskForm = () => {
    const dispatch = useDispatch();
    const {id} =useParams()
    const navigate = useNavigate();

    const [formData, setFormData] = useState(initialState);
    const [message, setMessage] = useState("Task Updated Please check in list");


    const {
        name,
         description,
         priority,
         dueDate,
         completed
     
    } = formData;
   

    useEffect(() => {
        if (id) {
            dispatch(fetchTask(id));
            setMessage('Task Updated.Please check in the list.');
            setTimeout(() => {
                setMessage('');
            }, 4000); 
        } else {
            setFormData(initialState);
        }
    }, [dispatch, id]);

    const task = useSelector((state) => state.tasks.task);

    useEffect(() => {
        if (task) {
            setFormData(task);
        }
    }, [task]);

   
const clearState= () =>{
    setFormData(initialState)
}
  const onChangeData = e =>
  setFormData({ ...formData, [e.target.name]: e.target.value });


     
    
    

    const handleAddTask = (event) => {
        event.preventDefault();
       
        
        if(id){
            dispatch(updateTask(id,formData));
            
        }
       else{
        dispatch(addTask(formData));
       }
       clearState()
       navigate("/")
    };

    return (
        <div className="add-task-form-container">
         {message && <div className="message">{message}</div>}

            <input
                className="add-task-input"
                type="text"
                placeholder="Task Name"
                value={name}
                name='name'
                onChange={onChangeData}
                  />
            <textarea
                className="add-task-input"
                placeholder="Task Description"
                value={description}
                name='description'
                onChange={onChangeData}            />
            <input
                className="add-task-input"
                type="text"
                placeholder="Priority"
                value={priority}
                name='priority'
                onChange={onChangeData}   
            />
            <input
                className="add-task-input"
                type="date"
                value={dueDate}
                name='dueDate'
                onChange={onChangeData}   
            />
            <button className="add-task-button" onClick={handleAddTask}>
                    Submit
                </button>
        </div>
    );
};

export default AddTaskForm;
