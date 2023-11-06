"use client";

import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MobileStepper from "@mui/material/MobileStepper";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    imgPath:
      //   'https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60',
      "https://img.freepik.com/free-photo/doctor-with-stethoscope-hands-hospital-background_1423-1.jpg?w=1060&t=st=1699076591~exp=1699077191~hmac=d4cc8a1ca67c44d5a7bc7e64b9a10d77e081f8984863ad8d397c6086fe198b79",
    //    './assest/logo_make_11_06_2023_324.jpg',
    //
  },
  {
    imgPath:
      //   'https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60',
      "https://img.freepik.com/premium-photo/doctor-hold-icon-health-electronic-medical-record-interface-digital-healthcare-network_34200-712.jpg?w=1380",
  },
  {
    imgPath:
      //   'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250',
      "https://images.unsplash.com/photo-1624343285636-aba82fd5a124?auto=format&fit=crop&q=80&w=2071&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },

  {
    imgPath:
      //   'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60',
      "https://img.freepik.com/premium-photo/modern-commercial-architecture-glass-steel-forum-skyscraper-reflecting-blue-sky_250132-16918.jpg?w=1060",
  },
];

function SwipeableTextMobileStepper() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <Box sx={{ maxWidth: 1500, flexGrow: 1 }}>
      <Paper
        square
        elevation={0}
        sx={{
          display: "flex",
          alignItems: "center",
          height: 50,
          pl: 2,
          bgcolor: "background.default",
        }}
      >
        <Typography>{images[activeStep].label}</Typography>
      </Paper>
      <AutoPlaySwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {images.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Box
                component="img"
                sx={{
                  //   height:400,
                  display: "block",
                  maxWidth: 1500,
                  overflow: "hidden",
                  width: "100%",
                  aspectRatio: 8 / 2,
                }}
                src={step.imgPath}
                alt={step.label}
              />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
        
     steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            // onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            {/* Next */}
            {/* {theme.direction === 'rtl' ? ( */}
            {/* //   <KeyboardArrowLeft /> */}
            {/* // ) : ( */}
            {/* //   <KeyboardArrowRight /> */}
            {/* )} */}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {/* {theme.direction === 'rtl' ? ( */}
            {/* <KeyboardArrowRight /> */}
            {/* : ( */}
            {/* <KeyboardArrowLeft /> */}
            {/* ) */}
            {/* Back */}
          </Button>
        }
      />
    </Box>
  );
}

export default SwipeableTextMobileStepper;