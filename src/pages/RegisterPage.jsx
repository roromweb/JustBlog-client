import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { registerUser } from '../redux/features/auth/authSlice';
import { toast } from 'react-toastify';
import { checkIsAuth } from '../redux/features/auth/authSlice';
function RegisterPage() {
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
    if (isAuth) {
      navigate('/');
    }
  }, [status, isAuth, navigate]);

  const handleSubmit = () => {
    try {
      dispatch(registerUser({ username, password }));
      setUsername('');
      setPassword('');
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <form
      onSubmit={e => e.preventDefault()}
      className="w-1/4 h-60 mx-auto mt-40"
    >
      <h2 className="text-lg text-white text-center">Регистрация</h2>

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
          className="fle justify-center items-center text-xs text-white bg-gray-700 rounded-lg px-4 py-2"
          onClick={handleSubmit}
        >
          Зарегистроваться
        </button>
        <Link
          to="/login"
          className="flex justify-center items-center text-xs text-white"
        >
          У вас уже есть аккаунт?
        </Link>
      </div>
    </form>
  );
}

export default RegisterPage;
