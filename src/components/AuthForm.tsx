// src/components/AuthForm.tsx

/* 
  This is the reusable login/register form component.
  It handles both login and registration logic with form submission.
*/

import React from 'react';
import { Form, Input, Button, message } from 'antd';
import { useNavigate } from 'react-router-dom';
import { loginApi, registerApi } from '../services/authApi';
import useAuthStore from '../store/auth';

interface Props {
  type: "login" | "register"; // determine form mode
}

// Reusable authentication form for login/register
const AuthForm: React.FC<Props> = ({ type }) => {
  const navigate = useNavigate(); // for redirection after success
  const login = useAuthStore((state) => state.login); // Zustand action to set login state

  // Handle form submit
  const onFinish = async (values: any) => {
    try {
      let res;
      if (type === "login") {
        res = await loginApi(values); // call login API
      } else {
        res = await registerApi(values); // call register API
      }

      // Show success message and store user info + token
      message.success(`${type === "login" ? "Login" : "Register"} successful`);
      login(res.token, res.user); // update store
      navigate("/"); // redirect to homepage
    } catch (err: any) {
      // Show error message if request fails
      message.error(err.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <Form
      name="authForm"
      onFinish={onFinish}
      layout="vertical"
      style={{ maxWidth: 400, margin: "auto", marginTop: "3rem" }}
    >
      {/* Email input field */}
      <Form.Item
        label="Email"
        name="email"
        rules={[{ required: true, message: "Please enter your email" }]}
      >
        <Input />
      </Form.Item>

      {/* Password input field */}
      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: "Please enter your password" }]}
      >
        <Input.Password />
      </Form.Item>

      {/* Submit button */}
      <Form.Item>
        <Button type="primary" htmlType="submit" block>
          {type === "login" ? "Log In" : "Register"}
        </Button>
      </Form.Item>
    </Form>
  );
};

export default AuthForm;
