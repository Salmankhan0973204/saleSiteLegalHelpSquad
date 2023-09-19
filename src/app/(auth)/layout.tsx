import LeftSide from "@/sections/auth/sign-up/leftSide";
import { Grid, Typography, Link, Button } from "@mui/material";

export default function AuthLayout({ children }: any) {
  return (
    <section>
      <Grid container>
        <Grid item xs={12} sm={12} md={12} lg={6}>
          <LeftSide />
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={6}>
          {children}
        </Grid>
      </Grid>
    </section>
  );
}
