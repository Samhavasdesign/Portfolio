"use client";

import { useEffect, useMemo, useRef, useState } from "react";

const INQUIRY_OPTIONS = [
  "Job opportunity",
  "Freelance project",
  "Collaboration",
  "Just saying hi",
];

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function ContactModal({ triggerClassName = "", triggerLabel = "Let's talk →", onOpen }) {
  const [open, setOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    inquiry: INQUIRY_OPTIONS[0],
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [submitError, setSubmitError] = useState("");
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);
  const inquiryRef = useRef(null);

  const messageCount = form.message.length;

  const modalStateClass = open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none";
  const panelStateClass = open
    ? "translate-y-0 opacity-100 md:scale-100"
    : "translate-y-full opacity-0 md:translate-y-2 md:scale-[0.98]";

  const resetFormState = () => {
    setIsSubmitting(false);
    setIsSuccess(false);
    setErrors({});
    setSubmitError("");
  };

  const closeModal = () => {
    setOpen(false);
    resetFormState();
  };

  useEffect(() => {
    if (!open) return undefined;

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        closeModal();
      }
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  useEffect(() => {
    if (!open) setIsInquiryOpen(false);
  }, [open]);

  useEffect(() => {
    if (!open || !isSuccess) return undefined;
    const timer = window.setTimeout(() => {
      closeModal();
    }, 2200);
    return () => window.clearTimeout(timer);
  }, [open, isSuccess]);

  useEffect(() => {
    if (!isInquiryOpen) return undefined;
    const onPointerDown = (event) => {
      if (!inquiryRef.current) return;
      if (!inquiryRef.current.contains(event.target)) {
        setIsInquiryOpen(false);
      }
    };
    window.addEventListener("pointerdown", onPointerDown);
    return () => window.removeEventListener("pointerdown", onPointerDown);
  }, [isInquiryOpen]);

  const isFormDisabled = useMemo(() => isSubmitting || isSuccess, [isSubmitting, isSuccess]);

  const validate = () => {
    const nextErrors = {};
    if (!form.name.trim()) {
      nextErrors.name = "Please share your name.";
    }
    if (!form.email.trim()) {
      nextErrors.email = "Please share your email.";
    } else if (!EMAIL_REGEX.test(form.email.trim())) {
      nextErrors.email = "Please enter a valid email address.";
    }
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    if (isFormDisabled) return;
    if (!validate()) return;

    setIsSubmitting(true);
    setSubmitError("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name.trim(),
          email: form.email.trim(),
          inquiry: form.inquiry,
          message: form.message.trim(),
        }),
      });

      const payload = await response.json().catch(() => ({}));
      if (!response.ok) {
        throw new Error(payload?.error || "Unable to send message right now.");
      }

      setIsSuccess(true);
    } catch (error) {
      setSubmitError(error?.message || "Unable to send message right now.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const onFieldFocus = (event) => {
    if (typeof window === "undefined") return;
    if (window.innerWidth >= 768) return;
    window.setTimeout(() => {
      event.target.scrollIntoView({ block: "center", inline: "nearest", behavior: "smooth" });
    }, 120);
  };

  return (
    <>
      <button
        type="button"
        className={triggerClassName}
        onClick={() => {
          if (typeof onOpen === "function") onOpen();
          setOpen(true);
        }}
      >
        {triggerLabel}
      </button>

      <div className={`fixed inset-0 z-[9999] transition-opacity duration-300 ease-out ${modalStateClass}`}>
        <div
          role="presentation"
          className="absolute inset-0 z-0 bg-[rgba(5,5,5,0.55)]"
          aria-hidden="true"
        />

        <div
          className="relative z-10 flex h-[100dvh] items-end justify-center p-0 md:items-center md:px-6 md:py-6"
          onClick={closeModal}
          role="presentation"
        >
          <section
            role="dialog"
            aria-modal="true"
            aria-label="Contact Samantha"
            className={`relative h-[100dvh] w-screen border border-[var(--c-border-mid)] bg-[var(--c-bg-chat)] transition-all duration-300 ease-out md:h-auto md:w-full md:max-w-[480px] md:rounded-xl ${panelStateClass}`}
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-[var(--c-border)] px-5 py-4 md:px-6">
              <div>
                <h3 className="text-[var(--c-purple)]">Let&apos;s talk</h3>
                <p className="mt-1 font-mono text-[14px] text-[var(--c-text-2)]">What are you building right now?</p>
              </div>
              <button
                type="button"
                onClick={closeModal}
                className="h-11 w-11 rounded border border-[var(--c-green-border)] bg-transparent text-[22px] leading-none text-[var(--c-green)] transition-colors duration-200 hover:border-[var(--c-green)] hover:text-[var(--c-green-live)]"
                aria-label="Close"
              >
                ×
              </button>
            </div>

            <form
              onSubmit={onSubmit}
              className="h-[calc(100dvh-76px)] overflow-y-auto space-y-4 px-5 pb-[max(1rem,env(safe-area-inset-bottom))] pt-5 md:h-auto md:px-6 md:pb-6"
              noValidate
            >
              <div>
                <label htmlFor="contact-name" className="mb-2 block font-mono text-[12px] uppercase tracking-[0.12em] text-[var(--c-text)]">
                  Name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  placeholder="Hey, I'm..."
                  value={form.name}
                  disabled={isFormDisabled}
                  onChange={(e) => setForm((prev) => ({ ...prev, name: e.target.value }))}
                  onFocus={onFieldFocus}
                  className="contact-input w-full appearance-none rounded border border-[var(--c-border-bright)] bg-[var(--c-border)] px-3 py-2.5 font-mono text-[15px] text-[var(--c-text)] outline-none transition-colors duration-200 placeholder:text-[var(--c-text-3)] focus:border-[var(--c-purple-hover)]"
                />
                {errors.name ? <p className="mt-1 font-mono text-[12px] text-[var(--c-error)]">{errors.name}</p> : null}
              </div>

              <div>
                <label htmlFor="contact-email" className="mb-2 block font-mono text-[12px] uppercase tracking-[0.12em] text-[var(--c-text)]">
                  Email
                </label>
                <input
                  id="contact-email"
                  type="email"
                  placeholder="your@email.com"
                  value={form.email}
                  disabled={isFormDisabled}
                  onChange={(e) => setForm((prev) => ({ ...prev, email: e.target.value }))}
                  onFocus={onFieldFocus}
                  className="contact-input w-full appearance-none rounded border border-[var(--c-border-bright)] bg-[var(--c-border)] px-3 py-2.5 font-mono text-[15px] text-[var(--c-text)] outline-none transition-colors duration-200 placeholder:text-[var(--c-text-3)] focus:border-[var(--c-purple-hover)]"
                />
                {errors.email ? <p className="mt-1 font-mono text-[12px] text-[var(--c-error)]">{errors.email}</p> : null}
              </div>

              <div>
                <label htmlFor="contact-inquiry" className="mb-2 block font-mono text-[12px] uppercase tracking-[0.12em] text-[var(--c-text)]">
                  What are you getting in touch about?
                </label>
                <div ref={inquiryRef} className="relative">
                  <button
                    id="contact-inquiry"
                    type="button"
                    disabled={isFormDisabled}
                    onClick={() => setIsInquiryOpen((prev) => !prev)}
                    onFocus={onFieldFocus}
                    className={`flex w-full items-center justify-between rounded border bg-[var(--c-border)] px-3 py-2.5 font-mono text-[15px] outline-none transition-colors duration-200 ${form.inquiry ? "border-[var(--c-purple-hover)] text-[var(--c-purple-hover)]" : "border-[var(--c-border-bright)] text-[var(--c-text)]"}`}
                    aria-expanded={isInquiryOpen}
                    aria-haspopup="listbox"
                  >
                    <span>{form.inquiry}</span>
                    <span className={`text-[11px] transition-transform duration-200 ${isInquiryOpen ? "rotate-180" : ""}`}>
                      ▼
                    </span>
                  </button>

                  {isInquiryOpen ? (
                    <div
                      role="listbox"
                      className="absolute left-0 top-[calc(100%+6px)] z-20 w-full rounded border border-[var(--c-border-mid)] bg-[var(--c-bg-raised)] p-1 shadow-[0_8px_24px_rgba(0,0,0,0.45)]"
                    >
                      {INQUIRY_OPTIONS.map((option) => {
                        const selected = option === form.inquiry;
                        return (
                          <button
                            key={option}
                            type="button"
                            role="option"
                            aria-selected={selected}
                            onClick={() => {
                              setForm((prev) => ({ ...prev, inquiry: option }));
                              setIsInquiryOpen(false);
                            }}
                            className={`flex w-full items-center gap-2 rounded px-2 py-2 text-left font-mono text-[14px] transition-colors duration-150 ${
                              selected
                                ? "bg-[rgba(221,177,230,0.14)] text-[var(--c-purple-hover)]"
                                : "text-[var(--c-text-2)] hover:bg-[var(--c-border)] hover:text-[var(--c-text)]"
                            }`}
                          >
                            <span className={`text-[12px] ${selected ? "opacity-100" : "opacity-0"}`}>✓</span>
                            <span>{option}</span>
                          </button>
                        );
                      })}
                    </div>
                  ) : null}
                </div>
              </div>

              <div>
                <label htmlFor="contact-message" className="mb-2 block font-mono text-[12px] uppercase tracking-[0.12em] text-[var(--c-text)]">
                  Message
                </label>
                <textarea
                  id="contact-message"
                  placeholder="Tell me a bit more..."
                  value={form.message}
                  disabled={isFormDisabled}
                  onChange={(e) => setForm((prev) => ({ ...prev, message: e.target.value }))}
                  onFocus={onFieldFocus}
                  rows={5}
                  className="w-full resize-y rounded border border-[var(--c-border-bright)] bg-[var(--c-border)] px-3 py-2.5 font-mono text-[15px] text-[var(--c-text)] outline-none transition-colors duration-200 placeholder:text-[var(--c-text-3)] focus:border-[var(--c-purple-hover)]"
                />
                <p className="mt-1 text-right font-mono text-[11px] text-[var(--c-text-3)]">{messageCount} characters</p>
              </div>

              <button
                type="submit"
                disabled={isFormDisabled}
                className="mt-2 flex w-full items-center justify-center gap-2 rounded bg-[var(--c-green)] px-4 py-3 font-mono text-[13px] uppercase tracking-[0.1em] text-[var(--c-bg)] transition-all duration-250 ease-out hover:bg-[var(--c-green-live)] disabled:cursor-not-allowed disabled:opacity-80"
              >
                {isSubmitting ? (
                  <>
                    <span className="h-4 w-4 animate-spin rounded-full border-2 border-[var(--c-bg)] border-t-transparent" />
                    Sending...
                  </>
                ) : isSuccess ? (
                  <>
                    <span className="text-[16px]">✓</span>
                    Message sent! I&apos;ll be in touch soon.
                  </>
                ) : (
                  "Send it"
                )}
              </button>
              {submitError ? (
                <p className="mt-2 font-mono text-[12px] text-[var(--c-error)]">
                  {submitError}
                </p>
              ) : null}
            </form>
          </section>
        </div>
      </div>
    </>
  );
}
