"use client";
import { Box, Button, Modal, Stack, Typography } from "@mui/material";
import * as React from "react";
import ArrowDropDownTwoToneIcon from "@mui/icons-material/ArrowDropDownTwoTone";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Card } from "@/components/Card";
import { useState } from "react";

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
    description:
      "他の人の比べて30%も多く周囲の人の作業を阻害するコンテンツ使用しています。",
  },
  {
    iconType: "time",
    title: "速度制限",
    description:
      "動画ストリーミングの利用を控えることで、引き続き快適な通信速度を利用できます。",
  },
];

export default function Home() {
  const [pattern, setPattern] = useState(3);
  const [open, setOpen] = useState(true);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <Box sx={{ height: "100vh", bgcolor: "#F0F3F6" }}></Box>
      <Modal
        open={open}
        onClose={handleClose}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            bgcolor: "#F0F3F6",
            p: 1.5,
            width: "95%",
            borderRadius: "5px",
            maxHeight: "90vh", // ここに最大高さを設定
            overflow: "auto", // スクロール可能にするための設定
          }}
        >
          <Stack alignItems={"center"} spacing={1} sx={{ textAlign: "center" }}>
            <Typography
              variant="body1"
              color="initial"
              sx={{ fontSize: 24, fontWight: "medium", color: "#000000" }}
            >
              Welcome Guest Wi-Fi
            </Typography>
            {pattern >= 2 && (
              <Typography
                variant="body1"
                color="initial"
                sx={{
                  color: "red",
                  border: 1,
                  borderColor: "error.main",
                  borderRadius: "8px",
                  fontWeight: "bold",
                  p: 1,
                }}
              >
                このWi-Fiは、あなたが通信量を多く消費すると通信速度を制限することができます。
              </Typography>
            )}
            <Stack
              alignItems={"center"}
              spacing={0}
              sx={{ textAlign: "center" }}
            >
              <Typography
                variant="body1"
                color="initial"
                sx={{ color: "#000000" }}
              >
                SNS、動画ストリーミング、大容量ファイルのダウンロードなど、帯域幅を大きく消費する活動は控えてください。これらはネットワークの負担を増やし、他のユーザーの通信速度に悪影響を与える可能性があります。
              </Typography>
              {pattern >= 1 && (
                <>
                  <ArrowDropDownTwoToneIcon
                    sx={{ fontSize: 60, color: "#000000" }}
                  />
                  <Typography
                    variant="body1"
                    color="initial"
                    sx={{
                      color: "#000000",
                      border: 1,
                      borderColor: "#000000",
                      borderRadius: "8px",
                      p: 1,
                    }}
                  >
                    このような他者への小さな配慮がネットワークの混雑を緩和させ、他の利用者のインターネット体験を向上させることに貢献します。
                  </Typography>
                </>
              )}
            </Stack>

            {pattern == 3 && (
              <Card
                iconType={"eye"}
                title={"モニタリング結果"}
                description={"Youtube: 20分\nTikTok: 13分\nInstagram: 5分"}
              />
            )}
            {pattern == 4 && (
              <Card
                iconType={"graph"}
                title={"他の人との比較"}
                description={
                  "あなたは他の人に比べて30%も多く、周囲の人の作業に支障をきたすようなコンテンツを利用しています。"
                }
              />
            )}
            {pattern == 5 && (
              <Card
                iconType={"time"}
                title={"シミュレーションの結果"}
                description={
                  "SNSや動画ストリーミングの利用を控えることで、あなたの通信速度を制限することなくインターネットを利用できます。継続して利用した場合は、通信速度が制限される可能性があります。"
                }
              />
            )}
            <Button variant="contained" onClick={handleClose}>
              閉じる
            </Button>
          </Stack>
        </Box>
      </Modal>
    </>
  );
}
