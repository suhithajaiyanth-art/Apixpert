import { useEffect } from "react";
import { X, Github, Apple } from "lucide-react";

export default function LoginModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
      <div className="relative w-full max-w-md mx-auto rounded-3xl bg-[#18181b] shadow-2xl p-8 flex flex-col items-center">
        <button onClick={onClose} className="absolute right-4 top-4 text-gray-400 hover:text-white">
          <X className="w-6 h-6" />
        </button>
        <img src={require("@/assets/Blank Studios_black.png")} alt="Apixpert Logo" className="w-16 h-16 mb-4 rounded-full shadow-lg bg-white object-contain" />
        <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-1">
          Sign in to <span className="text-primary">apixpert</span>
        </h2>
        <p className="text-center text-white/80 mb-2 text-base">
          Access your CAD automation courses, track progress, and join live cohorts.
        </p>
        <p className="text-center text-white/80 mb-2 text-base">Already have an account? <a href="#" className="text-green-400 underline">Sign in</a></p>
        <button className="w-full flex items-center justify-center gap-3 bg-white text-black font-semibold rounded-full py-3 text-lg mb-4 shadow hover:opacity-90 transition">
          <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" className="w-6 h-6" />
          Continue with Google
        </button>
        <div className="flex w-full gap-4 mb-4">
          <button className="flex-1 flex items-center justify-center bg-[#23272f] rounded-full py-3 text-white text-lg shadow hover:bg-[#23272f]/80 transition">
            <Github className="w-6 h-6" />
          </button>
          <button className="flex-1 flex items-center justify-center bg-[#23272f] rounded-full py-3 text-white text-lg shadow hover:bg-[#23272f]/80 transition">
            <Apple className="w-6 h-6" />
          </button>
        </div>
        <div className="flex items-center w-full mb-4">
          <hr className="flex-1 border-gray-700" />
          <span className="mx-3 text-gray-400">Or start with email</span>
          <hr className="flex-1 border-gray-700" />
        </div>
        <button className="w-full flex items-center justify-center gap-3 bg-green-900 text-white font-semibold rounded-full py-3 text-lg mb-4 shadow hover:bg-green-800 transition">
          <span className="bg-green-700 rounded-full p-1 mr-2"><svg width="22" height="22" fill="none" viewBox="0 0 24 24"><path fill="#fff" d="M12 13.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"/><path fill="#fff" fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm9.75-7.25a7.25 7.25 0 1 0 0 14.5 7.25 7.25 0 0 0 0-14.5Z" clipRule="evenodd"/></svg></span>
          Sign up with Email
        </button>
        <p className="text-xs text-gray-400 text-center mt-2">
          By continuing, you agree to our
          <a href="/terms" className="underline text-white mx-1" target="_blank" rel="noopener noreferrer">Terms of Service</a>
          and
          <a href="/privacy" className="underline text-white mx-1" target="_blank" rel="noopener noreferrer">Privacy Policy</a>.
        </p>
      </div>
    </div>
  );
}
