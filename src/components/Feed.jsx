import { useState, useEffect } from "react";
import { Box, Stack, Typography } from "@mui/material";
import { Sidebar, Videos } from "./";
import { fetchFromApi } from "../utils/fetchFromApi";
import '../index.css';

const Feed = () => {
  // ignore start
  const d = new Date();
  const year = d.getFullYear();
  // ignore end

  const [selectedCategory, setSelectedCategory] = useState('New');
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchFromApi(`search?part=snippet&q=${selectedCategory}`)
      .then((data) => setVideos(data.items))
  }, [selectedCategory]);

  return (
    // sidebar
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Box
        sx={{
          height: { sx: "auto", md: "92vh" },
          borderRight: "1px solid #3d3d3d",
          px: { sx: 0, md: 2 },
        }}
      >
        <Sidebar 
          selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}
        />

        <Typography
          className="copyright"
          variant="body2"
          sx={{ mt: 1.5, color: "var(--white)" }}
        >
          Copyright {year} PlayDoe India
        </Typography>
      </Box>
      {/* videos */}
      <Box p={1.5} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
        <Typography
          variant="h4"
          fontWeight="bold"
          mb={2}
          sx={{ color: "var(--white)", textAlign: "center" }}
        >
          {selectedCategory} <span style={{ color: "var(--some-red)" }}>videos</span>
        </Typography>

        <Videos videos={videos} />
      </Box>
    </Stack>
  );
};
// #717171 color
export default Feed;
