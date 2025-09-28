import Header from "@/components/Header";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto py-12 px-4">
        <div className="max-w-3xl mx-auto">
          <article className="prose prose-invert max-w-none">
            <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl text-foreground">
              Why a Blog is Still a Powerful Tool
            </h1>
            <p className="mt-8 text-lg text-foreground/80">
              Nowadays, people share more on Instagram, YouTube, or other social media. But a blog website still has strong value, just in a different way. Let me break it down 👇
            </p>

            <h2 className="mt-10 text-3xl font-bold text-foreground">
              1. Ownership & Control
            </h2>
            <p className="mt-4 text-lg text-foreground/80">
              On platforms like Instagram, your content belongs to the platform. On a blog, <strong>you own your content fully</strong>. You decide the layout, ads, monetization, and design—with no algorithm limiting your reach.
            </p>

            <h2 className="mt-10 text-3xl font-bold text-foreground">
              2. Long-Term Visibility (SEO)
            </h2>
            <p className="mt-4 text-lg text-foreground/80">
              A blog post can show up on Google searches for years. Social media posts, on the other hand, usually vanish from feeds in just a day or two.
            </p>

            <h2 className="mt-10 text-3xl font-bold text-foreground">
              3. Professional Image
            </h2>
            <p className="mt-4 text-lg text-foreground/80">
              Having a personal blog or portfolio makes you look more credible, which is useful for careers, freelancing, or building a brand. It’s like your digital home where people can get to know you on a deeper level.
            </p>

            <h2 className="mt-10 text-3xl font-bold text-foreground">
              4. More Depth
            </h2>
            <p className="mt-4 text-lg text-foreground/80">
              Blogs are perfect for long-form content like guides, tutorials, and detailed stories. Social media is built for short-form content like reels and quick posts.
            </p>

            <h2 className="mt-10 text-3xl font-bold text-foreground">
              5. Monetization
            </h2>
            <p className="mt-4 text-lg text-foreground/80">
              You have the freedom to add ads, affiliate links, or sell digital products directly on your blog. This is much harder to do on social media without brand deals.
            </p>

            <h2 className="mt-10 text-3xl font-bold text-foreground">
              6. Integration with Social Media
            </h2>
            <p className="mt-4 text-lg text-foreground/80">
              The best strategy is to use both. Use Instagram, YouTube, or Twitter to engage your audience and bring traffic back to your blog, where your best content lives.
            </p>
          </article>
        </div>
      </main>
    </div>
  );
};

export default About;