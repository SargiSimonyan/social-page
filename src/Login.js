import './Login.css';
import React, { useState } from 'react';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { Flex, Button, Input } from 'antd';
import data from './data';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState("")
  const navigate = useNavigate();
  // let activeUserId = 0;
  return (
    <div className="App">
      <div className='cont1'>
        <h2>Log in</h2>
        <br/>
        <Input
          style={{width: "50%"}}
          placeholder="Username"
          onChange={(e)=>{
            setValue1(e.target.value)
          }}
        />
        <br/>
        <Input.Password
          style={{width: "50%"}}
          placeholder="Password"
          iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
          onChange={(e)=>{
            setValue2(e.target.value)
          }}
        />
        <br/>
        <Flex gap="small" wrap>
          <Button type='primary'onClick={()=>{
            console.log(value1 + " " + value2);
            data.forEach((i)=>{
              if(i.username == value1 && i.password == value2) {
                // activeUserId = i.id
                // setActiveUserId(i.id)
                console.log("it's" + " " + i.username + "s accounte");
                navigate('/personal', { state: { message: i.id}})
              }
            })
            
          }}>
            login
          </Button>
        </Flex>
      </div>
    </div>
  );
}

export default Login;
