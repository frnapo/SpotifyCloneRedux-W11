import { Navbar, Container, ProgressBar } from "react-bootstrap";
import { PlayFill, Shuffle, SkipForwardFill, SkipBackwardFill, Repeat } from "react-bootstrap-icons";

function BottomPlayer() {
  return (
    <Navbar fixed="bottom" bg="dark" variant="dark" className="custom-bottom-player-nav" style={{ height: "100px" }}>
      <Container className="d-flex flex-column align-items-center pt-2 pb-2 custom-bottom-player">
        {/* regolato in base alla width minima della nav */}
        <div className="d-flex justify-content-center mb-2">
          <Shuffle className="fs-4 custom-player-buttons mt-2 me-3" />

          <SkipBackwardFill className="fs-4 custom-player-buttons mt-2" />

          <PlayFill className="fs-1 custom-player-buttons mx-3" />

          <SkipForwardFill className="fs-4 custom-player-buttons mt-2" />
          <Repeat className="fs-4 custom-player-buttons mt-2 ms-3" />
        </div>
        <ProgressBar now={0} className="w-100 custom-progress-bar" />
      </Container>
    </Navbar>
  );
}

export default BottomPlayer;
