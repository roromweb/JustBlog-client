import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { loginUser } from '../redux/features/auth/authSlice';
import { toast } from 'react-toastify';
import { checkIsAuth } from '../redux/features/auth/authSlice';
export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { status } = useSelector(state => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isAuth = useSelector(checkIsAuth);

  useEffect(() => {
    if (status) {
      toast(status);
    }
  }, [status, isAuth, navigate]);

  const handleSubmit = () => {
    try {
      dispatch(loginUser({ username, password }));
      toast(status);

      if (isAuth) {
        navigate('/');
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <form
      onSubmit={e => e.preventDefault()}
      className="w-1/4 h-60 mx-auto mt-40"
    >
      <h2 className="text-lg text-white text-center">Авторизация</h2>

      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={e => setUsername(e.target.value)}
        className="mt-1 w-full  rounded-lg bg-gray-400 border px-2 py-1 text-xs outline-none placeholder:text-gray-700"
      />

      <input
        type="text"
        placeholder="Password"
        value={password}
        onChange={e => setPassword(e.target.value)}
        className="mt-1 w-full rounded-lg bg-gray-400 border px-2 py-1 text-xs outline-none placeholder:text-gray-700"
      />
      <div className="flex gap-8 justify-center mt-4">
        <button
          type="submit"
          onClick={handleSubmit}
          className="fle justify-center items-center text-xs text-white bg-gray-700 rounded-lg px-4 py-2"
        >
          Войти
        </button>
        <Link
          to="/register"
          className="flex justify-center items-center text-xs text-white"
        >
          Нет аккаунта?
        </Link>
      </div>
    </form>
  );
}
