export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialId: string;
  url: string;
  category: "Networking" | "Data Science" | "Cloud" | "Security";
  featured?: boolean;
}

export const certifications: Certification[] = [
  {
    id: "cisco-ccna",
    title: "Cisco Certified Network Associate (CCNA)",
    issuer: "Cisco",
    date: "August 2025",
    credentialId: "CSCO-12345678",
    url: "#",
    category: "Networking",
    featured: true // Ini akan memicu layout raksasa ala Ciena
  },
  {
    id: "mtcna",
    title: "MikroTik Certified Network Associate",
    issuer: "MikroTik",
    date: "October 2025",
    credentialId: "MTCNA-2025-9988",
    url: "#",
    category: "Networking"
  },
  {
    id: "data-science-pro",
    title: "Data Science Professional Certificate",
    issuer: "IBM",
    date: "February 2026",
    credentialId: "IBM-DS-445566",
    url: "#",
    category: "Data Science"
  },
  {
    id: "palo-alto-pcnsa",
    title: "Palo Alto Networks Certified Network Security Administrator",
    issuer: "Palo Alto Networks",
    date: "March 2026",
    credentialId: "PAN-778899",
    url: "#",
    category: "Security"
  },
  {
    id: "aws-saa",
    title: "AWS Certified Solutions Architect",
    issuer: "Amazon Web Services",
    date: "January 2026",
    credentialId: "AWS-SAA-112233",
    url: "#",
    category: "Cloud"
  }
];