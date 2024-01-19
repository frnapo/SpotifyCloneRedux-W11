import { Navbar, Container, ProgressBar, Card } from "react-bootstrap";
import { PlayFill, Shuffle, SkipForwardFill, SkipBackwardFill, Repeat } from "react-bootstrap-icons";
import { useSelector } from "react-redux";

function BottomPlayer() {
  function formatTrackDuration(durationInSeconds) {
    const minutes = Math.floor(durationInSeconds / 60);
    const seconds = durationInSeconds % 60;
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  }

  const currentTrack = useSelector((state) => state.player.currentTrack);
  return (
    <Navbar fixed="bottom" bg="dark" variant="dark" className="custom-bottom-player-nav" style={{ height: "100px" }}>
      <div className="song-details">
        {currentTrack && (
          <Card className="bg-transparent border-0">
            <Card.Body>
              <div className="d-flex" style={{ width: "170px" }}>
                <Card.Img src={currentTrack.album.cover_big} className="rounded-0 me-2" style={{ width: "70px" }} />
                <div style={{ maxHeight: "70px" }}>
                  <Card.Text className="text-white mb-0 card-track-details"> {currentTrack.title}</Card.Text>
                  <Card.Text className="text-secondary card-track-details mt-1">{currentTrack.artist.name}</Card.Text>
                </div>
              </div>
            </Card.Body>
          </Card>
        )}
      </div>
      <Container className="d-flex flex-column align-items-center pt-2 pb-2 custom-bottom-player">
        {/* regolato in base alla width minima della nav */}

        <div className={`d-flex justify-content-center mb-2 ${currentTrack ? "mt-4" : ""}`}>
          <Shuffle className="fs-4 custom-player-buttons mt-2 me-3" />

          <SkipBackwardFill className="fs-4 custom-player-buttons mt-2" />

          <PlayFill className="fs-1 custom-player-buttons mx-3" />

          <SkipForwardFill className="fs-4 custom-player-buttons mt-2" />
          <Repeat className="fs-4 custom-player-buttons mt-2 ms-3" />
        </div>
        <div className="d-flex">
          {currentTrack && <p className="text-secondary me-3 track-duration">0:00</p>}
          <ProgressBar now={0} className="w-100 custom-progress-bar mt-1" />
          {currentTrack && (
            <p className="text-secondary ms-3 track-duration">{formatTrackDuration(currentTrack.duration)}</p>
          )}
        </div>
      </Container>
    </Navbar>
  );
}

export default BottomPlayer;
