import Navigation from "@/components/Navigation";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Upload, Send, FileArchive } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { ScrollArea } from "@/components/ui/scroll-area";
import Footer from "@/components/Footer";

interface Message {
  id: string;
  type: "user" | "system";
  content: string;
  fileName?: string;
  timestamp: Date;
}

const CADGPT = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      type: "system",
      content: "Welcome! Share your SolidWorks code files (in ZIP format) to help us train CAD GPT. Upload your automation scripts, macros, or custom code to contribute to our AI training.",
      timestamp: new Date(),
    },
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (!file.name.endsWith('.zip')) {
        toast({
          title: "Invalid file type",
          description: "Please upload a ZIP file containing your SolidWorks code.",
          variant: "destructive",
        });
        return;
      }
      setSelectedFile(file);
      toast({
        title: "File selected",
        description: `${file.name} is ready to upload`,
      });
    }
  };

  const handleSubmit = () => {
    if (!inputMessage.trim() && !selectedFile) return;

    const newMessage: Message = {
      id: Date.now().toString(),
      type: "user",
      content: inputMessage || "Uploaded a file",
      fileName: selectedFile?.name,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, newMessage]);

    // Simulate system response
    setTimeout(() => {
      const systemResponse: Message = {
        id: (Date.now() + 1).toString(),
        type: "system",
        content: selectedFile
          ? `Thank you for submitting ${selectedFile.name}! Your SolidWorks code will help improve CAD GPT. Our team will review it shortly.`
          : "Thank you for your message! Feel free to upload your code files to contribute.",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, systemResponse]);
    }, 1000);

    setInputMessage("");
    setSelectedFile(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="container mx-auto px-6 pt-32 pb-16 max-w-5xl">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
            CAD GPT Training Portal
          </h1>
          <p className="text-lg text-muted-foreground">
            Help us train our AI by sharing your SolidWorks automation code
          </p>
        </div>

        <div className="bg-card rounded-2xl shadow-xl border border-border overflow-hidden">
          {/* Chat Messages Area */}
          <ScrollArea className="h-[500px] p-6">
            <div className="space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.type === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                      message.type === "user"
                        ? "bg-gradient-to-r from-primary to-purple-600 text-white"
                        : "bg-muted text-foreground"
                    }`}
                  >
                    {message.fileName && (
                      <div className="flex items-center gap-2 mb-2 pb-2 border-b border-white/20">
                        <FileArchive className="w-4 h-4" />
                        <span className="text-sm font-medium">{message.fileName}</span>
                      </div>
                    )}
                    <p className="text-sm">{message.content}</p>
                    <p className={`text-xs mt-1 ${message.type === "user" ? "text-white/70" : "text-muted-foreground"}`}>
                      {message.timestamp.toLocaleTimeString()}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>

          {/* Input Area */}
          <div className="border-t border-border bg-muted/30 p-4">
            {selectedFile && (
              <div className="mb-3 flex items-center gap-2 bg-primary/10 rounded-lg px-3 py-2">
                <FileArchive className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-foreground flex-1">{selectedFile.name}</span>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => {
                    setSelectedFile(null);
                    if (fileInputRef.current) fileInputRef.current.value = "";
                  }}
                >
                  Remove
                </Button>
            <ScrollToTopButton />
              </div>
            )}

            <div className="flex gap-3">
              <input
                ref={fileInputRef}
                type="file"
                accept=".zip"
                onChange={handleFileSelect}
                className="hidden"
              />
              <Button
                variant="outline"
                size="icon"
                onClick={() => fileInputRef.current?.click()}
                className="shrink-0"
              >
                <Upload className="w-4 h-4" />
              </Button>

              <Textarea
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                placeholder="Add a message about your code submission..."
                className="resize-none min-h-[60px]"
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault();
                    handleSubmit();
                  }
                }}
              />

              <Button
                onClick={handleSubmit}
                disabled={!inputMessage.trim() && !selectedFile}
                className="shrink-0 bg-gradient-to-r from-primary to-purple-600 hover:opacity-90"
                size="icon"
              >
                <Send className="w-4 h-4" />
              </Button>
            </div>

            <p className="text-xs text-muted-foreground mt-3 text-center">
              Upload ZIP files containing SolidWorks API code, NX Open scripts, or CAD automation files
            </p>
            <div className="flex justify-center mt-4">
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=sales@apixpert.com&su=CAD%20GPT%20Code%20Submission&body=Please%20find%20my%20SolidWorks%20automation%20code%20attached."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-primary text-white font-semibold px-5 py-2 rounded-lg shadow hover:bg-primary/80 transition text-sm"
              >
                Compose Email in Gmail
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CADGPT;
