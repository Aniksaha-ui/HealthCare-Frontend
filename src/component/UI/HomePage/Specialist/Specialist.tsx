import { baseUrl } from "@/assets/url/BaseUrl";
import { Box, Container, Typography } from "@mui/material";
import React from "react";

const Specialist = async () => {
  const res = await fetch(`${baseUrl}/specialties`, {
    next: {
      revalidate: 30,
    },
  });
  const { data: specialties } = await res.json();
  return (
    <Container>
      <Box
        sx={{
          margin: "40px 0px",
          textAlign: "center",
        }}
      >
        <Box
          sx={{
            textAlign: "start",
          }}
        >
          <Typography variant="h4" fontWeight={600}>
            Explore Treatment Access Specialist
          </Typography>
          <Typography variant="h4" fontWeight={300} fontSize={18}>
            Exprienced Doctor Accross All Specialist
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default Specialist;
