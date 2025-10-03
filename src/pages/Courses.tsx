import Navigation from "@/components/Navigation";

const Courses = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="container mx-auto px-6 pt-32 pb-16">
        <h1 className="text-4xl font-bold mb-8">Our Courses</h1>
        <p className="text-xl text-muted-foreground">
          Explore our comprehensive training programs in CAD Design & Automation.
        </p>
      </div>
    </div>
  );
};

export default Courses;
