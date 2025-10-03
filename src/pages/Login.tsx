import Navigation from "@/components/Navigation";

const Login = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="container mx-auto px-6 pt-32 pb-16">
        <h1 className="text-4xl font-bold mb-8">Login / Register</h1>
        <p className="text-xl text-muted-foreground">
          Access your account or create a new one to get started.
        </p>
      </div>
    </div>
  );
};

export default Login;
