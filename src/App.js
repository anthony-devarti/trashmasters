import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Home from './routes/Home'
import Users from './routes/Users'
import About from './routes/About'
import { Navbar, Nav, Container } from 'react-bootstrap';

function App() {
  return (
    <Router>
      <div>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand>
              <Link to="/">
                The Goblin TrashMasters
              </Link>
            </Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="#home">
                <Link to="/">
                  Home
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/about">
                  About
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/users">
                  Users
                </Link>
              </Nav.Link>
            </Nav>
          </Container>
        </Navbar>
        <Navbar>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </Navbar>

        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/users" element={<Users />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
