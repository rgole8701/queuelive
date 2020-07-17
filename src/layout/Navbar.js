import React from 'react';
// import Home from '../components/pages/Home';
import { Layout, Menu,Avatar} from 'antd';
import { UserOutlined } from '@ant-design/icons'

import {NavLink,Link} from 'react-router-dom';
const { Header } = Layout;

const Navbar = () => {
    return (
        <Layout className="layout">
            <Header>
                <div className="logo" />
                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['']}>
                
                    <Menu.Item key="/">
                    <NavLink to="/" className="nav-text" ><strong>Home</strong></NavLink>
                    </Menu.Item>

                    <Menu.Item key="/contact">
                    <NavLink to="/contact" className="nav-text"><strong>Contact</strong></NavLink>
                    </Menu.Item>

                    <Menu.Item key="/about">
                    <NavLink to="/about" className="nav-text"><strong>About Us</strong></NavLink>
                    </Menu.Item>
                    <Link style={{float:"right"}} 
                    className="btn btn-outline-light" to="/users/add"  >
                        <Avatar icon={<UserOutlined />}  style={{ backgroundColor: '#87d068' }}/> <strong>Add User</strong></Link>
                    
                    
                </Menu>
            </Header>
        </Layout>
    )
}
export default Navbar;