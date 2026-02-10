/*  ============================================================
    RESUME DATA — Edit this file to update your resume.
    After editing, commit & push to GitHub to publish changes.
    ============================================================ */

const RESUME = {

  /* ── Personal ── */
  name: "Vivin Joghee",
  title: "Swift Messaging | Data Analysis | Automation",
  contact: [
    // Add your contact details below. Types: "email", "phone", "linkedin", "github", "location"
    { type: "email",    value: "vivinjoghee@gmail.com" },
    { type: "phone",    value: "+65 98857422" },
    { type: "linkedin", value: "linkedin.com/in/vivin-joghee/", url: "https://www.linkedin.com/in/vivin-joghee/" },
    { type: "github",   value: "github.com/vivin-joghee", url: "https://github.com/vivin-joghee" },
    { type: "location", value: "Singapore" },
  ],

  /* ── Objective ── */
  objective:
    "Swift Messaging, Data Analysis, and Automation specialist with 13 years of banking experience delivering, operating, and optimizing Swift and Java platforms across on-premises and Azure environments. Currently serving as Continuous Integration Lead for Global Professional Services, with a mandate to enhance service delivery productivity through AI-driven automation and analytics. Pursuing an MSc in Financial Technology, strengthening expertise in data analysis, machine learning, and blockchain systems to support next-generation financial services.",

  /* ── Experience ── */
  experience: [
    {
      role: "Senior Financial Services Industry Consultant",
      company: "SWIFT Terminal Services",
      date: "April 2022 \u2013 Present",
      bullets: [
        "Developed data visualization dashboards and analytical charts using Python and machine-learning techniques to derive insights from customer and operational data.",
        "Led ISO 20022 migration initiatives for global payment systems, including MEPS L4L, TH Bahtnet, HK CHATS, UK CHAPS, ZA SAMOS, CBPR+, AU HVPS, PH PhilPaSS, JO RTGS, BN RTGS, for various Banks.",
        "Designed and implemented a Copilot AI agent to optimize and streamline Professional Services workflows, leveraging JIRA REST APIs to extract ticket data and automatically consolidate project documentation.",
        "Managed AMH migrations for clients, delivering custom transformations to support back-office integrations and evolving workflow requirements.",
        "Served as Development Lead for Continuous Integration, managing AMH Docker image maintenance, server provisioning via Ansible, and CI/CD pipeline configuration using CloudBees/Jenkins.",
        "Managed regulatory and governance requirements, including secure password policies, identity usage controls, and monitoring tool compliance across environments.",
      ],
    },
    {
      role: "Technical Lead \u2013 Enterprise Financial Messaging",
      company: "BNY Mellon Technology",
      date: "December 2019 \u2013 December 2021",
      bullets: [
        "Automated installation and configuration of SWIFT applications using Ansible.",
        "Developed Python scripts to streamline deployment of configurations.",
        "Swift Go \u2013 Microgateway installation and API configuration for SLVP, GPI, G4C, and GCase APIs.",
        "Integrated SWIFT APIs with Banking Analytics platforms using REST APIs.",
        "Deployed and configured SWIFT applications in Azure cloud environments (SAA, AWP, SAG, SNL, IPLA).",
        "Swift Customer Security Framework 2020 Implementation.",
      ],
    },
    {
      role: "Lead Business Analyst \u2013 Global Swift Messaging",
      company: "Standard Chartered Global Business Services",
      date: "January 2015 \u2013 December 2019",
      bullets: [
        "Developed Python scripts to automate deployment of configurations.",
        "Led migration from IBM TDE to Axway, enabling Cross File Transfer integration with SWIFT for SCB FileAct traffic.",
        "Executed migration from SAG FTI/FTA module to AMH for SCB FileAct traffic.",
        "Swift Customer Security Framework 2018/2019 Implementation.",
        "Swift Standard Release 2017\u20132019 Implementation.",
        "Managed SWIFTNet 7.2 and 7.3 migrations (SAA, AWP, SAG, SNL, IPLA).",
        "HSM migration from 6.0 to 6.1.",
      ],
    },
    {
      role: "Software Engineer \u2013 Belk Application Maintenance",
      company: "Syntel Inc",
      date: "December 2012 \u2013 December 2014",
      bullets: [
        "Belk.com website maintenance and support.",
        "Configured critical alerts in CA Wily and Splunk across application servers to ensure proactive monitoring.",
        "Queried and generated business intelligence reports using IBM Cognos.",
        "Performed patch installations for the critical Blue Martini Java application.",
        "Developed and implemented Shell scripts to automate BAU (Business-as-Usual) tasks.",
      ],
    },
  ],

  /* ── Skills ── */
  skills: [
    "Ansible",
    "Docker",
    "Cloudbees/Jenkins",
    "Python",
    "RHEL/ShellScript",
    "Hardware Security Module",
    "Swift CSP",
    "Swift API",
    "SAA/AMH",
    "SAG/SNL",
    "ISO20022",
  ],

  /* ── Education ── */
  education: [
    { name: "Master of Science / FinTech",           detail: "NTU, Singapore \u2022 2025 \u2013 pursuing" },
    { name: "Bachelor of Engineering / Computer Science",   detail: "Anna University, Chennai \u2022 2008 \u2013 2012" },
  ],

  /* ── Certifications ── */
  // Add a "url" field to any certification to make it clickable for verification.
  // Example: { name: "AWS CLF-C01", detail: "Amazon ...", url: "https://verify-link.com" }
  certifications: [
    { name: "SWIFTNet Certification",                     detail: "SWIFT, Singapore \u2022 2025" },
    { name: "Blockchain Security by Infosec",             detail: "LinkedIn, Singapore \u2022 2025", url: "https://www.linkedin.com/learning/certificates/486869b9e46db6d1cc7feb6508082aee9b996249f9a8f98413fe7502a45cd72e?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3Bd2e7OQnYQxSN3rxxJoWBJw%3D%3D&accountId=0&u=0&success=true&authUUID=%2BUj%2FhddnRVOxNKsPEZKJGg%3D%3D" },
    { name: "Flexi Masters in FinTech",                   detail: "NTU, Singapore \u2022 2024 \u2013 2025", url: "certs/Vivin_Joghee_FlexiMasters_in_Financial_Technology.pdf" },
    { name: "Python For Data Analysis",                   detail: "NTU, Singapore \u2022 2024 \u2013 2025", url: "certs/Python_for_Data_Analysis.pdf" },
    { name: "Machine Learning in Finance",                detail: "NTU, Singapore \u2022 2024", url: "certs/Vivin_Joghee_Machine_Learning_in_Finance.pdf" },
    { name: "Blockchain Systems Concepts and Principles", detail: "NTU, Singapore \u2022 2024", url: "certs/Vivin_Joghee_Blockchain_Systems.pdf" },
    { name: "Python, PCEP-30-02",                         detail: "Python Institute, Singapore \u2022 2024", url: "https://verify.openedg.org/?id=1sVa.nxUz.GTQ3" },
    { name: "AWS CLF-C01",                                detail: "Amazon, Singapore \u2022 2023", url: "certs/Vivin_Joghee_AWS_Certified_Cloud_Practitioner.pdf" },
    { name: "ICAgile Certified Professional",             detail: "ICAgile, Singapore \u2022 2023", url: "https://www.icagile.com/credentials/ab638407-77e3-469d-97a9-ef83f6ca3ea7" },
    { name: "LPI 010-160",                                detail: "Linux Professional Institute, Singapore \u2022 2023", url: "https://cs.lpi.org/caf/Xamman/certification/verify/LPI000553696/86crxggu3e" },
    { name: "Microsoft Azure AZ900",                      detail: "Microsoft, Chennai \u2022 2021", url: "https://www.credly.com/badges/52779edd-572b-4a5a-8dbb-b84c982d206f?source=linked_in_profile" },
    { name: "Certified Scrum Master",                     detail: "ScrumAlliance, Chennai \u2022 2017", url: "certs/Vivin_Joghee_Certified_Scrum_Master.pdf" },
  ],

  /* ── Awards ── */
  awards: [
    { name: "Kudos",                   detail: "SWIFT \u2022 2024" },
    { name: "Passion For Excellence",  detail: "BNY Mellon \u2022 2021" },
    { name: "Value Champion",          detail: "Standard Chartered \u2022 2019" },
    { name: "Winning Streak",          detail: "Syntel Inc. \u2022 2014" },
  ],

  /* ── Volunteer ── */
  volunteer: [
    { name: "Volunteer Lead",                        detail: "NEA, Singapore", url: "volunteer/Vivin_Joghee_NEA_Certificate_of_Appointment.pdf" },
    { name: "Fundraising Volunteer",                 detail: "Touch Community Services, Singapore" },
    { name: "Basic First AID + AED",      detail: "Singapore Red Cross Society, Singapore", url: "volunteer/BFA_Cert.png" },
    { name: "Psychological First Aid",    detail: "Singapore Red Cross Society, Singapore", url: "volunteer/PFA_Certification.pdf" },
    { name: "Fundraising Volunteer",      detail: "Greenpeace, India" },
  ],

    /* ── Football ── */
  football: [
    { name: "Singapore Coach Excellence Level 1",    detail: "SG Sport, Singapore", url: "football/Vivin_Joghee_Singapore_Coach_Excellence_Theory_Level1.pdf" },
    { name: "Football Association of Singapore, Introduction to Coaching Course", detail: "FAS, Singapore", url: "football/Vivin_Joghee_FAS_ICC.pdf" },
    { name: "Introduction to Football Analytics", detail: "hudlstatsbomb, Singapore", url: "football/Introduction_to_Football_Analytics.pdf" },
    { name: "Foundational Sport Science",    detail: "Sport Singapore, Singapore", url: "football/Vivin_Joghee_Foundational_Sport_Science.pdf" },
    { name: "Understanding Safe Sport as a Coach",    detail: "Safe Sport Commission, Singapore", url: "football/Vivin_Joghee_Safe_Sport_and_Sport_Safety_SGC-1.pdf" },
    { name: "Values and Principles in Sport",    detail: "Sport Singapore, Singapore", url: "football/Vivin_Joghee_Values_and_Principles_in_Sport_SGC-1.pdf" },
  ],

  /* ── Books ── */
  books: [
    { title: "Rework",                  author: "Founders of 37signals", link: "https://basecamp.com/books/rework" },
    { title: "Empire of AI",            author: "Karen Hao", link: "https://www.penguinrandomhouse.com/books/745735/empire-of-ai-by-karen-hao/" },
    { title: "Inventing Bitcoin",       author: "Yan Pritzker", link: "https://inventingbitcoin.com/" },
    { title: "The Bitcoin Standard",    author: "Saifedean Ammous", link: "https://saifedean.com/thebitcoinstandard/" },
    { title: "Mastering Ethereum",      author: "Various authors", link: "https://github.com/ethereumbook/ethereumbook" },
    { title: "Read, Write, Own",        author: "Chris Dixon", link: "https://readwriteown.com/" },
    { title: "Rinsed",                  author: "Geoff White", link: "https://www.geoffwhite.media/rinsed" },
    { title: "Outliers",                author: "Malcolm Gladwell", link: "https://www.gladwellbooks.com/titles/malcolm-gladwell/outliers/9780316017930/" },
    { title: "Fintech Wars",            author: "James da Costa", link: "https://www.fintechwars.com/" },
    { title: "The Psychology of Money", author: "Morgan Housel", link: "https://www.morganhousel.com/book" },
    { title: "Same as Ever",            author: "Morgan Housel", link: "https://www.morganhousel.com/sameasever" },
    { title: "Clear Thinking",          author: "Shane Parrish", link: "https://fs.blog/clear-thinking/" },
    { title: "Win Every Argument",      author: "Mehdi Hasan", link: "https://mehdirhasan.com/win-every-argument/" },
    { title: "The Wisdom We've Lost",   author: "Thomas R. Williams", link: "https://www.ivpress.com/the-wisdom-we-ve-lost" },
    { title: "The Anthology of Balaji", author: "Balaji Srinivasan", link: "https://balajis.com/anthology/" },
    { title: "Think and Grow Rich",     author: "Napoleon Hill", link: "https://napoleonhill.org/books/think-and-grow-rich/" },
    { title: "When Breath Becomes Air", author: "Paul Kalanithi", link: "https://www.whenbreathbecomesair.com/" },


  ],

  /* ── Blogs ── */
  blogs: [
    {
      title: "How big are crypto hacks?",
      slug: "crypto-hacks",
      date: "02 January 2026",
      intro: "Exploring how money laundering fuels crypto crime, and why billions in stolen funds reveal a systemic problem far bigger than any single hack.",
      content: [
        'In <em>RINSED</em>, Geoff White makes a powerful point. Laundering is not a side activity. It is the hidden system that makes crime profitable. No crime truly succeeds unless the money can be moved, disguised, and used.',
        '<img src="blogs/images/crypto-hacks/Rinsed.png" alt="Rinsed">',
        'Money laundering typically follows three stages:',
        '<ul><li><strong>Placement</strong> where illicit funds enter the financial system</li><li><strong>Layering</strong> where transactions are layered to obscure the trail</li><li><strong>Integration</strong> where funds re-enter the legitimate economy</li></ul>',
        'In <em>RINSED</em>, money laundering is portrayed as:',
        '<ul><li>The common language spoken by all criminal enterprises</li><li>The quiet enabler that connects street-level crime to global finance</li><li>The reason criminals care less about stealing money and more about moving it</li></ul>',
        'When this process combines with complex crypto infrastructure and human trust, scams scale fast. Crypto crime is not niche. It is systemic, well organized, and evolving faster than most defenses.',
        'According to the latest Chainalysis report, more than $3.4 billion in crypto was stolen in 2025, with single incidents accounting for billions on their own. Tens of thousands of individual victims were affected, showing that both institutions and everyday users are targets.',
        '<strong>Report:</strong> <a href="https://www.chainalysis.com/blog/crypto-hacking-stolen-funds-2026/" target="_blank">Chainalysis — Crypto Hacking Stolen Funds 2026</a>',
      ],
    },
    {
      title: "When should we stop looking? The Math of Smart Decisions — The \"37% Rule\"",
      slug: "optimal-stopping",
      date: "09 November 2025",
      intro: "The Optimal Stopping Problem reveals that observing 37% before deciding gives you the best mathematical chance of picking the best option — in hiring, investing, or life.",
      content: [
        'Imagine interviewing candidates one by one. After each interview, you must decide immediately: hire or move on. Once rejected, you can\'t go back. How do you maximize your chance of hiring the best?',
        'This is the <strong>Optimal Stopping Problem</strong>.',
        '<img src="blogs/images/optimal-stopping/algms.png" alt="Optimal Stopping Algorithm">',
        'Observe the first 37% of candidates to learn what "good" looks like. Then hire the next one who\'s better than all you\'ve seen so far. But first, decide your N.',
        '<strong>Formula:</strong> P(M, N) = (M \u2013 1)/N \u00d7 [1/(M \u2013 1) + 1/M + \u2026 + 1/(N \u2013 1)]',
        '<ul><li>N = 10 \u2192 Observe 3 \u2192 P(4, 10) \u2248 0.39 \u2192 <strong>39% chance</strong></li><li>N = 100 \u2192 Observe 37 \u2192 P(37, 100) \u2248 0.36 \u2192 <strong>36% chance</strong></li><li>N = 1000 \u2192 Observe 368 \u2192 P(368, 1000) \u2248 0.367 \u2192 <strong>37% chance</strong></li></ul>',
        'As N grows, the success rate approaches 1/e \u2248 0.37, the mathematical limit of optimal choice.',
        'In hiring, investing, or life \u2014 observe first, learn fast and act decisively when the right moment appears. Mathematics reminds us that <strong>too little patience leads to regret</strong>, and <strong>too much patience leads to missed opportunities</strong>.',
        '<strong>Source:</strong> <a href="https://lnkd.in/gJST-Kwi" target="_blank">Algorithms to Live By</a>',
      ],
    },
  ],
};
