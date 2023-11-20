"use client";
import * as React from "react";
import { Box, Button, Modal, Typography } from "@mui/material";
import { useState } from "react";

export default function Home() {
  const [open, setOpen] = useState(true);
  const handleClose = () => setOpen(false);

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
            maxWidth: { xs: "90%", md: "50%" },
            bgcolor: "background.paper",
            border: "2px solid #000",
            boxShadow: 24,
            p: 2,
          }}
        >
          <Box
            sx={{
              textAlign: "center", // タイトルを中央に配置
            }}
          >
            <Typography id="modal-modal-title" variant="h6" component="h2">
              ゲストWi-Fiへようこそ
            </Typography>
          </Box>
          <Typography
            id="modal-modal-description"
            sx={{ mt: 2, color: "red", fontweight: "bold" }}
          >
            このWI-Fiはこのデバイスの通信速度を低下させることができます。
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            動画ストリーミングなどの通信量を多く消費するコンテンツの利用を控えましょう。
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            通信量を多く消費するコンテンツの使用を控えると周囲の人のインターネット利用体験が向上します。
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            通信量を多く消費するコンテンツの利用を控えてください。
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            この30分であなたはYoutubeを20分見ていることを検出しました。
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            あなたの通信速度を制限することもできますが，ここで通信量を多く消費するコンテンツの利用を控えると，引き続き快適にネットワークを利用できます。
          </Typography>
          <Box sx={{ textAlign: "center", mt: 2 }}>
            <Button variant="contained" onClick={handleClose}>
              Close
            </Button>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
}
