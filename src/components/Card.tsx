import { Box, Stack, Typography } from "@mui/material";
import React, { FC } from "react";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import TimelineIcon from "@mui/icons-material/Timeline";
import CallSplitIcon from '@mui/icons-material/CallSplit';

type Props = {
  iconType: string;
  title: string;
  description: string;
};

export const Card: FC<Props> = ({ iconType, title, description }) => {
  const iconManagement = (iconType: string) => {
    switch (iconType) {
      case "eye":
        return <RemoveRedEyeIcon sx={{ fontSize: 80 }} />;
      case "graph":
        return <TimelineIcon sx={{ fontSize: 80 }} />;
      case "time":
        return <CallSplitIcon sx={{ fontSize: 80 }} />;
      default:
        return <RemoveRedEyeIcon sx={{ fontSize: 80 }} />;
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
        bgcolor: "background.paper",
        color: "#000000",
        borderRadius: "10px",
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
