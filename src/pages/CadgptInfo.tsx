import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const CadgptInfo = () => (
  <div className="min-h-screen bg-background flex flex-col">
    <Navigation />
    <main className="container mx-auto px-6 pt-32 pb-16 max-w-3xl flex-1">
      <h1 className="text-4xl font-bold mb-8">Automate with AI (CADBot-GPT)</h1>
      <section className="space-y-8 text-base text-foreground">
        <div>
          <h2 className="text-xl font-semibold mb-2">Help Us Train Our AI &amp; Get Paid!</h2>
          <p>Are you an automation engineer working with SolidWorks API, NX Open API, CATIA, AutoCAD, CREO, or Inventor Automation/Customization? Contribute to our AI training by uploading your code, and get paid for it!</p>
          <ul className="list-disc ml-6 mt-2">
            <li>Submit code in any programming language – VBA, VB.NET, C#, Python, or C++</li>
            <li>Follow our submission instructions for approval.</li>
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">Submission Guidelines</h2>
          <ul className="list-disc ml-6">
            <li>Each line of code must include clear instructions/comments.</li>
            <li>A working demo video of the program should be screen-recorded and uploaded.</li>
            <li>Submit the original Visual Studio project file or source code.</li>
            <li>Our technical team will verify and approve the submission.</li>
            <li>Once approved, payment will be released within 48 hours!</li>
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">Contact</h2>
          <ul className="list-disc ml-6">
            <li>Email: <a href="mailto:sales@apixpert.com" className="underline text-primary">sales@apixpert.com</a></li>
            <li>Phone/WhatsApp: <a href="tel:+918667311125" className="underline text-primary">+91 86673 11125</a></li>
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">Service &amp; Training</h2>
          <p>We provide Service and Training related to Mechanical Engineering Design, R&amp;D and Production.</p>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">Social Links</h2>
          <ul className="list-disc ml-6">
            <li><a href="https://www.facebook.com/profile.php/?id=61567221713059&_rdr" target="_blank" rel="noreferrer" className="underline text-primary">Facebook</a></li>
            <li><a href="https://www.youtube.com/channel/ApiXpert" target="_blank" rel="noreferrer" className="underline text-primary">YouTube</a></li>
            <li><a href="https://www.instagram.com/apixpert/" target="_blank" rel="noreferrer" className="underline text-primary">Instagram</a></li>
            <li><a href="https://www.linkedin.com/company/apixpert/" target="_blank" rel="noreferrer" className="underline text-primary">LinkedIn</a></li>
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">Work Hours</h2>
          <p>Customer Support Available 24/7 for All Countries, based on availability. Contact your trainer directly or leave us a message.</p>
        </div>
      </section>
    </main>
    <Footer />
  </div>
);

export default CadgptInfo;
