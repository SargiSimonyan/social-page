import './Singin.css';
import React, { useState } from 'react';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { Flex, Button, Input } from 'antd';
import data from './data';
import { useNavigate } from 'react-router-dom';

let newUser = {
    id: 0,
    username: "",
    password: "",
    name: "",
    lastName: "",
    friends: [],
    resources: [],
    img: "",
}

export default function Singin() {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState("");
  const navigate = useNavigate();
  return (
    <div className="App">
      <div className='cont1'>
        <h2>Sing in</h2>
        <br/>
        <Input
          style={{width: "50%"}}
          placeholder="Your name"
          onChange={(e)=>{
            setName(e.target.value)
          }}
        />
        <br/>
        <Input
          style={{width: "50%"}}
          placeholder="Your last name"
          onChange={(e)=>{
            setLastName(e.target.value)
          }}
        />
        <br/>
        <Input
          style={{width: "50%"}}
          placeholder="Username"
          onChange={(e)=>{
            setValue1(e.target.value)
          }}
        />
        <br/>
        <Input
          style={{width: "50%"}}
          placeholder="Password"
          onChange={(e)=>{
            setValue2(e.target.value)
          }}
        />
        <br/>
        <Input
          style={{width: "50%"}}
          placeholder="Confirm password"
          onChange={(e)=>{
            setValue2(e.target.value)
          }}
        />
        <br/>
        <Flex gap="small" wrap>
          <Button type='primary'onClick={()=>{
            newUser = {
              id: data.length + 1,
              username: value1,
              password: value2,
              name: name,
              lastName: lastName,
              friends: [],
              resources: [],
              img: "balerina.png",
            }
            console.log(newUser);
            data.push(newUser)
            console.log(data);
            
            
          }}>
            Confirm
          </Button>
          <Button onClick={()=>{
            navigate('/')
          }}>Back</Button>
        </Flex>
      </div>
    </div>
  );
}

