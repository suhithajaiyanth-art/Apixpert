import { useState, useEffect } from "react";
import { X, Instagram, Send, Mail, Globe } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import newsletterImage from "@/assets/newsletter-person.jpg";

const NewsletterPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [email, setEmail] = useState("");
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

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
      setCursorPos({ x: e.clientX, y: e.clientY });
    };

    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
      handleClose();
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("contextmenu", handleContextMenu);
    
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("contextmenu", handleContextMenu);
    };
  }, [isOpen]);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsOpen(false);
      setIsClosing(false);
    }, 300);
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
        className={`fixed inset-0 bg-black/70 z-50 transition-opacity duration-300 ${
          isClosing ? "opacity-0" : "animate-fade-in"
        }`}
        onClick={handleClose}
      />

      {/* Custom X cursor that follows mouse */}
      <div
        className="fixed z-[70] pointer-events-none"
        style={{
          left: `${cursorPos.x}px`,
          top: `${cursorPos.y}px`,
          transform: "translate(-50%, -50%)",
          transition: "left 0.05s ease-out, top 0.05s ease-out",
        }}
      >
        <div className="w-10 h-10 rounded-full bg-destructive flex items-center justify-center shadow-xl animate-pulse">
          <X className="w-5 h-5 text-white" />
        </div>
      </div>

      {/* Newsletter Modal */}
      <div 
        className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none cursor-none"
      >
        <div
          className={`relative bg-white rounded-3xl shadow-2xl max-w-4xl w-full overflow-hidden pointer-events-auto transition-all duration-300 ${
            isClosing ? "opacity-0 scale-95" : "animate-scale-in"
          }`}
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
                Stay updated with the latest news, insights, and updates from our platform.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="flex gap-2">
                  <Input
                    type="email"
                    placeholder="Enter your email"
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
                    I agree to the Terms and Conditions
                  </label>
                </div>
              </form>

              <div className="flex items-center gap-4">
                <span className="font-semibold text-gray-900">Follow Us:</span>
                <div className="flex gap-2">
                  <a
                    href="#"
                    className="w-10 h-10 bg-yellow-400 hover:bg-yellow-500 rounded-full flex items-center justify-center transition-colors"
                    aria-label="Instagram"
                  >
                    <Instagram className="w-5 h-5 text-gray-900" />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 bg-yellow-400 hover:bg-yellow-500 rounded-full flex items-center justify-center transition-colors"
                    aria-label="X (Twitter)"
                  >
                    <svg className="w-5 h-5 text-gray-900" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 bg-yellow-400 hover:bg-yellow-500 rounded-full flex items-center justify-center transition-colors"
                    aria-label="Email"
                  >
                    <Mail className="w-5 h-5 text-gray-900" />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 bg-yellow-400 hover:bg-yellow-500 rounded-full flex items-center justify-center transition-colors"
                    aria-label="Website"
                  >
                    <Globe className="w-5 h-5 text-gray-900" />
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
