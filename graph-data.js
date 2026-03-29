// Camden's Knowledge Graph — graph-data.js
// Generated 2026-03-29

const GRAPH_VERSION="1.0.0";

const BOOKS=[
  {
    "id": "psych-money",
    "title": "The Psychology of Money",
    "author": "Morgan Housel",
    "year": 2020,
    "rating": 5,
    "status": "read",
    "quote": "Doing well with money has little to do with how smart you are and a lot to do with how you behave.",
    "summary": "Housel's central argument: money is not a math problem — it is a behavior problem.",
    "ideas": [
      "Wealth vs. Being Rich",
      "The Power of Compounding",
      "Tail Events Drive Everything",
      "Reasonable vs. Rational",
      "Room for Error",
      "You'll Change"
    ],
    "concepts": [
      "compounding",
      "wealth-income",
      "risk-asymmetry",
      "long-term-thinking",
      "identity",
      "systems-thinking"
    ],
    "chapters": []
  },
  {
    "id": "buy-build",
    "title": "Buy Then Build",
    "author": "Walker Deibel",
    "year": 2018,
    "rating": 5,
    "status": "read",
    "quote": "Acquisition entrepreneurship is entrepreneurship — just with a head start.",
    "summary": "Deibel reframes entrepreneurship entirely. Buying an existing business gives you proof of concept, existing customers, and infrastructure on day one.",
    "ideas": [
      "Acquisition Entrepreneurship",
      "SDE as a Valuation Tool",
      "The Wealth Certainty Spectrum",
      "Buy vs. Build Risk"
    ],
    "concepts": [
      "cashflow",
      "ownership",
      "risk-asymmetry",
      "capital-allocation",
      "long-term-thinking"
    ],
    "chapters": []
  },
  {
    "id": "main-street",
    "title": "Main Street Millionaire",
    "author": "Codie Sanchez",
    "year": 2024,
    "rating": 4,
    "status": "read",
    "quote": "The boring business is not a consolation prize. It is the point.",
    "summary": "Sanchez popularizes the boring business thesis — unglamorous, cash-flowing Main Street businesses are better acquisition targets than tech-adjacent startups.",
    "ideas": [
      "The Boring Business Thesis",
      "Cashflow Over Growth",
      "Seller Financing",
      "Owner-Dependent Risk"
    ],
    "concepts": [
      "cashflow",
      "ownership",
      "risk-asymmetry",
      "capital-allocation",
      "compounding"
    ],
    "chapters": []
  },
  {
    "id": "financial-intelligence",
    "title": "Financial Intelligence",
    "author": "Karen Berman & Joe Knight",
    "year": 2006,
    "rating": 5,
    "status": "reading",
    "quote": "Profit is an opinion. Cash is a fact.",
    "summary": "Financial statements are not objective truth — they are constructed documents with built-in assumptions. This builds the literacy to read financials with appropriate skepticism.",
    "ideas": [
      "The Art of Finance",
      "Accrual vs. Cash Accounting",
      "Working Capital",
      "Reading a Balance Sheet"
    ],
    "concepts": [
      "cashflow",
      "risk-asymmetry",
      "systems-thinking",
      "capital-allocation"
    ],
    "chapters": [],
    "topics": []
  },
  {
    "id": "atomic-habits",
    "title": "Atomic Habits",
    "author": "James Clear",
    "year": 2018,
    "rating": 5,
    "status": "read",
    "quote": "You do not rise to the level of your goals. You fall to the level of your systems.",
    "summary": "Outcomes are a lagging measure of habits. You don't get to choose your outcomes — you choose your habits, and outcomes follow.",
    "ideas": [
      "Systems vs. Goals",
      "Identity-Based Habits",
      "Habit Stacking",
      "Environment Design",
      "The 1% Rule"
    ],
    "concepts": [
      "compounding",
      "systems-thinking",
      "identity",
      "long-term-thinking"
    ],
    "chapters": []
  },
  {
    "id": "naval",
    "title": "Almanack of Naval Ravikant",
    "author": "Naval Ravikant",
    "year": 2020,
    "rating": 5,
    "status": "read",
    "quote": "Wealth is assets that earn while you sleep.",
    "summary": "Naval's mental models for wealth creation and happiness — some of the clearest first-principles thinking available.",
    "ideas": [
      "Specific Knowledge",
      "Leverage",
      "Long-Term Thinking",
      "Reading is Foundational"
    ],
    "concepts": [
      "leverage",
      "wealth-income",
      "compounding",
      "long-term-thinking",
      "ownership",
      "identity"
    ],
    "chapters": []
  },
  {
    "id": "zero-to-one",
    "title": "Zero to One",
    "author": "Peter Thiel",
    "year": 2014,
    "rating": 4,
    "status": "read",
    "quote": "Every moment in business happens only once.",
    "summary": "True innovation goes from 0 to 1. The best businesses are monopolies in disguise. Competition is for losers.",
    "ideas": [
      "0 to 1 vs 1 to n",
      "Secrets Still Exist",
      "Competition Is for Losers",
      "Power Law in Portfolios"
    ],
    "concepts": [
      "leverage",
      "long-term-thinking",
      "risk-asymmetry",
      "ownership"
    ],
    "chapters": []
  },
  {
    "id": "good-to-great",
    "title": "Good to Great",
    "author": "Jim Collins",
    "year": 2001,
    "rating": 4,
    "status": "read",
    "quote": "Good is the enemy of great.",
    "summary": "Collins studied companies that made the leap from good to great and found a consistent pattern: Level 5 leaders, the right people, Hedgehog Concept, discipline, and the Flywheel.",
    "ideas": [
      "Level 5 Leadership",
      "First Who Then What",
      "The Hedgehog Concept",
      "The Flywheel"
    ],
    "concepts": [
      "systems-thinking",
      "long-term-thinking",
      "compounding",
      "ownership"
    ],
    "chapters": []
  },
  {
    "id": "never-split",
    "title": "Never Split the Difference",
    "author": "Chris Voss",
    "year": 2016,
    "rating": 5,
    "status": "read",
    "quote": "No deal is better than a bad deal.",
    "summary": "All negotiation is emotional. Tactical empathy and calibrated questions are more powerful than logic.",
    "ideas": [
      "Tactical Empathy",
      "Mirroring",
      "Calibrated Questions",
      "The Black Swan"
    ],
    "concepts": [
      "risk-asymmetry",
      "systems-thinking"
    ],
    "chapters": []
  },
  {
    "id": "e-myth",
    "title": "The E-Myth Revisited",
    "author": "Michael Gerber",
    "year": 1995,
    "rating": 4,
    "status": "want-to-read",
    "quote": "Build your business like you're going to franchise it.",
    "summary": "Most small businesses fail because the owner is a technician who had an entrepreneurial seizure. The fix: build systems so the business runs without you.",
    "ideas": [
      "Entrepreneur vs Technician vs Manager",
      "Work On vs In Your Business",
      "The Franchise Prototype"
    ],
    "concepts": [
      "ownership",
      "risk-asymmetry",
      "systems-thinking",
      "leverage"
    ],
    "chapters": [],
    "topics": []
  },
  {
    "id": "no-rules-rules",
    "status": "want-to-read",
    "concepts": [
      "systems-thinking",
      "leverage",
      "ownership"
    ],
    "topics": [],
    "ideas": [
      "Talent Density",
      "Freedom and Responsibility",
      "Radical Candor at Scale",
      "Remove Controls as Trust Builds",
      "Context Not Control"
    ],
    "rating": 0,
    "chapters": [],
    "title": "No Rules Rules",
    "author": "Reed Hastings & Erin Meyer",
    "year": 2020,
    "quote": "The best thing you can do for employees is hire only senior people.",
    "summary": "Netflix's co-founder argues that most corporate policies exist to manage the lowest common denominator — and that eliminating them while hiring only exceptional people creates a culture of freedom and responsibility that outperforms conventional management. Talent density is the prerequisite to everything else."
  },
  {
    "id": "writing-busy-readers",
    "status": "read",
    "concepts": [
      "systems-thinking",
      "leverage"
    ],
    "topics": [],
    "ideas": [
      "Less Is More",
      "Lead with the Ask",
      "Hierarchy of Information",
      "Design for Skimmers",
      "Cognitive Load in Writing"
    ],
    "rating": 4,
    "chapters": [],
    "title": "Writing for Busy Readers",
    "author": "Todd Rogers & Jessica Lasky-Fink",
    "year": 2023,
    "quote": "The best writing anticipates what the reader needs, not what the writer wants to say.",
    "summary": "Two behavioral scientists apply cognitive research to practical writing. The core insight: readers are always busier than writers assume. Every word that doesn't earn its place loses the reader. Less is almost always more, and structure does more work than style."
  },
  {
    "id": "power-professionalism",
    "status": "want-to-read",
    "concepts": [
      "identity",
      "systems-thinking"
    ],
    "topics": [],
    "ideas": [
      "Mindset Over Credentials",
      "Accountability as Identity",
      "Client-First Thinking",
      "Professionalism Under Pressure"
    ],
    "rating": 0,
    "chapters": [],
    "title": "The Power of Professionalism",
    "author": "Bill Wiersma",
    "year": 2011,
    "quote": "Professionalism is about what you do when no one is watching.",
    "summary": "Wiersma argues that professionalism is not about etiquette or credentials but about a mindset — a commitment to excellence, accountability, and client-first thinking that separates elite performers from the rest. It is a choice made repeatedly under pressure."
  },
  {
    "id": "great-mental-models-1",
    "title": "The Great Mental Models Vol. 1",
    "author": "Shane Parrish",
    "year": 2019,
    "rating": 5,
    "status": "want-to-read",
    "quote": "The quality of our thinking is proportional to the models in our head.",
    "summary": "Parrish introduces the concept of a mental model latticework — a cross-disciplinary collection of thinking tools that improve decision-making across all domains. Volume 1 covers foundational models: the map is not the territory, first principles thinking, thought experiments, second-order thinking, probabilistic thinking, inversion, and Occam's razor.",
    "ideas": [
      "The Map Is Not The Territory",
      "First Principles Thinking",
      "Second-Order Thinking",
      "Inversion",
      "Probabilistic Thinking",
      "Occam's Razor"
    ],
    "concepts": [
      "long-term-thinking",
      "risk-asymmetry",
      "systems-thinking"
    ],
    "chapters": [],
    "topics": []
  },
  {
    "id": "great-mental-models-2",
    "title": "The Great Mental Models Vol. 2",
    "author": "Shane Parrish",
    "year": 2019,
    "rating": 5,
    "status": "want-to-read",
    "quote": "Physics, chemistry, and biology offer the most reliable models because they describe how the world actually works.",
    "summary": "Volume 2 draws mental models from physics, chemistry, and biology — velocity vs. speed, leverage, activation energy, catalysts, evolution, natural selection, ecosystem thinking. The goal is to see patterns across disciplines that most specialists never notice because they stay inside their own domain.",
    "ideas": [
      "Velocity vs Speed",
      "Leverage from Physics",
      "Activation Energy",
      "Catalysts",
      "Natural Selection Applied to Ideas",
      "Ecosystem Thinking"
    ],
    "concepts": [
      "long-term-thinking",
      "systems-thinking",
      "leverage"
    ],
    "chapters": [],
    "topics": []
  },
  {
    "id": "great-mental-models-3",
    "title": "The Great Mental Models Vol. 3",
    "author": "Shane Parrish",
    "year": 2021,
    "rating": 5,
    "status": "want-to-read",
    "quote": "The military understands something most businesses don't: complex systems fail in complex ways.",
    "summary": "Volume 3 pulls models from mathematics and military thinking — redundancy, margin of safety, critical mass, game theory, via negativa, the power of default thinking. The military section is particularly sharp on how to act under uncertainty with incomplete information.",
    "ideas": [
      "Redundancy",
      "Critical Mass",
      "Game Theory Basics",
      "Via Negativa",
      "Margin of Safety Applied",
      "Default Thinking"
    ],
    "concepts": [
      "long-term-thinking",
      "risk-asymmetry",
      "systems-thinking"
    ],
    "chapters": [],
    "topics": []
  },
  {
    "id": "great-mental-models-4",
    "title": "The Great Mental Models Vol. 4",
    "author": "Shane Parrish",
    "year": 2023,
    "rating": 4,
    "status": "want-to-read",
    "quote": "Human behavior follows predictable patterns precisely because we are social animals.",
    "summary": "Volume 4 focuses on human nature and social systems — status games, signaling, narrative bias, tribalism, social proof, incentive structures, and the dynamics of group behavior. Understanding these models makes you harder to manipulate and better at designing systems that work with human nature rather than against it.",
    "ideas": [
      "Status Games",
      "Signaling vs Substance",
      "Narrative Bias",
      "Incentive Structures",
      "Social Proof",
      "Tribalism"
    ],
    "concepts": [
      "risk-asymmetry",
      "identity",
      "systems-thinking"
    ],
    "chapters": [],
    "topics": []
  },
  {
    "id": "youre-invited",
    "status": "read",
    "concepts": [
      "leverage",
      "long-term-thinking",
      "identity"
    ],
    "topics": [],
    "ideas": [
      "Belonging Over Networking",
      "The IKEA Effect in Relationships",
      "Influence Through Experience",
      "Community as Infrastructure",
      "Effortful Investment Creates Value"
    ],
    "rating": 4,
    "chapters": [],
    "title": "You're Invited",
    "author": "Jon Levy",
    "year": 2021,
    "quote": "The most influential people in the world got there by helping others feel like they belong.",
    "summary": "Behavioral scientist Jon Levy studies the science of belonging and influence. His thesis: the most connected people don't network — they create experiences that make others feel seen, invested, and part of something meaningful. The dinner table is more powerful than the conference room."
  },
  {
    "id": "greatest-salesman",
    "status": "read",
    "concepts": [
      "identity",
      "compounding",
      "long-term-thinking"
    ],
    "topics": [],
    "ideas": [
      "Habits as Master",
      "Persistence as Strategy",
      "Love as a Sales Tool",
      "Act Now",
      "Each Day a New Life"
    ],
    "rating": 4,
    "chapters": [],
    "title": "The Greatest Salesman in the World",
    "author": "Og Mandino",
    "year": 1968,
    "quote": "I will form good habits and become their slave.",
    "summary": "A parable structured around ten scrolls of wisdom on habit, persistence, love, and action. Mandino's central argument: all success is built on habits formed through daily repetition until they become automatic. The scrolls are designed to be read repeatedly — the repetition is the point."
  },
  {
    "id": "drucker-leadership",
    "title": "Drucker on Leadership",
    "author": "William A. Cohen",
    "year": 2010,
    "rating": 4,
    "status": "want-to-read",
    "quote": "Management is doing things right. Leadership is doing the right things.",
    "summary": "A synthesis of Peter Drucker's leadership philosophy — the most important management thinker of the 20th century. Drucker argued that leadership is not about personality or charisma but about results, trust, and the elevation of people's capacity. Effectiveness is a discipline that can be learned.",
    "ideas": [
      "Effectiveness as a Discipline",
      "Management vs Leadership",
      "Results Define Leadership",
      "Trust as Foundation",
      "Developing People"
    ],
    "concepts": [
      "ownership",
      "systems-thinking",
      "leverage"
    ],
    "chapters": [],
    "topics": []
  },
  {
    "id": "ruthless-elimination-hurry",
    "status": "read",
    "concepts": [
      "identity",
      "long-term-thinking",
      "systems-thinking"
    ],
    "topics": [],
    "ideas": [
      "Hurry as a Spiritual Problem",
      "Sabbath as Resistance",
      "Silence and Solitude",
      "Simplicity",
      "Formation Requires Pace"
    ],
    "rating": 5,
    "chapters": [],
    "title": "The Ruthless Elimination of Hurry",
    "author": "John Mark Comer",
    "year": 2019,
    "quote": "Hurry is the great enemy of spiritual life in our day.",
    "summary": "Comer argues that the pace of modern life — chronic busyness, digital distraction, the tyranny of the urgent — is incompatible with a deep, meaningful existence. Drawing on ancient spiritual practices, he makes the case for intentional slowness, sabbath, silence, and simplicity as acts of resistance and formation."
  },
  {
    "id": "ceo-excellence",
    "title": "CEO Excellence",
    "author": "Scott Keller & Vikram Malhotra",
    "year": 2022,
    "rating": 4,
    "status": "want-to-read",
    "quote": "The best CEOs don't do things differently — they do different things.",
    "summary": "McKinsey researchers interviewed 67 of the world's top-performing CEOs to identify what distinguishes excellent from merely good leadership at the top. Six key mindsets emerge: direction-setting, organization alignment, team mobilization, board engagement, stakeholder connection, and personal effectiveness. Each has a higher and lower road.",
    "ideas": [
      "Direction Setting at Scale",
      "Bold Vision vs Sandbagging",
      "Organization Design as Strategy",
      "Board as Asset Not Obstacle",
      "Operating Cadence",
      "Managing Energy Not Time"
    ],
    "concepts": [
      "long-term-thinking",
      "ownership",
      "systems-thinking",
      "leverage"
    ],
    "chapters": [],
    "topics": []
  },
  {
    "id": "basic-economics",
    "title": "Basic Economics",
    "author": "Thomas Sowell",
    "year": 2000,
    "rating": 5,
    "status": "want-to-read",
    "quote": "The first lesson of economics is scarcity. The first lesson of politics is to disregard the first lesson of economics.",
    "summary": "Sowell's masterwork explains economic principles without equations or jargon — supply and demand, price signals, incentives, trade-offs, and the law of unintended consequences. His central argument: economic decisions should be judged by their actual results, not their intentions. Resources are allocated by prices, not good intentions.",
    "ideas": [
      "Price Signals",
      "Incentives Change Behavior",
      "Trade-offs Are Unavoidable",
      "Unintended Consequences",
      "Scarcity as the Foundation",
      "Comparative Advantage"
    ],
    "concepts": [
      "risk-asymmetry",
      "systems-thinking",
      "capital-allocation"
    ],
    "chapters": [],
    "topics": []
  },
  {
    "id": "why-we-sleep",
    "status": "read",
    "concepts": [
      "compounding",
      "systems-thinking",
      "long-term-thinking"
    ],
    "topics": [],
    "ideas": [
      "REM vs Deep Sleep Functions",
      "Sleep Deprivation Compounds",
      "Memory Consolidation During Sleep",
      "Emotional Regulation and Sleep",
      "Caffeine Half-Life",
      "The Lie of Catching Up on Sleep"
    ],
    "rating": 5,
    "chapters": [],
    "title": "Why We Sleep",
    "author": "Matthew Walker",
    "year": 2017,
    "quote": "Sleep is the single most effective thing you can do to reset your brain and body health each day.",
    "summary": "Neuroscientist Matthew Walker presents the science of sleep — what it does, what happens when we deprive ourselves of it, and why the modern world's relationship with sleep is a public health catastrophe. The research is unambiguous: consistently sleeping less than seven hours is correlated with nearly every major disease and dramatically impairs cognitive performance."
  },
  {
    "id": "million-dollar-weekend",
    "status": "read",
    "concepts": [
      "risk-asymmetry",
      "leverage",
      "systems-thinking",
      "ownership"
    ],
    "topics": [],
    "ideas": [
      "Validate Before Building",
      "The Coffee Challenge",
      "Ask for the Sale",
      "Freedom Number",
      "Customer-First Entrepreneurship",
      "The 48-Hour Launch"
    ],
    "rating": 4,
    "chapters": [],
    "title": "Million Dollar Weekend",
    "author": "Noah Kagan",
    "year": 2024,
    "quote": "The biggest barrier to starting is the stories we tell ourselves about why we can't.",
    "summary": "AppSumo founder Noah Kagan's playbook for validating a business idea in 48 hours before investing serious time or money. The core methodology: identify a customer, make an offer, collect money — in that order. Most entrepreneurs build before they validate. Kagan argues you can and should validate in a weekend."
  },
  {
    "id": "first-90-days",
    "status": "read",
    "concepts": [
      "systems-thinking",
      "long-term-thinking",
      "leverage"
    ],
    "topics": [],
    "ideas": [
      "Breakeven Point",
      "Early Wins Build Credibility",
      "Diagnose Before Prescribing",
      "Secure Early Wins",
      "Build Your Team",
      "Match Strategy to Situation Type"
    ],
    "rating": 5,
    "chapters": [],
    "title": "The First 90 Days",
    "author": "Michael Watkins",
    "year": 2003,
    "quote": "The actions you take in your first 90 days will largely determine whether you succeed or fail.",
    "summary": "The definitive guide to navigating role transitions — new job, promotion, or new assignment. Watkins argues that the first 90 days are disproportionately important because patterns are set, alliances are formed, and credibility is established before you've had time to make results. The goal: reach the breakeven point (where you're contributing more than consuming) as fast as possible."
  },
  {
    "id": "grit",
    "title": "Grit",
    "author": "Angela Duckworth",
    "year": 2016,
    "rating": 5,
    "status": "want-to-read",
    "quote": "Enthusiasm is common. Endurance is rare.",
    "summary": "Psychologist Angela Duckworth presents her research on what predicts success: not talent, not IQ, but grit — the combination of passion and perseverance for long-term goals. Talent multiplied by effort equals skill; skill multiplied by effort equals achievement. Effort counts twice, talent once.",
    "ideas": [
      "Talent vs Effort Formula",
      "Passion as Direction",
      "Perseverance as Engine",
      "Growth Mindset Foundation",
      "Hard Thing Rule",
      "Grit Is Learnable"
    ],
    "concepts": [
      "compounding",
      "long-term-thinking",
      "identity"
    ],
    "chapters": [],
    "topics": []
  },
  {
    "id": "forging-mettle",
    "title": "Forging Mettle",
    "author": "Brad Buren Jr.",
    "year": 2022,
    "rating": 4,
    "status": "want-to-read",
    "quote": "Character is not what you claim. It is what pressure reveals.",
    "summary": "A framework for developing the character and resilience required for elite performance and leadership. Buren argues that mettle — the combination of courage, character, and competence under pressure — is forged through deliberate exposure to difficulty, not through comfort or theory. You become what you repeatedly do under fire.",
    "ideas": [
      "Mettle as Forged Not Given",
      "Pressure Reveals Character",
      "Deliberate Discomfort",
      "Courage as a Skill",
      "Leadership Under Fire"
    ],
    "concepts": [
      "compounding",
      "long-term-thinking",
      "identity"
    ],
    "chapters": [],
    "topics": []
  },
  {
    "id": "meditations",
    "title": "Meditations",
    "author": "Marcus Aurelius",
    "year": 180,
    "rating": 5,
    "status": "want-to-read",
    "quote": "You have power over your mind, not outside events. Realize this, and you will find strength.",
    "summary": "The private journal of a Roman emperor — never intended for publication. Marcus Aurelius wrote to himself to maintain his Stoic practice: focus on what you control, accept what you don't, act virtuously regardless of outcome, and remember your mortality. The most powerful leadership philosophy ever written, and the author was arguably the most powerful person alive when he wrote it.",
    "ideas": [
      "Control What You Control",
      "Memento Mori",
      "Virtue as the Highest Good",
      "The Present Moment",
      "Amor Fati",
      "The View from Above"
    ],
    "concepts": [
      "long-term-thinking",
      "identity",
      "systems-thinking"
    ],
    "chapters": [],
    "topics": []
  },
  {
    "id": "emotional-intelligence",
    "title": "Emotional Intelligence",
    "author": "Daniel Goleman",
    "year": 1995,
    "rating": 4,
    "status": "want-to-read",
    "quote": "If your emotional abilities aren't in hand, if you don't have self-awareness, if you are not able to manage your distressing emotions, if you can't have empathy and have effective relationships, then no matter how smart you are you are not going to get very far.",
    "summary": "Goleman introduced EQ to mainstream consciousness: the ability to recognize, understand, and manage emotions — in yourself and others — predicts success more than IQ in most domains. The five components: self-awareness, self-regulation, motivation, empathy, and social skills. EQ is not fixed; it can be developed.",
    "ideas": [
      "Self-Awareness as Foundation",
      "Self-Regulation Under Pressure",
      "Empathy as Intelligence",
      "The Amygdala Hijack",
      "EQ Is Developable",
      "Social Skills as Competence"
    ],
    "concepts": [
      "identity",
      "systems-thinking",
      "leverage"
    ],
    "chapters": [],
    "topics": []
  },
  {
    "id": "crucial-conversations",
    "status": "read",
    "concepts": [
      "systems-thinking",
      "identity",
      "leverage"
    ],
    "topics": [],
    "ideas": [
      "Start with Heart",
      "Creating Safety",
      "The Pool of Shared Meaning",
      "STATE Your Path",
      "Explore Others' Paths",
      "Move to Action"
    ],
    "rating": 5,
    "chapters": [],
    "title": "Crucial Conversations",
    "author": "Patterson, Grenny, McMillan & Switzler",
    "year": 2002,
    "quote": "The single biggest problem in communication is the illusion that it has taken place.",
    "summary": "A framework for handling high-stakes conversations where emotions run high, opinions differ, and the stakes matter. The core insight: most people either avoid crucial conversations or handle them poorly. The skills — creating safety, stating your path, exploring others' paths — can be learned and dramatically change outcomes in relationships, teams, and organizations."
  },
  {
    "id": "very-good-copy",
    "status": "read",
    "concepts": [
      "leverage",
      "systems-thinking"
    ],
    "topics": [],
    "ideas": [
      "Write for One Person",
      "Lead with the Problem",
      "Specificity Over Generality",
      "The Job of Every Line",
      "Voice and Distinctiveness",
      "Edit to the Bone"
    ],
    "rating": 4,
    "chapters": [],
    "title": "Very Good Copy",
    "author": "Eddie Shleyner",
    "year": 2023,
    "quote": "Copy is salesmanship in print.",
    "summary": "A practitioner's guide to writing copy that moves people to action. Shleyner distills his experience into principles: write for one person, lead with the problem, use specificity over generality, and treat every word as earning its place. Good copy is invisible — the reader doesn't notice it, they just act."
  },
  {
    "id": "billion-dollar-brand-club",
    "title": "Billion Dollar Brand Club",
    "author": "Lawrence Ingrassia",
    "year": 2020,
    "rating": 4,
    "status": "want-to-read",
    "quote": "The internet didn't just change how we shop. It changed who can build a brand.",
    "summary": "The story of how direct-to-consumer brands — Warby Parker, Dollar Shave Club, Casper, Away — disrupted legacy industries by going direct to customers, cutting out the middleman, and using digital channels as leverage. The pattern: identify an industry where the incumbent is lazy, use the internet to undercut on price and experience, build a brand that feels personal.",
    "ideas": [
      "Direct to Consumer Model",
      "Cut Out the Middleman",
      "Brand as Relationship",
      "Digital as Leverage",
      "Category Disruption Pattern",
      "Unit Economics First"
    ],
    "concepts": [
      "ownership",
      "risk-asymmetry",
      "leverage",
      "capital-allocation"
    ],
    "chapters": [],
    "topics": []
  },
  {
    "id": "life-youve-always-wanted",
    "status": "read",
    "concepts": [
      "identity",
      "long-term-thinking",
      "compounding"
    ],
    "topics": [],
    "ideas": [
      "Training vs Trying",
      "Spiritual Disciplines as Training",
      "Soul Renovation",
      "Ruthless Elimination of Hurry",
      "Practicing the Presence",
      "Community as Formation Context"
    ],
    "rating": 4,
    "chapters": [],
    "title": "The Life You've Always Wanted",
    "author": "John Ortberg",
    "year": 2002,
    "quote": "Spiritual transformation is not about trying harder. It is about training smarter.",
    "summary": "Ortberg applies the same logic athletes use for physical training to spiritual formation. You don't try your way to transformation — you train for it through spiritual disciplines: silence, solitude, confession, service, celebration. The goal is not behavior modification but the renovation of the heart."
  },
  {
    "id": "graphic-design-everyone",
    "status": "read",
    "concepts": [
      "systems-thinking",
      "leverage"
    ],
    "topics": [],
    "ideas": [
      "Visual Hierarchy",
      "Typography as Voice",
      "Color Psychology",
      "White Space as Tool",
      "Grid Systems",
      "Design Is Communication"
    ],
    "rating": 3,
    "chapters": [],
    "title": "Graphic Design for Everyone",
    "author": "Cath Caldwell",
    "year": 2019,
    "quote": "Design is not decoration. Design is communication.",
    "summary": "An accessible introduction to graphic design principles for non-designers: typography, color theory, layout, hierarchy, and visual communication. The central argument is that design literacy — understanding why things look the way they do — makes you a better communicator in any medium, not just visual ones."
  },
  {
    "id": "how-to-win-friends",
    "title": "How to Win Friends and Influence People",
    "author": "Dale Carnegie",
    "year": 1936,
    "rating": 5,
    "status": "read",
    "quote": "The person who has technical knowledge plus the ability to express ideas, to assume leadership and to arouse enthusiasm among people - that person is headed for higher earning power.",
    "summary": "The original relationship handbook — still the best. Carnegie's principles are simple and counter-intuitive: don't criticize, condemn, or complain; give honest appreciation; arouse in others an eager want. The book's durability comes from the fact that human nature hasn't changed. People want to feel important and understood, and whoever provides that wins.",
    "ideas": [
      "Genuine Interest in Others",
      "The Only Way to Win an Argument",
      "Remember Names",
      "See From Their Perspective",
      "Let Others Feel the Idea Is Theirs",
      "Sincere Appreciation"
    ],
    "concepts": [
      "long-term-thinking",
      "ownership",
      "identity",
      "leverage"
    ],
    "chapters": [
      {
        "title": "Essentials of Enagement",
        "ideas": "Don't communicate until you are calm and in control of your emotions. \n\nAffirm the good in every interaction. \n\nUltimately, gaining influence is about setting yourself apart, stepping to a higher plane in the mind and heart of another. \n\nDialogue is considerate, authentic, transparent, secure, interested in meeting needs, and builds trust. \n\nTo influence others to act, you must first connect to a core desire within them. ",
        "notes": ""
      },
      {
        "title": "Six Ways to Make a Lasting Impression",
        "ideas": "Take interest in others' interests and you will be set apart. \n\nSmile when you speak to people. \n\nLearn names with the Napolean technique. \n\nThe power of listening is the power to change hearts and minds. \n\nWhen it comes to mattering others, you must dicuss what matters to them. \n\nLeave everyone you speak to better than you found them ",
        "notes": ""
      },
      {
        "title": "How to Merit and Maintain Others' Trust",
        "ideas": "Arguing with another person will rarely get you anywhere; they usually end with each person more firmly convinced of his rightness. \n\n\"Always default to diplomacy. Admit that you may be wrong. Concede that the other person may be right. Be agreeable. Ask questions. And above all, consider the situation from the other's persepctive and show that person respect.\" \n\n\"Friendliness begets friendliness. We are more inclined to agree with another person or see things from his persepective when we have friendly feelings toward him.\" \n\n\"It is the unconventional mind that understands success isn't about attention or accolades. It's about partnerships and progress.\" \n\n\"We would all grow in stature and confidence if we could learn how to celebrate the most common thread in everyone.\" \n\n\"To truly connect with people you must celebrate their inherent dignity. In doing so you celebrate yours. Appeal to noble motives and you can move the masses, and yourself along with them.\" \n\n\"Share your stories, and others will be willing to share theirs. Together you will create a new and larger story.\"\n\n\"When a victory is defined as a team victory - for a cause, a country, a cure, or a company - winning is all the more compelling, becuase the competition forces us to communicate and connect on an area of affinity.\" ",
        "notes": ""
      },
      {
        "title": "How to Lead Change without Resistance or Resentment",
        "ideas": "\"Instead, begin a conversation with honest and genuine appreciation; the reciever will be more amenable to your ideas and less defensive or resistant.\" \n\n\"When you acknowledge your baggage, trust builds naturally.\" \n\n\"It is to your advantage to pull people out of their dejected state as quickly as possible. Do so by calling out their mistakes quietly and returning them to a place of confidence and strength.\" \n\n\"Questions allow you to create a conversation - in any medium - that can lead to a beter place for all involved.\" \n\n\"Tell someone that you have total faith in his ability to accomplish a goal and encourage him by highlighting all of the skills he possesses that will help him along the way, and he will practice until the dawn in the window in order to excel.\" \n\n\"To change somebody's behavior, change the level of respect she recieves by giving her a fine reputation to live up to. Act as though the trait you are trying to influence is already one of the person's outstanding characteristics.\"\n\n\"It is true that the world is open for business, but your first task remains the business of humanity.\"",
        "notes": ""
      }
    ],
    "topics": []
  },
  {
    "id": "build-fadell",
    "status": "read",
    "concepts": [
      "systems-thinking",
      "ownership",
      "leverage"
    ],
    "topics": [],
    "ideas": [
      "Customer Pain as Product Foundation",
      "Tell a Story Not a Spec",
      "Hire for Attitude",
      "Make the Intangible Tangible",
      "The Butterflies in Your Stomach Test",
      "Culture Is Built in the Details"
    ],
    "rating": 5,
    "chapters": [],
    "title": "Build",
    "author": "Tony Fadell",
    "year": 2022,
    "quote": "The best products solve problems people didn't know they had.",
    "summary": "The inventor of the iPod and Nest shares his playbook for building products and companies. Fadell's core argument: most people focus on the product, but the real work is building the team, culture, and conditions for great products to emerge. Product intuition comes from obsessive attention to customer pain — not market research."
  },
  {
    "id": "lean-startup",
    "status": "read",
    "concepts": [
      "systems-thinking",
      "risk-asymmetry",
      "long-term-thinking"
    ],
    "topics": [],
    "ideas": [
      "Build-Measure-Learn",
      "Minimum Viable Product",
      "Validated Learning",
      "Pivot or Persevere",
      "Vanity vs Actionable Metrics",
      "Innovation Accounting"
    ],
    "rating": 4,
    "chapters": [],
    "title": "The Lean Startup",
    "author": "Eric Ries",
    "year": 2011,
    "quote": "The only way to win is to learn faster than anyone else.",
    "summary": "Ries argues that most startups fail not because they can't build the product, but because they build the wrong product. The antidote: build-measure-learn cycles that validate assumptions before committing resources. The minimum viable product is not the smallest product — it is the smallest experiment that produces the most learning."
  },
  {
    "id": "outliers",
    "title": "Outliers",
    "author": "Malcolm Gladwell",
    "year": 2008,
    "rating": 4,
    "status": "want-to-read",
    "quote": "Practice isn't the thing you do once you're good. It's the thing you do that makes you good.",
    "summary": "Gladwell examines exceptional success and finds that individual talent explains far less than we think. What actually produces outliers: the 10,000-hour rule, birth month effects, cultural legacies, and the extraordinary importance of opportunity. Success is more sociological than psychological — it's about systems, timing, and access as much as effort.",
    "ideas": [
      "The 10,000-Hour Rule",
      "Meaningful Work",
      "Accumulative Advantage",
      "Cultural Legacy",
      "The Matthew Effect",
      "Timing and Opportunity"
    ],
    "concepts": [
      "compounding",
      "long-term-thinking",
      "systems-thinking"
    ],
    "chapters": [],
    "topics": []
  },
  {
    "id": "design-everyday-things",
    "status": "read",
    "concepts": [
      "systems-thinking",
      "identity"
    ],
    "topics": [],
    "ideas": [
      "Affordances and Signifiers",
      "The User Is Never Wrong",
      "Feedback Loops in Design",
      "Constraints as Guidance",
      "Human Error Is Usually Design Error",
      "Mental Models in UX"
    ],
    "rating": 4,
    "chapters": [],
    "title": "The Design of Everyday Things",
    "author": "Don Norman",
    "year": 1988,
    "quote": "It's not the user's fault. It's the designer's fault.",
    "summary": "The foundational text of user-centered design. Norman argues that most design failures are not user errors but design errors — when something is confusing or hard to use, blame the designer, not the user. Affordances, signifiers, feedback, constraints, and mappings are the vocabulary of good design. This book changed how every product designer thinks."
  },
  {
    "id": "personal-mba",
    "status": "read",
    "concepts": [
      "systems-thinking",
      "capital-allocation",
      "ownership",
      "cashflow"
    ],
    "topics": [],
    "ideas": [
      "Five Core Business Processes",
      "Value Creation First",
      "Marketing vs Sales",
      "The Iron Law of the Market",
      "Systems Create Businesses",
      "Sufficiency Over Maximization"
    ],
    "rating": 4,
    "chapters": [],
    "title": "The Personal MBA",
    "author": "Josh Kaufman",
    "year": 2010,
    "quote": "Every successful business creates or provides something of value that other people want or need.",
    "summary": "Kaufman argues you can learn everything a business school teaches — and more practically — by reading the right books and building things. His framework covers five core business processes: value creation, marketing, sales, value delivery, and finance. Understanding all five and how they interconnect is the MBA."
  },
  {
    "id": "leadership-challenge",
    "title": "The Leadership Challenge",
    "author": "James Kouzes & Barry Posner",
    "year": 1987,
    "rating": 4,
    "status": "want-to-read",
    "quote": "Leadership is not about personality. It's about behavior.",
    "summary": "Based on 30+ years of research on peak leadership moments, Kouzes and Posner identify five practices of exemplary leadership: model the way, inspire a shared vision, challenge the process, enable others to act, and encourage the heart. Leadership is not a position — it is a set of practices available to anyone willing to develop them.",
    "ideas": [
      "Model the Way",
      "Inspire a Shared Vision",
      "Challenge the Process",
      "Enable Others to Act",
      "Encourage the Heart",
      "Leadership Is a Choice"
    ],
    "concepts": [
      "identity",
      "systems-thinking",
      "leverage"
    ],
    "chapters": [],
    "topics": []
  },
  {
    "id": "crossing-chasm",
    "status": "read",
    "concepts": [
      "risk-asymmetry",
      "leverage",
      "long-term-thinking"
    ],
    "topics": [],
    "ideas": [
      "Technology Adoption Lifecycle",
      "The Chasm",
      "Beachhead Strategy",
      "Whole Product Concept",
      "Early Adopters vs Early Majority",
      "Concentrate Force"
    ],
    "rating": 4,
    "chapters": [],
    "title": "Crossing the Chasm",
    "author": "Geoffrey Moore",
    "year": 1991,
    "quote": "The chasm is the perilous journey from early market success to mainstream market penetration.",
    "summary": "Moore's technology adoption lifecycle model identifies the gap between early adopters (who accept imperfect products for cutting-edge capabilities) and the early majority (who need proven solutions). Most technology companies die in this chasm. The solution: concentrate all resources on one beachhead market and win it completely before expanding."
  },
  {
    "id": "innovators-dilemma",
    "title": "The Innovator's Dilemma",
    "author": "Clayton Christensen",
    "year": 1997,
    "rating": 5,
    "status": "want-to-read",
    "quote": "Disruptive technologies typically enable new markets to emerge.",
    "summary": "Christensen's landmark work explains why great companies fail: they are killed by doing everything right. Sustaining innovation — improving products for existing customers — leaves companies vulnerable to disruptive innovations that initially look worse by traditional metrics but serve new markets before improving rapidly. The innovator's dilemma: serving current customers well makes you blind to the next wave.",
    "ideas": [
      "Sustaining vs Disruptive Innovation",
      "The Innovator's Dilemma",
      "Jobs to Be Done",
      "Disruption from Below",
      "Asymmetric Motivation",
      "Spin-Out for New Markets"
    ],
    "concepts": [
      "long-term-thinking",
      "ownership",
      "risk-asymmetry",
      "systems-thinking"
    ],
    "chapters": [],
    "topics": []
  },
  {
    "id": "managing-up",
    "title": "Managing Up",
    "author": "Melody Wilding",
    "year": 2023,
    "rating": 4,
    "status": "want-to-read",
    "quote": "Managing up is not about managing your boss. It's about managing the relationship.",
    "summary": "Wilding's framework for building productive relationships with managers and senior leadership — understanding their priorities, communication styles, and pressures, then positioning yourself as a solution rather than a problem. The core insight: your manager has their own manager. Understanding that chain makes you dramatically more effective.",
    "ideas": [
      "Understand Your Manager's Pressures",
      "Make Their Priorities Your Priorities",
      "Communicate in Their Style",
      "Deliver Before Being Asked",
      "Build a Reputation Not Just Results",
      "Navigate Office Politics Cleanly"
    ],
    "concepts": [
      "long-term-thinking",
      "systems-thinking",
      "leverage"
    ],
    "chapters": [],
    "topics": []
  },
  {
    "id": "financial-literacy-managers",
    "title": "Financial Literacy for Managers",
    "author": "Richard Lambert",
    "year": 2011,
    "rating": 4,
    "status": "want-to-read",
    "quote": "Every business decision is a financial decision.",
    "summary": "A Wharton professor's concise guide to financial literacy for non-finance managers. The core argument: you don't need to be an accountant to make good financial decisions, but you do need to understand what the numbers are measuring and why they matter. Covers the income statement, balance sheet, cash flow statement, and how they connect.",
    "ideas": [
      "Income Statement Logic",
      "Balance Sheet Relationships",
      "Cash Flow as Reality",
      "ROI Thinking",
      "Margin Analysis",
      "Working Capital Cycles"
    ],
    "concepts": [
      "cashflow",
      "systems-thinking",
      "capital-allocation"
    ],
    "chapters": [],
    "topics": []
  },
  {
    "id": "21-laws-leadership",
    "title": "The 21 Irrefutable Laws of Leadership",
    "author": "John C. Maxwell",
    "year": 1998,
    "rating": 4,
    "status": "reading",
    "quote": "Everything rises and falls on leadership.",
    "summary": "Maxwell's most influential work — 21 principles of leadership drawn from decades of study and practice. His central thesis: leadership is influence, nothing more, nothing less. The laws include the Law of the Lid (leadership ability determines the ceiling on effectiveness), the Law of Process (leadership develops daily), and the Law of Connection (leaders touch hearts before they ask for hands).",
    "ideas": [
      "Leadership Is Influence",
      "The Law of the Lid",
      "The Law of Process",
      "Leadership Develops Daily",
      "Connect Before You Direct",
      "The Law of Addition"
    ],
    "concepts": [
      "compounding",
      "identity",
      "systems-thinking",
      "leverage"
    ],
    "chapters": [],
    "topics": []
  },
  {
    "id": "made-to-stick",
    "status": "read",
    "concepts": [
      "leverage",
      "systems-thinking"
    ],
    "topics": [],
    "ideas": [
      "The SUCCESs Framework",
      "The Curse of Knowledge",
      "Simple Core Message",
      "Unexpected Creates Curiosity",
      "Concrete Beats Abstract",
      "Stories Drive Action"
    ],
    "rating": 5,
    "chapters": [],
    "title": "Made to Stick",
    "author": "Chip Heath & Dan Heath",
    "year": 2007,
    "quote": "The curse of knowledge: once you know something, it's hard to imagine not knowing it.",
    "summary": "The Heath brothers analyze why some ideas survive and others die. Their framework: sticky ideas are Simple, Unexpected, Concrete, Credible, Emotional, and tell Stories (SUCCESs). The book's deepest insight is the curse of knowledge — the more you know about something, the harder it is to communicate it to those who don't."
  },
  {
    "id": "buying-small-business",
    "title": "Buying a Small Business",
    "author": "Richard Ruback & Royce Yudkoff",
    "year": 2017,
    "rating": 5,
    "status": "reading",
    "quote": "Buying a small business is a highly personal decision that requires honest self-assessment.",
    "summary": "Two Harvard Business School professors make the academic case for search fund entrepreneurship — buying a small business rather than starting one. The book covers the full search fund process: the decision to search, sourcing deals, due diligence, deal structure, financing, and post-acquisition management. It is the most rigorous framework for small business acquisition available.",
    "ideas": [
      "The Search Fund Process",
      "Self-Assessment First",
      "Deal Sourcing Strategy",
      "Due Diligence Framework",
      "Deal Structure and Financing",
      "Post-Acquisition 100 Days"
    ],
    "concepts": [
      "long-term-thinking",
      "ownership",
      "cashflow",
      "risk-asymmetry",
      "capital-allocation"
    ],
    "chapters": [],
    "topics": []
  },
  {
    "id": "on-writing-well",
    "status": "read",
    "concepts": [
      "leverage",
      "systems-thinking"
    ],
    "topics": [],
    "ideas": [
      "Clutter Is the Enemy",
      "Strip to the Essentials",
      "Write to Express Not Impress",
      "Every Word Earns Its Place",
      "Voice Is Humanity on the Page",
      "Rewriting Is Writing"
    ],
    "rating": 5,
    "chapters": [],
    "title": "On Writing Well",
    "author": "William Zinsser",
    "year": 1976,
    "quote": "The secret of good writing is to strip every sentence to its cleanest components.",
    "summary": "The classic guide to nonfiction writing. Zinsser's principles are ruthless and timeless: simplicity, clarity, brevity, and humanity. Clutter is the enemy. Every word must earn its place. The writer's job is not to impress but to communicate, and the highest compliment a reader can pay is to keep reading."
  },
  {
    "id": "clear-thinking",
    "title": "Clear Thinking",
    "author": "Shane Parrish",
    "year": 2023,
    "rating": 5,
    "status": "read",
    "quote": "The quality of your thinking depends on the quality of your defaults",
    "summary": "Parrish’s central argument is that most of our decisions aren’t really decisions at all — they’re automated responses driven by biological and social defaults (the emotion default, the ego default, the social default, the inertia default). The book’s core insight is that you can’t out-think bad defaults in the moment; you have to build systems and habits in advance so that when the pressure is on, your baseline behavior already points toward good outcomes.",
    "ideas": [],
    "concepts": [
      "long-term-thinking",
      "risk-asymmetry",
      "systems-thinking"
    ],
    "chapters": [
      {
        "title": "The Enemies of Clear Thinking",
        "ideas": "Emotion Default - react based on feelings\n\nEgo Default - protect self-image over truth\n\nSocial Default - conform to the group\n\nInertia Default - continue the status quo ",
        "notes": ""
      },
      {
        "title": "Building Strength",
        "ideas": "Self-accountability — own outcomes without excuses\n\nSelf-knowledge — know your triggers and blind spots\n\nSelf-control — create space between stimulus and response\n\nSelf-confidence — act on your own judgment",
        "notes": ""
      },
      {
        "title": "Managing Weaknesses",
        "ideas": "Focuses on safeguards, rules, and environment design to protect you when your defaults fire anyway",
        "notes": ""
      },
      {
        "title": "The Decision Process",
        "ideas": "Parrish’s five-step model: Define the problem → Explore options → Evaluate options → Make the decision → Act and learn\n\nThe framework: most bad decisions happen at step one (wrong problem definition)",
        "notes": ""
      },
      {
        "title": "Wanting What Matters",
        "ideas": "The “so what” chapter — clear thinking is useless if aimed at the wrong goals\nThe through-line is that wisdom isn’t intelligence, it’s positioning — getting yourself into situations where good judgment is easy rather than heroic.​​​​​​​​​​​​​​​​",
        "notes": ""
      }
    ],
    "topics": []
  }
];

const CONCEPTS=[
  {
    "id": "compounding",
    "label": "Compounding",
    "quote": "The most powerful force in the universe.",
    "summary": "The process by which something grows exponentially because each period's growth builds on all prior growth.",
    "books": [
      "psych-money",
      "atomic-habits",
      "naval",
      "main-street",
      "good-to-great",
      "grit",
      "forging-mettle",
      "outliers",
      "21-laws-leadership"
    ],
    "unifiedPrinciple": "Choose a direction, make consistent deposits, don't interrupt the accumulation, wait."
  },
  {
    "id": "long-term-thinking",
    "label": "Long-Term Thinking",
    "quote": "Play long-term games with long-term people. — Naval",
    "summary": "The cognitive discipline of making decisions for outcomes years or decades away.",
    "books": [
      "psych-money",
      "naval",
      "buy-build",
      "atomic-habits",
      "good-to-great",
      "great-mental-models-1",
      "great-mental-models-2",
      "great-mental-models-3",
      "ceo-excellence",
      "grit",
      "forging-mettle",
      "meditations",
      "outliers",
      "innovators-dilemma",
      "managing-up",
      "buying-small-business",
      "clear-thinking",
      "how-to-win-friends"
    ],
    "unifiedPrinciple": "The longer your time horizon, the fewer competitors you have."
  },
  {
    "id": "ownership",
    "label": "Ownership",
    "quote": "You're not going to get rich renting out your time. — Naval",
    "summary": "Wealth requires owning things — equity, businesses, assets — not just exchanging time for money.",
    "books": [
      "buy-build",
      "main-street",
      "naval",
      "e-myth",
      "zero-to-one",
      "drucker-leadership",
      "ceo-excellence",
      "billion-dollar-brand-club",
      "innovators-dilemma",
      "buying-small-business",
      "how-to-win-friends"
    ],
    "unifiedPrinciple": "The path from income to wealth runs through ownership."
  },
  {
    "id": "cashflow",
    "label": "Cashflow",
    "quote": "Profit is an opinion. Cash is a fact.",
    "summary": "The actual movement of money — distinct from profit and revenue.",
    "books": [
      "main-street",
      "buy-build",
      "financial-intelligence",
      "financial-literacy-managers",
      "buying-small-business"
    ],
    "unifiedPrinciple": "Not 'what does this earn?' but 'what cash does this generate, when, and how reliably?'"
  },
  {
    "id": "risk-asymmetry",
    "label": "Risk & Asymmetry",
    "quote": "Risk is what's left over when you think you've thought of everything.",
    "summary": "Asymmetric risk: potential gain substantially exceeds potential loss.",
    "books": [
      "psych-money",
      "buy-build",
      "main-street",
      "zero-to-one",
      "never-split",
      "financial-intelligence",
      "e-myth",
      "great-mental-models-1",
      "great-mental-models-3",
      "great-mental-models-4",
      "basic-economics",
      "billion-dollar-brand-club",
      "innovators-dilemma",
      "buying-small-business",
      "clear-thinking"
    ],
    "unifiedPrinciple": "Ensure downside survival, position for asymmetric upside."
  },
  {
    "id": "identity",
    "label": "Identity",
    "quote": "Every action you take is a vote for the type of person you wish to become.",
    "summary": "The set of beliefs you hold about who you are. The deepest driver of sustained change.",
    "books": [
      "atomic-habits",
      "psych-money",
      "naval",
      "great-mental-models-4",
      "grit",
      "forging-mettle",
      "meditations",
      "emotional-intelligence",
      "leadership-challenge",
      "21-laws-leadership",
      "how-to-win-friends"
    ],
    "unifiedPrinciple": "Identity → Habits → Outcomes. Not: Outcomes → Habits → Identity."
  },
  {
    "id": "systems-thinking",
    "label": "Systems Thinking",
    "quote": "You fall to the level of your systems.",
    "summary": "A system is a set of interconnected components that produce outcomes through their interaction.",
    "books": [
      "atomic-habits",
      "psych-money",
      "financial-intelligence",
      "main-street",
      "e-myth",
      "good-to-great",
      "great-mental-models-1",
      "great-mental-models-2",
      "great-mental-models-3",
      "great-mental-models-4",
      "drucker-leadership",
      "ceo-excellence",
      "basic-economics",
      "meditations",
      "emotional-intelligence",
      "outliers",
      "leadership-challenge",
      "innovators-dilemma",
      "managing-up",
      "financial-literacy-managers",
      "21-laws-leadership",
      "clear-thinking"
    ],
    "unifiedPrinciple": "Build a system that generates desired outcomes without ongoing willpower."
  },
  {
    "id": "leverage",
    "label": "Leverage",
    "quote": "Give me a lever long enough and I shall move the world.",
    "summary": "Any mechanism that multiplies the output of effort.",
    "books": [
      "naval",
      "buy-build",
      "main-street",
      "zero-to-one",
      "e-myth",
      "great-mental-models-2",
      "drucker-leadership",
      "ceo-excellence",
      "emotional-intelligence",
      "billion-dollar-brand-club",
      "leadership-challenge",
      "managing-up",
      "21-laws-leadership",
      "how-to-win-friends"
    ],
    "unifiedPrinciple": "Specific knowledge × leverage = wealth at scale."
  },
  {
    "id": "wealth-income",
    "label": "Wealth vs. Income",
    "quote": "Wealth is what you don't see. — Morgan Housel",
    "summary": "Income is a flow. Wealth is a stock. The connecting variable is conversion rate.",
    "books": [
      "psych-money",
      "naval",
      "main-street"
    ],
    "unifiedPrinciple": "Wealth is built by converting income into assets before spending it."
  },
  {
    "id": "capital-allocation",
    "label": "Capital Allocation",
    "quote": "The most important decision is what to do with your money.",
    "summary": "The decision of where to deploy finite financial resources. Every dollar has an opportunity cost.",
    "books": [
      "buy-build",
      "main-street",
      "financial-intelligence",
      "basic-economics",
      "billion-dollar-brand-club",
      "financial-literacy-managers",
      "buying-small-business"
    ],
    "unifiedPrinciple": "Capital allocation determines whether the same income produces dramatically different wealth."
  }
];

const TOPICS=[
  {id:"personal-finance",label:"Personal Finance",books:[]},
  {id:"business-acquisition",label:"Business Acquisition",books:[]},
  {id:"wealth-building",label:"Wealth Building",books:[]},
  {id:"habit-formation",label:"Habit Formation",books:[]},
  {id:"entrepreneurship",label:"Entrepreneurship",books:[]},
  {id:"decision-making",label:"Decision Making",books:[]},
  {id:"leadership",label:"Leadership",books:[]},
  {id:"philosophy",label:"Philosophy",books:[]}
];

function buildGraphData(){
  const nodes=[],linkSet=new Set(),links=[];
  function addLink(a,b){const k=[a,b].sort().join('--');if(!linkSet.has(k)){linkSet.add(k);links.push({source:a,target:b});}}
  BOOKS.forEach(b=>{
    const lbl=b.title.length>20?b.title.split(/[:—]/)[0].trim().split(' ').slice(0,3).join(' '):b.title;
    nodes.push({id:b.id,type:'book',label:lbl,displayLabel:b.title,author:b.author,year:b.year,rating:b.rating,status:b.status,quote:b.quote,summary:b.summary,ideas:b.ideas,chapters:b.chapters||[],conceptIds:b.concepts});
    (b.concepts||[]).forEach(c=>addLink(b.id,c));
  });
  CONCEPTS.forEach(c=>{
    nodes.push({id:c.id,type:'concept',label:c.label,displayLabel:c.label,quote:c.quote,summary:c.summary,connections:(c.books||[]).map(bid=>BOOKS.find(b=>b.id===bid)?.title).filter(Boolean),unifiedPrinciple:c.unifiedPrinciple});
  });
  return{nodes,links};
}

if(typeof module!=='undefined')module.exports={BOOKS,CONCEPTS,buildGraphData};
