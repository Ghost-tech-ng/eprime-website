export type ProductStatus = "Live" | "Beta" | "Coming";

export interface PriceTier {
  label: string;
  min: number;
  max: number | null;
  perStudent: number;
}

export interface Feature {
  title: string;
  body: string;
}

export interface CoreModule {
  n: string;
  title: string;
  headline: string;
  body: string;
  features: Feature[];
}

export const edusmart = {
  slug: "edusmart360",
  name: "EduSmart360",
  endorsement: "by E-Prime",
  status: "Live" as ProductStatus,
  job: "Your whole school on one login, with every naira accounted for.",
  summary:
    "School management for Nigerian schools. Fees, accounts, staff, parents, student ID cards and the tuck shop, all in one system. Your team can learn it in a week, and the school does not pay for it from its own budget.",
  goLiveWeeks: 3,
  moduleCount: 22,
  pillars: [
    { title: "Real accounting", body: "Double-entry books, bank reconciliation, approvals before spending." },
    { title: "HR and payroll", body: "Staff files, leave, fingerprint attendance and payslips." },
    { title: "NFC student card", body: "Student ID and cashless wallet for the tuck shop." },
    { title: "Parent portal", body: "Fees, results and messages on the parent's phone." },
  ] satisfies Feature[],
  beforeAfter: [
    {
      before: "The payment is in the bursar's receipt book, and maybe in a bank alert on someone's phone.",
      after: "The invoice, the payment and the receipt sit on the student's profile, and the books update on their own.",
    },
    {
      before: "The class teacher knows about the absences. Nobody else does.",
      after: "Attendance is taken in the system and shows up for the parent the same day.",
    },
    {
      before: "The conversation with the parent is buried in a WhatsApp group.",
      after: "Messages between parent and teacher are kept on the student's record.",
    },
    {
      before: "Staff leave is on paper, and payroll lives in a spreadsheet on one laptop.",
      after: "Leave, payroll and staff files are in one HR module with proper approvals.",
    },
    {
      before: "The proprietor finds out at the end of term, if at all.",
      after: "The proprietor sees it all on one dashboard, today.",
    },
  ],
  roles: [
    { title: "Proprietor", body: "Collections, spending and staff on one dashboard, from anywhere." },
    { title: "Bursar and accountant", body: "Payments post themselves. Month-end is a report, not a week of work." },
    { title: "HR", body: "Every staff file, leave request and payslip in one place." },
    { title: "Teachers", body: "Registers, scores, report cards and parent messages from one login." },
    { title: "Parents", body: "Fees, results and attendance on their phone, without calling the office." },
    { title: "Students", body: "Timetable, assignments, results and their card wallet." },
  ] satisfies Feature[],
  coreModules: [
    {
      n: "01",
      title: "Accounting",
      headline: "Know where every naira went, without waiting for the end of term.",
      body: "Most money a school loses is not stolen. It is a payment that was never recorded, a discount that was given and forgotten, or a bank charge nobody noticed. EduSmart360 closes those gaps.",
      features: [
        { title: "Money in is recorded once", body: "When a parent pays online, the payment, the receipt and the ledger entry happen together. No duplicate receipts." },
        { title: "Checked against the bank", body: "Reconcile each bank account against its statement. Anything that does not match stands out." },
        { title: "Spending needs sign-off", body: "Purchase requests pass procurement, audit and the director before accounts pays out." },
      ],
    },
    {
      n: "02",
      title: "HR and payroll",
      headline: "Staff records, leave and payroll in one place instead of five files.",
      body: "Every teacher, cleaner, driver and bursar gets a proper file: grade, department, documents, leave balance, appraisals, training and discipline history.",
      features: [
        { title: "Fingerprint attendance", body: "Connect a Hikvision fingerprint terminal at the gate and clock-ins land in the system by themselves." },
        { title: "Payroll that follows the grade", body: "Run monthly payroll from each staff member's grade and position. Payments post to the books." },
        { title: "Leave with proper approval", body: "Staff apply from their phones and HR approves, so nothing is approved quietly." },
      ],
    },
    {
      n: "03",
      title: "NFC student card",
      headline: "Attendance, ID and wallet on one card.",
      body: "Every student gets a contactless NFC card linked to their profile. They tap in at the gate and are marked present. Turn on the wallet and the same card pays for things around the school.",
      features: [
        { title: "Every tap on record", body: "Each purchase is logged with the time, the reader and the balance left." },
        { title: "Lost card, not lost money", body: "Block a lost card straight away and issue a new one. The balance stays in the wallet." },
        { title: "ID card first", body: "Not ready for a cashless campus? Leave the wallet off and the card still works as the student's ID." },
      ],
    },
    {
      n: "04",
      title: "Parent portal",
      headline: "Parents stop calling the office to ask what the system can tell them.",
      body: "One login covers every child a parent has in the school. They see what is owed and pay it, download the receipt, and see results the day you publish them.",
      features: [
        { title: "Pay online, get a receipt", body: "Card or bank transfer. The bursar re-enters nothing." },
        { title: "Results and report cards", body: "Every term's results, with CA and exam scores, as a PDF." },
        { title: "Messages on the record", body: "Talk to the class teacher inside the portal, not in a WhatsApp group." },
      ],
    },
  ] satisfies CoreModule[],
  everythingElse: [
    "NFC digital student ID",
    "Student 360 profile",
    "Fees and invoicing",
    "Attendance",
    "Parent and teacher messaging",
    "Teacher and staff management",
    "Timetable and academic planning",
    "Assignments and homework",
    "Announcements",
    "Admissions and enrolment",
    "Document management",
    "Transport",
    "Inventory and assets",
    "Discipline and behaviour",
    "Management dashboard",
    "Automated alerts",
    "Reports and analytics",
    "Free school website",
  ],
  onboarding: [
    { when: "Week 1", title: "We set up your school", body: "Your name, logo, classes, subjects, terms, fee items and bank accounts. You check it and we adjust." },
    { when: "Week 1 to 2", title: "We bring your records in", body: "Send us your student, parent and staff lists in Excel and we import them. Nobody retypes a register." },
    { when: "Week 2", title: "We train your people", body: "Short, hands-on sessions for the bursar, HR, teachers and admin. Every screen has a built-in guide." },
    { when: "Week 3", title: "You go live", body: "Parents and staff get their logins, your school website goes up, and fees come in through the portal." },
  ],
  included: ["Every module", "Free school website", "Setup, data import and staff training", "New features as they are released"],
  tiers: [
    { label: "100 to 300 students", min: 100, max: 300, perStudent: 3900 },
    { label: "301 to 500 students", min: 301, max: 500, perStudent: 3500 },
    { label: "501 to 1,000 students", min: 501, max: 1000, perStudent: 2950 },
    { label: "Above 1,000 students", min: 1001, max: null, perStudent: 2500 },
  ] satisfies PriceTier[],
} as const;

export function tierFor(students: number): PriceTier {
  const tiers: readonly PriceTier[] = edusmart.tiers;
  const match = tiers.find((t) => students >= t.min && (t.max === null || students <= t.max));
  return match ?? (tiers[0] as PriceTier);
}

const naira = new Intl.NumberFormat("en-NG", { maximumFractionDigits: 0 });

export function formatNumber(amount: number): string {
  return naira.format(amount);
}

export function formatNaira(amount: number): string {
  return `₦${naira.format(amount)}`;
}
