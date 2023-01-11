import React, {FC} from 'react';
import {Todo_tasksList,} from "./TaskList.styled";
import {ItodoState} from "../../../../types/types";
import TaskItem from "../TaskItem/TaskItem";

interface ITaskProps {
    items: ItodoState[];
    removeToDo: (id: number) => void;
    toggleToDO: (id: number) => void;
}

const TaskList: FC<ITaskProps> = (props) => {
    const {items, removeToDo, toggleToDO} = props;
    return (
        <Todo_tasksList>
            {items.map(todo => (
                <TaskItem
                    removeToDo={removeToDo}
                    toggleToDO={toggleToDO}
                    {...todo}
                />)
            )}
        </Todo_tasksList>
    );
};
export default TaskList;