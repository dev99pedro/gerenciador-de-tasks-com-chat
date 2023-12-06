import './App.css';
import Main from './pages/Main';
import { ContextProvider } from './components/context/Context';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CardSession from './components/cardSession/CardSession';
import AddFeedBack from './components/addFeedBack/AddFeedBack'






function App() {
  return (
    <div className='app'>
      <ContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Main />}></Route>
            <Route path="/cardsession" element={<CardSession />}></Route>
            <Route path="/addfeed" element={<AddFeedBack />}></Route>
          
         
          </Routes>
        </BrowserRouter>
      </ContextProvider>
    </div>
  );
}

export default App;
