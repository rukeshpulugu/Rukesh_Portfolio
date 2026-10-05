import Portfolio from "@/components/Portfolio";
export default function Page() {
  const ld = { "@context": "https://schema.org", "@type": "Person", name: "Rukesh Pulugu", jobTitle: "Aspiring Data Analyst", url: "https://portfolio-pnya.vercel.app", sameAs: ["https://www.linkedin.com/in/rukesh-pulugu-123rp", "https://github.com/rukeshpulugu"] };
  return (<><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} /><Portfolio /></>);
}
