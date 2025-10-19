import { useState } from "react";

const ContactUs = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.phone || !form.message) {
      setError("Please fill in all fields.");
      return;
    }
    setError("");
    setSubmitted(true);
    // Here you would send the form data to your backend or email service
  };

  return (
    <section className="bg-[#0a0c12] py-12 px-4 md:px-0 min-h-[80vh] flex flex-col items-center justify-center">
      <div className="max-w-2xl w-full mx-auto bg-[#181c24] rounded-2xl shadow-2xl p-8 border border-white/10">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-2 text-center">Contact Us</h2>
        <p className="text-white/80 text-center mb-8">Have questions about our training programs, software selection, or services? Schedule a FREE 1-on-1 call or send us a message below.</p>
        {submitted ? (
          <div className="text-green-600 text-center text-lg font-semibold py-8">Thank you! Your message has been sent.</div>
        ) : (
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="font-medium text-white">Name</label>
              <input type="text" id="name" name="name" value={form.name} onChange={handleChange} className="rounded-lg border border-white/10 bg-[#232837] text-white px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary placeholder:text-white/40" required />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="font-medium text-white">Email</label>
              <input type="email" id="email" name="email" value={form.email} onChange={handleChange} className="rounded-lg border border-white/10 bg-[#232837] text-white px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary placeholder:text-white/40" required />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="phone" className="font-medium text-white">Phone</label>
              <input type="tel" id="phone" name="phone" value={form.phone} onChange={handleChange} className="rounded-lg border border-white/10 bg-[#232837] text-white px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary placeholder:text-white/40" required />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="font-medium text-white">Message</label>
              <textarea id="message" name="message" value={form.message} onChange={handleChange} rows={5} className="rounded-lg border border-white/10 bg-[#232837] text-white px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary placeholder:text-white/40" required />
            </div>
            {error && <div className="text-red-400 text-sm text-center">{error}</div>}
            <button type="submit" className="w-full bg-primary text-white font-bold py-3 rounded-lg shadow hover:bg-primary/80 transition">Send Message</button>
          </form>
        )}
        <div className="mt-10 text-center text-white/90">
          <div className="mb-2 font-semibold">Email: <a href="mailto:sales@apiXpert.com" className="underline text-primary">sales@apiXpert.com</a></div>
          <div className="mb-2 font-semibold">Phone: <a href="tel:+918667311125" className="underline text-primary">+91 86673 11125</a></div>
          <div className="flex justify-center gap-4 mt-4">
            <a href="https://www.facebook.com/profile.php/?id=61567221713059&_rdr" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-primary"><svg width="28" height="28" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.408.595 24 1.325 24h11.495v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.408 24 22.674V1.326C24 .592 23.406 0 22.675 0"/></svg></a>
            <a href="https://www.instagram.com/apixpert/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-pink-400"><svg width="28" height="28" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.974.974 1.246 2.242 1.308 3.608.058 1.266.069 1.646.069 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.974.974-2.242 1.246-3.608 1.308-1.266.058-1.646.069-4.85.069s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.974-.974-1.246-2.242-1.308-3.608C2.175 15.647 2.163 15.267 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608C4.515 2.497 5.783 2.225 7.149 2.163 8.415 2.105 8.795 2.163 12 2.163zm0-2.163C8.741 0 8.332.013 7.052.072 5.771.131 4.659.363 3.678 1.344 2.697 2.325 2.465 3.437 2.406 4.718 2.347 5.998 2.334 6.407 2.334 12c0 5.593.013 6.002.072 7.282.059 1.281.291 2.393 1.272 3.374.981.981 2.093 1.213 3.374 1.272 1.28.059 1.689.072 7.282.072s6.002-.013 7.282-.072c1.281-.059 2.393-.291 3.374-1.272.981-.981 1.213-2.093 1.272-3.374.059-1.28.072-1.689.072-7.282s-.013-6.002-.072-7.282c-.059-1.281-.291-2.393-1.272-3.374C21.393.363 20.281.131 19 .072 17.719.013 17.309 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88z"/></svg></a>
            <a href="https://www.linkedin.com/company/apixpert/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-primary"><svg width="28" height="28" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11.75 20h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm15.25 12.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-11h2.881v1.501h.041c.401-.761 1.381-1.563 2.841-1.563 3.039 0 3.6 2.001 3.6 4.601v6.461z"/></svg></a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
