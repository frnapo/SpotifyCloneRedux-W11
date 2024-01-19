import { Container, Row, Col, Nav, Card } from "react-bootstrap";
import Sidebar from "./Sidebar";
import { useSelector, useDispatch } from "react-redux";
import BottomPlayer from "./BottomPlayer";
import { setCurrentTrack } from "../redux/actions/setCurrentTrack";

function MainComponent() {
  const searchResults = useSelector((state) => state.search.results);
  const dispatch = useDispatch();

  const handleClick = (track) => {
    dispatch(setCurrentTrack(track));
  };

  return (
    <Container fluid className="main-container">
      <Row>
        <Sidebar />
        <Col className="main-content">
          <Row className="mb-4 mt-3">
            <Col>
              <Nav className="justify-content-center d-none d-sm-flex">
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
            {searchResults.map((track) => (
              <Col xs={4} md={3} xl={2} key={track.id} className="mb-4">
                <Card className="bg-transparent border-0 rounded-0" onClick={() => handleClick(track)}>
                  <Card.Img variant="top" src={track.album.cover_big} className="rounded-0" />
                  <Card.Body>
                    <Card.Title className="text-white">{track.title}</Card.Title>
                    <Card.Subtitle className="mb-2 text-secondary">{track.artist.name}</Card.Subtitle>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
      <BottomPlayer />
    </Container>
  );
}

export default MainComponent;
