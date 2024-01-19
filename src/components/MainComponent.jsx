import { useState, useEffect } from "react";
import { Container, Row, Col, Nav, Card, Button } from "react-bootstrap";
import Sidebar from "./Sidebar";
import { useSelector, useDispatch } from "react-redux";
import BottomPlayer from "./BottomPlayer";
import { setCurrentTrack } from "../redux/actions/setCurrentTrack";
import { likeTrack, unlikeTrack } from "../redux/actions/likesActions";
import { Heart, HeartFill } from "react-bootstrap-icons";

function MainComponent() {
  const [queenTracks, setQueenTracks] = useState([]);
  const [katyPerryTracks, setKatyPerryTracks] = useState([]);
  const [eminemTracks, setEminemTracks] = useState([]);

  useEffect(() => {
    fetch(`https://striveschool-api.herokuapp.com/api/deezer/search?q=queen`)
      .then((response) => response.json())
      .then((data) => setQueenTracks(data.data.slice(0, 4)));

    fetch(`https://striveschool-api.herokuapp.com/api/deezer/search?q=katy perry`)
      .then((response) => response.json())
      .then((data) => setKatyPerryTracks(data.data.slice(0, 4)));

    fetch(`https://striveschool-api.herokuapp.com/api/deezer/search?q=eminem`)
      .then((response) => response.json())
      .then((data) => setEminemTracks(data.data.slice(0, 4)));
  }, []);

  const isSearchPerformed = useSelector((state) => state.search.isSearchPerformed);
  const searchResults = useSelector((state) => state.search.results);
  const likedTracks = useSelector((state) => state.likes.likedTracks);
  const dispatch = useDispatch();

  const handleLike = (e, trackId) => {
    e.stopPropagation();
    const isLiked = likedTracks[trackId];
    if (isLiked) {
      dispatch(unlikeTrack(trackId));
    } else {
      dispatch(likeTrack(trackId));
    }
  };

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
          {!isSearchPerformed && (
            <>
              <Row className="mb-4">
                <h2 className="mb-4 text-white">Rock Classics</h2>
                {queenTracks.map((track) => (
                  <Col key={track.id}>
                    <Card className="bg-transparent border-0 rounded-0 card-hover" onClick={() => handleClick(track)}>
                      <Card.Img variant="top" src={track.album.cover_big} className="rounded-0" />
                      <Card.Body>
                        <Card.Title className="text-white">
                          {track.title}{" "}
                          <Button
                            variant="outline-light"
                            className="border-0 p-0 px-1 rounded-5 mb-1"
                            onClick={(e) => handleLike(e, track.id)}
                          >
                            {likedTracks[track.id] ? (
                              <HeartFill className="fs-5" style={{ marginTop: "-3px" }} />
                            ) : (
                              <Heart className="fs-5" style={{ marginTop: "-3px" }} />
                            )}
                          </Button>
                        </Card.Title>{" "}
                        <Card.Subtitle className="mb-2 text-secondary">{track.artist.name}</Card.Subtitle>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
              <Row className="mb-4">
                <h2 className="mb-4 text-white">Pop Culture</h2>
                {katyPerryTracks.map((track) => (
                  <Col key={track.id}>
                    <Card className="bg-transparent border-0 rounded-0 card-hover" onClick={() => handleClick(track)}>
                      <Card.Img variant="top" src={track.album.cover_big} className="rounded-0" />
                      <Card.Body>
                        <Card.Title className="text-white">
                          {track.title}{" "}
                          <Button
                            variant="outline-light"
                            className="border-0 p-0 px-1 rounded-5 mb-1"
                            onClick={(e) => handleLike(e, track.id)}
                          >
                            {likedTracks[track.id] ? (
                              <HeartFill className="fs-5" style={{ marginTop: "-3px" }} />
                            ) : (
                              <Heart className="fs-5" style={{ marginTop: "-3px" }} />
                            )}
                          </Button>
                        </Card.Title>{" "}
                        <Card.Subtitle className="mb-2 text-secondary">{track.artist.name}</Card.Subtitle>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
              <Row className="mb-4">
                <h2 className="mb-4 text-white">#HipHop</h2>
                {eminemTracks.map((track) => (
                  <Col key={track.id}>
                    <Card className="bg-transparent border-0 rounded-0 card-hover" onClick={() => handleClick(track)}>
                      <Card.Img variant="top" src={track.album.cover_big} className="rounded-0" />
                      <Card.Body>
                        <Card.Title className="text-white">
                          {track.title}{" "}
                          <Button
                            variant="outline-light"
                            className="border-0 p-0 px-1 rounded-5 mb-1"
                            onClick={(e) => handleLike(e, track.id)}
                          >
                            {likedTracks[track.id] ? (
                              <HeartFill className="fs-5" style={{ marginTop: "-3px" }} />
                            ) : (
                              <Heart className="fs-5" style={{ marginTop: "-3px" }} />
                            )}
                          </Button>
                        </Card.Title>{" "}
                        <Card.Subtitle className="mb-2 text-secondary">{track.artist.name}</Card.Subtitle>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            </>
          )}
          {isSearchPerformed && (
            <Row>
              {searchResults.map((track) => (
                <Col xs={4} md={3} xl={2} key={track.id} className="mb-4">
                  <Card className="bg-transparent border-0 rounded-0 card-hover" onClick={() => handleClick(track)}>
                    <Card.Img variant="top" src={track.album.cover_big} className="rounded-0" />
                    <Card.Body>
                      <Card.Title className="text-white">
                        {track.title}{" "}
                        <Button
                          variant="outline-light"
                          className="border-0 p-0 px-1 rounded-5 mb-1"
                          onClick={(e) => handleLike(e, track.id)}
                        >
                          {likedTracks[track.id] ? (
                            <HeartFill className="fs-5" style={{ marginTop: "-3px" }} />
                          ) : (
                            <Heart className="fs-5" style={{ marginTop: "-3px" }} />
                          )}
                        </Button>
                      </Card.Title>{" "}
                      <Card.Subtitle className="mb-2 text-secondary">{track.artist.name}</Card.Subtitle>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          )}
        </Col>
      </Row>
      <BottomPlayer />
    </Container>
  );
}

export default MainComponent;
