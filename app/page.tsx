import { ArtDefs } from "@/components/Art";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Archive } from "@/components/Archive";
import { TryTheLook } from "@/components/TryTheLook";
import { PickASilk } from "@/components/PickASilk";
import { Rack } from "@/components/Rack";
import { MuseFilm } from "@/components/MuseFilm";
import { MuseReels } from "@/components/MuseReels";
import { Bridal } from "@/components/Bridal";
import { Wholesale } from "@/components/Wholesale";
import { Weave } from "@/components/Weave";

export default function Home() {
  return (
    <main id="main">
      <ArtDefs />
      <Navbar />
      <Hero />
      <Archive />
      <TryTheLook />
      <PickASilk />
      <Rack />
      <MuseFilm />
      <MuseReels />
      <Bridal />
      <Wholesale />
      <Weave />
    </main>
  );
}
