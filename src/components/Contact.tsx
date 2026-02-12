import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Send } from 'lucide-react'; // or your icon library

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);
  const [isSending, setIsSending] = useState(false);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.current) return;

    setIsSending(true);

    // REPLACE THESE THREE STRINGS WITH YOUR ACTUAL IDs FROM EMAILJS
    emailjs.sendForm(
      'service_d5dmju8', 
      'template_q45sqla', 
      form.current, 
      'SkoAO3y3ysgGkQClY'
    )
      .then(() => {
          alert("Message sent successfully!");
          form.current?.reset();
          setIsSending(false);
      }, (error) => {
          console.log(error.text);
          alert("Failed to send message, please try again.");
          setIsSending(false);
      });
  };

  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-5xl font-bold text-center mb-12">
          Initiate <span className="text-cyan-400">Connection</span>
        </h2>

        {/* 1. ATTACH THE REF AND THE ONSUBMIT HANDLER */}
        <form ref={form} onSubmit={sendEmail} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              name="from_name" // 2. MUST MATCH YOUR EMAILJS TEMPLATE
              placeholder="Name"
              required
              className="bg-slate-900/50 border border-slate-700 p-4 rounded-lg outline-none focus:border-cyan-400"
            />
            <input
              type="email"
              name="reply_to" // 2. MUST MATCH YOUR EMAILJS TEMPLATE
              placeholder="Email"
              required
              className="bg-slate-900/50 border border-slate-700 p-4 rounded-lg outline-none focus:border-cyan-400"
            />
          </div>
          <textarea
            name="message" // 2. MUST MATCH YOUR EMAILJS TEMPLATE
            placeholder="Message"
            required
            rows={6}
            className="w-full bg-slate-900/50 border border-slate-700 p-4 rounded-lg outline-none focus:border-cyan-400"
          ></textarea>

          <button
            type="submit"
            disabled={isSending}
            className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 p-4 rounded-lg font-bold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity disabled:opacity-50"
          >
            {isSending ? "Sending..." : "Send Message"}
            <Send size={18} />
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;