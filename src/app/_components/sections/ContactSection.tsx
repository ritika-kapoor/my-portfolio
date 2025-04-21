"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const LINKEDIN = "https://www.linkedin.com/in/ritika-kapoor/";
const INSTAGRAM = "https://www.instagram.com/your_instagram/";

export const ContactSection = () => {
  const [form, setForm] = useState({ email: "", subject: "", message: "" });
  const [status, setStatus] = useState<null | "success" | "error" | "loading" >(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("success");
        setForm({ email: "", subject: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-background-dark via-background-light to-background-dark relative">
      <div className="max-w-2xl mx-auto px-4 relative z-10">
        <motion.h2
          className="text-4xl sm:text-5xl font-bold text-accent mb-12 font-serif text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Contact Me
        </motion.h2>
        <motion.form
          onSubmit={handleSubmit}
          className="bg-background-light/80 backdrop-blur-md rounded-lg p-8 shadow-xl border border-accent/10 flex flex-col gap-6"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            required
            className="p-3 rounded vintage-border bg-background-dark/30 text-accent placeholder:text-accent/50 focus:outline-none focus:ring-2 focus:ring-accent"
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={form.subject}
            onChange={handleChange}
            required
            className="p-3 rounded vintage-border bg-background-dark/30 text-accent placeholder:text-accent/50 focus:outline-none focus:ring-2 focus:ring-accent"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            required
            rows={5}
            className="p-3 rounded vintage-border bg-background-dark/30 text-accent placeholder:text-accent/50 focus:outline-none focus:ring-2 focus:ring-accent"
          />
          <motion.button
            type="submit"
            className="vintage-button mt-2"
            whileTap={{ scale: 0.97 }}
            disabled={status === "loading"}
          >
            {status === "loading" ? "Sending..." : "Send"}
          </motion.button>
          {status === "success" && (
            <motion.p className="text-green-500 text-center" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>Message sent! Thank you.</motion.p>
          )}
          {status === "error" && (
            <motion.p className="text-red-500 text-center" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>Something went wrong. Please try again.</motion.p>
          )}
        </motion.form>
        <div className="flex justify-center gap-8 mt-8">
          <motion.a
            href={LINKEDIN}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.15 }}
            className="text-accent hover:text-secondary transition-colors"
            aria-label="LinkedIn"
          >
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.327-.027-3.037-1.852-3.037-1.853 0-2.136 1.446-2.136 2.941v5.665h-3.554v-11.5h3.414v1.571h.049c.476-.899 1.637-1.848 3.369-1.848 3.602 0 4.267 2.37 4.267 5.455v6.322zm-16.356-13.452c-1.144 0-2.072-.928-2.072-2.072 0-1.143.928-2.071 2.072-2.071 1.143 0 2.071.928 2.071 2.071 0 1.144-.928 2.072-2.071 2.072zm1.777 13.452h-3.554v-11.5h3.554v11.5zm18.133-20h-17.066c-1.104 0-2 .896-2 2v20c0 1.104.896 2 2 2h17.066c1.104 0 2-.896 2-2v-20c0-1.104-.896-2-2-2z"/></svg>
          </motion.a>
          <motion.a
            href={INSTAGRAM}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.15 }}
            className="text-accent hover:text-secondary transition-colors"
            aria-label="Instagram"
          >
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.974.974 1.246 2.241 1.308 3.608.058 1.266.069 1.646.069 4.851s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.974.974-2.241 1.246-3.608 1.308-1.266.058-1.646.069-4.851.069s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.974-.974-1.246-2.241-1.308-3.608-.058-1.266-.069-1.646-.069-4.851s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608.974-.974 2.241-1.246 3.608-1.308 1.266-.058 1.646-.069 4.851-.069zm0-2.163c-3.259 0-3.667.012-4.943.07-1.276.058-2.687.334-3.678 1.325-.991.991-1.267 2.403-1.325 3.678-.058 1.276-.07 1.684-.07 4.943s.012 3.667.07 4.943c.058 1.276.334 2.687 1.325 3.678.991.991 2.403 1.267 3.678 1.325 1.276.058 1.684.07 4.943.07s3.667-.012 4.943-.07c1.276-.058 2.687-.334 3.678-1.325.991-.991 1.267-2.403 1.325-3.678.058-1.276.07-1.684.07-4.943s-.012-3.667-.07-4.943c-.058-1.276-.334-2.687-1.325-3.678-.991-.991-2.403-1.267-3.678-1.325-1.276-.058-1.684-.07-4.943-.07zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg>
          </motion.a>
        </div>
      </div>
    </section>
  );
};
