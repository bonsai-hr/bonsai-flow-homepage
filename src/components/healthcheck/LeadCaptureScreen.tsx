import { motion } from "framer-motion";
import { useState } from "react";
import { COMPANY_SIZES, INDUSTRIES } from "@/lib/healthcheck-data";
import { ChevronLeft } from "lucide-react";

export interface LeadData {
  name: string;
  email: string;
  company: string;
  role: string;
  companySize: string;
  industry: string;
}

interface LeadCaptureScreenProps {
  onSubmit: (data: LeadData) => void;
  onBack: () => void;
}

const LeadCaptureScreen = ({ onSubmit, onBack }: LeadCaptureScreenProps) => {
  const [form, setForm] = useState<LeadData>({
    name: "",
    email: "",
    company: "",
    role: "",
    companySize: "",
    industry: "",
  });
  const [errors, setErrors] = useState<Partial<Record<keyof LeadData, string>>>({});
  const [privacyAccepted, setPrivacyAccepted] = useState(false);
  const [privacyError, setPrivacyError] = useState("");

  const validate = (): boolean => {
    const e: Partial<Record<keyof LeadData, string>> = {};
    if (!form.name.trim()) e.name = "Required";
    if (!form.email.trim()) e.email = "Required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Enter a valid work email";
    if (!form.company.trim()) e.company = "Required";
    if (!form.role.trim()) e.role = "Required";
    if (!form.companySize) e.companySize = "Required";
    if (!form.industry) e.industry = "Required";
    setErrors(e);

    if (!privacyAccepted) {
      setPrivacyError("Please confirm you have read the Privacy Notice before continuing.");
    } else {
      setPrivacyError("");
    }

    return Object.keys(e).length === 0 && privacyAccepted;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) onSubmit(form);
  };

  const inputClass = (field: keyof LeadData) =>
    `w-full font-body text-sm px-4 py-3 rounded-xl border-2 bg-card text-foreground placeholder:text-muted-foreground transition-colors outline-none ${
      errors[field] ? "border-destructive" : "border-border focus:border-primary"
    }`;

  const selectClass = (field: keyof LeadData, value: string) =>
    `w-full font-body text-sm px-4 py-3 rounded-xl border-2 bg-card transition-colors outline-none appearance-none ${
      errors[field] ? "border-destructive" : "border-border focus:border-primary"
    } ${value ? "text-foreground" : "text-muted-foreground"}`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
      className="w-full max-w-[680px] mx-auto"
    >
      <div className="bg-card rounded-2xl shadow-sm border border-border p-8 md:p-12">
        <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-2">
          See your AI Health Check result
        </h2>
        <p className="font-body text-base text-muted-foreground mb-8">
          Share a few details to view your result and recommendations.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              id="lead-name"
              placeholder="Full name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className={inputClass("name")}
              aria-invalid={Boolean(errors.name)}
              aria-describedby={errors.name ? "lead-name-error" : undefined}
            />
            {errors.name && (
              <p id="lead-name-error" className="font-body text-xs text-destructive mt-1">
                {errors.name}
              </p>
            )}
          </div>
          <div>
            <input
              id="lead-email"
              placeholder="Work email"
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className={inputClass("email")}
              aria-invalid={Boolean(errors.email)}
              aria-describedby={errors.email ? "lead-email-error" : undefined}
            />
            {errors.email && (
              <p id="lead-email-error" className="font-body text-xs text-destructive mt-1">
                {errors.email}
              </p>
            )}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <input
                id="lead-company"
                placeholder="Company"
                value={form.company}
                onChange={(e) => setForm({ ...form, company: e.target.value })}
                className={inputClass("company")}
                aria-invalid={Boolean(errors.company)}
                aria-describedby={errors.company ? "lead-company-error" : undefined}
              />
              {errors.company && (
                <p id="lead-company-error" className="font-body text-xs text-destructive mt-1">
                  {errors.company}
                </p>
              )}
            </div>
            <div>
              <input
                id="lead-role"
                placeholder="Role"
                value={form.role}
                onChange={(e) => setForm({ ...form, role: e.target.value })}
                className={inputClass("role")}
                aria-invalid={Boolean(errors.role)}
                aria-describedby={errors.role ? "lead-role-error" : undefined}
              />
              {errors.role && (
                <p id="lead-role-error" className="font-body text-xs text-destructive mt-1">
                  {errors.role}
                </p>
              )}
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <select
                id="lead-company-size"
                value={form.companySize}
                onChange={(e) => setForm({ ...form, companySize: e.target.value })}
                className={selectClass("companySize", form.companySize)}
                aria-invalid={Boolean(errors.companySize)}
                aria-describedby={errors.companySize ? "lead-company-size-error" : undefined}
              >
                <option value="" disabled>Company size</option>
                {COMPANY_SIZES.map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
              {errors.companySize && (
                <p id="lead-company-size-error" className="font-body text-xs text-destructive mt-1">
                  {errors.companySize}
                </p>
              )}
            </div>
            <div>
              <select
                id="lead-industry"
                value={form.industry}
                onChange={(e) => setForm({ ...form, industry: e.target.value })}
                className={selectClass("industry", form.industry)}
                aria-invalid={Boolean(errors.industry)}
                aria-describedby={errors.industry ? "lead-industry-error" : undefined}
              >
                <option value="" disabled>Industry</option>
                {INDUSTRIES.map((ind) => (
                  <option key={ind} value={ind}>{ind}</option>
                ))}
              </select>
              {errors.industry && (
                <p id="lead-industry-error" className="font-body text-xs text-destructive mt-1">
                  {errors.industry}
                </p>
              )}
            </div>
          </div>

          <div className="rounded-xl border border-border bg-primary/5 p-4">
            <div className="flex items-start gap-3">
              <input
                id="privacy-acknowledgement"
                type="checkbox"
                checked={privacyAccepted}
                onChange={(e) => {
                  setPrivacyAccepted(e.target.checked);
                  if (e.target.checked) setPrivacyError("");
                }}
                className="mt-0.5 h-4 w-4 rounded border-border text-primary focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-card"
                aria-invalid={Boolean(privacyError)}
                aria-describedby={privacyError ? "privacy-acknowledgement-error" : undefined}
              />
              <label
                htmlFor="privacy-acknowledgement"
                className="font-body text-sm leading-6 text-muted-foreground"
              >
                I have read the{" "}
                <a
                  href="/privacy-notice"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-foreground underline decoration-border underline-offset-4 transition-colors hover:text-primary"
                >
                  Privacy Notice
                </a>{" "}
                and understand that Bonsai HR will use the information I provide to deliver my AI Health
                Test results and any related report or recommendations.
              </label>
            </div>
            {privacyError && (
              <p
                id="privacy-acknowledgement-error"
                className="mt-2 font-body text-xs text-destructive"
              >
                {privacyError}
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={!privacyAccepted}
            aria-disabled={!privacyAccepted}
            className="mt-4 w-full rounded-xl bg-primary px-8 py-3.5 font-heading text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
          >
            View my result
          </button>
        </form>

        <button
          onClick={onBack}
          className="mt-4 inline-flex items-center gap-1 font-body text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <ChevronLeft className="h-4 w-4" />
          Back
        </button>
      </div>
    </motion.div>
  );
};

export default LeadCaptureScreen;
