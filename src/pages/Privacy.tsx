import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Privacy = () => (
  <div className="min-h-screen bg-background flex flex-col">
    <Navigation />
    <main className="container mx-auto px-6 pt-32 pb-16 max-w-3xl flex-1">
      <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
      <p className="mb-4 text-sm text-muted-foreground">Effective Date: 14-10-2024</p>
      <section className="space-y-8 text-base text-foreground">
        <div>
          <h2 className="text-xl font-semibold mb-2">1. Information We Collect</h2>
          <ul className="list-disc ml-6">
            <li><b>Personal Information:</b> Name, email address, phone number, billing/shipping address (if purchasing), educational/professional background (for course enrollment), resume/CV (if applying for jobs/internships).</li>
            <li><b>Technical Data:</b> IP address, browser type/version, pages visited, time/date of visit, device type.</li>
            <li><b>Payment Information:</b> Payments are processed via secure third-party gateways (Razorpay, Stripe, Paypal, etc.). Card details are not stored on our servers.</li>
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">2. How We Use Your Information</h2>
          <ul className="list-disc ml-6">
            <li>To provide access to courses and training material</li>
            <li>To personalize your learning experience</li>
            <li>To respond to inquiries or provide support</li>
            <li>To offer internship, freelancing, or job opportunities</li>
            <li>To improve website functionality and user experience</li>
            <li>To send updates, promotional offers, or important service-related emails</li>
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">3. Sharing Your Information</h2>
          <ul className="list-disc ml-6">
            <li>Not sold or rented.</li>
            <li>May be shared with hiring companies/recruiters (with your consent), trusted service providers (hosting, analytics, payment processing), or when required by law.</li>
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">4. Data Security</h2>
          <p>Industry-standard security measures (SSL, firewalls, restricted access) are implemented. No method of transmission over the internet is 100% secure.</p>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">5. Your Rights</h2>
          <ul className="list-disc ml-6">
            <li>Access, correct, or delete your personal data</li>
            <li>Withdraw consent at any time (e.g., opt out of emails)</li>
            <li>To exercise these rights, contact: <a href="mailto:support@apixpert.com" className="underline text-primary">support@apixpert.com</a></li>
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">6. Cookies & Tracking Technologies</h2>
          <ul className="list-disc ml-6">
            <li>Used to remember preferences, improve performance, and track analytics/marketing.</li>
            <li>You can control cookies via browser settings.</li>
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">7. Third-Party Links</h2>
          <p>The website may link to third-party sites (YouTube, payment gateways, etc.). ApiXpert is not responsible for their privacy practices.</p>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">8. Children’s Privacy</h2>
          <p>Services are not intended for individuals under 13. No data knowingly collected from children.</p>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">9. Changes to This Policy</h2>
          <p>Updates will be posted on this page with an updated effective date.</p>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">10. Contact Us</h2>
          <ul className="list-disc ml-6">
            <li>Email: <a href="mailto:support@apixpert.com" className="underline text-primary">support@apixpert.com</a></li>
            <li>Phone: <a href="tel:+918667311125" className="underline text-primary">+91-8667311125</a></li>
            <li>Website: <a href="https://apixpert.com" className="underline text-primary">https://apixpert.com</a></li>
          </ul>
        </div>
      </section>
    </main>
    <Footer />
  </div>
);

export default Privacy;
