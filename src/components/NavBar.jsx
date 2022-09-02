import React from 'react';
import { useDispatch } from 'react-redux';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { checkIsAuth, logout } from '../redux/features/auth/authSlice.js';
import { toast } from 'react-toastify';

function NavBar() {
  const dispatch = useDispatch(checkIsAuth);
  const activeStyles = {
    color: 'white',
  }; 
  const isAuth = useSelector(checkIsAuth);
  const navigate = useNavigate();
  const logoutHandler = () => {
    dispatch(logout());
    window.localStorage.removeItem('token');
    toast('Вы вышли из системы');
    navigate('/');
  };

  return (
    <div className="flex py-4 justify-between intems-center">
      <span className="flex alighn-center cursor-pointer justify-center w-20 items-center  h-30 bg-gray-600 text-xs text-white rounded-lg">
        JustBlog
      </span>
      {isAuth && (
        <ul className="flex gap-8">
          <li>
            <NavLink
              to={'/'}
              href="/"
              className="tet-xs  hover:text-white duration-300"
              style={({ isActive }) => (isActive ? activeStyles : undefined)}
            >
              Главная
            </NavLink>
          </li>
          <li>
            <NavLink
              to={'/posts'}
              href="/"
              className="tet-xs  hover:text-white duration-300"
              style={({ isActive }) => (isActive ? activeStyles : undefined)}
            >
              Мои посты
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/new"
              href="/"
              className="tet-xs  hover:text-white duration-300"
              style={({ isActive }) => (isActive ? activeStyles : undefined)}
            >
              Добавить пост
            </NavLink>
          </li>
        </ul>
      )}

      <div className="flex justify-center  rounded-lg  items-center bg-gray-600 text-xs text-white    hover:text-black px-4 py-2">
        {isAuth ? (
          <button className="rounded-lg duration-300 " onClick={logoutHandler}>
            Выйти
          </button>
        ) : (
          <Link to={'/login'} className="rounded-lg  duration-300 ">
            Войти
          </Link>
        )}
      </div>
    </div>
  );
}

export default NavBar;
