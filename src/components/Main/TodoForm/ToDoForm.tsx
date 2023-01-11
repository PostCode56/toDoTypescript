import React, {FC, useEffect, useState} from 'react';
import {ItodoState} from "../../../types/types";
import {
    Todo_section,
    Todo_container,
    Todo_form,
    Styled_input,
    Styled_button, Title_app,
} from "./ToDoForm.styled";
import TaskList from "./TaskList/TaskList";

const ToDoForm: FC = () => {
    const [todos, setTodos] = useState<ItodoState[]>([]);
    const [inputValue, setInputValue] = useState("")
    const newToDO = () => {
        if (inputValue) {
            setTodos([...todos, {
                id: Date.now(),
                title: inputValue,
                completed: false,
            }])
            setInputValue("");
        }
    }
    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos))
    }, [])
    const removeToDO = (id: number): void => {
        setTodos(todos.filter(todo => todo.id !== id))
    }
    const toggleToDO = (id: number): void => {
        setTodos(todos.map(todo => {
            if (todo.id !== id) return todo;
            return {
                ...todo,
                completed: !todo.completed
            }
        }))
    }
    return (
        <Todo_section>
            <Todo_container>
                <Todo_form>
                    <Title_app>Напиши что угодно</Title_app>
                    <Styled_input
                        value={inputValue}
                        type="text"
                        onChange={(e) => setInputValue(e.target.value)}/>
                    <Styled_button onClick={newToDO}>Добавить</Styled_button>
                </Todo_form>
                <TaskList items={todos} removeToDo={removeToDO} toggleToDO={toggleToDO}/>
            </Todo_container>
        </Todo_section>
    );
};
export default ToDoForm;