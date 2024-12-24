import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { registerUser } from '../../store/authSlice';

function Register() {
    const [form, setForm] = useState({ username: '', email: '', password: '' });
    const dispatch = useDispatch();

    const handleChange = e => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(registerUser(form));
    };

    return (
        <form onSubmit={handleSubmit} className="register-form">
            <input name="username" value={form.username} onChange={handleChange} required />
            <input type="email" name="email" value={form.email} onChange={handleChange} required />
            <input type="password" name="password" value={form.password} onChange={handleChange} required />
            <button type="submit">Register</button>
        </form>
    );
}

export default Register; 