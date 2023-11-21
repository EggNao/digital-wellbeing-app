import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";

type Props = {
  iconType: string;
  title: string;
  description: string;
};

export const Card = () => {
  return (
    <Box
      sx={{
        width: { xs: "90%", md: "80%" },
        bgcolor: "background.paper",
        boxShadow: 24,
        m: 4,
        p: 2,
        borderRadius: "8px",
      }}
    >
      <Stack spacing={2}>
        <Box sx={{ textAlign: "center" }}>
          <VolunteerActivismIcon style={{ fontSize: 100 }} />
        </Box>
        <Box sx={{ textAlign: "center" }}>
          <Typography variant="h6" component="h2">
            ようこそゲストWi-Fiへ！
          </Typography>
        </Box>
        <Typography variant="body1" component="h2" sx={{ textAlign: "center" }}>
          このWi-Fiは利用者が公平にネットワークを利用できるようにいくつかのルールがあります。
        </Typography>
      </Stack>
    </Box>
  );
};
