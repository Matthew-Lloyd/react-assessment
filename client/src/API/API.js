import isoFetch from 'isomorphic-fetch';

const getTodos = () => {
    return isoFetch(`https://practiceapi.devmountain.com/api/tasks`);
}

const postTodo = (data) => {
    console.log(data);
    debugger
    const postHeaders = new Headers();
    postHeaders.append('Content-Type', 'application/json');
    return isoFetch(`https://practiceapi.devmountain.com/api/tasks`, {
        method: "POST",
        headers: postHeaders,
        body: JSON.stringify({ title: data.title })
    });
}

const patchTodo = (id, updates) => {
    const patchHeaders = new Headers();
    patchHeaders.append('Content-Type', 'application/json');
    patchHeaders.append('Access-Control-Allow-Origin', '*');
    return isoFetch(`https://practiceapi.devmountain.com/api/tasks/${id}`, {
        method: "PATCH",
        headers: patchHeaders,
        body: JSON.stringify(updates)
    });
}

const deleteTodo = (id) => {
    return isoFetch(`https://practiceapi.devmountain.com/api/tasks/${id}`, {
        method: "DELETE"
    })
}

const putTodo = (id) => {
    return isoFetch(`https://practiceapi.devmountain.com/api/tasks/${id}`, {
        method: "PUT"
    })
}

export default {
    getTodos: getTodos,
    postTodo: postTodo,
    patchTodo: patchTodo,
    deleteTodo: deleteTodo,
    putTodo: putTodo,
};