import mriImg from "@/assets/svc-mri.jpg";
import mammoImg from "@/assets/svc-mammo.jpg";
import lobbyImg from "@/assets/lobby.jpg";

export const practice = {
  name: "Radiology Imaging Associates",
  short: "RIA",
  affiliate: "RadNet Affiliated Imaging Centers",
  phone: "1-772-398-2233",
  region: "Treasure Coast, Florida",
};

export type Service = {
  slug: string;
  name: string;
  tagline: string;
  image: string;
  summary: string;
  prep: string[];
  highlights: string[];
  duration: string;
};

export const services: Service[] = [
  {
    slug: "mri",
    name: "MRI & MRA",
    tagline: "High-field and open-bore imaging, powered by AI",
    image: mriImg,
    summary:
      "Magnetic resonance imaging uses a strong magnetic field and radio waves to create highly detailed images of soft tissue, joints, the brain and the spine — with no ionizing radiation.",
    prep: [
      "Leave all metal jewelry and watches at home.",
      "Tell us about implants, pacemakers or metal fragments.",
      "You may eat and take medication normally unless told otherwise.",
    ],
    highlights: ["Wide-bore comfort", "AI-assisted reconstruction", "No radiation"],
    duration: "20–45 minutes",
  },
  {
    slug: "ct",
    name: "CT & CTA",
    tagline: "Fast, low-dose cross-sectional imaging",
    image: lobbyImg,
    summary:
      "Computed tomography combines a series of X-ray views into detailed cross-sections of bone, blood vessels and soft tissue — ideal for urgent answers.",
    prep: [
      "You may be asked to fast for 4 hours if contrast is used.",
      "Wear comfortable clothing without metal fasteners.",
      "Bring a list of current medications.",
    ],
    highlights: ["Low-dose protocols", "Cardiac & vascular CTA", "Same-week availability"],
    duration: "10–20 minutes",
  },
  {
    slug: "mammography",
    name: "3D Mammography",
    tagline: "Put the power of AI behind your mammogram",
    image: mammoImg,
    summary:
      "Digital breast tomosynthesis captures layered images of breast tissue, improving cancer detection and reducing callbacks. Enhanced Breast Cancer Detection adds an AI second read.",
    prep: [
      "Avoid deodorant, powder or lotion on exam day.",
      "Bring prior mammogram images if from another provider.",
      "Schedule the week after your period for comfort.",
    ],
    highlights: ["EBCD AI second read", "Annual screening from 40", "Private suites"],
    duration: "15 minutes",
  },
  {
    slug: "ultrasound",
    name: "Ultrasound",
    tagline: "Real-time imaging with no radiation",
    image: lobbyImg,
    summary:
      "Sound waves produce live images of organs, vessels and developing pregnancies — a safe, comfortable first look at many conditions.",
    prep: [
      "Abdominal exams may require fasting for 8 hours.",
      "Pelvic exams may require a full bladder.",
      "Wear a two-piece outfit for easy access.",
    ],
    highlights: ["Doppler vascular studies", "Obstetric imaging", "Radiation free"],
    duration: "20–40 minutes",
  },
  {
    slug: "x-ray",
    name: "Digital X-ray",
    tagline: "Walk-in imaging, results the same day",
    image: lobbyImg,
    summary:
      "Digital radiography delivers instant, high-resolution images of bones and the chest at a fraction of the dose of traditional film.",
    prep: [
      "No fasting or special preparation needed.",
      "Let us know if you may be pregnant.",
      "Walk-ins welcome during center hours.",
    ],
    highlights: ["Walk-ins welcome", "Instant digital capture", "Lowest dose"],
    duration: "5–10 minutes",
  },
  {
    slug: "bone-density",
    name: "DEXA Bone Density",
    tagline: "Measure bone strength before a fracture happens",
    image: lobbyImg,
    summary:
      "DEXA scanning measures bone mineral density to detect osteopenia and osteoporosis early, so treatment can start sooner.",
    prep: [
      "Avoid calcium supplements 24 hours before.",
      "Wear clothing without zippers or metal.",
      "No injected contrast is used.",
    ],
    highlights: ["Painless, 10-minute scan", "Fracture-risk scoring", "Medicare covered"],
    duration: "10 minutes",
  },
  {
    slug: "nuclear-medicine",
    name: "Nuclear Medicine & PET/CT",
    tagline: "Imaging that shows function, not just structure",
    image: mriImg,
    summary:
      "PET/CT and nuclear medicine studies use small amounts of a radiotracer to reveal how organs and tumors behave at a cellular level.",
    prep: [
      "Fast for 6 hours before a PET/CT.",
      "Avoid strenuous exercise for 24 hours.",
      "Plan for up to two hours at the center.",
    ],
    highlights: ["Oncology staging", "Cardiac perfusion", "Board-certified readers"],
    duration: "60–120 minutes",
  },
  {
    slug: "interventional",
    name: "Image-Guided Procedures",
    tagline: "Minimally invasive biopsies and injections",
    image: mriImg,
    summary:
      "Our subspecialty radiologists perform needle biopsies, joint injections and drainages under CT, ultrasound or fluoroscopic guidance.",
    prep: [
      "Arrange a driver if sedation is planned.",
      "Tell us about blood thinners a week ahead.",
      "Follow fasting instructions given at booking.",
    ],
    highlights: ["Same-day pathology routing", "Local anesthesia", "Quick recovery"],
    duration: "30–60 minutes",
  },
];

export type Location = {
  slug: string;
  name: string;
  address: string;
  city: string;
  phone: string;
  hours: string;
  services: string[];
};

export const locations: Location[] = [
  {
    slug: "fort-pierce",
    name: "RIA | Fort Pierce",
    address: "1801 Hillmoor Drive, Suite A",
    city: "Fort Pierce, FL 34952",
    phone: "1-772-398-2233",
    hours: "Mon–Fri 7:00am – 6:00pm · Sat 8:00am – 2:00pm",
    services: ["MRI & MRA", "Digital X-ray", "Ultrasound", "3D Mammography"],
  },
  {
    slug: "jupiter",
    name: "RIA | Jupiter",
    address: "2055 Military Trail, Suite 100",
    city: "Jupiter, FL 33458",
    phone: "1-772-398-2233",
    hours: "Mon–Fri 7:00am – 7:00pm · Sat 8:00am – 4:00pm",
    services: ["MRI & MRA", "CT & CTA", "3D Mammography", "DEXA Bone Density"],
  },
  {
    slug: "port-st-lucie",
    name: "RIA | Port St. Lucie",
    address: "1795 SE Hillmoor Drive",
    city: "Port St. Lucie, FL 34952",
    phone: "1-772-398-2233",
    hours: "Mon–Fri 7:00am – 6:00pm",
    services: ["CT & CTA", "Ultrasound", "Digital X-ray", "Nuclear Medicine & PET/CT"],
  },
  {
    slug: "stuart",
    name: "RIA | Stuart",
    address: "1050 SE Monterey Road",
    city: "Stuart, FL 34994",
    phone: "1-772-398-2233",
    hours: "Mon–Fri 7:00am – 6:00pm · Sat 8:00am – 12:00pm",
    services: ["MRI & MRA", "3D Mammography", "Ultrasound", "Image-Guided Procedures"],
  },
  {
    slug: "tradition",
    name: "RIA | Tradition",
    address: "10050 SW Innovation Way, Suite 101",
    city: "Port St. Lucie, FL 34987",
    phone: "1-772-398-2233",
    hours: "Mon–Fri 7:30am – 5:30pm",
    services: ["Digital X-ray", "Ultrasound", "DEXA Bone Density", "3D Mammography"],
  },
];

export const news = [
  {
    slug: "jupiter-open-house",
    date: "2 July, 2026",
    title: "RIA celebrates the new Jupiter location with an open house and ribbon cutting",
    excerpt:
      "Neighbors, referring physicians and civic leaders toured the new Jupiter imaging center and met the technologists behind the scanners.",
  },
  {
    slug: "humana-in-network",
    date: "29 April, 2026",
    title: "Radiology Imaging Associates is back in network with Humana insurance plans",
    excerpt:
      "Humana members across the Treasure Coast can once again schedule advanced imaging at in-network rates at all five RIA centers.",
  },
  {
    slug: "jupiter-now-open",
    date: "17 November, 2025",
    title: "A new imaging center opens in Jupiter with advanced diagnostic imaging",
    excerpt:
      "Wide-bore MRI, low-dose CT and 3D mammography are now available minutes from downtown Jupiter.",
  },
  {
    slug: "memorial-day-hours",
    date: "23 May, 2025",
    title: "RIA will be open on Memorial Day",
    excerpt:
      "Four of our five centers keep regular hours over the holiday weekend so care never has to wait.",
  },
];

export const trending = [
  {
    title: "MRI Options",
    sub: "Powered with AI · quick and precise",
    to: "/our-services/mri",
  },
  {
    title: "Cardiac Imaging Program",
    sub: "Let's have a heart to heart.",
    to: "/our-services/ct",
  },
  {
    title: "Neuroradiology",
    sub: "Your brain, our focus.",
    to: "/our-services/mri",
  },
  {
    title: "Lung Cancer Screening with AI",
    sub: "Are you a current or former smoker?",
    to: "/our-services/ct",
  },
];
