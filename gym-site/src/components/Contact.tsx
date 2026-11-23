"use client";

import { FormEvent, useState } from "react";
import { Clock, MapPin, MessageCircle, Phone } from "lucide-react";
import { gymConfig, getWhatsAppUrl } from "@/config/gym";
import { Button } from "./ui/Button";
import { Reveal } from "./ui/Reveal";

type FormState = {
  name: string;
  phone: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormState, string>>;

const initial: FormState = { name: "", phone: "", message: "" };

function validate(values: FormState): FormErrors {
  const errors: FormErrors = {};
  if (!values.name.trim() || values.name.trim().length < 2) {
    errors.name = "Please enter your name (at least 2 characters).";
  }
  const phoneDigits = values.phone.replace(/\D/g, "");
  if (phoneDigits.length < 10) {
    errors.phone = "Enter a valid phone number (at least 10 digits).";
  }
  if (!values.message.trim() || values.message.trim().length < 10) {
    errors.message = "Message should be at least 10 characters.";
  }
  return errors;
}

export function Contact() {
  const { contact } = gymConfig;
  const [values, setValues] = useState<FormState>(initial);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const next = validate(values);
    setErrors(next);
    if (Object.keys(next).length > 0) return;

    const text = `Hi Iron Cult Fitness!\nName: ${values.name}\nPhone: ${values.phone}\nMessage: ${values.message}`;
    window.open(getWhatsAppUrl(text), "_blank", "noopener,noreferrer");
    setSubmitted(true);
    setValues(initial);
  };

  return (
    <section id="contact" className="section-pad py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <Reveal className="mb-14 max-w-2xl">
          <p className="mb-4 font-display text-xs tracking-wideish text-lime">
            CONTACT
          </p>
          <h2 className="font-display text-[clamp(2rem,5vw,3.5rem)] leading-[1.05] tracking-tighterest text-white">
            GET IN{" "}
            <span className="text-lime">TOUCH.</span>
          </h2>
        </Reveal>

        <div className="grid items-stretch gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal className="flex h-full flex-col">
            <ul className="space-y-6">
              <li className="flex gap-4">
                <Phone className="mt-1 shrink-0 text-lime" size={20} />
                <div>
                  <p className="font-display text-xs tracking-wideish text-white/60">
                    PHONE
                  </p>
                  <a
                    href={`tel:${contact.phoneRaw}`}
                    className="mt-1 inline-flex min-h-11 items-center text-white transition-colors hover:text-lime"
                  >
                    {contact.phone}
                  </a>
                </div>
              </li>
              <li className="flex gap-4">
                <MessageCircle className="mt-1 shrink-0 text-lime" size={20} />
                <div>
                  <p className="font-display text-xs tracking-wideish text-white/60">
                    WHATSAPP
                  </p>
                  <a
                    href={getWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 inline-flex min-h-11 items-center text-white transition-colors hover:text-lime"
                  >
                    {contact.whatsapp}
                  </a>
                </div>
              </li>
              <li className="flex gap-4">
                <MapPin className="mt-1 shrink-0 text-lime" size={20} />
                <div>
                  <p className="font-display text-xs tracking-wideish text-white/60">
                    ADDRESS
                  </p>
                  <p className="mt-1 text-white">{contact.address}</p>
                </div>
              </li>
              <li className="flex gap-4">
                <Clock className="mt-1 shrink-0 text-lime" size={20} />
                <div>
                  <p className="font-display text-xs tracking-wideish text-white/60">
                    HOURS
                  </p>
                  <p className="mt-1 text-white">{contact.hours.weekdays}</p>
                  <p className="text-white/70">{contact.hours.weekends}</p>
                </div>
              </li>
            </ul>

            <div className="mt-10 flex min-h-[220px] flex-1 overflow-hidden border border-white/10 bg-[#121212]">
              <div
                className="flex w-full flex-col items-center justify-center gap-3 bg-[radial-gradient(ellipse_at_center,_rgba(198,255,0,0.06),_transparent_65%)] p-6 text-center"
                aria-label="Map placeholder"
              >
                <MapPin className="text-lime" size={28} />
                <p className="font-display text-sm tracking-wideish text-white">
                  FIND US ON THE MAP
                </p>
                <p className="max-w-xs text-xs leading-relaxed text-white/60">
                  {contact.address}
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="h-full">
            <form
              onSubmit={onSubmit}
              noValidate
              className="flex h-full flex-col border border-white/10 bg-[#0c0c0c] p-6 sm:p-8"
            >
              <h3 className="font-display text-xl tracking-wideish text-white">
                Send a Message
              </h3>
              <p className="mt-2 text-sm text-white/50">
                We&apos;ll open WhatsApp with your enquiry ready to send.
              </p>

              <div className="mt-8 flex-1 space-y-5">
                <div>
                  <label
                    htmlFor="name"
                    className="font-display text-xs tracking-wideish text-white/60"
                  >
                    NAME
                  </label>
                  <input
                    id="name"
                    type="text"
                    autoComplete="name"
                    value={values.name}
                    onChange={(e) =>
                      setValues((v) => ({ ...v, name: e.target.value }))
                    }
                    className="mt-2 w-full border border-white/15 bg-ink px-4 py-3 text-white outline-none transition-colors focus:border-lime"
                    placeholder="Your name"
                  />
                  {errors.name && (
                    <p className="mt-1.5 text-xs text-red-400">{errors.name}</p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="font-display text-xs tracking-wideish text-white/60"
                  >
                    PHONE
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    autoComplete="tel"
                    value={values.phone}
                    onChange={(e) =>
                      setValues((v) => ({ ...v, phone: e.target.value }))
                    }
                    className="mt-2 w-full border border-white/15 bg-ink px-4 py-3 text-white outline-none transition-colors focus:border-lime"
                    placeholder="+1 555 000 0000"
                  />
                  {errors.phone && (
                    <p className="mt-1.5 text-xs text-red-400">{errors.phone}</p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="font-display text-xs tracking-wideish text-white/60"
                  >
                    MESSAGE
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={values.message}
                    onChange={(e) =>
                      setValues((v) => ({ ...v, message: e.target.value }))
                    }
                    className="mt-2 w-full resize-y border border-white/15 bg-ink px-4 py-3 text-white outline-none transition-colors focus:border-lime"
                    placeholder="Tell us what you're looking for..."
                  />
                  {errors.message && (
                    <p className="mt-1.5 text-xs text-red-400">{errors.message}</p>
                  )}
                </div>
              </div>

              <div className="mt-auto pt-6">
                <Button type="submit" className="w-full">
                  Send via WhatsApp
                </Button>
                {submitted && (
                  <p className="mt-4 text-center text-sm text-lime">
                    WhatsApp opened — thanks for reaching out.
                  </p>
                )}
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
