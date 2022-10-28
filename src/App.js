import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Home from './routes/Home';
import Episodes from './routes/Episodes';
import About from './routes/About';
import Subscribe from './routes/Subscribe';
import { Navbar, Nav, Container } from 'react-bootstrap';
import Footer from './components/Footer';

function App() {
  return (
    <div className='global'>
      <Router>
        <div>
          <Navbar bg="dark" variant="dark" className="navigator">
            <Container>
              <Navbar.Brand>
                <Link to="/">
                  {/* Replace with a logo */}
                  The Goblin TrashMasters
                </Link>
              </Navbar.Brand>
              <Nav className="me-auto">
                <Nav.Link as="div">
                  <Link to="/" className='link'>
                    Home
                  </Link>
                </Nav.Link>
                <Nav.Link as="div">
                  <Link to="/about" className='link'>
                    About
                  </Link>
                </Nav.Link>
                <Nav.Link as="div">
                  <Link to="/episodes" className='link'>
                    Episodes
                  </Link>
                </Nav.Link>
                <Nav.Link>
                  <Link to="/subscribe" className='link'>
                    Subscribe
                  </Link>
                </Nav.Link>
              </Nav>
            </Container>
          </Navbar>

          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/episodes" element={<Episodes />} />
            <Route path="/subscribe" element={<Subscribe/>} />
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
