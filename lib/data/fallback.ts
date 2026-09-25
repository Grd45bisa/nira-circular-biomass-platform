import type { Product, Material } from "@/types/product";
import type { ImpactMetric } from "@/types/impact";
import type { CommunityStory } from "@/types/community";
import type { Article } from "@/types/journal";
import type { Partner } from "@/types/partner";

export const FALLBACK_PRODUCTS: Product[] = [
  {
    id: "prod-living",
    name: "PANDA COCOfiber",
    slug: "living",
    category: "Living",
    description:
      "Serat sabut kelapa panjang keemasan dengan kekuatan tarik tinggi dan kaya lignin alami untuk industri manufaktur, matras, jok otomotif, dan geotekstil.",
    materialSource: "Sabut kelapa tua pilihan",
    process:
      "Sabut kelapa diurai secara mekanis dengan decorticator listrik, dijemur alami di kubah berventilasi, dan dipadatkan dengan press hidrolik tanpa bahan kimia sintetis.",
    sustainabilityValue:
      "Material terbarukan pengganti busa sintetis dan polimer plastik, tahan pelapukan biologis, dan dapat terurai secara hayati.",
    imageUrl: "/images/coir-fiber.jpg",
    imageAlt:
      "Bal serat PANDA COCOfiber terkompresi di fasilitas pengolahan listrik berstandar ekspor",
    imageNote: "Serat panjang keemasan — kadar kotoran <3%, kadar air <15%, kuat tarik lignin tinggi.",
  },
  {
    id: "prod-grow",
    name: "PANDA COCOpeat",
    slug: "grow",
    category: "Grow",
    description:
      "Media tanam organik berpori terverifikasi Low-EC dengan retensi air hingga 8x bobot kering, pilihan utama pembibitan komersial dan pertanian hidroponik.",
    materialSource: "Serbuk seluler sabut kelapa",
    process:
      "Serbuk sabut dicuci desalinasi air hujan, disaring dengan ayakan rotary berpori seragam, dan dikeringkan higienis dengan pH netral stabil (5,8–6,5).",
    sustainabilityValue:
      "Alternatif terbarukan pengganti gambut alam (peat moss), menghemat penggunaan air irigasi hingga 50%, dan mendukung aerasi akar yang sehat.",
    imageUrl: "/images/cocopeat-tray.jpg",
    imageAlt: "Blok PANDA COCOpeat terkompresi bersertifikasi Low-EC dengan semaian tanaman berenergi tinggi",
    imageNote: "pH stabil 5,8–6,5 | EC terverifikasi rendah | Retensi air 8x berat kering.",
  },
  {
    id: "prod-energy",
    name: "PANDA COCO Bio-Briket",
    slug: "energy",
    category: "Energy",
    description:
      "Briket arang tempurung kelapa berkalori tinggi (~7.200 kkal/kg) dengan pembakaran bersih, minim asap, dan waktu bakar hingga 3x arang kayu biasa.",
    materialSource: "Tempurung kelapa tua padat",
    process:
      "Tempurung kelapa dikarbonisasi melalui pirolisis terkontrol rendah emisi, digiling halus, dan dipadatkan menjadi briket heksagonal berkerapatan tinggi.",
    sustainabilityValue:
      "Bahan bakar energi bersih 100% tanpa deforestasi, kadar abu minim (<3%), tidak berbau, dan aman untuk kuliner maupun pemanas industri.",
    imageUrl: "/images/energy-concept.webp",
    imageAlt:
      "Briket arang tempurung kelapa geometris PANDA COCO Bio-Briket",
    imageNote: "Nilai kalor tinggi 7.200 kkal/kg dengan pembakaran bersih tanpa bau.",
  },
  {
    id: "prod-craft",
    name: "PANDA COCO Green Panel",
    slug: "craft",
    category: "Craft",
    description:
      "Inovasi panel akustik dan partisi interior ramah lingkungan dari serat sabut terkompresi dengan perekat nabati aman tanpa racun formalin.",
    materialSource: "Serat sabut kelapa terkompresi",
    process:
      "Serat sabut disortir terkalibrasi, diformulasikan dengan perekat getah nabati alami, dan dicetak melalui pengepresan hidrolik bersuhu terukur.",
    sustainabilityValue:
      "Material arsitektur sirkular pengganti partisi gipsum dan kayu lapis sintetis, peredam suara alami bersertifikasi emisi nol VOC.",
    imageUrl: "/images/craft-concept.webp",
    imageAlt:
      "Panel akustik interior alami PANDA COCO Green Panel dengan tekstur serat elegan",
    imageNote: "Bebas racun formalin, memiliki koefisien serap suara akustik alami tinggi.",
  },
];

export const FALLBACK_MATERIALS: Material[] = [
  {
    id: "mat-husk",
    name: "Serat Sabut Kelapa",
    slug: "coconut-husk",
    description:
      "Lapisan luar kelapa berserat kuat yang kaya akan lignin alami berkekuatan tarik tinggi untuk aplikasi industri manufaktur.",
    sourcePart: "Sabut Serat Luar",
    transformationProcess:
      "Diurai dengan decorticator listrik 30 kg/jam, dijemur berventilasi, dan dipadatkan menjadi bal industri berstandar ekspor.",
    outputProduct: "PANDA COCOfiber & Geotekstil",
    imageUrl: "/images/coconut-husks.jpg",
    imageAlt:
      "Fasilitas pengolahan biomassa kelapa skala industri dengan lini produksi mesin listrik terintegrasi",
  },
  {
    id: "mat-fiber",
    name: "Cocopeat Organik",
    slug: "coconut-peat",
    description:
      "Serbuk spons seluler di sela serat sabut kelapa yang memiliki daya simpan air superior hingga 8x bobot keringnya.",
    sourcePart: "Serbuk Sabut Pith",
    transformationProcess:
      "Didesalinasi dengan air hujan alami, diayak menggunakan rotary sifter, dan diaerasi untuk kestabilan pH netral.",
    outputProduct: "PANDA COCOpeat Substrat Semai",
    imageUrl: "/images/cocopeat-tray.jpg",
    imageAlt: "PANDA COCOpeat — blok substrat organik bersertifikasi Low-EC, retensi air 8x untuk pembibitan skala komersial",
  },
  {
    id: "mat-shell",
    name: "Tempurung Kelapa (Endokarp)",
    slug: "coconut-shell",
    description:
      "Lapisan keras pelindung daging kelapa dengan kerapatan karbon padat dan potensi energi termal tinggi.",
    sourcePart: "Tempurung Keras",
    transformationProcess:
      "Dikarbonisasi melalui pirolisis bersih rendah emisi menjadi briket arang berkalori tinggi 7.200 kkal/kg.",
    outputProduct: "PANDA COCO Bio-Briket Energi Bersih",
    imageUrl: "/images/craft-concept.webp",
    imageAlt: "Tempurung kelapa tua dan briket arang karbon hayati padat",
  },
];

export const FALLBACK_COMMUNITY_STORIES: CommunityStory[] = [
  {
    id: "story-siti",
    name: "Ibu Siti Rohmah",
    location: "Kampung Keboncau, Pandeglang, Banten",
    role: "Koordinator Mutu & Produksi (OPTIMALKAN IBU)",
    story:
      "Melalui PANDA COCO dan efisiensi mesin listrik, kami membuktikan bahwa perempuan desa mampu mengoperasikan lini produksi industri presisi, menjaga standar mutu ekspor, dan menjadi pilar ketahanan ekonomi keluarga tanpa harus meninggalkan anak dan rumah.",
    impactDescription:
      "Mengkoordinasikan 100 operator perempuan dalam penguraian serat, pemurnian cocopeat, dan pencetakan PANDA COCO Green Panel.",
    imageUrl: "/images/community-artisan.jpg",
    imageAlt: "Ibu Siti Rohmah di fasilitas produksi PANDA COCO Keboncau",
  },
];

export const FALLBACK_ARTICLES: Article[] = [
  {
    id: "art-beyond-the-shell",
    title: "Membuka Kapital di Balik Sabut: Potensi Hilirisasi 23.900 Ton Kelapa Pandeglang",
    slug: "beyond-the-shell",
    excerpt:
      "Kelapa Pandeglang jauh melampaui air dan daging buahnya. Mengapa sabut berkadar lignin tinggi dan serbuk berpori menjadi kunci material sirkular masa depan.",
    content: `Kabupaten Pandeglang menyimpan potensi perkebunan kelapa lebih dari 23.900 ton per tahun yang tersebar di 35 kecamatan. Selama beberapa dekade, sabut kelapa yang mencapai 35% bobot buah kerap ditumpuk atau dibakar terbuka di tepi jalan.

PANDA COCO membalik paradigma tersebut: sabut dan tempurung kelapa adalah aset rekayasa hayati bernilai ekonomi tinggi. Melalui pemisahan mekanis bersih bertenaga listrik PLN, sabut diurai menjadi serat cocofiber berkekuatan tarik tinggi dan serbuk cocopeat penyimpan air 8x.

Pendekatan ini tidak hanya menghentikan emisi pembakaran limbah terbuka, tetapi juga menghadirkan nilai tambah nyata bagi 60 petani mitra dan 100 perempuan pelaku industri hijau di Kampung Keboncau.`,
    thumbnailUrl: "/images/nira-still-life.webp",
    thumbnailAlt:
      "Anatomi biomassa kelapa terpadu di Agro-Hub PANDA COCO Keboncau",
    category: "Sains Material & Ekonomi Sirkular",
    publishedAt: "2026-09-18T08:00:00.000Z",
  },
  {
    id: "art-hands-in-the-journey",
    title: "OPTIMALKAN IBU: Transformasi Perempuan Desa Menjadi Operator Industri Hijau",
    slug: "hands-in-the-journey",
    excerpt:
      "Kedaulatan sirkular tidak dapat terwujud tanpa martabat dan keahlian manusia. Mengapa PANDA COCO menempatkan kepemimpinan perempuan di pusat operasional.",
    content: `Mesin pengolah sabut tidak berjalan dengan sendirinya. Pengoperasian decorticator listrik, penyaringan ayakan rotary, pengawasan kadar air, hingga pencetakan Green Panel membutuhkan ketelitian dan disiplin mutu tinggi.

Melalui program OPTIMALKAN IBU (Optimalisasi Perempuan Berdaya melalui Industri Kelapa Hijau), sebanyak 100 perempuan di Kampung Keboncau dilatih menjadi operator mesin presisi dan kurator mutu bahan.

Bukan sekadar pekerjaan sampingan, inisiatif ini memberikan penghasilan mandiri, sertifikasi keahlian teknis, dan jam kerja fleksibel yang menghargai keharmonisan rumah tangga.`,
    thumbnailUrl: "/images/coir-fiber.jpg",
    thumbnailAlt: "Bal serat PANDA COCOfiber berstandar ekspor di lini produksi mesin listrik Agro-Hub Keboncau",
    category: "Pemberdayaan Inklusif & Komunitas",
    publishedAt: "2026-09-12T10:00:00.000Z",
  },
  {
    id: "art-from-husk-to-form",
    title: "Rekayasa PANDA COCO Green Panel: Biokomposit Akustik Bebas Formalin",
    slug: "from-husk-to-form",
    excerpt:
      "Bagaimana serat sabut berkadar lignin 45% bertransformasi melalui kompresi hidrolik menjadi panel arsitektural peredam suara ramah lingkungan.",
    content: `Serat sabut kelapa adalah peredam alami bumi. Kaya akan lignin alami (~45%), serat ini memiliki ketahanan luar biasa terhadap kelembapan tropis, jamur pelapuk, dan pembusukan biologis.

Ketika dipadukan dengan formulasi perekat nabati ramah lingkungan dan dipadatkan dengan mesin press hidrolik bersuhu terukur, serat ini menghasilkan PANDA COCO Green Panel.

Panel interior ini tidak hanya meredam gema akustik secara efektif, tetapi juga menggantikan partisi kayu lapis sintetis tanpa melepaskan gas beracun formalin (Zero VOC) ke dalam ruangan.`,
    thumbnailUrl: "/images/coir-pot.jpg",
    thumbnailAlt: "PANDA COCO Green Panel — panel biokomposit akustik serat sabut terkompresi di studio arsitektur modern",
    category: "Inovasi Produk & Desain Sirkular",
    publishedAt: "2026-09-05T14:00:00.000Z",
  },
];

export const FALLBACK_IMPACT_METRICS: ImpactMetric[] = [
  {
    id: "imp-1",
    category: "Environmental",
    metricName: "Biomassa Diolah / Thn",
    value: 24,
    unit: "Ton",
    description:
      "24 ton sabut dan 10,8 ton tempurung kelapa dialihkan dari pembakaran terbuka setiap tahun.",
    year: 2026,
  },
  {
    id: "imp-2",
    category: "Social",
    metricName: "Operator OPTIMALKAN IBU",
    value: 100,
    unit: "+",
    description:
      "Perempuan berdaya sebagai operator mesin presisi, kurator mutu (QC), dan manajer hub sirkular.",
    year: 2026,
  },
  {
    id: "imp-3",
    category: "Economic",
    metricName: "Mitra Petani Kelapa",
    value: 60,
    unit: "Petani",
    description:
      "Petani kelapa Keboncau dengan 3.000 pohon yang mendapatkan kepastian serapan harga pembelian yang adil.",
    year: 2026,
  },
];

export const FALLBACK_PARTNERS: Partner[] = [
  {
    id: "part-1",
    name: "PLN UID Banten",
    organization: "Program TJSL & Electrifying Agriculture",
    category: "Mitra Energi Bersih & TJSL",
    logoUrl: null,
    logoAlt: null,
    description:
      "Penyedia infrastruktur daya listrik andal dan pendampingan program Electrifying Agriculture untuk operasional mesin pengolah biomassa.",
  },
  {
    id: "part-2",
    name: "Kelompok Tani Keboncau",
    organization: "Koperasi Tani Kelapa Pandeglang",
    category: "Rantai Pasok Bahan Baku",
    logoUrl: null,
    logoAlt: null,
    description:
      "Jejaring 60 petani mitra pemilik 3.000 pohon kelapa produktif yang memasok bahan baku sabut dan tempurung segar terverifikasi.",
  },
  {
    id: "part-3",
    name: "Bappeda Pandeglang",
    organization: "Pemerintah Kabupaten Pandeglang",
    category: "Sinergi Hilirisasi Daerah",
    logoUrl: null,
    logoAlt: null,
    description:
      "Dukungan kebijakan hilirisasi komoditas perkebunan prioritas kelapa dalam rangka pengentasan pengangguran dan peningkatan nilai tambah lokal.",
  },
];
