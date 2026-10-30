import { IndustryPreset } from '../../types/preset';

export const professionalPreset: IndustryPreset = {
  id: 'professional',
  label: 'Professional Services',
  industry: 'Consulting & Legal Advisory',
  description: 'Refined, credibility-first architecture designed for corporate advisory firms, legal practices, and wealth management consultancies.',
  siteConfig: {
    name: 'Vanguard Advisory Partners',
    description: 'Strategic advisory, capital restructuring, and corporate governance for mid-market and enterprise leadership teams.',
    contact: {
      email: 'advisory@vanguardpartners.com',
      phone: '+1 (212) 849-3000',
      address: {
        street: '350 Park Avenue, 28th Floor',
        city: 'New York',
        region: 'NY',
        country: 'United States',
        postalCode: '10022',
      },
      hours: [
        { days: 'Monday – Friday', hours: '8:30 AM – 6:30 PM EST' },
        { days: 'Saturday – Sunday', hours: 'By Executive Appointment' },
      ],
    },
    socialLinks: {
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com',
      facebook: '',
      instagram: '',
    },
    pages: {
      about: true,
      services: true,
      portfolio: true,
      testimonials: true,
      blog: false,
      contact: true,
    },
    brand: {
      tagline: 'Strategic clarity for pivotal corporate moments.',
      foundedYear: 1998,
      logoText: 'VANGUARD',
      badgeText: 'Strategic Advisory Firm',
    },
  },
  themeConfig: {
    colors: {
      primary: '#0f2b48', // Deep executive navy
      primaryHover: '#0a1d31',
      secondary: '#334155', // Slate 700
      secondaryHover: '#1e293b',
      background: '#f8fafc', // Clean crisp slate 50
      foreground: '#0f172a', // Crisp dark navy-slate
      muted: '#edf2f7', // Slate 100
      mutedForeground: '#64748b', // Slate 500
      accent: '#c29037', // Refined heritage gold
      accentForeground: '#ffffff',
      card: '#ffffff',
      cardForeground: '#0f172a',
      border: '#cbd5e1', // Slate 300
    },
    typography: {
      headingFont: "'Plus Jakarta Sans', Garamond, serif",
      bodyFont: "'Inter', sans-serif",
    },
    radius: {
      button: '0.25rem', // Crisp, refined executive corners
      card: '0.375rem',
    },
  },
  navigationConfig: {
    mainNav: [
      { label: 'Practice Areas', href: '/services', requiresPage: 'services' },
      { label: 'Firm Overview', href: '/about', requiresPage: 'about' },
      { label: 'Transactions', href: '/portfolio', requiresPage: 'portfolio' },
      { label: 'Schedule Consultation', href: '/contact', requiresPage: 'contact' },
    ],
    footerNav: [
      {
        title: 'Practice Areas',
        items: [
          { label: 'Mergers & Acquisitions', href: '/services' },
          { label: 'Capital Restructuring', href: '/services' },
          { label: 'Corporate Governance', href: '/services' },
          { label: 'Risk & Regulatory Compliance', href: '/services' },
        ],
      },
      {
        title: 'The Firm',
        items: [
          { label: 'Senior Partners', href: '/about' },
          { label: 'Track Record', href: '/portfolio' },
          { label: 'Fiduciary Principles', href: '/about' },
          { label: 'Office Locations', href: '/contact' },
        ],
      },
      {
        title: 'Confidentiality',
        items: [
          { label: 'Client Engagement Portal', href: '/contact' },
          { label: 'Regulatory Disclosures', href: '/contact' },
          { label: 'Privacy & Data Integrity', href: '/contact' },
        ],
      },
    ],
    ctaButton: {
      label: 'Request Consultation',
      href: '/contact',
    },
  },
  homeSections: [
    { id: 'hero', variant: 'minimal' },
    { id: 'services', variant: 'icon-grid' },
    { id: 'about', variant: 'stats' },
    { id: 'portfolio', variant: 'case-studies' },
    { id: 'testimonials', variant: 'quote-focused' },
    { id: 'pricing', variant: 'comparison-table' },
    { id: 'faq', variant: 'accordion' },
    { id: 'cta', variant: 'split' },
  ],
  data: {
    hero: {
      badge: 'Fiduciary Trust Since 1998',
      title: 'Decisive strategic advisory for high-stakes corporate transitions.',
      highlightedText: 'high-stakes corporate transitions',
      description:
        'Vanguard counsels corporate boards, private equity sponsors, and enterprise executives across cross-border acquisitions, capital restructuring, and leadership succession.',
      primaryCta: { label: 'Explore Practice Areas', href: '/services' },
      secondaryCta: { label: 'Confidential Consultation', href: '/contact' },
      trustBadges: ['SEC Registered Advisory', 'Over $8.4B in Completed Deals', 'Financially Unconflicted Fiduciary'],
      imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
      stats: [
        { value: '$8.4B+', label: 'Total Transaction Volume' },
        { value: '26 Yrs', label: 'Continuous Fiduciary Service' },
        { value: '98.5%', label: 'Executive Retention' },
      ],
    },
    services: {
      badge: 'Core Practices',
      title: 'Institutional Advisory Services',
      description: 'Disciplined counsel executed with senior partner oversight at every milestone.',
      items: [
        {
          id: 'mergers-acquisitions',
          title: 'Mergers & Acquisitions Advisory',
          description: 'Independent buy-side and sell-side transaction structuring, valuation modeling, and negotiation representation.',
          iconName: 'Scale',
          features: ['Cross-Border Transaction Execution', 'Quality of Earnings Auditing', 'Synergy Valuation Models', 'Antitrust Clearance Support'],
          popular: true,
        },
        {
          id: 'restructuring',
          title: 'Capital Restructuring & Turnarounds',
          description: 'Debt recapitalization, balance-sheet optimization, and creditor committee negotiations during distress or expansion.',
          iconName: 'ShieldAlert',
          features: ['Liquidity Management', 'Debt Restructuring & Forbearance', 'Senior Lender Negotiations', 'Operational Realignment'],
        },
        {
          id: 'governance',
          title: 'Board Governance & ESG Strategy',
          description: 'Independent board evaluations, risk oversight frameworks, and regulatory compliance alignment.',
          iconName: 'FileCheck',
          features: ['Independent Board Evaluations', 'Executive Succession Protocols', 'Shareholder Activism Defense', 'ESG Compliance Structuring'],
        },
        {
          id: 'wealth-succession',
          title: 'Executive Wealth & Family Office',
          description: 'Generational wealth preservation, corporate asset sheltering, and governance for single-family offices.',
          iconName: 'Landmark',
          features: ['Private Trust Structures', 'Family Business Transition', 'Private Investment Vehicles', 'Philanthropic Foundations'],
        },
      ],
    },
    about: {
      badge: 'The Vanguard Standard',
      title: 'Decades of steadfast counsel in unchartered business terrain.',
      story: [
        'Established in 1998 in Manhattan, Vanguard Advisory Partners was founded on a singular tenet: advisory must remain uncompromised by underwriting conflicts.',
        'We do not sell securities, trade proprietary desks, or compromise client confidentiality. Every client works directly with senior partners whose careers span multiple market cycles.',
      ],
      mission: 'To preserve enterprise capital and maximize shareholder value through rigorous fiduciary intelligence.',
      stats: [
        { value: '$8.4B', label: 'Transactions Advised' },
        { value: '140+', label: 'Cross-Border Deals' },
        { value: '26', label: 'Years Established' },
        { value: '100%', label: 'Partner-Led Mandates' },
      ],
      imageUrl: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80',
      imageAlt: 'Vanguard Advisory board conference room overlooking Manhattan',
      values: [
        { title: 'Absolute Confidentiality', description: 'Zero leaks. Strict non-disclosure protocols and encrypted communication channels.' },
        { title: 'Fiduciary Independence', description: 'Free of commercial banking affiliations and conflicting financing quotas.' },
        { title: 'Deep Sector Acumen', description: 'Deep operational insight across healthcare, enterprise software, and manufacturing.' },
      ],
    },
    portfolio: {
      badge: 'Track Record',
      title: 'Representative Transaction Mandates',
      description: 'A selection of high-profile restructuring, acquisition, and recapitalization advisory outcomes.',
      categories: ['All', 'M&A', 'Restructuring', 'Governance'],
      items: [
        {
          id: 'meridian-sale',
          title: 'Meridian Surgical Instruments Sale',
          category: 'M&A',
          description: 'Advised the founding board on the $420M strategic acquisition by a global healthcare conglomerate.',
          imageUrl: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80',
          metrics: [
            { label: 'Transaction Value', value: '$420M' },
            { label: 'Multiple', value: '14.2x EBITDA' },
          ],
          tags: ['Sell-Side Advisory', 'Healthcare', 'Antitrust'],
          client: 'Meridian Surgical Corp',
          year: '2024',
          link: '#',
        },
        {
          id: 'aegis-recapitalization',
          title: 'Aegis Precision Manufacturing Refinancing',
          category: 'Restructuring',
          description: 'Orchestrated $185M syndicated senior debt restructuring and recapitalization across 11 institutional lenders.',
          imageUrl: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80',
          metrics: [
            { label: 'Debt Restructured', value: '$185M' },
            { label: 'Interest Savings', value: '280 bps' },
          ],
          tags: ['Debt Advisory', 'Special Situations'],
          client: 'Aegis Dynamics',
          year: '2024',
          link: '#',
        },
        {
          id: 'clarion-governance',
          title: 'Clarion Energy Dual-Class Board Realignment',
          category: 'Governance',
          description: 'Advised special independent board committee on shareholder alignment and modernization of voting rights.',
          imageUrl: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80',
          metrics: [
            { label: 'Approval Rate', value: '94.2%' },
            { label: 'Board Diversity', value: '50% independent' },
          ],
          tags: ['Board Governance', 'Proxy Defense'],
          client: 'Clarion Energy Partners',
          year: '2025',
          link: '#',
        },
      ],
    },
    testimonials: {
      badge: 'Executive Perspectives',
      title: 'Trusted by board directors and institutional leaders.',
      items: [
        {
          id: 'p-1',
          quote: 'Vanguard provided ruthless analytical clarity and impeccable tactical guidance during our cross-border divestiture. Their senior partners were on the phone with us through every pivotal round.',
          author: 'Harrison Thorne',
          role: 'Chairman of the Board',
          company: 'Bellerophon Capital Group',
          avatarUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
          rating: 5,
        },
        {
          id: 'p-2',
          quote: 'Unlike Wall Street investment banks who assign juniors after signing the engagement letter, Vanguard’s managing partners conducted every single lender meeting personally.',
          author: 'Evelyn St. Claire',
          role: 'Chief Executive Officer',
          company: 'Orion Biotech Holdings',
          avatarUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80',
          rating: 5,
        },
      ],
    },
    pricing: {
      badge: 'Advisory Engagements',
      title: 'Institutional Mandate Frameworks',
      description: 'Structured advisory retainers designed for clarity, fiduciary alignment, and transaction success.',
      plans: [
        {
          id: 'board-counsel',
          name: 'Executive Board Counsel',
          description: 'Ongoing strategic advisory for boards navigating governance, risk, and capital planning.',
          price: '$15,000',
          period: 'monthly retainer',
          features: [
            { text: 'Quarterly board meeting attendance & briefings', included: true },
            { text: 'Independent valuation & governance audits', included: true },
            { text: 'Direct executive telephone access to Managing Partner', included: true },
            { text: 'Regulatory & compliance risk monitoring', included: true },
            { text: 'Full M&A transaction underwriting', included: false },
            { text: 'On-site turnaround management', included: false },
          ],
          ctaText: 'Retain Board Counsel',
          ctaHref: '/contact',
        },
        {
          id: 'ma-mandate',
          name: 'Strategic M&A Mandate',
          description: 'Comprehensive buy-side or sell-side representation from valuation to post-merger integration.',
          price: '$35,000',
          period: 'retainer + success fee',
          popular: true,
          features: [
            { text: 'Complete confidential information memorandum (CIM)', included: true },
            { text: 'Global acquirer / target universe mapping', included: true },
            { text: 'Data room management & antitrust defense', included: true },
            { text: 'Definitive agreement negotiations', included: true },
            { text: 'Senior partner deal execution at all sessions', included: true },
            { text: 'Tiered milestone success fee structure', included: true },
          ],
          ctaText: 'Initiate M&A Mandate',
          ctaHref: '/contact',
        },
        {
          id: 'turnaround',
          name: 'Restructuring & Turnaround',
          description: 'Special situations and balance sheet recapitalization for companies experiencing acute liquidity stress.',
          price: 'Custom',
          period: 'mandate-based',
          features: [
            { text: '13-Week cash flow modeling & controls', included: true },
            { text: 'Creditor committee & lender negotiations', included: true },
            { text: 'Interim CRO / advisory leadership placement', included: true },
            { text: 'Refinancing & equity injection structuring', included: true },
            { text: '24/7 dedicated crisis management room', included: true },
            { text: 'Bankruptcy Chapter 11 / out-of-court support', included: true },
          ],
          ctaText: 'Engage Special Situations',
          ctaHref: '/contact',
        },
      ],
    },
    faq: {
      badge: 'Client Inquiries',
      title: 'Institutional Mandate Information',
      description: 'Key details concerning engagement structures, fiduciary ethics, and conflicts.',
      items: [
        {
          question: 'How does Vanguard manage conflicts of interest?',
          answer: 'Vanguard is an independent, unconflicted advisory boutique. We do not engage in proprietary trading, research issuance, or principal debt underwriting. If an engagement presents any potential counterparty conflict, we decline the mandate before reviewing confidential materials.',
        },
        {
          question: 'What is the typical timeline for an M&A advisory engagement?',
          answer: 'A standard mid-market sell-side or buy-side transaction requires between 4 to 9 months, encompassing preparation of materials, buyer outreach, due diligence, and final closing documentation.',
        },
        {
          question: 'Do you work with private-equity-backed portfolio companies?',
          answer: 'Yes. More than half of our mandates involve private equity sponsors requiring independent transaction counsel, carve-out structuring, or bolt-on acquisition execution.',
        },
        {
          question: 'Are initial discussions protected under non-disclosure agreements?',
          answer: 'Without exception. Before any business details are exchanged, our legal counsel executes a mutual, bilateral non-disclosure agreement to ensure absolute protection of all parties.',
        },
      ],
    },
    cta: {
      badge: 'Confidential Inquiry',
      title: 'Schedule a confidential executive discussion.',
      description: 'Contact our managing partners directly at our Park Avenue offices or request a secure virtual consultation.',
      primaryCta: { label: 'Request Partner Meeting', href: '/contact' },
      secondaryCta: { label: 'Review Practice Areas', href: '/services' },
    },
  },
};
