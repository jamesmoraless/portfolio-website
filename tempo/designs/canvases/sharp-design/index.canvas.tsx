import { Canvas, Storyboard } from "tempo-sdk/canvas";
import Foundations from "./Foundations";
import NavBoard from "./Nav";
import HeroA from "./HeroA";
import HeroB from "./HeroB";
import TechStack from "./TechStack";
import About from "./About";
import Education from "./Education";
import Experience from "./Experience";
import Projects from "./Projects";
import Archive from "./Archive";
import Contact from "./Contact";
import FaviconBoard from "./Favicon";

export default function SharpDesignCanvas() {
  return (
    <Canvas name="sharp-design" backgroundColor="#242428">
      <Storyboard
        id="Foundations"
        name="00 · Foundations"
        component={Foundations}
        layout={{ x: 0, y: 0, width: 1440, height: 1330, intrinsicSizing: "root-element" }}
      />
      <Storyboard
        id="Nav"
        name="00 · Nav"
        component={NavBoard}
        layout={{ x: 1560, y: 0, width: 1440, height: 300, intrinsicSizing: "root-element" }}
      />

      <Storyboard
        id="HeroA"
        name="Hero A · Engineered"
        component={HeroA}
        layout={{ x: 0, y: 1490, width: 1440, height: 900, intrinsicSizing: "root-element" }}
      />
      <Storyboard
        id="HeroB"
        name="Hero B · Gallery"
        component={HeroB}
        layout={{ x: 1560, y: 1490, width: 1440, height: 900, intrinsicSizing: "root-element" }}
      />

      {/* About leads: visitors should meet the person before the toolchain. */}
      <Storyboard
        id="About"
        name="01 · About Me"
        component={About}
        layout={{ x: 0, y: 2550, width: 1440, height: 940, intrinsicSizing: "root-element" }}
      />
      <Storyboard
        id="TechStack"
        name="02 · Tech Stack"
        component={TechStack}
        layout={{ x: 1560, y: 2550, width: 1440, height: 470, intrinsicSizing: "root-element" }}
      />

      {/* Experience leads, Education follows: the work is the stronger story,
          so the page should not open on a student CV. */}
      <Storyboard
        id="Experience"
        name="03 · Work Experience"
        component={Experience}
        layout={{ x: 0, y: 3650, width: 1440, height: 2660, intrinsicSizing: "root-element" }}
      />
      <Storyboard
        id="Education"
        name="04 · Education"
        component={Education}
        layout={{ x: 1560, y: 3650, width: 1440, height: 930, intrinsicSizing: "root-element" }}
      />

      <Storyboard
        id="Projects"
        name="05 · Featured Projects"
        component={Projects}
        layout={{ x: 0, y: 6470, width: 1440, height: 1120, intrinsicSizing: "root-element" }}
      />
      <Storyboard
        id="Archive"
        name="05b · Project Archive"
        component={Archive}
        layout={{ x: 1560, y: 6470, width: 1440, height: 1040, intrinsicSizing: "root-element" }}
      />

      <Storyboard
        id="Contact"
        name="06 · Get in Touch"
        component={Contact}
        layout={{ x: 0, y: 7750, width: 1440, height: 700, intrinsicSizing: "root-element" }}
      />
      <Storyboard
        id="Favicon"
        name="07 · Favicon"
        component={FaviconBoard}
        layout={{ x: 1560, y: 7750, width: 1440, height: 700, intrinsicSizing: "root-element" }}
      />
    </Canvas>
  );
}
