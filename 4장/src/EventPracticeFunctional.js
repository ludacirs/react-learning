import React, {useState} from "react";

export const EventPracticeFunctional = ()=>{
    // 인풋의 값이 적을 때는 아래와 같은 하드코딩도 나쁘지 않음.
    const [username, setUsername] = useState('John');
    const [message, setMessage] = useState('Hi');

    const usernameChange = (e)=> {
        setUsername(e.target.value);
    }

    const messageChange = e => {
        setMessage(e.target.value);
    };

    const handleClick = e => {
        console.log(`${username} say ${message}`);
    };

    return (
        <div>
            <input type="text" name={'username'} value={username} onChange={usernameChange}/>
            <div/>
            <input type="text" name={'message'} value={message} onChange={messageChange}/>
            <button onClick={handleClick}> button </button>
        </div>
    );
}
// 객체를 이용한 useState

export const EventPracticeFunctionalMulti = ()=>{
    const [form, setForm] = useState({
        username : 'John',
        message : 'Hi',
    })

    const {username,message} = form;

    const changeHandler = (e) => {
        const nextForm = {
            ...form,
            [e.target.name] : e.target.value,
        };
        setForm(nextForm);
    }

    const handleClick = (e) => {
        console.log(username,message);
        setForm({
            username: '',
            message: ''
        })
    };

    return (
        <div>
            <input type="text" name={'username'} value={username} onChange={changeHandler} />
            <div/>
            <input type="text" name={'message'} value={message} onChange={changeHandler} />
            <button onClick={handleClick}> button </button>
        </div>
    );
}
