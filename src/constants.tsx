
import React from 'react';
import { NavLinkItem, ServiceItem, TestimonialItem, TeamMember, IconProps, ProductItem, CareerPoint, ClientItem, LocationItem, IndustryItem } from './types';



// SVG Icons
export const BriefcaseIcon: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.073a2.25 2.25 0 01-2.25 2.25h-12a2.25 2.25 0 01-2.25-2.25v-4.073M15.75 9.75h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

export const CloudArrowUpIcon: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.338 0 4.5 4.5 0 01-1.41 8.775h-.525a12.01 12.01 0 00-2.836-.675 12.007 12.007 0 00-2.836.675H6.75z" />
  </svg>
);

export const CpuChipIcon: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-7.5h12.75c.621 0 1.125-.504 1.125-1.125V11.25c0-.621-.504-1.125-1.125-1.125H8.25C7.629 10.125 7.125 10.629 7.125 11.25v1.5c0 .621.504 1.125 1.125 1.125z" />
  </svg>
);

export const ChartBarIcon: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
  </svg>
);

export const ShieldCheckIcon: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
  </svg>
);

export const CodeBracketIcon: React.FC<IconProps> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
    </svg>
);

export const UserCircleIcon: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

export const CubeIcon: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
  </svg>
);

export const AcademicCapIcon: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
  </svg>
);

export const UsersIcon: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-3.741-1.5a3 3 0 00-3.741 1.5M1.5 18.72a9.094 9.094 0 013.741-.479 3 3 0 01-3.741-1.5a3 3 0 01-3.741 1.5M15 11.25a3 3 0 11-6 0 3 3 0 016 0zM21 12a9 9 0 11-18 0 9 9 0 0118 0zM5.25 10.5A.75.75 0 014.5 9.75V9A2.25 2.25 0 016.75 6.75h.75c.414 0 .82.166 1.125.467m11.25 3.033A.75.75 0 0119.5 9.75V9A2.25 2.25 0 0017.25 6.75h-.75a2.25 2.25 0 00-2.25 2.25v.75m0 3.75c.608.622 1.42.938 2.25.938h.75c.828 0 1.649-.316 2.25-.938m-9 0c.608.622 1.42.938 2.25.938h.75c.828 0 1.649-.316 2.25-.938" />
  </svg>
);

export const ScaleIcon: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0012 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52l2.25-1.352M6.75 4.97l-2.25-1.352M12 4.5v15.75" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 9h16.5m-16.5 2.25h16.5" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 14.25c0 .324-.007.647-.021.969M6.41 18.375a3.743 3.743 0 01-1.157-2.155M4.25 14.25a3.743 3.743 0 012.155-1.157M18 14.25c0 .324.007.647.021.969m-.431 3.156a3.743 3.743 0 01-1.157 2.155m2.155-1.157a3.743 3.743 0 00-2.155 1.157" />
  </svg>
);

export const MapPinIcon: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
  </svg>
);


export const NAV_LINKS: NavLinkItem[] = [
  { label: 'Home', path: '/' },
  { label: 'Services', path: '/services' },
  { label: 'Products', path: '/products' },
  { label: 'About Us', path: '/about' },
  { label: 'Careers', path: '/careers'},
  { label: 'Contact', path: '/contact' },
];

const ICON_CLASS = "w-10 h-10 sm:w-12 sm:h-12 text-blue-500 mb-3 sm:mb-4";
const PRODUCT_ICON_CLASS = "w-10 h-10 sm:w-12 sm:h-12 text-purple-500 mb-3 sm:mb-4";
const CAREERS_ICON_CLASS = "w-12 h-12 sm:w-16 sm:h-16 text-blue-500 mb-4";
export const LOCATION_ICON_CLASS = "w-6 h-6 text-blue-500 mr-3";


export const SERVICES_DATA: ServiceItem[] = [
  {
    icon: <CloudArrowUpIcon className={ICON_CLASS} />,
    title: 'Cloud Solutions',
    description: 'Scalable and secure cloud computing services tailored to your business needs, from migration to management.',
    details: 'Our cloud experts help you harness the full potential of platforms like AWS, Azure, and GCP. We offer cloud strategy, migration, modernization, and managed services to ensure optimal performance, security, and cost-efficiency. Embrace innovation with serverless computing, containers, and microservices architectures.'
  },
  {
    icon: <CpuChipIcon className={ICON_CLASS} />,
    title: 'AI & Machine Learning',
    description: 'Integrate intelligent automation and data-driven insights with our advanced AI and ML solutions.',
    details: 'Unlock new possibilities with our AI/ML services. We develop custom machine learning models, natural language processing (NLP) solutions, computer vision applications, and predictive analytics tools to drive efficiency, enhance customer experiences, and create new revenue streams.'
  },
  {
    icon: <ChartBarIcon className={ICON_CLASS} />,
    title: 'Data Analytics & BI',
    description: 'Transform raw data into actionable intelligence with our comprehensive data analytics and business intelligence services.',
    details: 'Make informed decisions with our data analytics and BI solutions. We provide data warehousing, data visualization, business intelligence reporting, and big data processing services. Turn your data into a strategic asset and gain a competitive edge.'
  },
  {
    icon: <CodeBracketIcon className={ICON_CLASS} />,
    title: 'Custom Software Development',
    description: 'Bespoke software solutions built to address your unique challenges and achieve specific business goals.',
    details: 'From web and mobile applications to enterprise software, our custom development services cover the entire lifecycle. We use modern technologies and agile methodologies to deliver high-quality, scalable, and maintainable software that perfectly aligns with your requirements.'
  },
  {
    icon: <ShieldCheckIcon className={ICON_CLASS} />,
    title: 'Cybersecurity Services',
    description: 'Protect your digital assets with our robust cybersecurity strategies and solutions.',
    details: 'Safeguard your business from evolving cyber threats. Our services include security assessments, penetration testing, threat detection and response, data protection, and compliance management. We help you build a resilient security posture.'
  },
  {
    icon: <BriefcaseIcon className={ICON_CLASS} />,
    title: 'DevOps & Automation',
    description: 'Streamline your development and operations with our expert DevOps practices and automation tools.',
    details: 'Accelerate your software delivery lifecycle with our DevOps solutions. We implement CI/CD pipelines, infrastructure as code (IaC), containerization, and automated testing to improve collaboration, efficiency, and reliability across your IT operations.'
  },
];

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    quote: "Working with this team has revolutionized our operations. Their expertise in cloud solutions is unparalleled.",
    author: "Jane Doe",
    company: "Tech Innovators Inc.",
    imageUrl: "https://picsum.photos/seed/jane/100/100"
  },
  {
    quote: "The AI-driven insights provided have given us a significant competitive advantage. Highly recommended!",
    author: "John Smith",
    company: "Market Leaders LLC",
    imageUrl: "https://picsum.photos/seed/john/100/100"
  },
  {
    quote: "Their custom software solution was exactly what we needed. The development process was smooth and collaborative.",
    author: "Alice Brown",
    company: "Global Solutions Co.",
    imageUrl: "https://picsum.photos/seed/alice/100/100"
  },
];

export const TEAM_MEMBERS_DATA: TeamMember[] = [
  { name: "Venkat Krishna Madipadaga", role: "Founder", imageUrl: "https://sidgs.com/wp-content/uploads/2023/11/VenkatKrishnaMadipagada-1.png", bio: "Visionary leader with 20+ years in tech innovation." },
  { name: "Ajay Yeluri", role: "CTO (Chief Technology Officer)", imageUrl: "https://sidgs.com/wp-content/uploads/2023/12/Ajay_Final.png", bio: "Expert in AI, cloud architecture, and scalable systems." },
  { name: "Rajesh Lakhani", role: "Regional Managing Director- IMEA", imageUrl: "https://sidgs.com/wp-content/uploads/2025/04/JPG-Format.jpg", bio: "Dedicated to building high-performance engineering teams." },
  { name: "Sudi Navile", role: "CEO - Digital", imageUrl: "https://sidgs.com/wp-content/uploads/2023/11/Sudi.png", bio: "Passionate about creating user-centric and impactful products." },
  { name: "Srikanth Kamsali", role: "Director- Customer Success (IMEA)", imageUrl: "https://sidgs.com/wp-content/uploads/2025/05/Srikanth.jpg", bio: "Charged with strengthening client relationships and accelerating regional revenue via customer-centric programs" },
  { name: "Naveen Pilli", role: "Director - Human Capital Management", imageUrl: "https://sidgs.com/wp-content/uploads/2023/11/NaveenPilli-1.png", bio: "Define and execute the Human Capital Management strategy in sync with company vision and growth targets" },
  { name: "Sirisree Gaddala", role: "Associate Director - HR", imageUrl: "https://sidgs.com/wp-content/uploads/2024/10/sirisree.jpg", bio: "Lead and inspire the HR team, fostering excellence in performance and ownership" },
  { name: "Ravindra Srinivasaiah Andagar", role: "Head - Bengaluru Hub & Sales Operations Lead", imageUrl: "https://sidgs.com/wp-content/uploads/2024/02/Ravindra-Srinivasaiah-Andagar.jpg", bio: "Optimize and streamline sales processes to empower revenue teams with maximum efficiency " }
];

export const PRODUCTS_DATA: ProductItem[] = [
  {
    id: 'sami',
    icon: <CubeIcon className={PRODUCT_ICON_CLASS} />,
    name: 'SAMI',
    tagline: 'Innovative-Integrated Unified Digital Portal',
    subheading: 'What is SAMi?',
    description: 'SAMi is the Enterprise Unified Digital Portal that transforms APIs, Services, and AI into powerful business assets. Designed for innovation-driven organizations, SAMi accelerates digital product launches, unlocks hidden brand value, and opens new revenue streams—while ensuring enterprise-grade security, governance, and compliance unified user experience.',
  },
  {
    id: 'api-guru',
    icon: <CubeIcon className={PRODUCT_ICON_CLASS} />,
    name: 'API Platform Guru',
    tagline: '360º Coverage For Your IT Needs',
    description: 'We are the business transformation partner of choice for organizations around the world. As a global technology services and Digital Solutions and Services provider, we enable businesses to excel through the most potent combination of cutting-edge technologies and fortune 500 customer digital transformation.',
  },
  {
    id: 'sid-smart',
    icon: <CubeIcon className={PRODUCT_ICON_CLASS} />,
    name: 'SID Smart Solutions',
    tagline: 'Digital Transformation Integrated with Google Products',
    description: 'SIDGS Smart Digital Solutions provide digital transformation products and services integrated with Google products. Products include API Management, RESTful services, Microservices, UX, Automation, Analytics, Developer Portals, Digital Infra Automation, CICD Pipeline Automation, API Fabricator, API Product Configurator, Ops Manager, Artificial Intelligence, AI/ML Integration Package.',
  },
];

export const CAREERS_PAGE_POINTS: CareerPoint[] = [
  {
    icon: <AcademicCapIcon className={CAREERS_ICON_CLASS} />,
    title: "Career Growth & Learning",
    description: "SID Global Solutions understands the importance of investing in its employees’ career growth and development. With a focus on providing learning opportunities, SID Global Solutions ensures that all of its employees have access to the necessary tools and resources to expand their skill sets and advance in their careers. From comprehensive training programs to mentorship and coaching, employees are given the support they need to succeed. This approach not only benefits the individual employee but also helps the company to maintain a competitive edge in an ever-changing market. With a culture that promotes continuous learning and improvement, SID Global Solutions sets itself apart as a company that truly values its employees and their professional development."
  },
  {
    icon: <UsersIcon className={CAREERS_ICON_CLASS} />,
    title: "Diversity, Equity, and Inclusion (DEI)",
    description: "Diversity, equity, and inclusion (DEI) is crucial to any successful organization. SID Global Solutions is committed to building a culture that embraces and celebrates diversity, where every employee is valued, respected, and supported. SID Global Solutions actively works to create an inclusive environment where all employees have the opportunity to thrive, regardless of their race, gender, ethnicity, sexual orientation, age, or any other characteristic. We understand that a diverse workforce brings different perspectives, ideas, and experiences to the table, which can lead to better problem-solving and decision-making. To ensure that it meets its DEI goals, SID Global Solutions regularly reviews its policies and practices and seeks employee feedback. By prioritizing DEI, we at SID Global Solutions create a more welcoming workplace and a more successful and innovative business."
  },
  {
    icon: <ScaleIcon className={CAREERS_ICON_CLASS} />,
    title: "Work-Life Balance",
    description: "SID Global Solutions recognizes the importance of work-life balance for its employees. We understand that maintaining a healthy balance between work and personal life is critical for employees’ well-being and productivity. To support work-life balance, we at SID Global Solutions offer flexible work arrangements, such as remote work options and flexible work schedules. We also provide various wellness programs and resources to promote physical and mental well-being, including access to fitness facilities and mental health support services. Additionally, SID Global Solutions encourages employees to take time off to recharge and spend time with family and friends. By prioritizing work-life balance, SID Global Solutions creates a positive and supportive work environment that allows employees to thrive both personally and professionally."
  }
];

export const CLIENTS_DATA: ClientItem[] = [
  {
    name: "HDFC BANK",
    description: "A leading Indian banking and financial services company, offering a wide range of products catering to millions of customers."
  },
  {
    name: "ICICI BANK",
    description: "A multinational banking and financial services company, providing diverse banking products and financial services in India."
  },
  {
    name: "BED BATH & BEYOND",
    description: "A prominent American chain of domestic merchandise retail stores, known for home goods, and bath products."
  },
  {
    name: "AMERI Health Caritas",
    description: "A national leader in healthcare solutions for underserved populations, focusing on managed care services and health plans."
  },
  {
    name: "NASCO",
    description: "A provider of healthcare technology solutions, serving Blue Cross and Blue Shield plans across the United States."
  },
  {
    name: "BROADCOM",
    description: "A global technology leader designing, developing, and supplying a broad range of semiconductor and infrastructure software solutions."
  },
  {
    name: "VERIZON",
    description: "One of the largest telecommunication companies globally, offering wireless services, internet, TV, and phone products."
  },
  {
    name: "AT&T",
    description: "A multinational telecommunications holding company, providing mobile, broadband, and pay television services."
  },
  {
    name: "AWS",
    description: "Amazon Web Services is a comprehensive and broadly adopted cloud platform, offering over 200 fully featured services."
  },
  {
    name: "AMERICAN EXPRESS",
    description: "A globally integrated payments company, providing customers with access to products, insights, and experiences."
  }
];

export const LOCATIONS_DATA: LocationItem[] = [
  {
    name: "Global Headquarters",
    address: "224 Valley creek Blvd.\nSuite 220,\nExton, PA 19341."
  },
  {
    name: "APAC Technology Center",
    address: "Fortune 9 Buildings, 6th Floor,\nSomajiguda, Hyderabad,\nTelangana 500082."
  },
  {
    name: "Bengaluru Technology Center",
    address: "3rd Floor, Workafella, 150, 1, Infantry Rd,\nOpp. Commissioner Office,\nVasanth Nagar, Bengaluru, Karnataka"
  },
  {
    name: "Singapore Technology Center",
    address: "10 Anson Road, #22-02,\nInternational Plaza,\nSingapore 079903."
  },
  {
    name: "Dubai Technology Center",
    address: "Unit 305, Dubai National Insurance Building,\nPlot Number – 315, Port Saeed, Dubai, UAE"
  },
  {
    name: "Philippines Technology Center",
    address: "Unit 1802B &1803, 18th Floor Podium West Tower\n#12 ADB Avenue, Ortigas Center,"
  },
  {
    name: "Mumbai Technology Center",
    address: "13th Floor, Hindustan C, Bus Stop, 247 Park,\nLal Bahadur Shastri Marg\nGandhi Nagar, Vikhroli West, Mumbai,"
  }
];

export const INDUSTRIES_DATA: IndustryItem[] = [
  {
    id: "it-domain",
    title: "IT Domain Expertise",
    description: "Leveraging our IT domain expertise and industry knowledge, we develop sustainable technology solutions.",
    imageUrl: "https://i0.wp.com/sidgs.com/wp-content/uploads/2025/06/Blog-images.jpg?fit=1920%2C1080&ssl=1"
  },
  {
    id: "banking-finance",
    title: "Banking and Finance",
    description: "Our services are designed to assist banks in challenging their conventions, leveraging the full potential of technology, their people, and emerging opportunities, and becoming more effective at changing operations.",
    imageUrl: "https://i0.wp.com/sidgs.com/wp-content/uploads/2023/01/1500-x-914-Harnessing-Data-for-Digital-Transformation-in-Retail-and-e-commerce.jpg?fit=1500%2C914&ssl=1"
  },
  {
    id: "transport-logistics",
    title: "Transportation & Logistics",
    description: "Digital Transformation services for Transportation & Logistics. The field includes shipping, transportation, warehousing, and inventory management—SIDGS delivers transformative solutions to modernize and streamline these processes.",
    imageUrl: "https://i0.wp.com/sidgs.com/wp-content/uploads/2023/01/1500-x-914-Exploring-the-Future-Potential-of-Digital-Transformation-in-Telecom.jpg?fit=1500%2C914&ssl=1"
  },
  {
    id: "real-estate",
    title: "Real Estate",
    description: "Involves the buying, selling, and renting of land and properties. It encompasses various types of properties such as residential homes, commercial buildings, industrial properties, and vacant land.",
    imageUrl: "https://picsum.photos/seed/realestate/400/300"
  },
  {
    id: "retail-ecommerce",
    title: "Retail & E-Commerce",
    description: "Maximizing efficiency and delivering a customer-centric experience are the key goals of Retail IT services. These services strive to improve business operations and create unified digital and physical sales channels.",
    imageUrl: "https://sidgs.com/wp-content/uploads/2023/02/E-Commerce-Solutions.png"
  },
  {
    id: "public-sector",
    title: "Public Sector Services",
    description: "Digitalizing Public Sector Services. Digitizing services helps governments meet public expectations and boost efficiency. With a proven approach, we provide creativity and adaptability, enabling the public sector to stay agile and navigate an evolving landscape effectively.",
    imageUrl: "https://i0.wp.com/sidgs.com/wp-content/uploads/2023/02/The-Future-of-Digital-Transformation-in-Transportation-and-Logistics.png?fit=1500%2C914&ssl=1"
  },
  {
    id: "education",
    title: "Education",
    description: "In the education sector, redundant tasks that have little added value can be taken care of by computers instead of people. Besides, digital tools can be leveraged to improve remote learning. Teachers can provide education through IT applications and offer a great student experience.",
    imageUrl: "https://i0.wp.com/sidgs.com/wp-content/uploads/2023/02/Strategies-for-Leveraging-Digital-Tools-in-Education.png?fit=1500%2C914&ssl=1"
  },
  {
    id: "telecom",
    title: "Telecommunications",
    description: "We support the cable industry in managing their hardware and network operations, enabling them to meet the needs of their many cable customers. We also regularly work with wireless technology, which is a rapidly expanding sector.",
    imageUrl: "https://i0.wp.com/sidgs.com/wp-content/uploads/2023/02/The-Impact-of-Digital-Transformation-on-the-Quality-of-Public-Services.png?fit=1500%2C914&ssl=1"
  },
  {
    id: "healthcare",
    title: "Healthcare",
    description: "Healthcare is one of the largest and fastest-growing industries in the world, driven by advancements in medical technology, an aging global population.",
    imageUrl: "https://i0.wp.com/sidgs.com/wp-content/uploads/2023/02/Exploring-Emerging-Technologies-for-Digital-Transformation-in-Health-Care-02.png?fit=1500%2C914&ssl=1"
  }
];
