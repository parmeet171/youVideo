import React from "react";
import { Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { logo } from "../utils/constants";
import SearchBar from "./SearchBar";
import '../index.css';

const Navbar = () => (
  <Stack
    direction="row"
    alignItems="center"
    p={2}
    sx={{
      position: "sticky",
      background: "var(--black)",
      top: 0,
      justifyContent: "space-between",
      borderBottom: '1px solid #3d3d3d'
    }}
  >
    <Link to="/" style={{ display: 'flex', alignItems: 'center' }}>
        <img src={logo} alt='logo' height={45} />
        <Typography sx={{ color: 'var(--white)', ml: "10px" }}>
          PLAYDOE
        </Typography>
    </Link>
    <SearchBar />
    
  </Stack>
);

export default Navbar;
