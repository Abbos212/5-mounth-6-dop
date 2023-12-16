import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Main , PostDetails} from './pages';





function App() {
  return (
      <Router>
        <Routes>
          <Route path='/' element={<Main/>}/>
          <Route path='/posts/:id' element={<PostDetails/>}/>
        </Routes>
      </Router>
  );
}

export default App;


