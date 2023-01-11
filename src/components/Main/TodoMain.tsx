import React, {FC} from 'react';
import {Main_container, Main_Section} from "./ToDOMain.styled";
import ToDoForm from "./TodoForm/ToDoForm";

const TodoMain:FC = () => {
    return (
        <Main_Section>
            <Main_container>
                <ToDoForm/>
            </Main_container>
        </Main_Section>
    );
};

export default TodoMain;