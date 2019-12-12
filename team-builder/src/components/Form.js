import React, { useState } from 'react';

const Form = props => {
    const [member, setMember] = useState({
        name: "",
        email: "",
        role: "",
    })

    const changeHandler =event=> {
        setNewMember({...member, [event.target.name]: event.target.value})
    }

    const submitForm = event => {
        event.preventDefault()
        props.setNewMember(member)
        setMember({name:"", email:"", role:""})
    }

    return(
        <form onSubmit={submitForm}>
            <label htmelFor='name>Team Member</label>
                <input 
                    id='name
                    name='name'
                    type='text'
                    placeholder='Name'
                    onChange ={changeHandler}
                    value={member.name}
                />

                <label htmlFor='email'>Email</label>
                <input 
                    id='email'
                    name='email'
                    type='text'
                    placeholder='Email'
                    onChange={changeHandler}
                    value={member.email}
                />

                <label htmlFor='role'>What I Do</label>
                <input
                    id='role'
                    name='role'
                    type='text'
                    placeholder='Role'
                    onChange={changeHandler}
                    value={member.role}
                />

            <button type='submit'>Add New Member</button>
        </form>
    )
}

export default Form;