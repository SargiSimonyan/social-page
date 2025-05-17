import './Singin.css';
import React, { useState } from 'react';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { Flex, Button, Input, message, Space, Upload  } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

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

let previewUrl;

export default function Singin() {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState("");
  const [photo, setPhoto] = useState(null);
  const [photoPreview, setPhotoPreview] = useState(null);

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
        {/* <input 
          type="file"
          accept="image/*"
          onChange={(e) => {
            const file = e.target.files[0];
            if (file) {
              setPhoto(file);
              setPhotoPreview(URL.createObjectURL(file));
            }
          }}  
        /> */}
          <Space 
            direction="vertical" 
            style={{ width: '100%' }} 
            size="large"
            onChange={(e) => {
              const file = e.target.files[0];
              if (file) {
                setPhoto(file);
                setPhotoPreview(URL.createObjectURL(file));
              }
            }}
          >
            <Upload
              action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
              listType="picture"
              maxCount={1}
            >
              <Button icon={<UploadOutlined />}>Upload (Max: 1)</Button>
            </Upload>
          </Space>
        {/* {photoPreview && (
          <div style={{ marginTop: '10px' }}>
            <p>Preview:</p>
            <img src={photoPreview} alt="Preview" style={{ maxWidth: '50px', maxHeight: '50px', borderRadius: '8px' }} />
          </div>
        )} */}
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
              img: photoPreview,
            }
            console.log(newUser);
            data.push(newUser)
            console.log(data);
            navigate('/login')
            
          }}>
            Confirm
          </Button>
          <Button onClick={()=>{
            navigate('/login')
          }}>Back</Button>
        </Flex>
      </div>
    </div>
  );
}

