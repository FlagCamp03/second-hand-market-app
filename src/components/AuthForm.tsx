// src/components/AuthForm.tsx

// This is the reusable login/register form component.
// It handles both login and registration logic with form submission.
// 这是一个可复用的登录/注册表单组件
// 用于处理登录和注册的逻辑，并通过表单提交数据

import React from 'react';
import { Form, Input, Button, message } from 'antd';
import { useNavigate } from 'react-router-dom';
import { loginApi, registerApi } from '../services/authApi';
import useAuthStore from '../store/auth';

interface Props {
  type: 'login' | 'register'; // determine form mode “设置是登录表单还是注册表单”
}

// Reusable authentication form for login/register
// 登录 / 注册 表单复用组件
const AuthForm: React.FC<Props> = ({ type }) => {
  const navigate = useNavigate(); // for redirection after success 登录成功后跳转用
  const login = useAuthStore((state) => state.login); // Zustand action to set login state 设置全局登录状态

  // Handle form submit 表单提交逻辑
  const onFinish = async (values: any) => {
    try {
      let res;
      if (type === 'login') {
        res = await loginApi(values); // call login API 调用登录接口
      } else {
        res = await registerApi(values); // call register API 调用注册接口
      }

      // Show success message and store user info + token
      // 成功提示 + 存储 token 与用户信息
      message.success(`${type === 'login' ? 'Login' : 'Register'} successful`);
      login(res.token, res.user); // update store 写入 Zustand 全局状态
      navigate('/'); // redirect to homepage 跳转首页
    } catch (err: any) {
      // Show error message if request fails
      // 错误处理（如账号已存在等）
      message.error(err.response?.data?.message || 'Something went wrong');
    }
  };

  return (
    <Form
      name="authForm"
      onFinish={onFinish}
      layout="vertical"
      style={{ maxWidth: 400, margin: 'auto', marginTop: '3rem' }}
    >
      {/* Email input field 邮箱输入框 */}
      <Form.Item
        label="Email"
        name="email"
        rules={[{ required: true, message: 'Please enter your email' }]}
      >
        <Input />
      </Form.Item>

      {/* Password input field 密码输入框 */}
      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: 'Please enter your password' }]}
      >
        <Input.Password />
      </Form.Item>

      {/* Submit button 提交按钮 */}
      <Form.Item>
        <Button type="primary" htmlType="submit" block>
          {type === 'login' ? 'Log In' : 'Register'}
        </Button>
      </Form.Item>
    </Form>
  );
};

export default AuthForm;
