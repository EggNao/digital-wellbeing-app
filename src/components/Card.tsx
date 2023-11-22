import { Box, Stack, Typography } from "@mui/material";
import React, { FC } from "react";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import TimelineIcon from "@mui/icons-material/Timeline";
import HourglassTopIcon from "@mui/icons-material/HourglassTop";

type Props = {
  iconType: string;
  title: string;
  description: string;
};

export const Card: FC<Props> = ({ iconType, title, description }) => {
  const iconManagement = (iconType: string) => {
    switch (iconType) {
      case "eye":
        return <RemoveRedEyeIcon sx={{ fontSize: 100 }} />;
      case "graph":
        return <TimelineIcon sx={{ fontSize: 100 }} />;
      case "time":
        return <HourglassTopIcon sx={{ fontSize: 100 }} />;
      default:
        return <RemoveRedEyeIcon sx={{ fontSize: 100 }} />;
    }
  };

  const descriptionLines = description.split("\n").map((line, index) => (
    <React.Fragment key={index}>
      {line}
      <br />
    </React.Fragment>
  ));
  return (
    <Box
      sx={{
        width: "100%",
        height: "300px",
        bgcolor: "background.paper",
        p: 2,
      }}
    >
      <Stack spacing={2} alignItems={"center"}>
        <Box>{iconManagement(iconType)}</Box>
        <Box>
          <Typography variant="h6" component="h2">
            {title}
          </Typography>
        </Box>
        <Typography variant="body1" component="h2">
          {descriptionLines}
        </Typography>
      </Stack>
    </Box>
  );
};
