import Header from "@/components/Header";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto py-12 px-4">
        <div className="max-w-3xl mx-auto">
          <article className="prose prose-invert max-w-none">
            <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl text-foreground">
              About Blogtime
            </h1>
            <p className="mt-8 text-lg text-foreground/80">
              Welcome to Blogtime! This is a space where we explore the latest in technology, share lifestyle tips, and document our travel adventures. Our goal is to create a community of curious minds who are passionate about learning and growing.
            </p>
            <h2 className="mt-10 text-3xl font-bold text-foreground">
              Our Mission
            </h2>
            <p className="mt-4 text-lg text-foreground/80">
              We believe in the power of sharing knowledge and experiences. Through our articles, we aim to provide valuable insights, practical advice, and a fresh perspective on a variety of topics. Whether you're a tech enthusiast, a globetrotter, or someone looking for inspiration, we hope you'll find something here that resonates with you.
            </p>
            <h2 className="mt-10 text-3xl font-bold text-foreground">
              The Author
            </h2>
            <p className="mt-4 text-lg text-foreground/80">
              This blog is run by a passionate developer and writer who loves to explore the intersection of technology and everyday life. When not coding or writing, you can find them planning their next trip or trying out a new recipe.
            </p>
          </article>
        </div>
      </main>
    </div>
  );
};

export default About;