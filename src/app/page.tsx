import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import Skills from "@/components/home/Skills";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import Blogs from "@/components/home/Blogs";
import Contact from "@/components/home/Contact";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import { getPostsByCategory } from "@/sanity/services/articles";

export default async function Home() {
  const blogPosts = await getPostsByCategory("code");
  console.log(blogPosts);
  return (
    <main>
      <Header />
      <Hero />
      <About />
      <Skills />
      <FeaturedProjects />
      <Blogs blogPosts={blogPosts} />
      <Contact />
      <Footer />
    </main>
  );
}
