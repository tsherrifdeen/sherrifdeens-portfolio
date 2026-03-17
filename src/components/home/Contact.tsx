"use client";
import { useState } from "react";
import Image from "next/image";
import { Icon } from "@iconify/react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import ScrollIndicator from "@/components/common/ScrollIndicator";
import SectionTitle from "@/components/common/SectionTitle";

interface FormData {
  name: string;
  email: string;
  message: string;
}

const contactInfo = [
  { icon: "ph:envelope-simple-fill", text: "tsherrifdeen@gmail.com" },
  { icon: "ph:map-pin-fill", text: "NG" },
  { icon: "ph:briefcase-fill", text: "Full-time / Freelancer" },
  { icon: "ph:link-simple-fill", text: "sherrifdeen.vercel.app" },
];

const ProfileCard = () => (
  <div
    className="flex flex-col items-center py-10 px-8 gap-5 shrink-0 w-full max-w-80"
    style={{
      backgroundColor: "#374151",
      borderRadius: "130px 0 130px 0",
      border: "4px solid #ffffff",
      boxShadow: "-4px -4px 2px #12f7d6",
    }}
  >
    <Image
      src="/images/profile-photo.png"
      alt="Sherrifdeen profile photo"
      width={102}
      height={102}
      className="rounded-full object-cover"
      style={{ border: "3px solid #12f7d6" }}
    />
    <div className="text-center">
      <p className="font-ibm-plex-mono font-medium text-white text-2xl capitalize">
        Sherrifdeen T.
      </p>
      <p className="font-ibm-plex-mono text-white text-xs mt-1">
        Software Engineer
      </p>
    </div>
    <div className="flex flex-col gap-3 w-full">
      {contactInfo.map(({ icon, text }) => (
        <div key={text} className="flex items-center gap-2">
          <Icon icon={icon} width={13} height={13} color="#12f7d6" />
          <span className="font-ibm-plex-mono text-white text-xs">{text}</span>
        </div>
      ))}
    </div>
    <a
      href={process.env.NEXT_PUBLIC_BASE_URL + "/Sherrifdeen_Tijani_Resume.pdf"}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 px-6 py-2.5 rounded-full font-ubuntu text-base capitalize hover:opacity-90 transition-opacity mt-2"
      style={{ backgroundColor: "white", color: "#374151" }}
    >
      View my Resume
      <Icon icon="ph:download-simple-bold" width={18} height={18} />
    </a>
  </div>
);

const InputField = ({
  label,
  placeholder,
  type = "text",
  value,
  onChange,
}: {
  label: string;
  placeholder: string;
  type?: string;
  value: string;
  onChange: (val: string) => void;
}) => (
  <div className="flex flex-col gap-2">
    <label className="font-ubuntu font-light text-secondary text-sm">
      {label}
    </label>
    <div className="flex flex-col gap-1">
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="bg-transparent text-white font-ubuntu text-base outline-none placeholder:text-white/30 w-full"
      />
      <div className="h-px" style={{ backgroundColor: "#98faec" }} />
    </div>
  </div>
);

const Contact = () => {
  const sectionRef = useScrollAnimation<HTMLElement>();
  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error("Failed to send");

      alert("Message sent! Thank you for reaching out.");
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      alert("Something went wrong. Please try again.");
    }
  };
  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative bg-background-dark topo-bg"
      style={{ borderTop: "1px solid #12f7d6" }}
    >
      <div className="flex justify-center pt-16 pb-4">
        <ScrollIndicator />
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16">
        <SectionTitle
          title="Contact"
          subtitle="I'm currently available to work"
          className="mb-16"
          titleClassName="font-manrope font-bold"
        />

        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          {/* Form */}
          <div className="flex-1 flex flex-col gap-10">
            <h3
              className="font-ibm-plex-mono font-medium text-secondary capitalize"
              style={{ fontSize: "clamp(20px, 2vw, 24px)" }}
            >
              Send me a message
            </h3>
            <form onSubmit={handleSubmit} className="flex flex-col gap-8">
              <div className="flex flex-col sm:flex-row gap-8 sm:gap-12">
                <div className="flex-1">
                  <InputField
                    label="Your name *"
                    placeholder="Enter your name"
                    value={form.name}
                    onChange={(val) => setForm((f) => ({ ...f, name: val }))}
                  />
                </div>
                <div className="flex-1">
                  <InputField
                    label="Your email *"
                    placeholder="Enter your email"
                    type="email"
                    value={form.email}
                    onChange={(val) => setForm((f) => ({ ...f, email: val }))}
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="font-ubuntu font-light text-secondary text-sm">
                  Your message *
                </label>
                <div className="flex flex-col gap-1">
                  <textarea
                    placeholder="Enter your needs"
                    rows={3}
                    value={form.message}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, message: e.target.value }))
                    }
                    className="bg-transparent text-white font-ubuntu text-base outline-none placeholder:text-white/30 resize-none w-full"
                  />
                  <div
                    className="h-px"
                    style={{ backgroundColor: "#98faec" }}
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="flex items-center gap-2 px-10 py-3.5 rounded-full font-ubuntu text-xl capitalize hover:opacity-90 hover:scale-105 transition-all duration-300"
                  style={{ backgroundColor: "#12f7d6", color: "#292f36" }}
                >
                  Send Message
                  <Icon
                    icon="ph:paper-plane-tilt-fill"
                    width={20}
                    height={20}
                  />
                </button>
              </div>
            </form>
          </div>

          {/* Profile card */}
          <div className="flex justify-center lg:justify-end">
            <ProfileCard />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
