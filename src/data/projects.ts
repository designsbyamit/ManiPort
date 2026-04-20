export interface ProcessStep {
  phase: string
  description: string
}

export interface Project {
  id: number
  slug: string
  type: 'featured' | 'short-story'
  title: string
  shortDescription: string
  role: string
  year: string
  domain: string
  tags: string[]
  thumbnailUrl: string
  heroImageUrl: string
  overview: string
  problem: string
  process: ProcessStep[]
  outcome: string
  learnings: string
}

export const projects: Project[] = [
  {
    id: 1,
    slug: 'brand-identity-redesign',
    type: 'featured' as const,
    title: 'Brand Identity Redesign',
    shortDescription: 'Refreshing a legacy brand for the modern digital landscape.',
    role: 'Lead UX/UI Designer',
    year: '2023',
    domain: 'Branding',
    tags: ['Branding', 'Visual Design', 'Strategy'],
    thumbnailUrl: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop',
    heroImageUrl: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1600&h=900&fit=crop',
    overview:
      'A 15-year-old fintech company needed to modernise its visual identity to appeal to a younger, digital-native audience while retaining trust with its existing customer base. The project spanned logo redesign, colour system, typography, and a comprehensive brand guidelines document.',
    problem:
      'The existing brand felt dated and inconsistent across touchpoints  --  the logo existed in seven variants, the colour palette was undefined, and typography varied by channel. New hires had no single source of truth.',
    process: [
      {
        phase: 'Discover',
        description:
          'Conducted 12 stakeholder interviews and a brand audit across 40+ customer touchpoints. Surveyed 200 existing customers on brand perception, and benchmarked against 8 industry competitors.',
      },
      {
        phase: 'Define',
        description:
          'Synthesised findings into a brand positioning map and three distinct design directions. Facilitated a leadership workshop to align on a single strategic direction before any visual exploration began.',
      },
      {
        phase: 'Ideate',
        description:
          'Explored 30+ logo concepts through rapid sketching, narrowing to 6 refined directions for stakeholder review. Simultaneously developed colour and type systems in parallel to accelerate delivery.',
      },
      {
        phase: 'Prototype',
        description:
          'Built high-fidelity mockups showing the new identity across business cards, app screens, social templates, and signage. Created an interactive Figma prototype for stakeholder approvals.',
      },
      {
        phase: 'Deliver',
        description:
          'Delivered a 60-page brand guidelines PDF, a Figma component library with all logo variants, and a migration playbook for transitioning existing materials over 6 months.',
      },
    ],
    outcome:
      'The new identity launched across all channels within 3 months. Brand recognition scores improved by 34% in post-launch research, and the company reported a 22% increase in new customer acquisition in the following quarter.',
    learnings:
      'The biggest lesson was the importance of separating strategy from aesthetics early on. Stakeholders who were initially attached to the old logo became strong advocates once they saw the reasoning grounded in research data. Alignment workshops are not optional  --  they are the project.',
  },
  {
    id: 2,
    slug: 'mobile-app-ux',
    type: 'featured' as const,
    title: 'Mobile App UX',
    shortDescription: 'Redesigning a health-tracking app to increase daily active usage.',
    role: 'Senior UX Designer',
    year: '2023',
    domain: 'Mobile Design',
    tags: ['Mobile', 'UX Research', 'Interaction Design'],
    thumbnailUrl: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop',
    heroImageUrl: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1600&h=900&fit=crop',
    overview:
      'A wellness startup had built a technically solid health-tracking app but struggled with retention  --  68% of users dropped off after the first week. The brief was clear: make daily check-ins feel effortless and meaningful, not like a chore.',
    problem:
      'Users abandoned the app because logging felt tedious and the insights felt generic. The app asked for too much data upfront, provided no immediate value, and sent notifications at wrong times.',
    process: [
      {
        phase: 'Discover',
        description:
          `Analysed 6 months of app telemetry, conducted 8 contextual interviews in users' homes, and ran a diary study with 15 participants over 2 weeks to capture real usage patterns.`,
      },
      {
        phase: 'Define',
        description:
          'Identified three core jobs-to-be-done: quick logging, meaningful progress visibility, and timely encouragement. Created a revised user journey that reduced time-to-first-value from 4 minutes to under 30 seconds.',
      },
      {
        phase: 'Ideate',
        description:
          'Ran a design sprint with the product team, generating 40+ concepts for the onboarding and logging flows. Prioritised using an impact/effort matrix, selecting 8 concepts for prototyping.',
      },
      {
        phase: 'Prototype',
        description:
          'Built 3 prototype variants in Figma testing different logging interaction models: swipe-based, widget-based, and conversational. Each was tested with 5 participants in moderated sessions.',
      },
      {
        phase: 'Deliver',
        description:
          'Shipped the redesigned app in two phases. Phase 1 covered onboarding and core logging; Phase 2 covered the insights dashboard and notification personalisation.',
      },
    ],
    outcome:
      'Day-7 retention improved from 32% to 61% within two months of launch. Average daily session length increased by 40%, and App Store ratings rose from 3.2 to 4.7 stars.',
    learnings:
      `Designing for behaviour change requires understanding motivation deeply, not just usability. The contextual interviews -- conducted in users' actual environments -- revealed friction points we would never have found in a lab. Going to where users are is always worth it.`,
  },
  {
    id: 3,
    slug: 'ecommerce-redesign',
    type: 'short-story' as const,
    title: 'E-Commerce Redesign',
    shortDescription: 'Overhauling the checkout funnel to reduce cart abandonment by 40%.',
    role: 'UX Lead',
    year: '2022',
    domain: 'E-Commerce',
    tags: ['E-Commerce', 'Conversion', 'UX Audit'],
    thumbnailUrl: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop',
    heroImageUrl: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1600&h=900&fit=crop',
    overview:
      'A mid-size European fashion retailer was losing €2.4M annually to cart abandonment. Despite strong traffic, their checkout converted at just 1.8%  --  well below the industry average of 3.5%. The project involved a full UX audit, user research, and a complete redesign of the product discovery-to-purchase funnel.',
    problem:
      'The checkout flow had 7 steps, required account creation before purchase, and provided no trust signals at the point of payment. Mobile users in particular faced a frustrating experience with no autofill support.',
    process: [
      {
        phase: 'Discover',
        description:
          `Conducted a heuristic evaluation against Nielsen's 10 principles, analysed Hotjar session recordings for 500 sessions, and interviewed 10 users who had recently abandoned carts.`,
      },
      {
        phase: 'Define',
        description:
          'Mapped the full purchase funnel with drop-off rates at each step. The account creation gate at step 2 accounted for 41% of all abandonment. Defined 5 key hypotheses to test.',
      },
      {
        phase: 'Ideate',
        description:
          'Explored a guest checkout flow, a one-page checkout variant, and a progressive disclosure model. Involved the engineering team early to identify technical constraints on scope.',
      },
      {
        phase: 'Prototype',
        description:
          'Built a high-fidelity Figma prototype of the new 3-step guest checkout. Ran A/B test concepts with 20 users in unmoderated remote sessions using Maze.',
      },
      {
        phase: 'Deliver',
        description:
          'Delivered annotated Figma specs to the dev team with a phased rollout plan: guest checkout first, followed by an address autofill update, then the trust-signals redesign.',
      },
    ],
    outcome:
      'Checkout conversion rate increased from 1.8% to 3.1% within 6 weeks of the phased launch. Cart abandonment fell by 38%, recovering an estimated €900K in annual revenue.',
    learnings:
      'Sometimes the biggest wins come from removing friction rather than adding features. The account creation gate removal alone drove the majority of the improvement. Always look for what you can take away before adding anything new.',
  },
  {
    id: 4,
    slug: 'dashboard-design',
    type: 'short-story' as const,
    title: 'Analytics Dashboard',
    shortDescription: 'Designing a complex data product for non-technical users.',
    role: 'Product Designer',
    year: '2022',
    domain: 'Data Visualisation',
    tags: ['Dashboard', 'Data Viz', 'Enterprise UX'],
    thumbnailUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
    heroImageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1600&h=900&fit=crop',
    overview:
      'A B2B SaaS company needed to surface complex supply chain data to operations managers who had no data or technical background. The existing dashboard was built by engineers for engineers  --  dense, jargon-filled, and overwhelming. The project reimagined the product from the ground up.',
    problem:
      `Operations managers couldn't extract actionable insights from the existing tool. They were exporting data to spreadsheets to find what they needed -- a sign that the dashboard was failing at its core purpose.`,
    process: [
      {
        phase: 'Discover',
        description:
          'Shadowed 6 operations managers across 3 client organisations for a full working day each. Documented every moment they interacted with data  --  what they needed, when, and what actions they took as a result.',
      },
      {
        phase: 'Define',
        description:
          'Identified 5 core decision types that managers made daily and mapped each to the data required. This became the information architecture for the new product  --  organised by decision, not by data type.',
      },
      {
        phase: 'Ideate',
        description:
          'Ran co-design sessions with 4 power users to sketch dashboard layouts. Explored card-based, narrative, and exception-first UI patterns. The exception-first model  --  surfacing anomalies prominently  --  resonated most.',
      },
      {
        phase: 'Prototype',
        description:
          'Built a high-fidelity interactive prototype covering the top 3 decision types. Tested with 8 managers in moderated sessions, measuring time-to-insight for key tasks.',
      },
      {
        phase: 'Deliver',
        description:
          'Shipped the new dashboard in a beta to 12 client teams. Iterated based on 6 weeks of feedback before rolling out to the full customer base of 200+ companies.',
      },
    ],
    outcome:
      'Time-to-insight for key tasks dropped by 65%. Spreadsheet exports fell by 80%, indicating that users were finally finding what they needed within the product. Net Promoter Score for the product rose from 12 to 47.',
    learnings:
      `Shadowing users in their actual workflow -- not interviewing them about it -- was transformative. People don't accurately describe how they work; they describe how they think they work. Only by observing did we understand the true shape of the problem.`,
  },
  {
    id: 5,
    slug: 'design-system',
    type: 'short-story' as const,
    title: 'Design System',
    shortDescription: 'Building a scalable component library that unified 4 product teams.',
    role: 'Design Systems Lead',
    year: '2021',
    domain: 'Design Systems',
    tags: ['Design Systems', 'Figma', 'Component Library'],
    thumbnailUrl: 'https://images.unsplash.com/photo-1558655146-364adaf1fcc9?w=800&h=600&fit=crop',
    heroImageUrl: 'https://images.unsplash.com/photo-1558655146-364adaf1fcc9?w=1600&h=900&fit=crop',
    overview:
      'Four product teams at a scale-up were shipping inconsistent UI  --  different button styles, conflicting colour usage, and 12 versions of a modal component. The project established a single design system shared across all teams, with Figma as the source of truth and a React component library as the implementation.',
    problem:
      'Design debt had compounded over 3 years of rapid growth. New features took 40% longer to design than they should because designers were recreating components from scratch. Engineers spent time building custom UI rather than product logic.',
    process: [
      {
        phase: 'Discover',
        description:
          'Audited all four product codebases and Figma files, cataloguing every unique component variant. Found 847 distinct button instances across 4 products  --  a clear indicator of the scale of the problem.',
      },
      {
        phase: 'Define',
        description:
          'Held a cross-team working group to align on principles, governance model, and contribution process. Prioritised the 20 components that would unlock the most value  --  those appearing in 80% of all screens.',
      },
      {
        phase: 'Ideate',
        description:
          'Designed each component with all states and variants documented. Created a token system for colour, typography, spacing, and elevation  --  the foundation that every component is built on.',
      },
      {
        phase: 'Prototype',
        description:
          'Published a Figma library to all design teams and gathered feedback over 4 weeks. Ran office hours twice weekly for designers to ask questions and surface edge cases before engineering handoff.',
      },
      {
        phase: 'Deliver',
        description:
          'Shipped the v1 React component library with 45 components, full accessibility documentation, and Storybook. Onboarded all four product teams over 8 weeks with dedicated support.',
      },
    ],
    outcome:
      `Design time per new feature dropped by 35% within 3 months. Engineering reported a 50% reduction in time spent on UI implementation. The system became the foundation for the company's Series B product pitch.`,
    learnings:
      `A design system is a product, not a project. It requires ongoing investment, clear ownership, and a community of contributors to stay healthy. The biggest risk isn't building the wrong components -- it's building the right components and then failing to maintain them.`,
  },
]
