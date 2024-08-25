import React from "react";
import { Box } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import {
  Navbar,
  Feed,
  VideoDetail,
  ChannelDetail,
  SearchFeed,
} from "./components";
import "./index.css";

const App = () => (
  <Box sx={{ backgroundColor: "var(--black)" }}>
    <Navbar />
    <Routes>
      <Route path="/" exact element={<Feed />} />
      <Route path="/video/:id" exact element={<VideoDetail />} />
      <Route path="/channel/:id" exact element={<ChannelDetail />} />
      <Route path="/search/:searchTerm" exact element={<SearchFeed />} />
    </Routes>
  </Box>
);

export default App;
