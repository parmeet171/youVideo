import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import { Typography, Box, Stack } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import "../index.css";
import { Videos } from "./";
import { fetchFromApi } from "../utils/fetchFromApi";
import Comments from "./Comments";
import '../index.css';

const VideoDetail = () => {
  const [videoDetail, setVideoDetail] = useState(null);
  const [videos, setVideos] = useState(null);
  const [comments, setComments] = useState([]);
  const [fetchComments, setFetchComments] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    fetchFromApi(`videos?part=snippet,statistics&id=${id}`).then((data) =>
      setVideoDetail(data.items[0])
    );

    fetchFromApi(`search?part=snippet&relatedToVideoId=${id}&type=video`).then(
      (data) => setVideos(data.items)
    );

    fetchFromApi(
      `commentThreads?part=snippet&videoId=${id}&maxResults=100`
    ).then((data) => setComments(data.items));
  }, [id]);

  // fetchComments = comments;

  if (!videoDetail?.snippet) return "Loading...";

  // console.log(comments);

  const {
    snippet: { title, channelId, channelTitle, textDisplay },
    statistics: { viewCount, likeCount },
  } = videoDetail;

  return (
    <Box minHeight="auto">
      <Stack direction={{ xs: "column", md: "row" }}>
        <Box flex={1}>
          <Box sx={{ width: "100%", top: "86px", scrollBehavior: "smooth" }}>
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${id}`}
              className="react-player"
              controls
            />
            <Typography color="var(--white)" variant="h5" fontWeight="bold" p={2}>
              {title}
            </Typography>
            <Stack
              direction="row"
              justifyContent="space-between"
              sx={{ color: "var(--white)" }}
              py={1}
              px={2}
            >
              <Link to={`/channel/${channelId}`}>
                <Typography
                  variant={{ sm: "subtitle1", md: "h6" }}
                  color="var(--white)"
                >
                  {channelTitle}
                  <CheckCircle
                    sx={{ fontSize: "12px", color: "var(--gray)", ml: "5px" }}
                  />
                </Typography>
              </Link>
              <Stack direction="row" gap="20px" alignItems="center">
                <Typography variant="body1" sx={{ opacity: 0.7 }}>
                  {parseInt(viewCount).toLocaleString()} views
                </Typography>
                <Typography variant="body1" sx={{ opacity: 0.7 }}>
                  {parseInt(likeCount).toLocaleString()} likes
                </Typography>
              </Stack>
            </Stack>
            <Stack
              direction="row"
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <h2 className="comments">Comments</h2>
              <Stack direction="row" sx={{ marginRight: "20px" }}>
                {fetchComments ? (
                  <button
                    style={{ padding: "10px 20px" }}
                    onClick={() => setFetchComments(false)}
                    x
                  >
                    hide
                  </button>
                ) : null}
                {!fetchComments ? (
                  <button
                    style={{ padding: "10px 20px" }}
                    onClick={() => setFetchComments(true)}
                    x
                  >
                    show
                  </button>
                ) : null}
              </Stack>
            </Stack>
            <Stack className="comments_container">
              {comments.map((comment, idx) => (
                <Box key={idx}>
                  {fetchComments ? <Comments comment={comment} /> : null}
                </Box>
              ))}
            </Stack>
          </Box>
        </Box>
        <Box
          px={2}
          py={{ md: 1, ms: 5 }}
          justifyContent="center"
          alignItems="center"
        >
          <Videos videos={videos} direction="column" />
        </Box>
      </Stack>
    </Box>
  );
};

export default VideoDetail;
