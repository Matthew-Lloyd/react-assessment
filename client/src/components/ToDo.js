import React, {Component} from 'react';
import {
    ListItem,
    ListItemText,
    ListItemSecondaryAction,
    IconButton,
    Button
} from '@material-ui/core';
import { Close } from '@material-ui/icons';

const ToDo = ({task, status, removeToDo, description}) => <ListItem>
    <ListItemText>{task}<IconButton onClick={removeToDo}><Close /></IconButton></ListItemText>
    {/* <p>{status.toString()}</p> */}
    <p>{description}</p>

</ListItem>;
// export const TodoListItem = ({ todo, classes, removeToDo, completeTodo, history }) => (
//     <ListItem
//         key={todo.id}
//         dense
//         button
//         onClick={() => { history.push(`/edit/${todo.id}`) }}
//         className={classes.ListItem}
//     >
//         <ListItemText
//             className={
//                 todo.completed ?
//                     classes.listItemCompleted
//                     : null
//             }
//             primary={`${todo.id} : ${todo.title}`} />
//         <ListItemSecondaryAction>
//             <Button
//                 variant="raised"
//                 color="default"
//                 size="small"
//                 disabled={todo.completed}
//                 tabIndex={-1}
//                 onClick={() => completeTodo(todo.id)}
//             >Completed</Button>
//             <IconButton onClick={() => removeToDo(todo.id)}>
//                 <Close />
//             </IconButton>
//         </ListItemSecondaryAction>
//     </ListItem>
// );
export default ToDo;