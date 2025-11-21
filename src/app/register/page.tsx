import { Box, Container, Grid, Stack, TextField, Typography } from "@mui/material";
import React from "react";
import assets from "@/assets";
import Image from "next/image";

const RegisterPage = () => {
  return (
    <Container sx={{ padding: "50px" }}>
      <Stack sx={{ justifyContent: "center", alignItems: "center" }}>
        <Box
          sx={{
            maxWidth: 600,
            width: "100%",
            boxShadow: 1,
            borderRadius: 1,
            p: 4,
          }}
        >
          <Stack sx={{ justifyContent: "center", alignItems: "center" }} spacing={2}>
            <Box>
              <Image src={assets.svgs.logo} width={50} height={50} alt="logo" />
            </Box>

            <Typography variant="h6" sx={{ fontWeight: 600 }}>
              Register Your Account
            </Typography>
          </Stack>
          <Box>
            <Grid container spacing={2} my={2} >
              <Grid item md={12}>
                <TextField
                  id="outlined-basic"
                  label="Name"
                  variant="outlined"
                  size="small"
                  fullWidth={true}
                ></TextField>

              </Grid>

              <Grid item md={6}>
                <TextField
                  id="outlined-basic"
                  label="Email"
                  type="email"
                  variant="outlined"
                  size="small"
                  fullWidth={true}
                ></TextField>

              </Grid>
              <Grid item md={6}>
                <TextField
                  id="outlined-basic"
                  label="password"
                  variant="outlined"
                  size="small"
                  type="password"
                  fullWidth={true}
                ></TextField>

              </Grid>
              <Grid item md={6}>
                <TextField
                  id="outlined-basic"
                  label="Telephone"
                  variant="outlined"
                  size="small"
                  type="tel"
                  fullWidth={true}
                ></TextField>

              </Grid>
              <Grid item md={6}>
                <TextField
                  id="outlined-basic"
                  label="Address"
                  variant="outlined"
                  size="small"
                  fullWidth={true}
                ></TextField>
              </Grid>
            </Grid>
            <Button fullwidth={true} my={1}>Register</Button>
         <T 
          
          </Box>

        </Box>
      </Stack>
    </Container>
  );
};

export default RegisterPage;
