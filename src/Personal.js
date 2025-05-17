import React, { useState } from "react";
import { useLocation } from 'react-router-dom';
import './Personal.css';
import data from "./data";
import { useNavigate } from 'react-router-dom';

import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
const { Header, Content, Footer, Sider } = Layout;



function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}

function Personal () {
  const navigate = useNavigate();

  const location = useLocation();
  const message = location.state?.message;
  const items = [
  getItem('Home', '1', <img src={data[message-1].img} style={{width: "30px", height: "30px", borderRadius: "50%"}}/>),
  getItem('Option 2', '2', <DesktopOutlined />),
  getItem('User', 'sub1', <UserOutlined />, [
    getItem('Tom', '3'),
    getItem('Bill', '4'),
    getItem('Alex', '5'),
  ]),
  getItem('Team', 'sub2', <TeamOutlined />, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
  getItem('Files', '9', <FileOutlined />),
];


  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible collapsed={collapsed} onCollapse={value => setCollapsed(value)}>
        <div className="demo-logo-vertical" />
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer, display: "flex", justifyContent: "space-around", alignItems: "center"}} content="" >
          <h2>Social Page</h2>
          <button onClick={()=>{
            navigate('/login')
          }}>Log Out</button>
        </Header>
        <Content style={{ margin: '0 16px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>{data[message-1].name}</Breadcrumb.Item>
            <img src={data[message-1].img} style={{width: "30px", height: "30px", borderRadius: "50%"}}/>
          </Breadcrumb>
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            Personal page of {data[message-1].name}
            <img src={data[message-1].img} style={{width: "60px", height: "60px", borderRadius: "50%"}}/>

          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Footer
        </Footer>
      </Layout>
    </Layout>
  );
}

export default Personal  

 