"use client";
import { Box, Button, Stack, Typography } from "@mui/material";
import * as React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import Swiper core and required modules
import { Navigation, Pagination } from "swiper/modules";
import { useRef } from "react";
import { Card } from "@/components/Card";

// スライドのデータを表す配列
const slidesData = [
  {
    iconType: "eye",
    title: "検出コンテンツ",
    description: "Youtube: 20分\nTikTok: 13分\nInstagram: 5分",
  },
  {
    iconType: "graph",
    title: "他の人との比較",
    description: "他の人の比べて30%多くネットワーク資源を使用しています。",
  },
  {
    iconType: "time",
    title: "通信制限",
    description:
      "ここで動画ストリーミングの利用を中断することで、あなたは通信速度を制限されることなくコンテンツを利用できます。",
  },
];

export default function Home() {
  const swiperRef = useRef(null); // Swiperへの参照を作成
  const digitalIcon = "/digital.png";

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
    <Box sx={{ bgcolor: "#F0F3F6", p: 2 }}>
      <Stack alignItems={"center"} spacing={2} sx={{ textAlign: "center" }}>
        <Typography
          variant="body1"
          color="initial"
          sx={{ fontSize: 24, fontWight: "medium" }}
        >
          ようこそゲストWi-Fiへ
        </Typography>
        <Typography variant="body1" color="initial" sx={{ color: "red" }}>
          あなたが通信量を多く必要とするコンテンツを利用し続けると通信速度を制限することがあります。
        </Typography>
        <Typography variant="body1" color="initial">
          ネットワーク資源は限られています。通信量を多く必要とするコンテンツの利用は控えてください。
        </Typography>
        <Box sx={{ bgcolor: "#FFFFFF", p: 1.5, borderRadius: "10px" }}>
          <Stack direction={"row"} alignItems={"center"}>
            <Typography variant="body1" color="initial">
              SNSや動画ストリーミングの利用を控えることで、通信の混雑を緩和させ、周囲の人たちがメイン作業を快適に取り組むことができます。
            </Typography>
            <Box
              component={"img"}
              src={digitalIcon}
              width="80px"
              height="80px"
            />
          </Stack>
        </Box>
        <Box
          sx={{
            width: "100%", // スマホでは300px、それ以上では500px
            height: "300px", // スマホでは200px、それ以上では350px
            borderRadius: "10px",
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
  );
}
