import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

import FormatQuoteIcon from "@mui/icons-material/FormatQuote";

const Testimonial = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#000F2E",
        padding: 3,
        border: "1px solid #00C7FF",
        borderRadius: "10px",
        maxWidth: "315px",
        position: "relative",
        mx: 3,
      }}
    >
      <Typography variant="h4" color={"#33C7FF"}>React Developer</Typography>
      <Typography variant="body1" sx={{ color: "white", mb: 2 }}>
        A fast-growing consulting, application and digital transformation company,
        TECHZOLOGY offers an array of integrated Products & services combining
        industryleading technology with deep subject matter expertise
      </Typography>
      <Typography variant="body2">
        <span style={{ color: "#33C7FF", fontWeight: "bold" }}>
          React Developer(Jun 23- Sep 23)
        </span>
        <span style={{ color: "#7B89A8" }}> -Techzology limited, Lahore </span>
      </Typography>
      <FormatQuoteIcon
        style={{
          position: "absolute",
          top: "-20px",
          left: "-20px",
          color: "#00C7FF",
          height: "50px",
          width: "50px",
        }}
      />
    </Box>
  );
};

export default Testimonial;
