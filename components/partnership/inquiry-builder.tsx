"use client";

import { useState } from "react";
import { Check, Copy, Mail, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export function InquiryBuilder() {
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState(false);
  const [formDataState, setFormDataState] = useState({
    name: "",
    organization: "",
    interest: "Material sourcing & supply",
    message: "",
  });

  const generateText = () => {
    return `NIRA Partnership Inquiry\n\nFrom: ${formDataState.name || "[Your Name]"}\nOrganization: ${formDataState.organization || "Independent / Direct"}\nFocus Area: ${formDataState.interest}\n\nProject Overview & Goals:\n${formDataState.message || "[Your project message]"}\n\nSubmitted via NIRA Platform`;
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(generateText());
      setCopied(true);
      setError(false);
      setTimeout(() => setCopied(false), 3000);
    } catch {
      setCopied(false);
      setError(true);
    }
  };

  const getMailtoLink = () => {
    const subject = encodeURIComponent(
      `NIRA Inquiry: ${formDataState.interest} - ${formDataState.name || "Collaboration"}`,
    );
    const body = encodeURIComponent(generateText());
    return `mailto:hello@nira-assets.org?subject=${subject}&body=${body}`;
  };

  return (
    <div className="rounded-card border border-coconut/15 bg-cream p-6 md:p-8 shadow-natural">
      <div className="mb-6 flex items-center justify-between border-b border-coconut/10 pb-4">
        <div>
          <span className="text-xs font-bold tracking-widest text-coconut uppercase">
            Inquiry Generator
          </span>
          <h3 className="font-display text-xl text-forest mt-0.5">
            Draft Your Collaboration Brief
          </h3>
        </div>
        <span className="rounded-full bg-forest/10 px-3 py-1 text-xs font-medium text-forest flex items-center gap-1.5">
          <Sparkles size={13} />
          <span>Interactive</span>
        </span>
      </div>

      <div className="grid gap-5">
        <div className="grid gap-5 sm:grid-cols-2">
          <label className="grid gap-2 text-xs font-bold tracking-wider text-forest uppercase">
            Your Name *
            <input
              name="name"
              required
              value={formDataState.name}
              onChange={(e) =>
                setFormDataState({ ...formDataState, name: e.target.value })
              }
              placeholder="e.g. Elena Rostova"
              className="form-field font-normal text-sm"
            />
          </label>

          <label className="grid gap-2 text-xs font-bold tracking-wider text-forest uppercase">
            Organization{" "}
            <span className="font-normal text-coconut lowercase">
              (optional)
            </span>
            <input
              name="organization"
              value={formDataState.organization}
              onChange={(e) =>
                setFormDataState({
                  ...formDataState,
                  organization: e.target.value,
                })
              }
              placeholder="e.g. Studio Botanic or AgriCo"
              className="form-field font-normal text-sm"
            />
          </label>
        </div>

        <label className="grid gap-2 text-xs font-bold tracking-wider text-forest uppercase">
          Collaboration Track *
          <select
            name="interest"
            required
            value={formDataState.interest}
            onChange={(e) =>
              setFormDataState({ ...formDataState, interest: e.target.value })
            }
            className="form-field font-normal text-sm"
          >
            <option value="Material sourcing & supply">
              Commercial Raw Material Supply (Husk / Pith / Shell)
            </option>
            <option value="NIRA Living - Wholesale Pots">
              NIRA Living: Coir Pots Wholesale & Distribution
            </option>
            <option value="NIRA Grow - Commercial Cocopeat">
              NIRA Grow: Organic Growing Medium Bulk Inquiry
            </option>
            <option value="NIRA Energy - Bio-Briquettes">
              NIRA Energy: Smokeless Briquettes Supply
            </option>
            <option value="Product Co-Design & Craft">
              Custom Product Co-Development & Bio-Composites
            </option>
            <option value="Community Agroforestry Partnership">
              Community Agroforestry & Cooperative Alliance
            </option>
          </select>
        </label>

        <label className="grid gap-2 text-xs font-bold tracking-wider text-forest uppercase">
          Project Brief or Intent *
          <textarea
            name="message"
            required
            rows={4}
            value={formDataState.message}
            onChange={(e) =>
              setFormDataState({ ...formDataState, message: e.target.value })
            }
            className="form-field font-normal text-sm resize-y"
            placeholder="Share context on your timeline, volume, application, or research goals..."
          />
        </label>

        {/* Live Preview Box */}
        <div className="rounded-field bg-sand/40 border border-coconut/15 p-4 text-xs">
          <span className="font-bold text-coconut block uppercase tracking-wider mb-2">
            Brief Output Preview:
          </span>
          <pre className="font-sans whitespace-pre-wrap text-ink-muted leading-relaxed text-xs">
            {generateText()}
          </pre>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-3 pt-2">
          <a
            href={getMailtoLink()}
            className="inline-flex items-center gap-2 rounded-pill bg-forest px-5 py-2.5 text-xs font-semibold text-cream hover:bg-forest-hover transition-colors shadow-xs"
          >
            <Mail size={15} />
            <span>Open Email Draft (hello@nira-assets.org)</span>
          </a>

          <Button
            type="button"
            variant="secondary"
            onClick={handleCopy}
            className="text-xs min-h-10 px-4 flex items-center gap-1.5"
          >
            {copied ? (
              <>
                <Check size={14} className="text-forest" />
                <span>Copied to Clipboard!</span>
              </>
            ) : (
              <>
                <Copy size={14} />
                <span>Copy Brief Text</span>
              </>
            )}
          </Button>

          {error ? (
            <p className="text-xs text-amber-accent">
              Clipboard copy failed. Please highlight and copy manually from
              preview.
            </p>
          ) : null}
        </div>
      </div>
    </div>
  );
}
