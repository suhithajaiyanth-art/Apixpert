import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Shipping = () => (
  <div className="min-h-screen bg-background flex flex-col">
    <Navigation />
    <main className="container mx-auto px-6 pt-32 pb-16 max-w-3xl flex-1">
      <h1 className="text-4xl font-bold mb-8">Shipping and Exchange</h1>
      <p className="mb-4 text-sm text-muted-foreground">Effective Date: 14-10-2024</p>
      <section className="space-y-8 text-base text-foreground">
        <div>
          <h2 className="text-xl font-semibold mb-2">1. Shipping</h2>
          <ul className="list-disc ml-6">
            <li>All products are 100% digital. After purchase, you receive instant access to course materials via your registered account or email.</li>
            <li>No physical shipping is involved as we do not sell tangible products.</li>
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">2. Exchange</h2>
          <ul className="list-disc ml-6">
            <li>As our products are digital courses, exchanges are not applicable. Please review course details carefully before purchase.</li>
            <li>We encourage you to watch trial lessons, review the syllabus, and contact us for clarifications before enrolling.</li>
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

export default Shipping;
