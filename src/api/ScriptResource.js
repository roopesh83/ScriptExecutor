import axios from 'axios'
export const fetchAllScripts = async () => {
    const response = await axios.get('http://localhost:5000/Script');
    return response
};

export const addNewScript = async (script_name, content, created_datetime) => {
    const response = await axios.post('http://localhost:5000/Script', {
        "script_name": script_name,
        "content": content,
        "created_datetime": created_datetime
    })
    return response
};

export const execScript = async (script_name, content) => {
    const response = await axios.post('http://localhost:5000/ExecScript', {
        "script_name": script_name,
        "content": content
    })
    return response
};