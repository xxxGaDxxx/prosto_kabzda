import React, {useState} from 'react';

export default {
    title: ' React.memo demo'
}


const NewMessagesCounter = (props: { count: number }) => {
    return <div>{props.count}</div>
}
const UsersSecret = (props: { users: Array<string> }) => {
    console.log('UsersSecret')
    return <div>{
        props.users.map((u, i) => <div key={i}>{u}</div>)

    }</div>
}
const Users = React.memo(UsersSecret)


export const Exampele1 = () => {
    console.log('Exampele1')
    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(['wlad', 'margo', 'pascha', 'nady'])

    const addUser = () => {
        const newUsers = [...users, 'www' + new Date().getTime()]
        setUsers(newUsers)
    }

    return <>
        <button onClick={() => {setCounter(counter + 1)}}>+</button>
        <button onClick={addUser}>add user</button>
        <NewMessagesCounter count={counter}/>
        <Users users={users}/>
    </>
}
