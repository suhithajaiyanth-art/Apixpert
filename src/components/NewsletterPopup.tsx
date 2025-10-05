import { useState, useEffect } from "react";
import { X, Instagram, Send } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import newsletterImage from "@/assets/newsletter-person.png";

const NewsletterPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [email, setEmail] = useState("");
  const [termsAccepted, setTermsAccepted] = useState(false);

  useEffect(() => {
    // Show popup after a brief delay
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [isOpen]);

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && termsAccepted) {
      console.log("Newsletter subscription:", email);
      handleClose();
    }
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/70 z-50 animate-fade-in"
        onClick={handleClose}
      />

      {/* Close button that follows mouse */}
      <button
        onClick={handleClose}
        className="fixed z-[60] w-10 h-10 rounded-full bg-red-500 hover:bg-red-600 text-white flex items-center justify-center shadow-lg transition-colors"
        style={{
          left: `${mousePos.x - 20}px`,
          top: `${mousePos.y - 20}px`,
          pointerEvents: "none",
        }}
      >
        <X className="w-5 h-5" />
      </button>

      {/* Newsletter Modal */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
        <div
          className="relative bg-white rounded-3xl shadow-2xl max-w-4xl w-full overflow-hidden animate-scale-in pointer-events-auto"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="grid md:grid-cols-2 gap-8 p-8 md:p-12">
            {/* Left Content */}
            <div className="space-y-6">
              <div className="inline-block">
                <span className="px-6 py-2 bg-purple-100 text-purple-600 rounded-full text-sm font-medium">
                  JOIN TODAY
                </span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                Our Newsletter
              </h2>

              <p className="text-gray-600 text-lg">
                Eu volutpat odio facilisis mauris sit amet massa vitae. Libero
                nunc consequat interdum varius sit amet.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="flex gap-2">
                  <Input
                    type="email"
                    placeholder="Email Id"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 h-12 text-base"
                    required
                  />
                  <button
                    type="submit"
                    className="w-12 h-12 bg-yellow-400 hover:bg-yellow-500 rounded-lg flex items-center justify-center transition-colors"
                  >
                    <Send className="w-5 h-5 text-gray-900" />
                  </button>
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="terms"
                    checked={termsAccepted}
                    onCheckedChange={(checked) =>
                      setTermsAccepted(checked as boolean)
                    }
                  />
                  <label
                    htmlFor="terms"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Terms and Conditions
                  </label>
                </div>
              </form>

              <div className="flex items-center gap-4">
                <span className="font-semibold text-gray-900">We Are Social:</span>
                <div className="flex gap-2">
                  <a
                    href="#"
                    className="w-10 h-10 bg-yellow-400 hover:bg-yellow-500 rounded-full flex items-center justify-center transition-colors"
                  >
                    <Instagram className="w-5 h-5 text-gray-900" />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 bg-yellow-400 hover:bg-yellow-500 rounded-full flex items-center justify-center transition-colors"
                  >
                    <svg className="w-5 h-5 text-gray-900" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 bg-yellow-400 hover:bg-yellow-500 rounded-full flex items-center justify-center transition-colors"
                  >
                    <span className="text-gray-900 font-bold text-sm">@</span>
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 bg-yellow-400 hover:bg-yellow-500 rounded-full flex items-center justify-center transition-colors"
                  >
                    <svg className="w-5 h-5 text-gray-900" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C6.477 2 2 6.477 2 12c0 5.523 4.477 10 10 10s10-4.477 10-10c0-5.523-4.477-10-10-10zm5 9h-4V7h-2v4H7v2h4v4h2v-4h4v-2z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="hidden md:block relative">
              <img
                src={newsletterImage}
                alt="Newsletter"
                className="absolute inset-0 w-full h-full object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsletterPopup;
