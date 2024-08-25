import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Paper, IconButton, Stack } from "@mui/material";
import { Search } from "@mui/icons-material";
import "../index.css";
import { ColorLens } from "@mui/icons-material";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchTerm) {
      navigate(`/search/${searchTerm}`);

      setSearchTerm("");
    }
  };
  const [theme, setTheme] = useState("dark-theme");
  const [icon, seticon] = useState(false);

  const toggleTheme = () => {
    if (theme === "light-theme") {
      setTheme("dark-theme");
      seticon = false;
    } else {
      setTheme("light-theme");
      seticon = true;
    }
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <Stack flexDirection="row" alignItems="center" justifyContent="center">
      <Paper
        component="form"
        className="Search_border"
        onSubmit={handleSubmit}
        sx={{
          borderRadius: 20,
          border: "1px solid #e3e3e3",
          pl: 2,
          boxShadow: "none",
          mr: { sm: 5 },
        }}
      >
        <input
          className="search-bar"
          placeholder="Search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <IconButton
          type="submit"
          sx={{ p: "10px", color: "var(--almost-red)" }}
        >
          <Search />
        </IconButton>
      </Paper>
      <ColorLens fontSize="large" onClick={() => toggleTheme()} className="color" />
    </Stack>
  );
};

export default SearchBar;
