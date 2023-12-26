import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Main, Post, PostDetails } from './pages';
import Header from './pages/Header/Header';


function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Header />}>
          <Route path='/' element={<Main />} />
          <Route path='/posts/' element={<Post />} />
          <Route path='/posts/:id' element={<PostDetails />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;


