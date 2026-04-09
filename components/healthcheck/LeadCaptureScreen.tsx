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
    return Object.keys(e).length === 0;
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
              placeholder="Full name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className={inputClass("name")}
            />
            {errors.name && <p className="font-body text-xs text-destructive mt-1">{errors.name}</p>}
          </div>
          <div>
            <input
              placeholder="Work email"
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className={inputClass("email")}
            />
            {errors.email && <p className="font-body text-xs text-destructive mt-1">{errors.email}</p>}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <input
                placeholder="Company"
                value={form.company}
                onChange={(e) => setForm({ ...form, company: e.target.value })}
                className={inputClass("company")}
              />
              {errors.company && <p className="font-body text-xs text-destructive mt-1">{errors.company}</p>}
            </div>
            <div>
              <input
                placeholder="Role"
                value={form.role}
                onChange={(e) => setForm({ ...form, role: e.target.value })}
                className={inputClass("role")}
              />
              {errors.role && <p className="font-body text-xs text-destructive mt-1">{errors.role}</p>}
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <select
                value={form.companySize}
                onChange={(e) => setForm({ ...form, companySize: e.target.value })}
                className={selectClass("companySize", form.companySize)}
              >
                <option value="" disabled>Company size</option>
                {COMPANY_SIZES.map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
              {errors.companySize && <p className="font-body text-xs text-destructive mt-1">{errors.companySize}</p>}
            </div>
            <div>
              <select
                value={form.industry}
                onChange={(e) => setForm({ ...form, industry: e.target.value })}
                className={selectClass("industry", form.industry)}
              >
                <option value="" disabled>Industry</option>
                {INDUSTRIES.map((ind) => (
                  <option key={ind} value={ind}>{ind}</option>
                ))}
              </select>
              {errors.industry && <p className="font-body text-xs text-destructive mt-1">{errors.industry}</p>}
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-primary text-primary-foreground font-heading font-semibold text-sm px-8 py-3.5 rounded-xl hover:opacity-90 transition-opacity mt-4"
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
