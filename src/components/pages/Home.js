import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import '../node_modules/antd/dist/antd.css';
import { Table, Space } from 'antd';
import { Link } from 'react-router-dom';

const Home = () => {
    const [users, setUser] = useState([]);

    useEffect(() => {
        loadUsers();
    }, []);

    const loadUsers = async () => {
        const result = await axios.get("http://localhost:3003/users");
        console.log(result);
        setUser(result.data);
    };
    const deleteUser = async id => {
        await axios.delete(`http://localhost:3003/users/${id}`);
        loadUsers();
    }
    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            render: text => <a>{text}</a>,
        },
        {
            title: 'Username',
            dataIndex: 'username',
            key: 'username',
        },
        {
            title: 'Age',
            dataIndex: 'age',
            key: 'age',
        },
        {
            title: 'Email',
            key: 'email',
            dataIndex: 'email',
        },
        {
            title: 'Action',
            key: '6',
            render: (user) => (
                <Space size="middle">
                    <Link to={`/users/${user.id}`} class="btn btn-primary">View </Link>
                    <Link to={`/users/edit/${user.id}`}>Edit</Link>
                    <Link onClick={() => { deleteUser(user.id) }}>Delete</Link>
                </Space>
            ),
        },
    ];


    return (
        <div>
            <div>
                <h1 style={{ color: 'darkgreen' }}><strong><u>Registered Queue:</u></strong></h1>
                <Table columns={columns} dataSource={users}>
                    {
                        users.map((user, index) => (
                            <div>
                                <name>{user.name}</name>
                                <username>{user.username}</username>
                                <age>{user.age}</age>
                                <email>{user.email}</email>
                            </div>))
                    }
                </Table>

            </div>
        </div>
    )
}
export default Home;

