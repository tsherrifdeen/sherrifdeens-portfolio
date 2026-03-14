import BlogHero from "@/components/blog/BlogHero";
import BlogCard from "@/components/blog/BlogCard";

const mockPosts = [
  {
    id: 1,
    image: "/images/blog-post.jpg",
    title: "What does it take to become a web developer?",
    excerpt:
      "Web development, also known as website development, encompasses a variety of tasks and processes involved in creating websites for the internet\u2026",
    tag: "Web Developer",
    author: "Sheriff",
    date: "10.Oct 2023",
    readTime: "1 Min",
    slug: "what-does-it-take-to-become-a-web-developer",
  },
  {
    id: 2,
    image: "/images/blog-post.jpg",
    title: "What does it take to become a web developer?",
    excerpt:
      "Web development, also known as website development, encompasses a variety of tasks and processes involved in creating websites for the internet\u2026",
    tag: "Web Developer",
    author: "Sheriff",
    date: "10.Oct 2023",
    readTime: "1 Min",
    slug: "what-does-it-take-to-become-a-web-developer-2",
  },
  {
    id: 3,
    image: "/images/blog-post.jpg",
    title: "What does it take to become a web developer?",
    excerpt:
      "Web development, also known as website development, encompasses a variety of tasks and processes involved in creating websites for the internet\u2026",
    tag: "Web Developer",
    author: "Sheriff",
    date: "10.Oct 2023",
    readTime: "1 Min",
    slug: "what-does-it-take-to-become-a-web-developer-3",
  },
  {
    id: 4,
    image: "/images/blog-post.jpg",
    title: "What does it take to become a web developer?",
    excerpt:
      "Web development, also known as website development, encompasses a variety of tasks and processes involved in creating websites for the internet\u2026",
    tag: "Web Developer",
    author: "Sheriff",
    date: "10.Oct 2023",
    readTime: "1 Min",
    slug: "what-does-it-take-to-become-a-web-developer-4",
  },
  {
    id: 5,
    image: "/images/blog-post.jpg",
    title: "What does it take to become a web developer?",
    excerpt:
      "Web development, also known as website development, encompasses a variety of tasks and processes involved in creating websites for the internet\u2026",
    tag: "Web Developer",
    author: "Sheriff",
    date: "10.Oct 2023",
    readTime: "1 Min",
    slug: "what-does-it-take-to-become-a-web-developer-5",
  },
];

const BlogPage = () => {
  return (
    <>
      <main className="bg-background min-h-screen">
        <BlogHero />

        {/* Blog post list */}
        <section className="bg-background pb-20">
          <div className="max-w-5xl mx-auto px-6 md:px-10 lg:px-16">
            {mockPosts.map((post, index) => (
              <div key={post.id}>
                <div className="border-t border-white/20" />
                <BlogCard post={post} />
                {index === mockPosts.length - 1 && (
                  <div className="border-t border-white/20" />
                )}
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
};

export default BlogPage;
