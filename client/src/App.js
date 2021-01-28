// import logo from './logo.svg';
import './App.css';
import Main from './views/Main'
import Rooms from './views/Rooms'
import SingleRoom from './views/SingleRoom'
import Error from './views/Error'
import { Router, Redirect } from '@reach/router';
import Register from './components/Register'

function App() {
    return (
        <div className="App">
            <Router>
                <Redirect from='/' to='home' noThrow />
                <Main path="/home" />
                <Rooms path="/rooms" />
                <SingleRoom path="/home/singleRooms/:id" />
                <Error path="/home/error" />
                <Register path="/register" />
            </Router>
        </div>
    );
}

export default App;
