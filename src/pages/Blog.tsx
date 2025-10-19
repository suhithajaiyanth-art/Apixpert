import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ScrollToTopButton from "@/components/ScrollToTopButton";

const Blog = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="container mx-auto px-6 pt-32 pb-16">
        <h1 className="text-4xl font-bold mb-8">Blog</h1>
        <p className="text-xl text-muted-foreground">
          Latest insights and updates from the world of CAD design and automation.
        </p>
      </div>
  <Footer />
  <ScrollToTopButton />
    </div>
  );
};

export default Blog;
