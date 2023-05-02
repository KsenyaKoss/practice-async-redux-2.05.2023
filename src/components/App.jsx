import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { HomePage } from 'pages/HomePage/HomePage';
import { UsersPage } from 'pages/UsersPage/UsersPage';
import { UserDetailsPage } from 'pages/UserDetailsPage/UserDetailsPage';
import { AddUserPage } from 'pages/AddUserPage';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />}></Route>
          <Route path="users" element={<UsersPage />} />
          <Route path="users/:id" element={<UserDetailsPage />} />
          <Route path="users/add" element={<AddUserPage/>}/>
        </Route>
      </Routes>
    </>
  );
};
