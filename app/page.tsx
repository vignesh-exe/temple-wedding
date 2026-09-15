import HeroSection from "@/components/HeroSection";
import WelcomeSection from "@/components/WelcomeSection";
import StorySection from "@/components/StorySection";
import WeddingAndReceptionSection from "@/components/WeddingAndReceptionSection";
import GallerySection from "@/components/GallerySection";
import CountdownSection from "@/components/CountdownSection";
import VenueSection from "@/components/VenueSection";
import ClosingSection from "@/components/ClosingSection";
import Navbar from "@/components/Navbar";
import FloatingLanterns from "@/components/FloatingLanterns";
import MusicPlayer from "@/components/MusicPlayer";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#070408]">
      <Navbar />

      {/* Global floating lantern atmosphere */}
      <FloatingLanterns />

      {/* Global wedding music player */}
      <MusicPlayer />

      {/* =====================================================
          INVITATION FLOW
      ====================================================== */}

      <div className="relative z-[1]">
        <HeroSection />

        <div className="-mt-6 sm:-mt-8">
          <WelcomeSection />
        </div>

        <div className="-mt-6 sm:-mt-10">
          <StorySection />
        </div>

        <div className="-mt-8 sm:-mt-12">
          <WeddingAndReceptionSection />
        </div>

        <div className="-mt-8 sm:-mt-12">
          <GallerySection />
        </div>

        <div className="-mt-8 sm:-mt-12">
          <CountdownSection />
        </div>

        <div className="-mt-8 sm:-mt-12">
          <VenueSection />
        </div>

        <div className="-mt-8 sm:-mt-12">
          <ClosingSection />
        </div>
      </div>
    </main>
  );
}
