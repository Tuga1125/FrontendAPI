import React from 'react'
import Navbar from '../Navbar/Navbar'

export default function Dashboard(props) {
    const handleLogout = () => {
        localStorage.removeItem('token');
        props.history.push('/');
    }
    return (
        <Navbar handleLogout={handleLogout} />
    )
}
