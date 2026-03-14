import Image from "next/image";
import Link from "next/link";

export interface BlogPost {
  id: number;
  image: string;
  title: string;
  excerpt: string;
  tag: string;
  author: string;
  date: string;
  readTime: string;
  slug?: string;
}

const BlogCard = ({ post }: { post: BlogPost }) => {
  return (
    <article className="flex flex-col md:flex-row gap-8 py-10 group">
      {/* Thumbnail */}
      <div className="shrink-0 flex justify-center md:justify-start">
        <Image
          src={post.image}
          alt={post.title}
          width={150}
          height={150}
          className="object-cover w-30 h-30 rounded-sm group-hover:brightness-90 transition-all duration-300"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col gap-6 flex-1">
        {/* Title */}
        <h2
          className="font-manrope font-normal text-secondary capitalize"
          style={{ fontSize: "clamp(22px, 3vw, 32px)", lineHeight: "1.125" }}
        >
          {post.title}
        </h2>

        {/* Description */}
        <p className="font-playfair font-light text-white text-base leading-[1.125] capitalize">
          {post.excerpt}
        </p>

        {/* Read More >> */}
        <div className="flex items-center gap-1">
          <div className="flex flex-col gap-1">
            <Link
              href={post.slug ? `/blog/${post.slug}` : "#"}
              className="font-ubuntu font-light text-secondary text-base leading-[1.125] hover:opacity-75 transition-opacity duration-200"
            >
              Read More
            </Link>
            <div className="h-px bg-white/40 w-full" />
          </div>
          <span className="font-ubuntu font-light text-secondary text-base ml-1">
            &gt;&gt;
          </span>
        </div>

        {/* Info */}
        <div className="flex flex-col gap-4">
          {/* Category tag */}
          <span className="font-ubuntu font-light text-white text-sm leading-4 capitalize border-l-3 border-white/60 pl-2 w-fit">
            {post.tag}
          </span>

          {/* Meta row */}
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
            <span className="font-ubuntu font-medium text-white text-sm capitalize">
              Author:
            </span>
            <span className="font-ubuntu font-light text-white text-sm capitalize">
              {post.author}
            </span>
            <span className="font-ubuntu font-medium text-white text-sm capitalize ml-2">
              Published:
            </span>
            <span className="font-ubuntu font-light text-white text-sm capitalize">
              {post.date}
            </span>
            <span className="font-ubuntu font-medium text-white text-sm capitalize ml-2">
              Read:
            </span>
            <span className="font-ubuntu font-light text-white text-sm capitalize">
              {post.readTime}
            </span>
          </div>
        </div>
      </div>
    </article>
  );
};

export default BlogCard;
