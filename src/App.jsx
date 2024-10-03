import React from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import GitUsers from './pages/GitUsers';
import AddUsers from './pages/AddUsers';
import UpdateUsers from './pages/UpdateUsers';

const App = () => {
  return (
   <>
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<GitUsers/>}></Route>
        <Route path='/add' element={<AddUsers/>}></Route>
        <Route path='/edit/:id' element={<UpdateUsers/>}></Route>
    </Routes>
    </BrowserRouter>
   </>
  )
}

export default App










































