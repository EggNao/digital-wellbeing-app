import { Box, Stack, Typography } from "@mui/material";
import React, { FC } from "react";
import PeopleIcon from "@mui/icons-material/People";
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";
import HourglassTopIcon from "@mui/icons-material/HourglassTop";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import { BorderClear } from "@mui/icons-material";

type Props = {
  iconType: 'welcome' | 'time' | 'blance' | 'bell' | 'eye' | 'peace' | 'heart' | string;
  title: string;
  description: string;
};

export const Card: FC<Props> = ({ iconType, title, description }) => {
  const timeIcon = "/time.png";
  const blanceIcon = "/blance.png";
  const bellIcon = "/bell.png";
  const eyeIcon = "/eye.png";
  const welcomeIcon = "/welcome.png";
  const peaceIcon = "/peace.png";
  const heartIcon = "/heart.png";

  const iconManagement = (iconType: string) => {
    switch (iconType) {
      case "time":
        return <Box component={"img"} src={timeIcon} height={100} />;
      case "blance":
        return <Box component={"img"} src={blanceIcon} height={100} />;
      case "bell":
        return <Box component={"img"} src={bellIcon} height={100} />;
      case "eye":
        return <Box component={"img"} src={eyeIcon} height={100} />;
      case "welcome":
        return <Box component={"img"} src={welcomeIcon} height={100} />;
      case "peace":
        return <Box component={"img"} src={peaceIcon} height={100} />;
      case "heart":
        return <Box component={"img"} src={heartIcon} height={100} />;
      default:
        return <Box component={"img"} src={timeIcon} height={100} />;
    }
  };
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
         {iconManagement(iconType)}
        </Box>
        <Box sx={{ textAlign: "center" }}>
          <Typography variant="h6" component="h2">
           {title}
          </Typography>
        </Box>
        <Typography variant="body1" component="h2" sx={{ textAlign: "center" }}>
          {description}
        </Typography>
      </Stack>
    </Box>
  );
};
