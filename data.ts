export const SITE = "https://portfolio-pnya.vercel.app";
export const LINKS = { linkedin: "https://www.linkedin.com/in/rukesh-pulugu-123rp", email: "rukeshpulugu20@gmail.com", github: "https://github.com/rukeshpulugu", resume: "/Rukesh_Pulugu_Resume.pdf" };
const gh = (r: string) => `https://github.com/rukeshpulugu/${r}`;

export const SKILLS = [
  { title: "Data Analysis", items: ["Python", "Pandas", "NumPy", "SQL", "Excel Pivot Tables", "VLOOKUP"] },
  { title: "Data Visualization", items: ["Power BI", "DAX", "Tableau", "Excel Charts", "Matplotlib", "Seaborn"] },
  { title: "Databases", items: ["MySQL", "GROUP BY / HAVING", "Aggregate Functions"] },
  { title: "Programming", items: ["Python", "SQL"] },
  { title: "Tools", items: ["Microsoft Excel", "Power BI", "Tableau", "Git & GitHub"] },
];

export type Project = { slug: string; title: string; tool: string; summary: string; objective: string; tech: string[]; work: string[]; insights: string; repo: string };
export const PROJECTS: Project[] = [
  { slug: "retail", title: "Retail Sales Performance Dashboard", tool: "Excel", summary: "Interactive Excel dashboard analysing Global Superstore sales, profit and regional performance.",
    objective: "Analyse Global Superstore sales data to identify sales trends, top-performing products and regional performance.",
    tech: ["Excel", "Pivot Tables", "Pivot Charts", "Slicers", "KPI Metrics"],
    work: ["Analysed Global Superstore sales data", "Built an interactive dashboard with Pivot Tables, Pivot Charts, KPI metrics and slicers"],
    insights: "Generated business insights that improved visibility into sales, profit and product performance.", repo: gh("retail-sales-performance-dashboard") },
  { slug: "sql", title: "SQL Sales Analysis Project", tool: "MySQL", summary: "Sales and customer analysis on transactional business data using MySQL.",
    objective: "Perform sales and customer analysis on transactional business data.",
    tech: ["MySQL", "SQL", "GROUP BY", "ORDER BY", "HAVING", "DISTINCT"],
    work: ["Developed SQL queries using GROUP BY, ORDER BY, HAVING, DISTINCT and aggregate functions"],
    insights: "Identified top-performing products, profitable customers and regional sales trends.", repo: gh("sql-sales-analysis") },
  { slug: "hr", title: "HR Analytics Dashboard", tool: "Power BI", summary: "Power BI dashboard on employee attrition and workforce metrics.",
    objective: "Analyse employee attrition and workforce metrics through an interactive dashboard.",
    tech: ["Power BI", "DAX", "KPI Cards", "Slicers"],
    work: ["Created KPI cards, DAX measures, charts and slicers", "Visualised employee demographics and retention patterns"],
    insights: "Delivered insights on attrition, department performance and employee distribution.", repo: gh("HR-Analytics-dashboard") },
];

export const EXPERIENCE = [
  { org: "Bluestock.in", role: "Data Analyst Intern", date: "24 Jul 2026 – 24 Sep 2026", repo: gh("Bluestock_Internship") },
  { org: "Cognifyz IT Solutions Pvt. Ltd.", role: "Power BI Intern", date: "Jun 2026 – Jul 2026", repo: gh("cognifyz_internship") },
  { org: "CodeAlpha", role: "Data Analytics Intern", date: "Jun 2026", repo: gh("Codealpha_internship-") },
  { org: "InAmigos Foundation", role: "Data Analytics Intern", date: "Jul 2026", repo: gh("Inamigos_internship-") },
];
export const CERTS = [
  { name: "SQL (Advanced)", org: "HackerRank", date: "20 Jul 2026", note: "Passed the HackerRank skill certification test.", href: "/certificates/hackerrank-sql-advanced.png" },
  { name: "Data Labeling Job Simulation", org: "Forage", date: "11 Jun 2026", note: "Practical tasks in Batch Labeling & PII Awareness, and Review, Quality Control & Iteration.", href: "/certificates/forage-data-labeling-job-simulation.pdf" },
];
