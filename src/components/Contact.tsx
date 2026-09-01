import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Send, Mail, Phone, MapPin, Github, Linkedin, Instagram } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const form = new FormData();
      form.append("name", formData.name);
      form.append("email", formData.email);
      form.append("message", formData.message);

      // Optional: disable captcha & pick template
      form.append("_captcha", "false");
      form.append("_template", "box");

      const response = await fetch("https://formsubmit.co/ajax/arnabdas9575@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success === "true") {
        toast({
          title: "Message Sent Successfully!",
          description: "Thank you for reaching out. I'll get back to you soon.",
        });
        setFormData({ name: "", email: "", message: "" });
      } else {
        toast({
          title: "Error",
          description: "Failed to send message. Please try again.",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: "Error",
        description: "Network error. Please check your connection.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    { icon: Mail, label: "Email", value: "arnabdas9575@gmail.com" },
    { icon: Phone, label: "Phone", value: "+91 6289790425" },
    { icon: MapPin, label: "Location", value: "Kolkata, India" }
  ];

  const socialLinks = [
    { icon: Github, label: "GitHub", href: "https://github.com/Arnabdas123456" },
    { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/arnab-das-42204b265/" },
    { icon: Instagram, label: "Instagram", href: "https://www.instagram.com/its_arnab_dev_/" },
  ];

  return (
    <section id="contact" className="py-20 px-4 bg-dark-darker">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-4 text-neon-green glow-effect">
          Contact.connect()
        </h2>

        <p className="text-center text-muted-foreground font-mono mb-16 max-w-2xl mx-auto">
          Ready to bring your ideas to life? Let's start a conversation.
        </p>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="terminal-border rounded-lg p-6 bg-dark-console/50">
              <h3 className="text-xl font-display font-semibold text-electric mb-6">
                Get In Touch
              </h3>

              <div className="space-y-4">
                {contactInfo.map((item) => (
                  <a
                    key={item.label}
                    className="flex items-center space-x-4 p-3 rounded-lg hover:bg-neon-green/10 transition-colors duration-300 group"
                  >
                    <div className="p-2 rounded-lg bg-neon-green/10 group-hover:bg-neon-green/20 transition-colors duration-300">
                      <item.icon className="w-5 h-5 text-neon-green" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground font-mono">{item.label}</p>
                      <p className="text-foreground font-mono">{item.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div className="terminal-border rounded-lg p-6 bg-dark-console/50">
              <h3 className="text-xl font-display font-semibold text-electric mb-6">
                Connect Online
              </h3>

              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-lg bg-neon-green/10 hover:bg-neon-green/20 transition-all duration-300 hover:shadow-neon group"
                  >
                    <social.icon className="w-5 h-5 text-neon-green group-hover:scale-110 transition-transform duration-300" />
                  </a>
                ))}
              </div>
            </div>

            {/* <div className="terminal-border rounded-lg p-6 bg-dark-console/50">
                <h3 className="text-xl font-display font-semibold text-electric mb-4">
                  Current Status
                </h3>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-neon-green rounded-full animate-pulse"></div>
                  <span className="text-neon-green font-mono text-sm">
                    Available for new projects
                  </span>
                </div>
                <p className="text-muted-foreground font-mono text-sm mt-2">
                  Response time: Usually within 24 hours
                </p>
              </div> */}
          </div>

          {/* Contact Form */}
          <div className="terminal-border rounded-lg p-6 bg-dark-console/50">
            <div className="flex items-center mb-6">
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-neon-green"></div>
              </div>
              <div className="ml-4 text-xs text-muted-foreground font-mono">
                contact-form.tsx
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-mono text-neon-green mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-dark-bg border border-neon-green/30 rounded-lg text-foreground font-mono focus:border-neon-green focus:outline-none focus:shadow-neon transition-all duration-300"
                    placeholder="your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-mono text-neon-green mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-dark-bg border border-neon-green/30 rounded-lg text-foreground font-mono focus:border-neon-green focus:outline-none focus:shadow-neon transition-all duration-300"
                    placeholder="enter your email"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-mono text-neon-green mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-dark-bg border border-neon-green/30 rounded-lg text-foreground font-mono focus:border-neon-green focus:outline-none focus:shadow-neon transition-all duration-300 resize-none"
                  placeholder="enter your message..."
                />
              </div>

              <Button
                type="submit"
                variant="neon"
                size="lg"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center space-x-2 disabled:opacity-50"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-dark-bg border-t-transparent rounded-full animate-spin"></div>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send size={16} />
                    <span>Send Message</span>
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;