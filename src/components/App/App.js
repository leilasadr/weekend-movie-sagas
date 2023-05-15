import {HashRouter as Router, Route} from 'react-router-dom';
import './App.css';
import MovieList from '../MovieList/MovieList'
import MovieItem from '../MovieItem/MovieItem';

function App() {
  return (
    <div className="App">
      <h1>The Movies Saga!</h1>
      <Router>  

        <Route exact path="/" >
          <MovieList />
        </Route>
        
        <Route exact path="/details/:id" >
          <MovieItem />
        </Route>

        {/* Add Movie page */}
      </Router>
    </div>
  );
}


export default App;
