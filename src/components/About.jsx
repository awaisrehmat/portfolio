import { Box, Button, Card, Typography, styled } from "@mui/material";
import React from "react";
import Testimonial from "./Testimonial";

const About = () => {
  const CustomBox = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "space-around",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      alignItems: "center",
      gap: "2rem",
    },
  }));

  const CustomTitleBox = styled(Box)(({ theme }) => ({
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      alignItems: "center",
      gap: "2rem",
    },
  }));

  const CustomButton = styled(Button)(({ theme }) => ({
    border: "3px solid white",
    borderRadius: "25px",
    color: "white",
    width: "15%",
    display: "block",
    "&:hover": {
      border: "3px solid #00C7FF",
    },
    [theme.breakpoints.down("md")]: {
      width: "50%",
    },
    [theme.breakpoints.down("sm")]: {
      width: "75%",
    },
  }));

  return (
    <Box sx={{ maxWidth: "1300px", my: 10, padding: 3, mx: "auto" }} id="about">
      <CustomTitleBox
        sx={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        <Typography
          variant="h4"
          style={{ color: "white", textAlign: "center" }}
        >
          Past Experience
        </Typography>
        <div
          style={{
            height: "5px",
            backgroundColor: "#00C7FF",
            width: "50%",
            border: 0,
            borderRadius: "25px",
          }}
        ></div>
      </CustomTitleBox>

      <CustomBox sx={{ my: 7 }}>
        {/* <Testimonial /> */}
        {/* <Testimonial /> */}
        <Testimonial />
      </CustomBox>

      <div
        style={{
          height: "5px",
          backgroundColor: "#00C7FF",
          width: "100%",
          mx: "auto",
          border: 0,
          borderRadius: "25px",
        }}
      ></div>

      <Typography
        variant="h4"
        sx={{ color: "white", mt: 12, textAlign: "center" }}
      >
        Download Resume
      </Typography>
      {/* <Button
        href={require("../media/Awais Ali_MERN Stack Developer.pdf")}
        download="Awais Ali_MERN Stack Developer  "
        size="small"
      >
        Download File
      </Button> */}
      <br></br>
      <br></br>

      <Card elevation={5} sx={{ border: 0 }}>
        <iframe
          src="https://drive.google.com/file/d/1G9UvCDyGPNT6wLX-jHoNqE64ydgm-Kkq/preview"
          frameBorder="0"
          scrolling="auto"
          height="400"
          width="100%"
          style={{
            display: "block",
          }}
        ></iframe>
      </Card>

      <CustomButton
        variant="outlined"
        sx={{
          mx: "auto",
          mt: 3,
          mb: 8,
          textAlign:'center'
        }}
        href={require("../media/Awais Ali_MERN Stack Developer.pdf")}
        download="Awais Ali_MERN Stack Developer  "
        size="small"
      >
        Download Resume
      </CustomButton>
    </Box>
  );
};

export default About;
