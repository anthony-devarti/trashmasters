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
import Shop from './routes/Shop';
import Guests from './routes/Guests';
import NotFound from "./routes/NotFound";
import { Navbar, Nav, Container } from 'react-bootstrap';
import Footer from './components/Footer';
import Discord from './routes/Discord'
import Social from "./routes/Social";

function App() {

  return (
    <div className='global'>
      <Router>
        <div>
          <Navbar bg="dark" variant="dark" expand="lg" className="navigator">
            <Container>
              <Navbar.Brand>
                <Link to="/" className="brand">
                  {/* Replace with a logo */}
                  The Goblin TrashMasters
                </Link>
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
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
                  <Nav.Link as="div">
                    <Link to="/subscribe" className='link'>
                      Subscribe
                    </Link>
                  </Nav.Link>
                  <Nav.Link as="div">
                    <Link to="/discord" className='link'>
                      Discord
                    </Link>
                  </Nav.Link>
                  <Nav.Link as="div">
                    <Link to="/social" className='link'>
                      Social Media
                    </Link>
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>

          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/episodes" element={<Episodes />} />
            <Route path="/subscribe" element={<Subscribe />} />
            <Route path="/" element={<Home />} />
            <Route path="/discord" element={<Discord />} />
            <Route path="/shop" element={<Shop />} />
            <Route path ="/guests" element={<Guests />} />
            <Route path ="/social" element={<Social />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
