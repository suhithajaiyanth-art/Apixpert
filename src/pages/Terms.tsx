import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Terms = () => (
  <div className="min-h-screen bg-background flex flex-col">
    <Navigation />
    <main className="container mx-auto px-6 pt-32 pb-16 max-w-3xl flex-1">
      <h1 className="text-4xl font-bold mb-8">Terms and Conditions</h1>
      <p className="mb-4 text-sm text-muted-foreground">Effective Date: 14-10-2024</p>
      <section className="space-y-8 text-base text-foreground">
        <div>
          <h2 className="text-xl font-semibold mb-2">1. Acceptance of Terms</h2>
          <p>By purchasing, enrolling in, or accessing any of our courses, you confirm that you have read, understood, and agree to comply with these Terms and Conditions. If you do not agree to any part of these terms, please do not use our services.</p>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">2. Course Enrollment and Access</h2>
          <ul className="list-disc ml-6">
            <li>Upon purchase, you will gain access to the purchased course materials for personal, non-commercial use only. Sharing login credentials or course materials with others is prohibited.</li>
            <li>Trial versions of courses are available to help you assess suitability before purchase.</li>
            <li><b>No Refund Policy:</b> No refunds are offered once a course is purchased. Please use trial courses to assess suitability before committing.</li>
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">3. Pricing and Payment</h2>
          <ul className="list-disc ml-6">
            <li>Course fees are clearly stated on each course page.</li>
            <li>Payments are accepted via secure gateways (credit/debit cards, UPI, etc.).</li>
            <li>All fees are listed and must be paid in the relevant currency as stated.</li>
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">4. Coupon Codes and Discounts</h2>
          <ul className="list-disc ml-6">
            <li>Promotional coupon codes may be offered and must be entered at checkout to apply.</li>
            <li>Each coupon code may have its own terms, expiration, and restrictions. Please review before use.</li>
            <li>Coupon codes are non-transferable and cannot be combined with other promotions unless stated. Misuse may result in cancellation of your order.</li>
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">5. Intellectual Property</h2>
          <p>All content, including videos, course materials, logos, and trademarks, is the intellectual property of ApiXpert or its licensors. You may not copy, reproduce, distribute, or create derivative works without prior written consent.</p>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">6. User Conduct</h2>
          <ul className="list-disc ml-6">
            <li>Do not share course access with others.</li>
            <li>Do not use the platform for unlawful or harmful purposes.</li>
            <li>Do not violate platform security or interfere with other users’ experience.</li>
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">7. Limitation of Liability</h2>
          <p>ApiXpert will not be liable for any indirect, incidental, or consequential damages arising from the use or inability to use our courses, services, or website. Total liability is limited to the amount paid by you for the course.</p>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">8. Modifications to Terms</h2>
          <p>We reserve the right to update or modify these Terms and Conditions at any time. Changes will be posted on this page and continued use of our services after such changes constitutes acceptance of the updated terms.</p>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">9. Governing Law</h2>
          <p>These Terms and Conditions are governed by the laws of India. Disputes shall be subject to the exclusive jurisdiction of the courts of Chennai, Tamil Nadu.</p>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">10. Contact Us</h2>
          <ul className="list-disc ml-6">
            <li>Email: <a href="mailto:sales@apixpert.com" className="underline text-primary">sales@apixpert.com</a></li>
            <li>WhatsApp: <a href="tel:+918667311125" className="underline text-primary">+91 86673 11125</a></li>
          </ul>
        </div>
      </section>
    </main>
    <Footer />
  </div>
);

export default Terms;
