export const likeTrack = (trackId) => {
  return {
    type: "LIKE_TRACK",
    payload: trackId,
  };
};

export const unlikeTrack = (trackId) => {
  return {
    type: "UNLIKE_TRACK",
    payload: trackId,
  };
};
