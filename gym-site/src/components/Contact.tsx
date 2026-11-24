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

    const text = `Hi ${gymConfig.name}!\nName: ${values.name}\nPhone: ${values.phone}\nMessage: ${values.message}`;
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
          <h2 className="font-display text-[clamp(2rem,5vw,3.5rem)] leading-[1.05] tracking-tighterest text-fog">
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
                  <p className="font-display text-xs tracking-wideish text-fog-muted">
                    PHONE
                  </p>
                  <a
                    href={`tel:${contact.phoneRaw}`}
                    className="mt-1 inline-flex min-h-11 items-center text-fog transition-colors hover:text-lime"
                  >
                    {contact.phone}
                  </a>
                </div>
              </li>
              <li className="flex gap-4">
                <MessageCircle className="mt-1 shrink-0 text-lime" size={20} />
                <div>
                  <p className="font-display text-xs tracking-wideish text-fog-muted">
                    WHATSAPP
                  </p>
                  <a
                    href={getWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 inline-flex min-h-11 items-center text-fog transition-colors hover:text-lime"
                  >
                    {contact.whatsapp}
                  </a>
                </div>
              </li>
              <li className="flex gap-4">
                <MapPin className="mt-1 shrink-0 text-lime" size={20} />
                <div>
                  <p className="font-display text-xs tracking-wideish text-fog-muted">
                    ADDRESS
                  </p>
                  <a
                    href={contact.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 block text-fog transition-colors hover:text-lime"
                  >
                    {contact.address}
                  </a>
                </div>
              </li>
              <li className="flex gap-4">
                <Clock className="mt-1 shrink-0 text-lime" size={20} />
                <div>
                  <p className="font-display text-xs tracking-wideish text-fog-muted">
                    HOURS
                  </p>
                  <p className="mt-1 text-fog">{contact.hours.weekdays}</p>
                  <p className="text-fog-soft/90">{contact.hours.weekends}</p>
                </div>
              </li>
            </ul>

            <a
              href={contact.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-10 flex min-h-[220px] flex-1 overflow-hidden border border-line bg-ink-muted transition-colors hover:border-lime/40"
              aria-label={`Open Google Maps for ${contact.address}`}
            >
              <div className="flex w-full flex-col items-center justify-center gap-3 bg-[radial-gradient(ellipse_at_center,_rgba(198,255,0,0.06),_transparent_65%)] p-6 text-center">
                <MapPin className="text-lime transition-transform group-hover:scale-110" size={28} />
                <p className="font-display text-sm tracking-wideish text-fog">
                  FIND US ON THE MAP
                </p>
                <p className="max-w-xs text-xs leading-relaxed text-fog-muted">
                  {contact.address}
                </p>
                <p className="font-display text-[10px] tracking-wideish text-lime">
                  OPEN IN GOOGLE MAPS
                </p>
              </div>
            </a>
          </Reveal>

          <Reveal delay={0.1} className="h-full">
            <form
              onSubmit={onSubmit}
              noValidate
              className="flex h-full flex-col border border-line bg-ink-soft p-6 sm:p-8"
            >
              <h3 className="font-display text-xl tracking-wideish text-fog">
                Send a Message
              </h3>
              <p className="mt-2 text-sm text-fog-dim">
                We&apos;ll open WhatsApp with your enquiry ready to send.
              </p>

              <div className="mt-8 flex-1 space-y-5">
                <div>
                  <label
                    htmlFor="name"
                    className="font-display text-xs tracking-wideish text-fog-muted"
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
                    className="mt-2 w-full border border-line-strong bg-ink px-4 py-3 text-fog outline-none transition-colors focus:border-lime"
                    placeholder="Your name"
                  />
                  {errors.name && (
                    <p className="mt-1.5 text-xs text-red-400">{errors.name}</p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="font-display text-xs tracking-wideish text-fog-muted"
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
                    className="mt-2 w-full border border-line-strong bg-ink px-4 py-3 text-fog outline-none transition-colors focus:border-lime"
                    placeholder="+91 84400 71458"
                  />
                  {errors.phone && (
                    <p className="mt-1.5 text-xs text-red-400">{errors.phone}</p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="font-display text-xs tracking-wideish text-fog-muted"
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
                    className="mt-2 w-full resize-y border border-line-strong bg-ink px-4 py-3 text-fog outline-none transition-colors focus:border-lime"
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
