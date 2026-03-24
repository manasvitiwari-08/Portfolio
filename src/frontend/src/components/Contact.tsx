import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "motion/react";
import { useState } from "react";
import {
  FiGithub,
  FiLinkedin,
  FiLoader,
  FiMail,
  FiPhone,
  FiSend,
} from "react-icons/fi";
import { toast } from "sonner";

const contactInfo = [
  {
    icon: FiMail,
    label: "Email",
    value: "manasvi@email.com",
    href: "mailto:manasvi@email.com",
  },
  {
    icon: FiLinkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/manasvi-tiwari",
    href: "https://linkedin.com",
  },
  {
    icon: FiGithub,
    label: "GitHub",
    value: "github.com/manasvi-tiwari",
    href: "https://github.com/manasvi-tiwari",
  },
  {
    icon: FiPhone,
    label: "Phone",
    value: "+91 74704 22525",
    href: "tel:+917470422525",
  },
];

type FormState = {
  name: string;
  email: string;
  subject: string;
  message: string;
};
type Errors = Partial<Record<keyof FormState, string>>;

function validate(form: FormState): Errors {
  const errors: Errors = {};
  if (!form.name.trim()) errors.name = "Name is required";
  if (!form.email.trim()) errors.email = "Email is required";
  else if (!/^[^@]+@[^@]+\.[^@]+$/.test(form.email))
    errors.email = "Enter a valid email";
  if (!form.message.trim()) errors.message = "Message is required";
  return errors;
}

export default function Contact() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormState]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate(form);
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setStatus("loading");
    // Simulate EmailJS submission (replace with real EmailJS integration)
    // emailjs.send('SERVICE_ID', 'TEMPLATE_ID', { ...form }, 'PUBLIC_KEY')
    await new Promise((res) => setTimeout(res, 1800));
    const success = Math.random() > 0.1; // 90% success rate simulation
    if (success) {
      setStatus("success");
      toast.success("Message sent! I'll get back to you soon.");
      setForm({ name: "", email: "", subject: "", message: "" });
    } else {
      setStatus("error");
      toast.error("Failed to send. Please try again or email directly.");
    }
    setTimeout(() => setStatus("idle"), 3000);
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/4 w-80 h-80 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full bg-accent/10 blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent text-sm font-semibold uppercase tracking-widest">
            Let's Connect
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold mt-2 text-foreground">
            Get In <span className="text-gradient-indigo">Touch</span>
          </h2>
          <div className="mt-4 h-1 w-16 mx-auto rounded-full bg-gradient-to-r from-primary to-accent" />
          <p className="mt-4 text-muted-foreground max-w-lg mx-auto">
            I'm open to new opportunities, collaborations, and interesting
            conversations. Drop me a message!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-4"
          >
            <div className="glass rounded-2xl p-6 bg-gradient-to-br from-primary/15 to-accent/10 border border-primary/30">
              <h3 className="font-display font-semibold text-lg text-foreground mb-2">
                Contact Information
              </h3>
              <p className="text-muted-foreground text-sm mb-6">
                Feel free to reach out through any of these channels.
              </p>
              <div className="space-y-4">
                {contactInfo.map((info) => (
                  <motion.a
                    key={info.label}
                    href={info.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ x: 4 }}
                    className="flex items-center gap-3 text-sm group"
                  >
                    <div className="w-9 h-9 rounded-lg glass flex items-center justify-center text-primary group-hover:bg-primary/20 transition-colors">
                      <info.icon size={15} />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">
                        {info.label}
                      </p>
                      <p className="text-foreground font-medium group-hover:text-primary transition-colors text-sm">
                        {info.value}
                      </p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-3"
          >
            <form
              onSubmit={handleSubmit}
              className="glass rounded-2xl p-6 bg-gradient-to-br from-card/60 to-card/40 border border-border/60 space-y-4"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <Label htmlFor="name" className="text-sm font-medium">
                    Name *
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    data-ocid="contact.input"
                    placeholder="Manasvi Tiwari"
                    value={form.name}
                    onChange={handleChange}
                    className={`glass border-border/60 bg-transparent ${errors.name ? "border-destructive" : ""}`}
                  />
                  {errors.name && (
                    <p
                      data-ocid="contact.error_state"
                      className="text-destructive text-xs"
                    >
                      {errors.name}
                    </p>
                  )}
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="email" className="text-sm font-medium">
                    Email *
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    data-ocid="contact.search_input"
                    placeholder="you@example.com"
                    value={form.email}
                    onChange={handleChange}
                    className={`glass border-border/60 bg-transparent ${errors.email ? "border-destructive" : ""}`}
                  />
                  {errors.email && (
                    <p className="text-destructive text-xs">{errors.email}</p>
                  )}
                </div>
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="subject" className="text-sm font-medium">
                  Subject
                </Label>
                <Input
                  id="subject"
                  name="subject"
                  placeholder="How can I help you?"
                  value={form.subject}
                  onChange={handleChange}
                  className="glass border-border/60 bg-transparent"
                />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="message" className="text-sm font-medium">
                  Message *
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  data-ocid="contact.textarea"
                  placeholder="Tell me about your project or just say hello..."
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  className={`glass border-border/60 bg-transparent resize-none ${errors.message ? "border-destructive" : ""}`}
                />
                {errors.message && (
                  <p className="text-destructive text-xs">{errors.message}</p>
                )}
              </div>

              <motion.button
                data-ocid="contact.submit_button"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={status === "loading"}
                className="w-full flex items-center justify-center gap-2 py-3 px-6 rounded-xl font-semibold text-white transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed"
                style={{
                  background:
                    "linear-gradient(135deg, oklch(0.60 0.22 270), oklch(0.65 0.22 310), oklch(0.72 0.20 195))",
                }}
              >
                {status === "loading" ? (
                  <>
                    <span
                      data-ocid="contact.loading_state"
                      className="flex items-center gap-2"
                    >
                      <FiLoader size={16} className="animate-spin" />
                      Sending...
                    </span>
                  </>
                ) : (
                  <>
                    <FiSend size={16} />
                    Send Message
                  </>
                )}
              </motion.button>

              {status === "success" && (
                <motion.div
                  data-ocid="contact.success_state"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center text-sm text-green-500 font-medium py-2"
                >
                  ✓ Message sent successfully!
                </motion.div>
              )}
              {status === "error" && (
                <motion.div
                  data-ocid="contact.error_state"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center text-sm text-destructive font-medium py-2"
                >
                  ✗ Failed to send. Please try again.
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
