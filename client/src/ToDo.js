import React, {Component} from 'react';

const ToDo = ({task, removeToDo}) => <li>
{task}
<button onClick={removeToDo}>X</button>
</li>;
export default ToDo;