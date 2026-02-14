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
    "Machine Learning",
    "Blockchain",
    "Python",
    "Ansible",
    "Docker",
    "Cloudbees/Jenkins",
    "RHEL/ShellScript",
    "Hardware Security Module",
    "SAA/AMH",
    "SAG/SNL",
    "Swift CSP",
    "Swift API",
    "Splunk",
    "Oasis",
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
  books2026: [
    { title: "Mastering Ethereum",      author: "Various authors", link: "https://github.com/ethereumbook/ethereumbook" },
    { title: "The Wisdom We've Lost",   author: "Thomas R. Williams", link: "https://www.ivpress.com/the-wisdom-we-ve-lost" },
  ],

  books2025: [
    { title: "Rework",                  author: "Founders of 37signals", link: "https://basecamp.com/books/rework" },
    { title: "Empire of AI",            author: "Karen Hao", link: "https://www.penguinrandomhouse.com/books/745735/empire-of-ai-by-karen-hao/" },
    { title: "Inventing Bitcoin",       author: "Yan Pritzker", link: "https://inventingbitcoin.com/" },
    { title: "The Bitcoin Standard",    author: "Saifedean Ammous", link: "https://saifedean.com/thebitcoinstandard/" },
    { title: "Read, Write, Own",        author: "Chris Dixon", link: "https://readwriteown.com/" },
    { title: "Rinsed",                  author: "Geoff White", link: "https://www.geoffwhite.media/rinsed" },
    { title: "Outliers",                author: "Malcolm Gladwell", link: "https://www.gladwellbooks.com/titles/malcolm-gladwell/outliers/9780316017930/" },
    { title: "Fintech Wars",            author: "James da Costa", link: "https://www.fintechwars.com/" },
    { title: "The Psychology of Money", author: "Morgan Housel", link: "https://www.morganhousel.com/book" },
    { title: "Same as Ever",            author: "Morgan Housel", link: "https://www.morganhousel.com/sameasever" },
    { title: "Clear Thinking",          author: "Shane Parrish", link: "https://fs.blog/clear-thinking/" },
    { title: "Win Every Argument",      author: "Mehdi Hasan", link: "https://mehdirhasan.com/win-every-argument/" },
    { title: "The Anthology of Balaji", author: "Balaji Srinivasan", link: "https://balajis.com/anthology/" },
    { title: "Think and Grow Rich",     author: "Napoleon Hill", link: "https://napoleonhill.org/books/think-and-grow-rich/" },
    { title: "When Breath Becomes Air", author: "Paul Kalanithi", link: "https://www.whenbreathbecomesair.com/" },
  ],

  /* ── Blogs ── */
  blogs: [
    {
      title: "What is Money?",
      slug: "money",
      date: "14 February 2026",
      intro: "Money\u2019s evolution is a fascinating journey, often spanning centuries. Understanding its four key phases helps us contextualize modern digital assets like Bitcoin.",
      content: [
        'Money\u2019s evolution is a fascinating journey, often spanning centuries. Understanding its four key phases, as outlined by economist William Stanley Jevons, helps us contextualize modern digital assets like Bitcoin.',
        '<img src="blogs/images/money/bullish-case-for-bitcoin.png" alt="The Bullish Case for Bitcoin">',
        'Here are the four stages money typically evolves through:',
        '<ul><li><strong>1. Collectible \ud83d\udc1a</strong> \u2014 Initially, money is valued for its unique, peculiar properties like rarity or symbolic significance. Think shells, beads, or early gold. These served as \u201cproto-money\u201d for storing and transferring wealth between generations and tribes.</li><li><strong>2. Store of Value \ud83d\udcb0</strong> \u2014 As enough people recognize these properties, an item becomes a reliable way to keep and store value over time, with its purchasing power rising and eventually stabilizing. Historically, gold served this role. Bitcoin is currently transitioning from the collectible stage to becoming a store of value.</li><li><strong>3. Medium of Exchange \ud83d\udcb5</strong> \u2014 Once firmly established and stabilized as a store of value, the opportunity cost of using it for trades decreases, making it suitable for widespread transactions. Early Bitcoin users often misunderstood this, incurring a \u201chuge opportunity cost\u201d by using it as a medium of exchange too soon (e.g., the famous pizza transaction).</li><li><strong>4. Unit of Account \ud83c\udff7\ufe0f</strong> \u2014 This final stage is reached when money is widely accepted as a medium of exchange, and goods and services are priced directly in its terms, rather than being translated from another currency.</li></ul>',
        'This journey is complex, with gold taking centuries. Bitcoin\u2019s real-time evolution offers a rare glimpse into this fundamental monetary process.',
        '<strong>Source:</strong> <a href="https://www.bullishcaseforbitcoin.com/" target="_blank">The Bullish Case for Bitcoin</a>',
      ],
    },
    {
      title: "What is Web3?",
      slug: "web3",
      date: "14 February 2026",
      intro: "From read, to read-write, to read-write-own \u2014 the internet\u2019s evolution in three eras.",
      content: [
        '<img src="blogs/images/web3/read-write-own.png" alt="Read Write Own">',
        '<strong>web1 \u2013 read era (1990 to 2005):</strong> Early internet protocol networks democratized information. Anyone could type a few words into a web browser and read about almost any topic through a website.',
        '<strong>web2 \u2013 read-write era (2006 to 2020):</strong> Corporate networks democratized publishing. Anyone could write and publish to mass audiences through posts on social networks and other services.',
        '<strong>web3 \u2013 read-write-own era:</strong> Represents a natural synthesis of the two prior types, and it is democratizing ownership. In this era, anyone can become a network stakeholder, gaining power and economic upside.',
        'People can read and write on the internet, but they can also own now.',
        '<strong>Source:</strong> <a href="https://readwriteown.com/" target="_blank">Read Write Own</a>',
      ],
    },
    {
      title: "What is Gartner\u2019s Hype Cycle?",
      slug: "gartners-hype-cycle",
      date: "14 February 2026",
      intro: "And where does Crypto sit today?",
      content: [
        'The Gartner Hype Cycle describes the journey every emerging technology goes through. It highlights not just the buzz, but also the reality check that follows before meaningful adoption kicks in.',
        '<img src="blogs/images/gartners-hype-cycle/hype-cycle.png" alt="Gartner Hype Cycle">',
        'The five phases:',
        '<ul><li><strong>\ud83d\udd39 Innovation Trigger</strong> \u2014 A breakthrough sparks excitement. Proof-of-concept stories grab attention, but usable products are scarce.</li><li><strong>\ud83d\udd39 Peak of Inflated Expectations</strong> \u2014 Media hype fuels big promises. Success stories emerge, but failures are just as common.</li><li><strong>\ud83d\udd39 Trough of Disillusionment</strong> \u2014 Reality sets in. Interest fades as early implementations disappoint. Only the resilient players survive.</li><li><strong>\ud83d\udd39 Slope of Enlightenment</strong> \u2014 Practical applications become clearer. Second- and third-generation solutions show real value.</li><li><strong>\ud83d\udd39 Plateau of Productivity</strong> \u2014 Adoption goes mainstream. Clear standards and proven use cases drive lasting impact.</li></ul>',
        '<strong>Source:</strong> <a href="https://www.gartner.com/en/research/methodologies/gartner-hype-cycle" target="_blank">Gartner Hype Cycle</a>',
      ],
    },
    {
      title: "Why can\u2019t we print more money?",
      slug: "sound-money",
      date: "14 February 2026",
      intro: "The story of Yap\u2019s Rai stones and what it teaches us about sound money.",
      content: [
        'In the remote Pacific Ocean lies a small island called Yap. For centuries, the people of Yap used massive limestone disks (Rai stones) as money. Some of these stones stood over 4 meters tall and weighed several tons. To transfer a stone, the community would gather and agree on who now owned it (decentralization).',
        '<img src="blogs/images/sound-money/sound-money.png" alt="Sound Money">',
        'The stones had to be quarried on distant islands and transported back using dugout canoes \u2014 a laborious and costly process. As a result, the annual increase in supply was extremely low (scarcity).',
        'In 1903, an American trader named O\u2019Keefe arrived with dynamite and steamships. He began mass-producing the stones using industrial tools, increasing the annual supply by 300 times.',
        'The stock-flow-ratio plummeted, and the thousand-year-old trust system exploded, where Rai stones went from being a \u201cpublic ledger\u201d to little more than worthless rocks.',
        'This episode teaches us something profound: the credibility of a currency doesn\u2019t come from how it looks, but from how hard it is to create.',
        '<strong>Source:</strong> <a href="https://saifedean.com/tbs" target="_blank">The Bitcoin Standard</a>',
      ],
    },
    {
      title: "What is Artificial General Intelligence (AGI)?",
      slug: "agi",
      date: "12 February 2026",
      intro: "Is Compute the only way to attain AGI?",
      content: [
        'OpenAI has described AGI as "a highly autonomous system that outperforms humans at most economically valuable work," one that will somehow "elevate humanity by increasing abundance, turbocharging the economy, and aiding in the discovery of new scientific knowledge that changes the limits of possibility."',
        '<img src="blogs/images/agi/empire-of-ai.png" alt="Empire of AI">',
        'The book <em>Empire of AI</em> traces the global race toward AGI — from the immense computing power and vast training data that fuel large models, to the content moderation networks in Kenya, and finally to the environmental consequences of data centers and the growing water crisis that sustains this digital empire.',
        'This book is a fascinating read.',
        '<strong>Source:</strong> <a href="https://karendhao.com/" target="_blank">karendhao.com</a>',
      ],
    },
    {
      title: "What is the Byzantine Generals Problem?",
      slug: "byzantine-generals-problem",
      date: "12 February 2026",
      intro: "Why it is difficult to control the blockchain network?",
      content: [
        'The Byzantine Empire was infamous for its complex bureaucracy, shifting alliances, and constant intrigue. A general there feared not just the enemy beyond the walls but betrayal within. Orders could be forged, messengers bribed, and allies turn traitor.',
        '<img src="blogs/images/byzantine/byzantine-generals-problem.png" alt="Byzantine Generals Problem">',
        'This ancient drama became the perfect metaphor for a modern computing puzzle. How can a network of independent nodes agree on a single truth when some may lie, fail, or act selfishly? That is the Byzantine Generals Problem, and every decentralized blockchain must solve it.',
        'In this analogy, generals are nodes and their collective decision to attack or retreat represents the state of the network. A Byzantine failure happens when the system cannot tell honest participants from malicious ones, confusing valid and fraudulent transactions. To stay secure, a majority must reach consensus — and that is where consensus mechanisms come in.',
        '<ul><li><strong>Proof of Work (Bitcoin):</strong> Miners solve computational puzzles to prove real work. Energy and hardware costs make cheating irrational, creating Byzantine Fault Tolerance through economics.</li><li><strong>Proof of Stake (Ethereum):</strong> Validators lock up capital as collateral. Misbehavior can lead to slashing, causing dishonest participants to lose their stake.</li></ul>',
        'Both systems achieve practical Byzantine Fault Tolerance by aligning economic incentives with honest participation.',
        'At its core, Byzantine Fault Tolerance keeps public blockchains corruption resistant — a digital echo of ancient intrigue turned into mathematical order.',
      ],
    },
    {
      title: "What is a Birthday Attack?",
      slug: "birthday-attack",
      date: "12 February 2026",
      intro: "Bitcoin is back at an all-time high — a good time to revisit the cryptography that keeps it secure: SHA-256.",
      content: [
        'The birthday attack comes from the birthday paradox: in a group of just 23 people, there\'s a 50% chance two share the same birthday. The same math applies to hash functions in which probability of two inputs producing the same hash (a collision) rises much faster than our intuition expects.',
        '<img src="blogs/images/birthday-attack/birthday-attack.png" alt="Birthday Attack">',
        'For a hash function with n bits, a collision can be expected after roughly 2^(n/2) attempts.',
        'SHA-256 outputs 256 bits, so a brute-force collision (birthday) attack needs on the order of 2^128 operations, which is astronomically large with today\'s hardware.',
      ],
    },
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
