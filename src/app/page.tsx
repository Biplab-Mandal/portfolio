import BackgroundGrid from "@/components/background/background-grid";
import Footer from "@/components/layout/footer";
import Navbar from "@/components/layout/navbar";

export default function Home() {
  return (
    <>
      <BackgroundGrid />

      <Navbar />

      <main className="min-h-screen" />

      <Footer />
    </>
  );
}