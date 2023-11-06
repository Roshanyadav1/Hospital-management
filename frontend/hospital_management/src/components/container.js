import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { Grid } from "@mui/material";

export default function FixedContainer() {
  return (
    <React.Fragment>
      <CssBaseline />

      <Container
        // fixed
        sx={{
          width: "100wh",
        //   margin: "0px",
        }}
      >
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
            <Grid item xs={12}  md={3}>
            <h1>xs=1</h1>
             </Grid>
          <Grid item xs={12}  md={3}>
            <h1>xs=2</h1>
          </Grid>

          <Grid item xs={12}  md={3}>
            <h1>xs=3</h1>
          </Grid>

          <Grid item xs={12}  md={3}>
            <h1>xs=4</h1>
          </Grid>

        </Grid>
      </Container>
    </React.Fragment>
  );
}
