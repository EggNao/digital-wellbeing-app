"use client";
import * as React from "react";
import { Box, Button, Modal, Stack, Typography } from "@mui/material";
import { useState } from "react";
import { Card } from "@/components/Card";
import PeopleIcon from "@mui/icons-material/People";
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";
import HourglassTopIcon from "@mui/icons-material/HourglassTop";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";

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
        <Box sx={{ bgcolor: "#F0F3F6", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <Card />
        </Box>
      </Modal>
    </Box>
  );
}
