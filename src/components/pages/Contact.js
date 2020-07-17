import React from 'react';
import { Descriptions } from 'antd';

const Contact = () => {
    return (
        <div>
            <div>
            <h1 style={{color:'green'}}><strong><u>Contact:</u></strong></h1>
                <div>
                <Descriptions title="User Info">
    <Descriptions.Item label="Name">Rajesh Gole</Descriptions.Item>
    <Descriptions.Item label="Phone">987-654-3210</Descriptions.Item>
    <Descriptions.Item label="Email">gole.rajesh295@live.com</Descriptions.Item>
    <Descriptions.Item label="Description">Software Developer</Descriptions.Item>
    <Descriptions.Item label="Address">
    Morena M.P. India
    </Descriptions.Item>
  </Descriptions>,
                </div>
            </div>
        </div>
    )
}
export default Contact;