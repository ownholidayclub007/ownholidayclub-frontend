"use client";

import React, { useState } from "react";
import { Mail } from "lucide-react";
import ScrollAnimate from "@/components/common/ScrollAnimate";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [newsletterState, setNewsletterState] = useState("idle");
  const [newsletterMessage, setNewsletterMessage] = useState("");

  const API_BASE_URL =
    process.env.NEXT_PUBLIC_OWNHOLIDAYCLUB_BACKEND_URL || "http://localhost:8081";

  const handleNewsletterSubmit = async (event) => {
    event.preventDefault();
    const trimmedEmail = email.trim().toLowerCase();

    if (!trimmedEmail || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)) {
      setNewsletterState("error");
      setNewsletterMessage("Please enter a valid email address.");
      window.setTimeout(() => {
        setNewsletterState("idle");
        setNewsletterMessage("");
      }, 3000);
      return;
    }

    setNewsletterState("submitting");
    setNewsletterMessage("");

    try {
      const response = await fetch(`${API_BASE_URL}/api/newsletter-subscriptions`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: trimmedEmail, source: "blog-detail-newsletter" }),
      });

      const data = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(data?.message || "Unable to subscribe right now.");
      }

      setNewsletterState("success");
      setNewsletterMessage(data?.message || "Thanks for subscribing.");
      setEmail("");

      window.setTimeout(() => {
        setNewsletterState("idle");
        setNewsletterMessage("");
      }, 3000);
    } catch (error) {
      setNewsletterState("error");
      setNewsletterMessage(error.message || "Unable to subscribe right now.");

      window.setTimeout(() => {
        setNewsletterState("idle");
        setNewsletterMessage("");
      }, 3000);
    }
  };

  const handleNewsletterChange = (event) => {
    setEmail(event.target.value);
    if (newsletterState !== "idle") {
      setNewsletterState("idle");
      setNewsletterMessage("");
    }
  };

  return (
    <section className="py-32 bg-slate-950 text-white relative overflow-hidden rounded-[4rem] md:rounded-[6rem] mx-4 md:mx-8 my-12 z-20 shadow-2xl">
      <div className="absolute inset-0 opacity-10 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-screen pointer-events-none z-10"></div>
      <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-amber-500/10 rounded-full blur-[150px] pointer-events-none z-0" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none z-0" />

      <div className="max-w-4xl mx-auto px-6 relative z-20 text-center">
        <ScrollAnimate animation="fade-up">
          <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white/5 border border-white/10 shadow-sm mb-8 backdrop-blur-md">
            <Mail size={14} className="text-amber-500" />
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-300">
              Join the Inner Circle
            </span>
          </div>

          <h2 className="text-5xl md:text-7xl font-black font-serif mb-6 leading-tight">
            Inspire Your Next <br />
            <span className="text-amber-500 italic font-light">Journey.</span>
          </h2>

          <p className="text-slate-400 text-lg md:text-xl leading-relaxed font-sans mb-12 max-w-2xl mx-auto">
            Subscribe to our exclusive newsletter to receive curated travel
            guides, secret resort reveals, and premier event planning tips
            directly in your inbox.
          </p>

          <form
            className="max-w-xl mx-auto relative group"
            onSubmit={handleNewsletterSubmit}
          >
            <input
              type="email"
              value={email}
              onChange={handleNewsletterChange}
              placeholder="Enter your email address..."
              className="w-full pl-8 pr-40 py-5 rounded-full bg-white/5 border border-white/20 text-white placeholder:text-slate-500 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all font-sans text-lg backdrop-blur-md"
              disabled={newsletterState === "submitting"}
              aria-label="Email address"
            />
            <button
              type="submit"
              disabled={newsletterState === "submitting"}
              className="absolute right-2 top-2 bottom-2 bg-amber-500 text-white px-8 rounded-full font-bold text-xs uppercase tracking-widest hover:bg-amber-400 transition-colors shadow-lg flex items-center gap-2 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {newsletterState === "submitting" ? "Joining..." : "Subscribe"}
            </button>
          </form>

          {newsletterMessage ? (
            <p
              className={`mt-6 text-xs font-sans ${
                newsletterState === "error" ? "text-red-400" : "text-emerald-400"
              }`}
            >
              {newsletterMessage}
            </p>
          ) : (
            <p className="mt-6 text-slate-500 text-xs font-sans">
              By subscribing, you agree to our Privacy Policy. No spam, just pure
              wanderlust.
            </p>
          )}
        </ScrollAnimate>
      </div>
    </section>
  );
}
