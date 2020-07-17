import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { Form, Input, InputNumber, Button, Select } from 'antd';
const { Option } = Select;

const AddUser = () => {
    let history = useHistory();
    const [user, setUser] = useState({
        name: "",
        username: "",
        age: "",
        phone: "",
        email: "",
        website: "",
        introduction: ""
    });
    const { name, username, age, phone, email, website, introduction } = user;
    const onInputChange = e => {
        setUser({ ...user, [e.target.name]: e.target.value})
        // console.log(onInputChange);
    }
    const onFinish = async (form) => {
        console.log("my form:",form);
        await axios.post("http://localhost:3003/users", form);
        history.push("/");

    };
    const layout = {
        labelCol: { span: 8 },
        wrapperCol: { span: 16 },
    };

    const validateMessages = {
        required: '${label} is required!',
        types: {
            email: '${label} is not validate email!',
            number: '${label} is not a validate number!',
        },
        number: {
            range: '${label} must be between ${min} and ${max}',
        },
    };

    const prefixSelector = (
        <Form.Item name="prefix" noStyle>
            <Select style={{ width: 70 }}>
                <Option  value="91">+91</Option>
                <Option value="87">+87</Option>
            </Select>
        </Form.Item>
    );

    return (
        <div>
            <div>
                <h1 style={{color:'green'}}><strong><u>Register For Queue:</u></strong></h1>
                <Form {...layout} name="nest-messages" validateMessages={validateMessages} style={{ width: "80%" }} onFinish={onFinish} >
                    <Form.Item name='name' value={name} label="Name" rules={[{ required: true }]} onChange={onInputChange}>
                        <Input />
                    </Form.Item>

                    <Form.Item name='username' value={username} label="UserName" rules={[{ required: true }]} onChange={onInputChange}>
                        <Input />
                    </Form.Item>

                    <Form.Item name='age' label="Age" value={age} rules={[{ type: 'number', min: 0, max: 99 }]} onChange={onInputChange}>
                        <InputNumber />
                    </Form.Item>
                    <Form.Item
                        name="phone"
                        value={phone}
                        label="Phone Number"
                        rules={[{ required: true, message: 'Please input your phone number!' }]}
                        onChange={onInputChange}
                    >
                        <Input addonBefore={prefixSelector} style={{ width: '100%' }} />
                    </Form.Item>

                    <Form.Item name='email' value={email} label="Email" rules={[{ type: 'email' }]} onChange={onInputChange}>
                        <Input />
                    </Form.Item>

                    <Form.Item name='website' value={website} label="Website" onChange={onInputChange}>
                        <Input />
                    </Form.Item>

                    <Form.Item name='introduction' value={introduction} label="Introduction" onChange={onInputChange}>
                        <Input.TextArea />
                    </Form.Item>

                    <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                        <Button type="primary" htmlType="submit" >
                            Submit
                             </Button>
                    </Form.Item>
                </Form>

            </div>
        </div>
    )
}

export default AddUser;