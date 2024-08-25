import { Link } from "react-router-dom";
import { Typography, Card, CardContent, CardMedia } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import {
  demoThumbnailUrl,
  demoVideoUrl,
  demoVideoTitle,
  demoChannelUrl,
  demoChannelTitle,
  demoProfilePicture,
} from "../utils/constants";
import '../index.css';

const VideoCard = ({
  video: {
    id: { videoId },
    snippet,
  }
}) => {
  return (
    <Card
      sx={{
        width: { xs: "90%", sm: "358px", md: "320px" },
        boxShadow: "none",
        borderRadius: "10px",
        // margin: { xs: "0 10px" }
        margin: { xs: "auto" }
      }}
    >
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        <CardMedia
          image={snippet?.thumbnails?.high?.url || demoThumbnailUrl}
          alt={snippet?.title}
          sx={{
            width: { xs: "100%", sm: "358px", md: "320px" },
            height: 180,
            objectFit: "cover",
          }}
        />
      </Link>
      <CardContent sx={{ backgroundColor: "var(--almost-black)", height: "106px" }}>
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
          {/* <Link to={`/channel/${channelDetail?.id?.channelId}`}>
            <img
              style={{ height: "30px", width: "30px", borderRadius: "50%" }}
              src={channelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture}
              alt=""
            />
          </Link> */}

          <Typography variant="subtitle1" fontWeight="bold" color="var(--white)">
            {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
          </Typography>
        </Link>
        <Link
          to={
            snippet?.channelId
              ? `/channel/${snippet?.channelId}`
              : demoChannelUrl
          }
        >
          <Typography variant="subtitle2" color="var(--white)">
            {snippet?.channelTitle || demoChannelTitle}
            <CheckCircle sx={{ fontSize: 12, color: "var(--gray)", ml: "5px" }} />
          </Typography>
        </Link>

      </CardContent>
    </Card>
  );
};

export default VideoCard;
