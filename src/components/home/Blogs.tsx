"use client";

import Image from "next/image";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import ScrollIndicator from "@/components/common/ScrollIndicator";
import SectionTitle from "@/components/common/SectionTitle";
import Link from "next/link";
import { PostsByCategoryQueryResult } from "@/sanity/sanity.types";

interface BlogProps {
  blogPosts: PostsByCategoryQueryResult;
}

const Blogs = ({ blogPosts }: BlogProps) => {
  const sectionRef = useScrollAnimation<HTMLElement>();
  return (
    <section id="blogs" ref={sectionRef} className="relative bg-background-3">
      <div className="flex justify-center pt-16 pb-4">
        <ScrollIndicator />
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16">
        <SectionTitle
          title="Blogs"
          subtitle="My thoughts on technology and business, welcome to subscribe"
          className="mb-12"
          titleClassName="font-ubuntu"
        />

        {/* Separator */}
        <div className="border-t border-white/20 mb-10" />

        {/* Blog posts */}
        <div className="flex flex-col gap-8">
          {blogPosts &&
            blogPosts.map((post) => (
              <article
                key={post._id}
                className="flex flex-col md:flex-row gap-6 group hover:bg-white/3 rounded-xl transition-colors duration-300 p-2"
              >
                {/* Thumbnail */}
                <div className="shrink-0">
                  <Image
                    src={post.mainImage.url}
                    alt={post.mainImage.alt || post.title}
                    width={160}
                    height={120}
                    className="rounded-lg object-cover w-full md:w-40 md:h-32 group-hover:brightness-90 transition-all duration-300"
                  />
                </div>

                {/* Content */}
                <div className="flex flex-col gap-3 flex-1">
                  <h3
                    className="font-ubuntu font-normal text-secondary"
                    style={{
                      fontSize: "clamp(20px, 2.3vw, 32px)",
                      lineHeight: "1.125",
                    }}
                  >
                    {post.title}
                  </h3>
                  <p className="font-ubuntu font-light text-white text-base leading-5">
                    {post.excerpt}
                  </p>

                  {/* Read More */}
                  <div className="flex items-center gap-1">
                    <div className="flex flex-col gap-1">
                      <span className="font-ubuntu font-light text-white text-base cursor-pointer hover:text-secondary transition-colors">
                        Read More
                      </span>
                      <div className="h-px bg-white/40 w-full" />
                    </div>
                    <span className="text-white font-ubuntu text-base ml-1">
                      &gt;&gt;
                    </span>
                  </div>

                  {/* Meta */}
                  <div className="flex flex-col gap-2 mt-1">
                    <span className="inline-block font-ubuntu font-light text-white text-sm px-3 py-1 rounded-full border border-white/20 w-fit capitalize">
                      {post.categories[1]?.title || "Uncategorized"}
                    </span>
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
                      <div className="space-x-1">
                        <span className="font-ubuntu font-medium text-white text-sm capitalize">
                          Author:
                        </span>
                        <span className="font-ubuntu font-light text-white text-sm capitalize">
                          {post.author.name}
                        </span>
                      </div>
                      <div className="space-x-1">
                        <span className="font-ubuntu font-medium text-white text-sm capitalize">
                          Date:
                        </span>
                        <span className="font-ubuntu font-light text-white text-sm capitalize">
                          {post.publishedAt}
                        </span>
                      </div>

                      {/* <span className="font-ubuntu font-medium text-white text-sm capitalize">
                        Read
                      </span>
                      <span className="font-ubuntu font-light text-white text-sm capitalize">
                        {post.readTime}
                      </span> */}
                    </div>
                  </div>
                </div>
              </article>
            ))}
        </div>

        {/* Separator */}
        <div className="border-t border-white/20 mt-10 mb-10" />

        {/* CTA Buttons */}
        <div className="flex justify-center gap-6">
          <Link
            href={"/blog"}
            className="font-ubuntu text-xl capitalize px-8 py-3 rounded-full hover:opacity-90 transition-opacity"
            style={{ backgroundColor: "#12f7d6", color: "#374151" }}
          >
            View More
          </Link>
          <button className="font-ubuntu text-xl capitalize px-8 py-3 rounded-full text-white border border-white/40 hover:border-secondary hover:text-secondary transition-all duration-300">
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );
};

export default Blogs;
