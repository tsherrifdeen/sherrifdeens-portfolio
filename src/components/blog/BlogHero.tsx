const BlogHero = () => {
  return (
    <section className="bg-background py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-6 flex flex-col items-center gap-6 text-center">
        {/* Title + decoration */}
        <div className="flex flex-col items-center gap-4">
          <h1
            className="font-ubuntu font-normal text-secondary capitalize"
            style={{ fontSize: "clamp(48px, 8vw, 64px)", lineHeight: "1.125" }}
          >
            Blog
          </h1>
          {/* Dot-line-dot teal decoration */}
          <div className="flex items-center gap-1">
            <div className="w-2 h-2 rounded-full bg-secondary" />
            <div className="h-0.5 w-28 bg-secondary" />
            <div className="w-2 h-2 rounded-full bg-secondary" />
          </div>
        </div>

        {/* Subtitle */}
        <p className="font-ibm-plex-mono font-normal text-white text-base leading-5 max-w-md">
          My thoughts on technology, business and random topics. you are welcome
          to subscribe.
        </p>

        {/* Subscribe CTA button */}
        <button className="mt-4 font-ubuntu font-normal text-white text-xl px-10 py-3 rounded-full border border-white/50 hover:border-secondary hover:text-secondary transition-all duration-300">
          Subscribe
        </button>
      </div>
    </section>
  );
};

export default BlogHero;
