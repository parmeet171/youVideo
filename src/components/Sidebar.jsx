import { Stack } from "@mui/material";
import { categories } from "../utils/constants";
import "../index.css";

const Sidebar = ({ selectedCategory, setSelectedCategory }) => (
  <Stack
    direction="row"
    sx={{
      overflowY: "auto",
      height: { sx: "auto", md: "95%" },
      flexDirection: { md: "column" },
    }}
  >
    {categories.map((category) => (
      <button
        className="category-btn"
        onClick={() => {
          setSelectedCategory(category.name);
        }}
        style={{
          background: category.name === selectedCategory && "var(--almost-red)",
          color: "var(--white)",
        }}
        key={category.name}
      >
        <span
          style={{
            color:
              category.name === selectedCategory
                ? "var(--white)"
                : "var(--some-red)",
            marginRight: "15px",
          }}
        >
          {category.icon}{" "}
        </span>
        <span
          style={{ opacity: category.name === selectedCategory ? "1" : "0.8" }}
        >
          {category.name}
        </span>
      </button>
    ))}
  </Stack>
);

export default Sidebar;
