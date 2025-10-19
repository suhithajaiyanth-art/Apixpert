import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ContactUs from "@/components/ContactUs";

const Contact = () => (
  <div className="min-h-screen bg-background flex flex-col">
    <Navigation />
    <main className="flex-1 flex flex-col justify-center">
      <ContactUs />
    </main>
    <Footer />
  </div>
);

export default Contact;
