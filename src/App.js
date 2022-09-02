import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import Layout from './components/Layout.jsx';
import MainPage from './pages/MainPage.jsx';
import PostPage from './pages/PostPage.jsx';
import PostsPage from './pages/PostsPage.jsx';
import AddPostPage from './pages/AddPostPage.jsx';
import EditPostPage from './pages/EditPostPage.jsx';
import LoginPage from './pages/LoginPage.jsx';
import RegisterPage from './pages/RegisterPage.jsx';
import { ToastContainer } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { getMe } from './redux/features/auth/authSlice.js';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMe());
  }, [dispatch]);
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="posts" element={<PostsPage />} />
        <Route path=":id" element={<PostPage />} />
        <Route path="new" element={<AddPostPage />} />
        <Route path=":id/edit" element={<EditPostPage />} />
        <Route path="register" element={<RegisterPage />} />
        <Route path="login" element={<LoginPage />} />
      </Routes>
      <ToastContainer position="bottom-left" />
    </Layout>
  );
}

export default App;
