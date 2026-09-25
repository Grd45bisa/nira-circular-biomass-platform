"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Mail } from "lucide-react";

export function InquiryBuilder() {
  const t = useTranslations("inquiryBuilder");
  const [formDataState, setFormDataState] = useState({
    name: "",
    organization: "",
    interest: "Material sourcing & supply",
    message: "",
  });

  const generateText = () => {
    return `${t("emailHeader")}\n\n${t("emailFrom")} ${formDataState.name || "[Your Name]"}\n${t("emailOrg")} ${formDataState.organization || "Independent / Direct"}\n${t("emailFocus")} ${formDataState.interest}\n\n${t("emailOverview")}\n${formDataState.message || "[Your project message]"}\n\n${t("emailFooter")}`;
  };

  const getMailtoLink = () => {
    const subject = encodeURIComponent(
      `${t("emailSubjectPrefix")} ${formDataState.interest} - ${formDataState.name || "Collaboration"}`,
    );
    const body = encodeURIComponent(generateText());
    return `mailto:partnership@pandacoco.id?subject=${subject}&body=${body}`;
  };

  return (
    <div className="rounded-card border border-coconut/15 bg-cream p-6 md:p-8 shadow-natural">
      <div className="mb-6 border-b border-coconut/10 pb-4">
        <span className="text-[0.6875rem] font-bold tracking-widest text-coconut uppercase">
          {t("badge")}
        </span>
        <h3 className="font-display mt-1 text-xl text-forest">
          {t("title")}
        </h3>
      </div>

      <div className="grid gap-5">
        <div className="grid gap-5 sm:grid-cols-2">
          <label className="grid gap-2 text-xs font-bold tracking-wider text-forest uppercase">
            {t("nameLabel")}
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
            {t("orgLabel")}{" "}
            <span className="font-normal text-coconut lowercase">
              {t("optional")}
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
              placeholder="e.g. Studio Botanic"
              className="form-field font-normal text-sm"
            />
          </label>
        </div>

        <label className="grid gap-2 text-xs font-bold tracking-wider text-forest uppercase">
          {t("trackLabel")}
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
              {t("track.sourceRaw")}
            </option>
            <option value="PANDA COCOfiber - Bulk Fiber Supply">
              {t("track.living")}
            </option>
            <option value="PANDA COCOpeat - Commercial Cocopeat Low-EC">
              {t("track.grow")}
            </option>
            <option value="PANDA COCO Green Panel - Biocomposites">
              {t("track.codev")}
            </option>
            <option value="PANDA COCO Bio-Briket - High-Heat Clean Energy">
              {t("track.energy")}
            </option>
            <option value="Product Co-Design & Craft">
              {t("track.codev")}
            </option>
            <option value="Community Agroforestry Partnership">
              {t("track.agroforestry")}
            </option>
          </select>
        </label>

        <label className="grid gap-2 text-xs font-bold tracking-wider text-forest uppercase">
          {t("briefLabel")}
          <textarea
            name="message"
            required
            rows={4}
            value={formDataState.message}
            onChange={(e) =>
              setFormDataState({ ...formDataState, message: e.target.value })
            }
            className="form-field font-normal text-sm resize-y"
            placeholder={t("briefPlaceholder")}
          />
        </label>

        <a
          href={getMailtoLink()}
          className="inline-flex items-center justify-center gap-2 rounded-pill bg-forest px-5 py-3 text-sm font-semibold text-cream hover:bg-forest-hover transition-colors shadow-xs sm:justify-start sm:py-2.5 sm:text-xs"
        >
          <Mail size={15} />
          <span>{t("submit")}</span>
        </a>
      </div>
    </div>
  );
}