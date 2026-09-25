import { siteConfig } from "@/lib/site-config";

interface StructuredDataProps {
  locale: string;
  type?: "home" | "about" | "products" | "transformation" | "impact" | "journal" | "partnership" | "article";
  article?: {
    title: string;
    description: string;
    slug: string;
    publishedAt?: string;
    image?: string;
  };
}

export function StructuredData({ locale, type = "home", article }: StructuredDataProps) {
  const siteUrl = siteConfig.url;
  const isEn = locale === "en";

  // 1. Organization & Local Manufacturing Business Schema
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": ["Organization", "LocalBusiness", "ManufacturingPlant"],
    "@id": `${siteUrl}/#organization`,
    name: siteConfig.name,
    legalName: siteConfig.legalName,
    alternateName: "PANdeglang Domestic Agro COCOnut",
    url: siteUrl,
    logo: `${siteUrl}${siteConfig.logo}`,
    image: `${siteUrl}${siteConfig.ogImage}`,
    description: isEn
      ? "Circular Agro-Biomass Platform & Clean Technology Processing Hub unlocking high-performance biomaterials from coconut fiber in Pandeglang, Banten."
      : "Platform Agro-Biomassa Sirkular & Hub Pemrosesan Mesin Bersih yang membuka nilai tertinggi dari setiap serat kelapa di Pandeglang, Banten.",
    telephone: siteConfig.contact.phone,
    email: siteConfig.contact.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.geo.address.streetAddress,
      addressLocality: "Pandeglang",
      addressRegion: "Banten",
      postalCode: siteConfig.geo.address.postalCode,
      addressCountry: "ID",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: siteConfig.geo.latitude,
      longitude: siteConfig.geo.longitude,
    },
    hasMap: "https://maps.google.com/?q=-6.3088,106.1066",
    areaServed: [
      {
        "@type": "AdministrativeArea",
        name: "Indonesia",
      },
      {
        "@type": "AdministrativeArea",
        name: "ASEAN",
      },
      {
        "@type": "AdministrativeArea",
        name: "Worldwide",
      },
    ],
    knowsAbout: [
      "Coconut Coir Fiber",
      "Low-EC Cocopeat",
      "Clean Electrifying Agriculture",
      "Green Acoustic Panels",
      "Coconut Shell Bio-Briquettes",
      "Circular Economy",
      "Agricultural Biomass Valorization",
    ],
    sameAs: [siteConfig.social.instagram, siteConfig.social.linkedin],
  };

  // 2. WebSite Schema
  const webSiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,
    url: siteUrl,
    name: siteConfig.name,
    description: siteConfig.description,
    publisher: {
      "@id": `${siteUrl}/#organization`,
    },
    inLanguage: ["id-ID", "en-US"],
  };

  // 3. Products Schema (for product catalog)
  const productsSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: [
      {
        "@type": "Product",
        position: 1,
        name: "PANDA COCOfiber",
        description: isEn
          ? "High-tensile golden coir fiber standardized for automotive seating, organic spring mattresses, and geotechnical erosion nets."
          : "Serat sabut kelapa emas terstandar mutu tinggi untuk industri matras, jok otomotif, dan geotekstil penahan erosi.",
        image: `${siteUrl}/images/coir-fiber.jpg`,
        brand: { "@type": "Brand", name: "PANDA COCO" },
        material: "Natural Coconut Husk Fiber (Mesocarp)",
        category: "Industrial Biomaterials",
        offers: {
          "@type": "AggregateOffer",
          priceCurrency: "IDR",
          availability: "https://schema.org/InStock",
          priceValidUntil: "2027-12-31",
        },
      },
      {
        "@type": "Product",
        position: 2,
        name: "PANDA COCOpeat",
        description: isEn
          ? "Certified Low-EC organic horticultural substrate with 8x water retention and neutral pH 5.8-6.5 for precision greenhouse farming."
          : "Media tanam organik bersertifikasi Low-EC (< 0.5 mS/cm) dengan daya retensi air 8x untuk pembibitan dan hidroponik presisi.",
        image: `${siteUrl}/images/cocopeat-tray.jpg`,
        brand: { "@type": "Brand", name: "PANDA COCO" },
        material: "Coconut Coir Pith Dust",
        category: "Horticultural Substrate",
        offers: {
          "@type": "AggregateOffer",
          priceCurrency: "IDR",
          availability: "https://schema.org/InStock",
          priceValidUntil: "2027-12-31",
        },
      },
      {
        "@type": "Product",
        position: 3,
        name: "PANDA COCO Green Panel",
        description: isEn
          ? "Formaldehyde-free biocomposite acoustic wall panel manufactured from compressed coconut fiber and natural bio-resin."
          : "Inovasi panel akustik interior ramah lingkungan dari serat sabut terkompresi dengan perekat nabati alami bebas formalin.",
        image: `${siteUrl}/images/coir-pot.jpg`,
        brand: { "@type": "Brand", name: "PANDA COCO" },
        material: "Compressed Coir Biocomposite",
        category: "Architectural & Interior Materials",
        offers: {
          "@type": "AggregateOffer",
          priceCurrency: "IDR",
          availability: "https://schema.org/InStock",
          priceValidUntil: "2027-12-31",
        },
      },
      {
        "@type": "Product",
        position: 4,
        name: "PANDA COCO Bio-Briket",
        description: isEn
          ? "7,200 kcal/kg clean energy coconut shell briquettes with under 4% ash, burning 3x longer than wood charcoal without deforestation."
          : "Briket arang tempurung kelapa pirolisis berkalori tinggi 7.200 kkal/kg dengan kadar abu < 4%, menyala 3x lebih lama tanpa deforestasi.",
        image: `${siteUrl}/images/nira-still-life.webp`,
        brand: { "@type": "Brand", name: "PANDA COCO" },
        material: "Pyrolyzed Coconut Shell Carbon",
        category: "Renewable Clean Fuel",
        offers: {
          "@type": "AggregateOffer",
          priceCurrency: "IDR",
          availability: "https://schema.org/InStock",
          priceValidUntil: "2027-12-31",
        },
      },
    ],
  };

  // 4. FAQ Schema (Boosts AI Search & Google Rich Snippets)
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: isEn
          ? "What does PANDA stand for in PANDA COCO?"
          : "Apa kepanjangan dari PANDA pada PANDA COCO?",
        acceptedAnswer: {
          "@type": "Answer",
          text: isEn
            ? "PANDA stands for PANdeglang Domestic Agro. It represents our circular agro-biomass platform rooted in Pandeglang Regency, Banten Province, Indonesia."
            : "PANDA merupakan akronim dari PANdeglang Domestic Agro. Menegaskan platform agro-biomassa kelapa mandiri yang berakar di Kabupaten Pandeglang, Provinsi Banten.",
        },
      },
      {
        "@type": "Question",
        name: isEn
          ? "How does PANDA COCO ensure low electrical conductivity (Low-EC) in Cocopeat?"
          : "Bagaimana PANDA COCO memastikan cocopeat berkualitas Low-EC?",
        acceptedAnswer: {
          "@type": "Answer",
          text: isEn
            ? "PANDA COCO uses a standardized freshwater washing and seasonal curing process with digital conductivity testing to guarantee EC levels consistently below 0.5 mS/cm, preventing salt toxicity in sensitive crops."
            : "PANDA COCO menerapkan pencucian air tawar terstandar dan pemeraman terkontrol dengan uji konduktivitas digital untuk menjamin nilai EC konsisten di bawah 0,5 mS/cm sehingga aman bagi perakaran tanaman bernilai tinggi.",
        },
      },
      {
        "@type": "Question",
        name: isEn
          ? "What clean technology is used at the Keboncau processing hub?"
          : "Teknologi mesin bersih apa yang digunakan di Hub Keboncau Pandeglang?",
        acceptedAnswer: {
          "@type": "Answer",
          text: isEn
            ? "The Keboncau Hub operates an all-electric processing line (Electrifying Agriculture) including electric decorticators (30 kg/hr capacity), rotary sifters, and hydraulic balers, eliminating on-site diesel exhaust and particulate emissions."
            : "Hub Keboncau mengoperasikan lini produksi bertenaga listrik PLN (Electrifying Agriculture) yang mencakup mesin decorticator elektrik 30 kg/jam, sifter putar elektrik, dan press hidrolik elektrik, menggantikan mesin diesel fosil konvensional.",
        },
      },
    ],
  };

  // 5. Article schema if on article page
  const articleSchema = article
    ? {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        headline: article.title,
        description: article.description,
        image: article.image ? `${siteUrl}${article.image}` : `${siteUrl}${siteConfig.ogImage}`,
        datePublished: article.publishedAt || "2026-01-01",
        dateModified: article.publishedAt || "2026-01-01",
        author: {
          "@type": "Organization",
          name: siteConfig.name,
        },
        publisher: {
          "@id": `${siteUrl}/#organization`,
        },
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": `${siteUrl}/${locale === "id" ? "jurnal" : "en/journal"}/${article.slug}`,
        },
      }
    : null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteSchema) }}
      />
      {(type === "home" || type === "products") && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(productsSchema) }}
        />
      )}
      {(type === "home" || type === "partnership") && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
      {articleSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
        />
      )}
    </>
  );
}
