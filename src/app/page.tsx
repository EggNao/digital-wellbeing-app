"use client";
import * as React from "react";
import { Box, Button, Modal, Stack, Typography } from "@mui/material";
import { useRef, useState } from "react";
import { Card } from "@/components/Card";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import Swiper core and required modules
import { Navigation, Pagination } from "swiper/modules";

// スライドのデータを表す配列
const slidesData = [
  {
    iconType: "welcome",
    title: "ようこそゲストWi-Fiへ",
    description:
      "動画ストリーミングなどの通信量を多く消費するコンテンツの利用を控えましょう。",
  },
  {
    iconType: "peace",
    title: "思いやり",
    description:
      "通信量を多く消費するコンテンツの使用を控えると周囲の人のインターネット利用体験が向上します。",
  },
  {
    iconType: "bell",
    title: "協力",
    description: "通信量を多く消費するコンテンツの利用を控えてください。",
  },
  {
    iconType: "eye",
    title: "検出",
    description: "この30分であなたはYoutubeを20分見ていることを検出しました。",
  },
  {
    iconType: "balance",
    title: "制限",
    description:
      "あなたの通信速度を制限することもできますが，ここで通信量を多く消費するコンテンツの利用を控えると，引き続き快適にネットワークを利用できます。",
  },
];

export default function Home() {
  const [open, setOpen] = useState(true);
  const handleClose = () => setOpen(false);
  const swiperRef = useRef(null); // Swiperへの参照を作成

  const goNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const goPrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };
  return (
    <Box sx={{ height: "100vh" }}>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            bgcolor: "#F0F3F6",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            p: 4,
          }}
        >
          <Stack alignItems="center">
            <Typography variant="h5" sx={{ fontWeight: "bold" }}>
              Persuasive Wi-Fi
            </Typography>
            <Typography variant="body1" sx={{ mt: 2, color: "red" }}>
              このWi-Fiは通信量を多く消費するデジタルコンテンツを利用した場合に通信速度を制限することがあります。
            </Typography>
            <Box
              sx={{
                width: { xs: "350px", sm: "500px" }, // スマホでは300px、それ以上では500px
                height: { xs: "200px", sm: "350px" }, // スマホでは200px、それ以上では350px
              }}
            >
              <Swiper
                modules={[Navigation, Pagination]}
                pagination
                navigation
                className="mySwiper"
                slidesPerView={1}
                ref={swiperRef}
              >
                {slidesData.map((slide, index) => (
                  <SwiperSlide key={index}>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        height: "100%",
                      }}
                    >
                      <Card
                        iconType={slide.iconType}
                        title={slide.title}
                        description={slide.description}
                      />
                    </Box>
                  </SwiperSlide>
                ))}
              </Swiper>
            </Box>
            <Stack direction={"row"} spacing={6}>
              <Button variant="contained" onClick={goPrev}>
                前へ
              </Button>
              <Button variant="contained" onClick={goNext}>
                次へ
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Modal>
    </Box>
  );
}
