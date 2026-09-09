export const site = {
  name: "CharuCare",
  tagline: "Healthcare, but more human.",
  description:
    "CharuCare is a human-centric healthcare platform that connects patients, families, clinics, and communities — so the experience of health finally feels as connected as the people in it.",
  email: "hello@charucare.com",
} as const;

export const nav = [
  { label: "Why us", href: "#why-us" },
  { label: "For Patients", href: "#patients" },
  { label: "How it works", href: "#how-it-works" },
  { label: "Contact", href: "#contact" },
] as const;

export const hero = {
  eyebrow: "Your partner in healthcare",
  headline: "Healthcare, but",
  headlineAccent: "more human.",
  body: "A new kind of health experience that brings technology and human care together — so patients, families, and clinicians stay connected at every step.",
  primaryCta: "Get started for free",
  secondaryCta: "Learn about the experience",
  bookDemo: "Book a demo",
  trustChips: [
    { label: "24/7 access" },
    { label: "Same-day coordination" },
    { label: "Human support" },
  ],
} as const;

export const stats = [
  { value: 4000, suffix: "+", label: "Clinics" },
  { value: 80, suffix: "k+", label: "Patients" },
  { value: 100, suffix: "+", label: "Cities" },
  { value: 4.8, suffix: "/5", label: "Rating", decimals: 1 },
] as const;

export const features = [
  {
    title: "Easy health data",
    description:
      "Bring records, labs, and notes into one living timeline that every care partner can actually use.",
    href: "#record",
  },
  {
    title: "Support chat",
    description:
      "Reach a real care coordinator when it matters — not a ticket queue, not a voicemail maze.",
    href: "#contact",
  },
  {
    title: "Booking & appointments",
    description:
      "Schedule, reschedule, and remind without the phone tree. Everyone sees the same calendar.",
    href: "#how-it-works",
  },
  {
    title: "Care coordination",
    description:
      "Keep every clinician, caregiver, and family member on the same page, in real time.",
    href: "#dashboard",
  },
  {
    title: "Family updates",
    description:
      "Share the right updates with the people who love them — clearly, calmly, and securely.",
    href: "#patients",
  },
] as const;

export const audiences = [
  {
    title: "Clinics",
    description:
      "Run a calmer practice with shared context, fewer missed follow-ups, and patients who feel known.",
    items: [
      "Patient management",
      "Shared health records",
      "Team coordination",
      "Visit follow-through",
    ],
  },
  {
    title: "Patients",
    description:
      "See your care in one place, ask questions without waiting weeks, and stay in control of your story.",
    items: [
      "Living health record",
      "Appointment booking",
      "Direct support chat",
      "Medication reminders",
    ],
  },
  {
    title: "Caregivers & families",
    description:
      "Be part of the circle without chasing updates across apps, portals, and hallway conversations.",
    items: [
      "Permissioned access",
      "Clear status updates",
      "Visit summaries",
      "Shared to-dos",
    ],
  },
  {
    title: "Social workers",
    description:
      "Connect clinical care with community support so no one falls through the gaps between systems.",
    items: [
      "Cross-team notes",
      "Resource matching",
      "Secure messaging",
      "Care continuity",
    ],
  },
] as const;

export const steps = [
  {
    n: "01",
    title: "Set up your profile",
    description:
      "Create a secure space for your clinic, family, or care team in minutes — not months.",
  },
  {
    n: "02",
    title: "Add your patients",
    description:
      "Invite people into a shared record with the right permissions from the first conversation.",
  },
  {
    n: "03",
    title: "Invite the care team",
    description:
      "Bring clinicians, caregivers, and community partners into one coordinated circle.",
  },
  {
    n: "04",
    title: "Stay connected",
    description:
      "Updates, appointments, and questions live together — so care never depends on a missed call.",
  },
] as const;

export const values = [
  {
    title: "Privacy",
    description: "People choose what is shared, with whom, and for how long.",
  },
  {
    title: "Security",
    description: "Encryption, access controls, and audit trails by default — not as an add-on.",
  },
  {
    title: "Ethics",
    description: "We design for dignity. Data serves care, never the other way around.",
  },
  {
    title: "Integrity",
    description: "One source of truth across the circle, so nobody is working from a stale note.",
  },
  {
    title: "Reliability",
    description: "The platform stays available when families and clinics need it most.",
  },
  {
    title: "Accessibility",
    description: "Clear language, thoughtful contrast, and experiences that work on any phone.",
  },
] as const;

export const roles = [
  "Patients",
  "Clinics",
  "Caregivers",
  "Doctors",
  "Social workers",
] as const;

export const faqs = [
  {
    question: "How do I get started with CharuCare?",
    answer:
      "Join the waitlist or book a demo. We will help you set up a profile, invite your circle, and start coordinating care in one shared space.",
  },
  {
    question: "Is my health information secure?",
    answer:
      "Yes. Records are encrypted, access is permissioned, and every share is explicit. Families and clinicians only see what they are invited to see.",
  },
  {
    question: "Can families and caregivers be included?",
    answer:
      "That is the point. Patients choose who belongs in their care circle — a partner, a parent, a social worker, or an entire clinic team.",
  },
  {
    question: "Do you work with existing clinics?",
    answer:
      "CharuCare is built for clinics, community programs, and independent clinicians who want a more human coordination layer — without ripping out the tools they already trust.",
  },
  {
    question: "Is there a cost to request early access?",
    answer:
      "No. Requesting early access or a demo is free. We will walk through the right plan together when your team is ready.",
  },
] as const;

export const testimonials = [
  {
    quote:
      "For the first time, my sister and I were not piecing together updates from three different portals. CharuCare made the week of her surgery feel held.",
    name: "Maya Chen",
    role: "Family caregiver",
  },
  {
    quote:
      "Our coordinators stopped living in inboxes. The whole circle can see the next appointment, the open question, and who owns it.",
    name: "Dr. Elena Voss",
    role: "Clinic director",
  },
  {
    quote:
      "I finally have a record that feels like mine — not a stack of PDFs. When I talk to my doctor, we start from the same story.",
    name: "James Okonkwo",
    role: "Patient",
  },
] as const;

export const footerLinks = {
  company: [
    { label: "Why us", href: "#why-us" },
    { label: "Our mission", href: "#mission" },
    { label: "Careers", href: "#contact" },
    { label: "Contact", href: "#contact" },
  ],
  product: [
    { label: "For patients", href: "#patients" },
    { label: "For clinics", href: "#patients" },
    { label: "How it works", href: "#how-it-works" },
    { label: "Security", href: "#values" },
  ],
  resources: [
    { label: "Help center", href: "#faq" },
    { label: "Book a demo", href: "#contact" },
    { label: "Early access", href: "#contact" },
    { label: "Stories", href: "#mission" },
  ],
  legal: [
    { label: "Privacy", href: "#values" },
    { label: "Terms", href: "#values" },
    { label: "Cookies", href: "#values" },
    { label: "Accessibility", href: "#values" },
  ],
} as const;
