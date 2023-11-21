"use client";
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation"; // スタイルをインポート
import "swiper/css/pagination"; // スタイルをインポート

// import Swiper core and required modules
import { Navigation, Pagination } from "swiper/modules";
import { Box, Typography } from "@mui/material";

export default function App() {
  return (
    <Box className="App" padding={2} sx={{ height: "100vh" }}>
      <Typography variant={"h4"} align={"center"} fontWeight={700}>
        Swiper + Material-UI example
      </Typography>
      <Box marginTop={4}>
        <Swiper
          modules={[Navigation, Pagination]}
          pagination
          navigation
          className="mySwiper"
        >
          {["Slide 1", "Slide 2", "Slide 3"].map((item, i) => (
            <SwiperSlide key={i}>
              <Box>
                <Typography variant={"h6"} align={"center"}>
                  {item}
                </Typography>
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </Box>
  );
}
