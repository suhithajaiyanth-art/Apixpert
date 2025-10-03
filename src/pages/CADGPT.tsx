import Navigation from "@/components/Navigation";

const CADGPT = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="container mx-auto px-6 pt-32 pb-16">
        <h1 className="text-4xl font-bold mb-8">CADGPT</h1>
        <p className="text-xl text-muted-foreground">
          Advanced AI-powered CAD assistance and automation tools.
        </p>
      </div>
    </div>
  );
};

export default CADGPT;
