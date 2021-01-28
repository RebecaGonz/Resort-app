// import logo from './logo.svg';
import './App.css';
import Main from './views/Main'
import Rooms from './views/Rooms'
import SingleRoom from './views/SingleRoom'
import Error from './views/Error'
import { Router, Redirect } from '@reach/router';
import Register from './components/Register'
import MakeReservation from './views/MakeReservation'
import MakeUser from './views/MakeUser'
import MakeRoom from './views/MakeRoom'

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
                <MakeReservation path = "/makereservation" />
                <MakeUser path = "/makeuser" />
                <MakeRoom path = "/makeroom" />
            </Router>
        </div>
    );
}

export default App;
