import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { Descriptions } from 'antd';

const User = () => {
    const [user, setUser] = useState({
        name: "",
        username: "",
        age: "",
        phone: "",
        email: "",
        website: "",
        introduction: ""
    });
    const { id } = useParams();
    useEffect(() => {
        loadUser();
    }, []);
    const loadUser = async () => {
        const res = await axios.get(`http://localhost:3003/users/${id}`);
        setUser(res.data);
    };
    return (
        <div>
            <br/>
            <Link type="primary" to='/'> <strong>Back To Home</strong></Link>
            <hr />
            <div>
            <Descriptions title="User Info" >
                <Descriptions.Item label="ID" >{user.id}</Descriptions.Item>
                <Descriptions.Item label="Name">{user.name}</Descriptions.Item>
                <Descriptions.Item label="UserName">{user.username}</Descriptions.Item>
                <Descriptions.Item label="Age">{user.age}</Descriptions.Item>
                <Descriptions.Item label="phone">{user.phone}</Descriptions.Item>
                <Descriptions.Item label="Email">{user.email}</Descriptions.Item>
                <Descriptions.Item label="Website">{user.website}</Descriptions.Item>
                <Descriptions.Item label="introduction">
                    {user.introduction}
                </Descriptions.Item>
            </Descriptions>,
            </div>
        </div>
    );
}
export default User;