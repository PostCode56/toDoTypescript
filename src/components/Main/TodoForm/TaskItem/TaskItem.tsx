import React, {FC} from 'react';
import {ItodoState} from "../../../../types/types";
import {Close_button, Task_items, Task_todo, Task_title, Styled_checked} from "./TaskItem.styled";

interface IToDOItem extends ItodoState {
    removeToDo: (id: number) => void;
    toggleToDO: (id: number) => void;
}

const TaskItem: FC<IToDOItem> = (props) => {
    const {id, title, completed, removeToDo, toggleToDO} = props;
    return (
        <Task_todo>
            <Task_items>
                <Styled_checked type="checkbox" checked={completed} onChange={() => toggleToDO(id)}/>
                <Task_title
                    onClick={() => toggleToDO(id)}
                    style={{
                        textDecoration: completed
                            ? "line-through"
                            : "none",
                        color: completed
                            ? "crimson"
                            : "#61dafb"
                    }}>
                    {title}</Task_title>
                <Close_button onClick={() => removeToDo(id)}>X</Close_button>
            </Task_items>
        </Task_todo>
    );
};
export default TaskItem;