import Hero from "@/components/hero";
import Nav from "@/components/nav";
import { dm_sans } from "./fonts";
const Home = () => {
  return (
    <main>
      <Nav className={dm_sans.className} />
      <Hero />
    </main>
  );
};

export default Home;
