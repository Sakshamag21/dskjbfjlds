import type { NextPage } from 'next'
import React from 'react';
import 'antd/dist/antd.css'
import styles from './login.module.css'
import { useState } from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
// import { NavLink, useHistory } from 'react-router-dom';

const Home: NextPage = () => {
  // const { udata, setUdata } = useContext(adddata);

  // const history = useHistory();

  const [inpval, setINP] = useState({
    name: "",
    password: ""
})

const setdata = (e:any) => {
    console.log(e.target);
    const { name, value } = e.target;

    setINP((preval) => {
      console.log(inpval)
        return {
            ...preval,
            [name]: value
        }
    })
}


const addinpdata = async (e:any) => {
    // e.preventDefault();

    const { name, password } = inpval;
    console.log(name,password)

    const res = await fetch("http://localhost:8003/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            name, password
        })
    });

    const data = await res.json();
    console.log(data);

    // if (res.status === 422 || !data) {
    //     console.log("error ");
    //     alert("error");

    // } else {
    //     history.push("/")
    //     setUdata(data)
    //     console.log("data added");

    // }
}




    const onFinish = (values: any) => {
        console.log('Success:', values);
    };
    
    
    
    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };
    return(<div className={styles.formPos}>
        <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        onFinish={addinpdata}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        method='POST'
      >
        <Form.Item
          label="Username"
          name="name"
           
          rules={[{ required: true, message: 'Please input your username!' }]}
          
        >
          <Input value={inpval.name} onChange={setdata} type="text" name='name'/>
        </Form.Item>
  
        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password value={inpval.password} onChange={setdata} name='password'/>
        </Form.Item>
  
        <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>
  
        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form></div>
    );
  
    

}
export default Home;