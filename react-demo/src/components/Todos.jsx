import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import getAllTodo from './services/actions/TodosAction'
import { fetchData } from './services/reducer/TodoSlice';

const Todos = () => {

    const {todo, isLoading, error} = useSelector((state) => state.todo);

    const dispatch = useDispatch();
  

useEffect(() =>{
dispatch(fetchData())
}, [])
   



    return (
        <div>
            <h1> Todo List</h1>
            { 
                isLoading && <p>Loading.....</p>
            }
            {
                error && <p>{error.message}</p>
            }
            {
                todo && todo.slice(0,10).map((todo) => {

                   return(<article key={todo.id}>

                      <h4>{todo.id}</h4>
                     <h3>{todo.title}</h3>
                     </article>
    )})  }
                    
                      
        
        </div>
    );
};

export default Todos;