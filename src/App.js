import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Home from './routes/Home'
import Episodes from './routes/Episodes'
import About from './routes/About'
import { Navbar, Nav, Container } from 'react-bootstrap';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Router>
        <div>
          <Navbar bg="dark" variant="dark">
            <Container>
              <Navbar.Brand>
                <Link to="/">
                  {/* Replace with a logo */}
                  The Goblin TrashMasters
                </Link>
              </Navbar.Brand>
              <Nav className="me-auto">
                <Nav.Link as="div">
                  <Link to="/">
                    Home
                  </Link>
                </Nav.Link>
                <Nav.Link as="div">
                  <Link to="/about">
                    About
                  </Link>
                </Nav.Link>
                <Nav.Link as="div">
                  <Link id="Episodes" to="/episodes">
                    Episodes
                  </Link>
                </Nav.Link>
              </Nav>
            </Container>
          </Navbar>

          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/episodes" element={<Episodes />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </Router>
      <Footer />
    </>
  );
}

export default App;
