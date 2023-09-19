import Navbar from "@/sections/navbar/navbar";
import Footer from "@/sections/footer/footer";
import { Box } from "@mui/material";

export default function PageLayout({ children }: any) {
  return (
    <section>
      <Navbar />
      <Box>{children}</Box>
      <Footer />
    </section>
  );
}
