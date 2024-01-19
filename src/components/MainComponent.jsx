import { Container, Row, Col, Nav } from "react-bootstrap";
import Sidebar from "./Sidebar";
import BottomPlayer from "./BottomPlayer";

function MainComponent() {
  return (
    <Container fluid className="main-container">
      <Row>
        <Sidebar />
        <Col className="main-content d-none d-sm-block">
          <Row className="mb-4 mt-3">
            <Col>
              <Nav className="justify-content-center">
                <Nav.Item>
                  <Nav.Link href="#" className="main-links me-3">
                    TRENDING
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="#" className="main-links me-3">
                    PODCAST
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="#" className="main-links me-3">
                    MOODS AND GENRES
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="#" className="main-links me-3">
                    NEW RELEASES
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="#" className="main-links">
                    DISCOVER
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
          </Row>
          {/* contenuto principale */}
          <Row>
            <Col>{/* contenuto dinamico */}</Col>
          </Row>
        </Col>
      </Row>
      <BottomPlayer />
    </Container>
  );
}

export default MainComponent;
