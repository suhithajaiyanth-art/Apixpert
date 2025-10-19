import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Refund = () => (
  <div className="min-h-screen bg-background flex flex-col">
    <Navigation />
    <main className="container mx-auto px-6 pt-32 pb-16 max-w-3xl flex-1">
      <h1 className="text-4xl font-bold mb-8">Cancellation &amp; Refund Policy</h1>
      <p className="mb-4 text-sm text-muted-foreground">Effective Date: 14-10-2024</p>
      <section className="space-y-8 text-base text-foreground">
        <div>
          <h2 className="text-xl font-semibold mb-2">1. No Refund Policy</h2>
          <ul className="list-disc ml-6">
            <li>All purchases made on www.apixpert.com are final and non-refundable.</li>
            <li>No cancellations, returns, or refunds will be processed under any circumstances.</li>
            <li>This policy applies to full courses and bundle offers.</li>
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">2. Try Before You Enroll</h2>
          <ul className="list-disc ml-6">
            <li>We provide trial courses and/or introductory webinars to help you understand our teaching methods, explore sample lessons, and experience the course platform.</li>
            <li>We encourage all learners to evaluate the trial before enrolling in the full version.</li>
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">3. Support</h2>
          <ul className="list-disc ml-6">
            <li>If you have technical issues or need assistance, contact us:</li>
            <li>Email: <a href="mailto:sales@apixpert.com" className="underline text-primary">sales@apixpert.com</a></li>
            <li>WhatsApp: <a href="tel:+918667311125" className="underline text-primary">+91 86673 11125</a></li>
          </ul>
        </div>
      </section>
    </main>
    <Footer />
  </div>
);

export default Refund;
