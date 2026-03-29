// ============================================================
//  CAMDEN'S KNOWLEDGE GRAPH — graph-data.js
//  This is the single source of truth for all nodes and links.
//  Edit in the admin panel, then replace this file on your site.
//  Last updated: 2026-03-28
// ============================================================

const GRAPH_VERSION = "1.0.0";

const BOOKS = [
  {
    id: "psych-money",
    type: "book",
    title: "The Psychology of Money",
    author: "Morgan Housel",
    year: 2020,
    rating: 5,
    status: "read",
    cover: "",
    quote: "Doing well with money has little to do with how smart you are and a lot to do with how you behave.",
    summary: "Housel's central argument: money is not a math problem — it is a behavior problem. The gap between knowing what to do and actually doing it is explained entirely by psychology, not intelligence. This reframes every financial decision as a behavioral challenge first.",
    ideas: ["Wealth vs. Being Rich", "The Power of Compounding", "Tail Events Drive Everything", "Reasonable vs. Rational", "Room for Error", "You'll Change"],
    topics: ["Personal Finance", "Wealth Building"],
    concepts: ["compounding", "wealth-income", "risk-asymmetry", "long-term-thinking", "identity", "systems-thinking"]
  },
  {
    id: "buy-build",
    type: "book",
    title: "Buy Then Build",
    author: "Walker Deibel",
    year: 2018,
    rating: 5,
    status: "read",
    cover: "",
    quote: "Acquisition entrepreneurship is entrepreneurship — just with a head start.",
    summary: "Deibel reframes entrepreneurship entirely. Buying an existing business with real cash flow gives you proof of concept, existing customers, and operational infrastructure on day one. This is the intellectual foundation of small business acquisition strategy.",
    ideas: ["Acquisition Entrepreneurship", "SDE as a Valuation Tool", "The Wealth Certainty Spectrum", "Buy vs. Build Risk", "Search Fund Model"],
    topics: ["Business Acquisition", "Entrepreneurship", "Wealth Building"],
    concepts: ["cashflow", "ownership", "risk-asymmetry", "capital-allocation", "long-term-thinking"]
  },
  {
    id: "main-street",
    type: "book",
    title: "Main Street Millionaire",
    author: "Codie Sanchez",
    year: 2024,
    rating: 4,
    status: "read",
    cover: "",
    quote: "The boring business is not a consolation prize. It is the point.",
    summary: "Sanchez popularizes the boring business thesis: unglamorous, cash-flowing Main Street businesses are better acquisition targets than tech-adjacent startups. Where Deibel gives the framework, Sanchez gives the operator's perspective on finding, buying, and scaling these businesses.",
    ideas: ["The Boring Business Thesis", "Cashflow Over Growth", "Seller Financing", "Owner-Dependent Risk"],
    topics: ["Business Acquisition", "Cashflow"],
    concepts: ["cashflow", "ownership", "risk-asymmetry", "capital-allocation", "compounding"]
  },
  {
    id: "financial-intelligence",
    type: "book",
    title: "Financial Intelligence",
    author: "Karen Berman & Joe Knight",
    year: 2006,
    rating: 4,
    status: "read",
    cover: "",
    quote: "Profit is an opinion. Cash is a fact.",
    summary: "Financial statements are not objective truth — they are constructed documents with built-in assumptions. Understanding those assumptions is the difference between a sophisticated acquirer and a naive one. Builds the literacy to read financials with appropriate skepticism.",
    ideas: ["The Art of Finance", "Accrual vs. Cash Accounting", "Working Capital", "Reading a Balance Sheet"],
    topics: ["Personal Finance", "Business Acquisition"],
    concepts: ["cashflow", "capital-allocation", "systems-thinking", "risk-asymmetry"]
  },
  {
    id: "atomic-habits",
    type: "book",
    title: "Atomic Habits",
    author: "James Clear",
    year: 2018,
    rating: 5,
    status: "read",
    cover: "",
    quote: "You do not rise to the level of your goals. You fall to the level of your systems.",
    summary: "Clear's central argument: outcomes are a lagging measure of habits. You don't get to choose your outcomes — you choose your habits, and outcomes follow. The most practically applicable book on behavior change — and the one that makes compounding feel real at the human level.",
    ideas: ["Systems vs. Goals", "Identity-Based Habits", "Habit Stacking", "Environment Design", "The 1% Rule"],
    topics: ["Habit Formation", "Personal Development"],
    concepts: ["compounding", "systems-thinking", "identity", "long-term-thinking"]
  },
  {
    id: "naval",
    type: "book",
    title: "Almanack of Naval Ravikant",
    author: "Naval Ravikant",
    year: 2020,
    rating: 5,
    status: "read",
    cover: "",
    quote: "Wealth is assets that earn while you sleep.",
    summary: "Naval's mental models for wealth creation and happiness — some of the clearest first-principles thinking available. The framework for specific knowledge and leverage is the most useful model for career trajectory. The distinction between wealth (positive-sum) and status (zero-sum) changes how you play the game.",
    ideas: ["Specific Knowledge", "Leverage", "Long-Term Thinking", "Reading is Foundational", "Wealth vs. Status"],
    topics: ["Wealth Building", "Entrepreneurship", "Philosophy"],
    concepts: ["leverage", "wealth-income", "compounding", "long-term-thinking", "ownership", "identity"]
  },
  {
    id: "zero-to-one",
    type: "book",
    title: "Zero to One",
    author: "Peter Thiel",
    year: 2014,
    rating: 4,
    status: "read",
    cover: "",
    quote: "Every moment in business happens only once. The next Bill Gates will not build an operating system. The next Larry Page will not make a search engine.",
    summary: "Thiel argues that true innovation goes from 0 to 1 — creating something genuinely new — rather than from 1 to n (copying what works). The best businesses are monopolies in disguise. Competition is for losers. The most important question: what important truth do very few people agree with you on?",
    ideas: ["0 to 1 vs 1 to n", "Secrets Still Exist", "Competition Is for Losers", "Power Law in Portfolios", "Definite vs. Indefinite Optimism"],
    topics: ["Entrepreneurship", "Strategy"],
    concepts: ["leverage", "long-term-thinking", "risk-asymmetry", "ownership"]
  },
  {
    id: "good-to-great",
    type: "book",
    title: "Good to Great",
    author: "Jim Collins",
    year: 2001,
    rating: 4,
    status: "read",
    cover: "",
    quote: "Good is the enemy of great.",
    summary: "Collins studied companies that made the leap from good to great sustained performance and found a consistent pattern: Level 5 leaders, the right people on the bus, a Hedgehog Concept, a culture of discipline, and the Flywheel. Not flashy, not dramatic — relentlessly consistent execution over time.",
    ideas: ["Level 5 Leadership", "First Who Then What", "The Hedgehog Concept", "Culture of Discipline", "The Flywheel"],
    topics: ["Leadership", "Strategy", "Entrepreneurship"],
    concepts: ["systems-thinking", "long-term-thinking", "compounding", "ownership"]
  },
  {
    id: "never-split-difference",
    type: "book",
    title: "Never Split the Difference",
    author: "Chris Voss",
    year: 2016,
    rating: 5,
    status: "read",
    cover: "",
    quote: "No deal is better than a bad deal.",
    summary: "Former FBI hostage negotiator Chris Voss reveals that all negotiation is emotional, not rational. Tactical empathy, calibrated questions, and the Black Swan — unexpected information that changes everything — are more powerful than logic. Directly applicable to acquisition deal-making, hiring, and any high-stakes conversation.",
    ideas: ["Tactical Empathy", "Mirroring", "Calibrated Questions", "The Black Swan", "Accusation Audit"],
    topics: ["Negotiation", "Communication", "Business Acquisition"],
    concepts: ["risk-asymmetry", "systems-thinking"]
  },
  {
    id: "thinking-fast-slow",
    type: "book",
    title: "Thinking, Fast and Slow",
    author: "Daniel Kahneman",
    year: 2011,
    rating: 5,
    status: "read",
    cover: "",
    quote: "Nothing in life is as important as you think it is, while you are thinking about it.",
    summary: "Kahneman introduces System 1 (fast, intuitive, emotional) and System 2 (slow, deliberate, logical) thinking. The book is a catalog of how System 1 leads us astray — availability bias, anchoring, loss aversion, overconfidence. Understanding these isn't enough to avoid them; but it changes how you design decisions.",
    ideas: ["System 1 vs System 2", "Anchoring", "Loss Aversion", "Availability Heuristic", "Overconfidence Bias", "Regression to the Mean"],
    topics: ["Psychology", "Decision Making"],
    concepts: ["risk-asymmetry", "systems-thinking", "identity"]
  },
  {
    id: "e-myth",
    type: "book",
    title: "The E-Myth Revisited",
    author: "Michael Gerber",
    year: 1995,
    rating: 4,
    status: "read",
    cover: "",
    quote: "The difference between great people and everyone else is that great people create their lives actively, while everyone else is created by their lives.",
    summary: "Gerber argues most small businesses fail because the owner is a technician who had an entrepreneurial seizure — not a true entrepreneur. The fix: build your business as if you were franchising it. Document everything. Create systems so the business runs without you. This is the Owner-Dependent Risk problem solved.",
    ideas: ["The Entrepreneur vs Technician vs Manager", "Work On vs In Your Business", "The Franchise Prototype", "Systems Create Freedom"],
    topics: ["Entrepreneurship", "Business Acquisition", "Systems"],
    concepts: ["systems-thinking", "ownership", "leverage", "risk-asymmetry"]
  },
  {
    id: "deep-work",
    type: "book",
    title: "Deep Work",
    author: "Cal Newport",
    year: 2016,
    rating: 4,
    status: "read",
    cover: "",
    quote: "Clarity about what matters provides clarity about what does not.",
    summary: "Newport argues that the ability to perform deep work — focused, undistracted cognitive effort — is becoming increasingly rare and increasingly valuable simultaneously. Most knowledge workers spend their days in shallow work (email, meetings, reactive tasks) that produces the feeling of productivity without real output. Deep work is the skill that compounds.",
    ideas: ["Deep Work vs Shallow Work", "The 4 Rules of Deep Work", "Attention Residue", "Bimodal vs Monastic Scheduling", "The Any-Benefit Trap"],
    topics: ["Personal Development", "Productivity"],
    concepts: ["compounding", "long-term-thinking", "systems-thinking", "leverage"]
  },
  {
    id: "built-to-sell",
    type: "book",
    title: "Built to Sell",
    author: "John Warrillow",
    year: 2011,
    rating: 5,
    status: "read",
    cover: "",
    quote: "Don't be in love with your company. Fall in love with the problem you're solving.",
    summary: "Warrillow argues that the most valuable businesses are ones that can run without the owner — businesses that are sellable. Even if you never sell, building with the exit in mind forces better systems, clearer processes, and less owner-dependence. The irony: building to sell makes the business more valuable whether you sell or not.",
    ideas: ["Teachable, Valuable, Repeatable", "The Sellability Score", "Avoiding the Owner Trap", "Standard Operating Procedures as Equity"],
    topics: ["Business Acquisition", "Entrepreneurship"],
    concepts: ["systems-thinking", "ownership", "cashflow", "risk-asymmetry"]
  },
  {
    id: "poor-charlies-almanack",
    type: "book",
    title: "Poor Charlie's Almanack",
    author: "Charlie Munger",
    year: 2005,
    rating: 5,
    status: "want-to-read",
    cover: "",
    quote: "All I want to know is where I'm going to die, so I'll never go there.",
    summary: "A collection of Munger's speeches and mental models. The core thesis: the best thinkers are multidisciplinary — they borrow the most useful ideas from every field and build a latticework of mental models. Inversion, second-order thinking, and the psychology of human misjudgment are the most actionable frameworks.",
    ideas: ["Mental Models as Latticework", "Inversion", "Second-Order Thinking", "The Psychology of Human Misjudgment", "Lollapalooza Effects"],
    topics: ["Decision Making", "Investing", "Philosophy"],
    concepts: ["compounding", "long-term-thinking", "risk-asymmetry", "systems-thinking"]
  },
  {
    id: "antifragile",
    type: "book",
    title: "Antifragile",
    author: "Nassim Nicholas Taleb",
    year: 2012,
    rating: 4,
    status: "want-to-read",
    cover: "",
    quote: "Wind extinguishes a candle and energizes fire. Likewise with randomness, uncertainty, and chaos: you want to use them, not hide from them.",
    summary: "Taleb introduces the concept of antifragility: beyond resilience or robustness. Fragile things break under stress. Robust things resist. Antifragile things get stronger. The goal for individuals, businesses, and portfolios is to be positioned so that disorder, volatility, and uncertainty are net positive. Skin in the game is what creates antifragility.",
    ideas: ["Fragile vs Robust vs Antifragile", "Via Negativa", "The Barbell Strategy", "Optionality", "Skin in the Game"],
    topics: ["Decision Making", "Investing", "Philosophy"],
    concepts: ["risk-asymmetry", "long-term-thinking", "ownership", "leverage"]
  },
  {
  "id": "american-icon",
  "title": "American Icon",
  "author": "Bryce Hoffman",
  "year": 2012,
  "rating": 5,
  "status": "read",
  "quote": "Alan Mulally didn't save Ford by being smarter than everyone else. He saved it by getting everyone to tell the truth.",
  "summary": "The definitive account of how Alan Mulally turned Ford Motor Company from the brink of bankruptcy into one of the great corporate turnarounds in American history \u2014 without taking a government bailout. Mulally's methods were deceptively simple: radical transparency, a single plan, facts over politics, and relentless positive energy. The lesson is not about cars \u2014 it's about how honest culture beats strategy every time.",
  "ideas": [
    "One Ford Plan",
    "Business Plan Review as Culture Tool",
    "Color-Coded Accountability",
    "Radical Transparency",
    "Leaders Set the Tone",
    "Turnaround Requires Truth"
  ],
  "concepts": [
    "leadership",
    "systems-thinking",
    "ownership",
    "habits-and-character"
  ],
  "chapters": []
},
  {
  "id": "unfair-advantage",
  "title": "The Unfair Advantage",
  "author": "Ash Ali & Hasan Kubba",
  "year": 2020,
  "rating": 4,
  "status": "read",
  "quote": "The unfair advantage is not about luck. It's about recognizing what you already have.",
  "summary": "Ali and Kubba argue that every successful startup founder has an unfair advantage \u2014 not luck or talent, but a specific asymmetric edge that makes them better positioned than anyone else to build that particular company. The MILES framework maps the categories: Money, Intelligence & Insight, Location & Luck, Education & Expertise, Status. The exercise is not to wish for advantages you don't have but to identify and leverage the ones you do.",
  "ideas": [
    "The MILES Framework",
    "Unfair Advantages Are Already Yours",
    "Money as Leverage",
    "Insider Knowledge",
    "Status and Network",
    "Luck Is Preparation Meeting Opportunity"
  ],
  "concepts": [
    "leverage",
    "risk-asymmetry",
    "ownership",
    "long-term-thinking",
    "entrepreneurship"
  ],
  "chapters": []
},
  {
  "id": "how-big-things-get-done",
  "title": "How Big Things Get Done",
  "author": "Bent Flyvbjerg & Dan Gardner",
  "year": 2023,
  "rating": 5,
  "status": "read",
  "quote": "Think slow, act fast. Most projects fail because it's the other way around.",
  "summary": "Oxford professor Bent Flyvbjerg has studied thousands of megaprojects \u2014 dams, bridges, software systems, Olympics, nuclear plants \u2014 and found a consistent pattern: the ones that succeed think slowly and act fast; the ones that fail do the opposite. The core disciplines: take time to plan thoroughly before a single dollar is spent, then execute with ruthless speed once committed. Reference class forecasting and modular design are the two most underused tools in large-scale execution.",
  "ideas": [
    "Think Slow Act Fast",
    "Reference Class Forecasting",
    "The Planning Fallacy",
    "Modular Design",
    "Fat-Tail Risk in Big Projects",
    "The Commitment Fallacy"
  ],
  "concepts": [
    "systems-thinking",
    "risk-asymmetry",
    "long-term-thinking",
    "decision-making",
    "capital-allocation"
  ],
  "chapters": []
},
  {
  "id": "running-down-a-dream",
  "title": "Running Down a Dream",
  "author": "Bill Strickland",
  "year": 2007,
  "rating": 4,
  "status": "read",
  "quote": "You have to have a dream before you can make it come true.",
  "summary": "Bill Strickland's memoir of building Manchester Bidwell Corporation \u2014 a world-class arts and job-training center in one of Pittsburgh's most impoverished neighborhoods \u2014 driven entirely by the belief that beauty and high expectations transform lives. Strickland's thesis: environment shapes destiny, and creating environments of excellence in places of poverty is not idealism but the most practical thing you can do. The dream has to be bigger than the obstacle.",
  "ideas": [
    "Environment Shapes Destiny",
    "Excellence as a Tool",
    "Beauty as Infrastructure",
    "Vision Before Resources",
    "Belief as Strategy",
    "The Power of High Expectations"
  ],
  "concepts": [
    "identity",
    "long-term-thinking",
    "leadership",
    "habits-and-character"
  ],
  "chapters": []
},
  {
  "id": "culture-code",
  "title": "The Culture Code",
  "author": "Daniel Coyle",
  "year": 2018,
  "rating": 5,
  "status": "read",
  "quote": "Culture is not the values on the wall. It's the behavior in the room.",
  "summary": "Coyle studied the world's most successful teams \u2014 Navy SEALs, Pixar, the San Antonio Spurs, IDEO \u2014 and identified three skills that create exceptional culture: build safety (belonging cues that signal the group is safe), share vulnerability (leading with weakness to create trust), and establish purpose (a clear narrative about why the work matters). Culture is not a set of values \u2014 it is a set of behaviors practiced so consistently they become unconscious.",
  "ideas": [
    "Safety Signals Belonging",
    "Vulnerability Precedes Trust",
    "Purpose as Narrative",
    "The AAR (After Action Review)",
    "High-Candor Feedback Loops",
    "Culture Is Behavior Not Values"
  ],
  "concepts": [
    "leadership",
    "systems-thinking",
    "identity",
    "habits-and-character",
    "communication"
  ],
  "chapters": []
}
];

const CONCEPTS = [
  {
    id: "compounding",
    type: "concept",
    label: "Compounding",
    quote: "The most powerful force in the universe.",
    summary: "The process by which something grows exponentially because each period's growth builds on all prior growth. Applies to money, habits, knowledge, and relationships. The key variable is time — compounding looks like nothing for a long time, then looks like everything. Most people quit before the curve bends upward.",
    books: ["psych-money", "atomic-habits", "naval", "main-street", "deep-work"],
    unifiedPrinciple: "Whether the asset is money, behavior, knowledge, or relationships — the mechanism is identical: choose a direction, make consistent deposits, don't interrupt the accumulation, and wait. The enemy of compounding is not losing — it is quitting before the curve bends."
  },
  {
    id: "long-term-thinking",
    type: "concept",
    label: "Long-Term Thinking",
    quote: "Play long-term games with long-term people. — Naval Ravikant",
    summary: "The cognitive discipline of making decisions for outcomes years or decades away rather than optimizing for immediate feedback. Most people structurally can't do this. Those who can operate with long time horizons gain an enormous structural advantage — fewer competitors occupy that space.",
    books: ["psych-money", "naval", "buy-build", "atomic-habits", "good-to-great", "poor-charlies-almanack"],
    unifiedPrinciple: "Long-term thinking is a structural advantage created by extending your time horizon beyond what most people can sustain. The longer your time horizon, the fewer competitors you have for the same opportunity."
  },
  {
    id: "ownership",
    type: "concept",
    label: "Ownership",
    quote: "You're not going to get rich renting out your time. — Naval Ravikant",
    summary: "Wealth requires owning things — equity, businesses, assets — not just exchanging time for money. A salary is a rental arrangement on your skills. Ownership is a claim on future value creation. The distinction between these two modes is the most important structural decision in wealth building.",
    books: ["buy-build", "main-street", "naval", "e-myth", "built-to-sell", "antifragile"],
    unifiedPrinciple: "The path from income to wealth runs through ownership. Ownership converts active income potential into passive asset value. The career builds the skills; the acquisition deploys them."
  },
  {
    id: "cashflow",
    type: "concept",
    label: "Cashflow",
    quote: "Profit is an opinion. Cash is a fact. — Karen Berman",
    summary: "The actual movement of money into and out of a business or portfolio — distinct from profit (an accounting construct) and revenue (the top line). You can be profitable on paper while running out of cash. In small business acquisition, cash flow is the primary metric that matters.",
    books: ["main-street", "buy-build", "financial-intelligence", "built-to-sell", "e-myth"],
    unifiedPrinciple: "Cash is what you have to actually work with — for operations, reinvestment, and wealth accumulation. The first question for any acquisition: not 'what does this earn?' but 'what cash does this generate, when, and how reliably?'"
  },
  {
    id: "risk-asymmetry",
    type: "concept",
    label: "Risk & Asymmetry",
    quote: "Risk is what's left over when you think you've thought of everything. — Morgan Housel",
    summary: "Asymmetric risk means potential gain substantially exceeds potential loss — or vice versa. Smart risk-taking is not risk avoidance. It is finding and taking asymmetric positions: survive being wrong, thrive when right.",
    books: ["psych-money", "buy-build", "main-street", "antifragile", "zero-to-one", "never-split-difference", "poor-charlies-almanack", "thinking-fast-slow"],
    unifiedPrinciple: "Good risk management: understand the nature of the risk, ensure downside survival, position for asymmetric upside, concentrate where your information advantage is greatest. The worst position: unlimited downside, capped upside."
  },
  {
    id: "identity",
    type: "concept",
    label: "Identity",
    quote: "Every action you take is a vote for the type of person you wish to become. — James Clear",
    summary: "The set of beliefs you hold about who you are. The deepest and most durable driver of sustained change — more durable than motivation, willpower, or external goals. Identity shapes behavior at the level below conscious decision-making.",
    books: ["atomic-habits", "psych-money", "naval", "thinking-fast-slow"],
    unifiedPrinciple: "The sequence is Identity → Habits → Outcomes. Not: Outcomes → Habits → Identity. Design your identity consciously — claim who you're becoming before you've fully arrived — and let behaviors follow."
  },
  {
    id: "systems-thinking",
    type: "concept",
    label: "Systems Thinking",
    quote: "You do not rise to the level of your goals. You fall to the level of your systems.",
    summary: "A system is a set of interconnected components that produce outcomes through their interaction. To change an outcome reliably, change the system — not the goal. Systems produce results consistently and at scale. People produce results variably and with effort.",
    books: ["atomic-habits", "psych-money", "financial-intelligence", "main-street", "e-myth", "built-to-sell", "deep-work", "good-to-great"],
    unifiedPrinciple: "The highest-leverage move in any domain: build a system that generates desired outcomes without ongoing willpower. Systems are the answer to 'how do I make the right choice the default choice?'"
  },
  {
    id: "leverage",
    type: "concept",
    label: "Leverage",
    quote: "Give me a lever long enough and I shall move the world. — Archimedes",
    summary: "Any mechanism that multiplies the output of effort. Without leverage, producing more requires doing more. With leverage, small inputs produce large outputs. Naval identifies four types: labor, capital, code, and media — the last two being permissionless.",
    books: ["naval", "buy-build", "main-street", "zero-to-one", "e-myth", "deep-work"],
    unifiedPrinciple: "Highest-leverage positions combine specific knowledge (the foundation) + scale mechanisms (the multiplier) + time (for compounding). Identifying the right leverage at each career stage is the meta-strategy."
  },
  {
    id: "wealth-income",
    type: "concept",
    label: "Wealth vs. Income",
    quote: "Wealth is what you don't see. — Morgan Housel",
    summary: "Income is a flow — money coming in per time. Wealth is a stock — assets accumulated and compounding. You can have high income and zero wealth. The connecting variable is the conversion rate: what percentage of income becomes assets rather than consumption.",
    books: ["psych-money", "naval", "main-street"],
    unifiedPrinciple: "Wealth is built by converting income into assets before spending it. Income ceiling is set by skills and leverage. Wealth is built by conversion rate and time. These are different problems with different solutions."
  },
  {
    id: "capital-allocation",
    type: "concept",
    label: "Capital Allocation",
    quote: "The most important decision is what to do with your money.",
    summary: "The decision of where to deploy finite financial resources. Every dollar has an opportunity cost. The quality of capital allocation decisions compounds over time — one of the highest-leverage skills for wealth creation. Buffett describes his primary job as capital allocation.",
    books: ["buy-build", "main-street", "financial-intelligence", "poor-charlies-almanack"],
    unifiedPrinciple: "Capital allocation determines whether the same income produces dramatically different long-term wealth. Two people with identical earnings — one into assets, one into consumption — have radically different net worths in 20 years."
  },
{
    "id": "leadership",
    "label": "Leadership",
    "quote": "Leadership is not about personality. It's about behavior. — Kouzes & Posner",
    "summary": "The practice of influencing others toward a shared goal — through vision, trust, example, and the elevation of people's capacity. Leadership is distinct from management: management is efficiency within a system; leadership is choosing the right system and inspiring others to build it.",
    "books": ["drucker-leadership", "ceo-excellence", "leadership-challenge", "21-laws-leadership", "no-rules-rules", "first-90-days", "managing-up", "emotional-intelligence", "crucial-conversations", "good-to-great"],
    "unifiedPrinciple": "Leadership is influence, not position. It develops daily through behavior, not through title. The best leaders create more leaders, not more followers."
  },
  {
    "id": "communication",
    "label": "Communication",
    "quote": "The single biggest problem in communication is the illusion that it has taken place.",
    "summary": "The ability to transfer meaning — not just information — from one mind to another. Effective communication accounts for the receiver's mental model, emotional state, and attention constraints. Most communication failures are design failures: the communicator assumed understanding rather than engineering it.",
    "books": ["crucial-conversations", "made-to-stick", "how-to-win-friends", "writing-busy-readers", "very-good-copy", "on-writing-well", "never-split", "emotional-intelligence"],
    "unifiedPrinciple": "Communication is not what you say — it is what the other person understands. Design your communication for the receiver, not the sender."
  },
  {
    "id": "mental-models",
    "label": "Mental Models",
    "quote": "The quality of our thinking is proportional to the models in our head. — Shane Parrish",
    "summary": "Frameworks for understanding how the world works, borrowed from multiple disciplines and assembled into a personal latticework. The more accurate and diverse your mental models, the better your decisions. Specialists have deep but narrow models; generalists have broad but shallow ones. The goal is both depth and breadth.",
    "books": ["great-mental-models-1", "great-mental-models-2", "great-mental-models-3", "great-mental-models-4", "meditations", "basic-economics", "thinking-fast-slow", "poor-charlies-almanack"],
    "unifiedPrinciple": "Mental models are the lenses through which you interpret reality. Collect them deliberately from every field. A latticework of models from physics, biology, psychology, and economics will outperform deep expertise in any single domain."
  },
  {
    "id": "entrepreneurship",
    "label": "Entrepreneurship",
    "quote": "The only way to win is to learn faster than anyone else. — Eric Ries",
    "summary": "The practice of creating value through the identification of unmet needs and the assembly of resources to meet them — whether by building, buying, or transforming. Entrepreneurship is not confined to startups; it is a mindset applied to any context where value can be created.",
    "books": ["lean-startup", "zero-to-one", "build-fadell", "million-dollar-weekend", "e-myth", "buy-build", "main-street", "crossing-chasm", "innovators-dilemma", "no-rules-rules", "buying-small-business"],
    "unifiedPrinciple": "Entrepreneurship is about creating value under conditions of uncertainty. The best entrepreneurs validate assumptions cheaply before committing resources, and stay close to the customer while building systems that work without them."
  },
  {
    "id": "writing",
    "label": "Writing & Communication",
    "quote": "The secret of good writing is to strip every sentence to its cleanest components. — Zinsser",
    "summary": "Writing is thinking made visible. The discipline of writing — removing clutter, finding the core message, structuring for the reader's attention — is the discipline of clear thinking. Writing well is not a talent; it is a skill built through deliberate practice and ruthless editing.",
    "books": ["on-writing-well", "writing-busy-readers", "very-good-copy", "made-to-stick"],
    "unifiedPrinciple": "Good writing is not about style — it is about clarity. Every word that does not earn its place costs the reader attention they will not spend. Simplicity is the hardest discipline and the highest achievement."
  },
  {
    "id": "habits-and-character",
    "label": "Habits & Character",
    "quote": "We are what we repeatedly do. Excellence is not an act but a habit. — Aristotle",
    "summary": "Character is not a fixed trait but an accumulation of decisions — habits formed through repetition until they become automatic expression of identity. The most durable change happens when behavior becomes identity: not 'I am trying to be disciplined' but 'I am a disciplined person.' Habits are the votes cast daily for who you are becoming.",
    "books": ["atomic-habits", "greatest-salesman", "grit", "meditations", "ruthless-elimination-hurry", "life-youve-always-wanted", "forging-mettle"],
    "unifiedPrinciple": "Character is forged through repeated behavior under pressure, not through intention or declaration. The disciplines that feel small are not small — they are the architecture of who you become."
  },
  {
    "id": "innovation-and-disruption",
    "label": "Innovation & Disruption",
    "quote": "Disruptive technologies typically enable new markets to emerge. — Clayton Christensen",
    "summary": "Innovation is not improvement — it is the creation of something that changes the rules of the game. Disruption happens from below: the new solution initially looks worse by existing metrics but serves new users or contexts, then improves rapidly. Most incumbents miss disruption not from ignorance but from rational optimization for current customers.",
    "books": ["innovators-dilemma", "zero-to-one", "crossing-chasm", "lean-startup", "billion-dollar-brand-club", "build-fadell"],
    "unifiedPrinciple": "Disruption is not a technology event — it is a business model event. The innovator's dilemma is that doing everything right for current customers makes you vulnerable to those serving different customers in different ways."
  },
  {
    "id": "decision-making",
    "label": "Decision Making",
    "quote": "All I want to know is where I'm going to die, so I'll never go there. — Charlie Munger",
    "summary": "The process of choosing between options under conditions of uncertainty, limited information, and cognitive bias. Good decision-making is a craft: it requires understanding your own biases, using multiple mental models, thinking in probabilities rather than certainties, and inverting the problem before solving it.",
    "books": ["great-mental-models-1", "great-mental-models-2", "great-mental-models-3", "great-mental-models-4", "thinking-fast-slow", "poor-charlies-almanack", "basic-economics", "meditations", "never-split", "crucial-conversations"],
    "unifiedPrinciple": "Most poor decisions are not caused by bad information — they are caused by flawed thinking processes. Build decision frameworks before you need them. Slow down the important decisions; most urgency is manufactured."
  }
];

const TOPICS = [
  { id: "personal-finance",     label: "Personal Finance",     books: ["psych-money", "financial-intelligence"] },
  { id: "business-acquisition", label: "Business Acquisition", books: ["buy-build", "main-street", "financial-intelligence", "e-myth", "built-to-sell", "never-split-difference"] },
  { id: "wealth-building",      label: "Wealth Building",      books: ["psych-money", "buy-build", "naval", "atomic-habits", "zero-to-one"] },
  { id: "habit-formation",      label: "Habit Formation",      books: ["atomic-habits", "deep-work"] },
  { id: "entrepreneurship",     label: "Entrepreneurship",     books: ["buy-build", "main-street", "zero-to-one", "e-myth", "built-to-sell", "good-to-great"] },
  { id: "decision-making",      label: "Decision Making",      books: ["thinking-fast-slow", "poor-charlies-almanack", "antifragile", "never-split-difference"] },
  { id: "leadership",           label: "Leadership",           books: ["good-to-great", "never-split-difference"] },
  { id: "philosophy",           label: "Philosophy",           books: ["naval", "poor-charlies-almanack", "antifragile"] }
];

// ── BUILD GRAPH NODES & LINKS ─────────────────────────────────────────────────
// Called by both public and admin HTML files
function buildGraphData() {
  const nodes = [];
  const linkSet = new Set();
  const links = [];

  function addLink(a, b) {
    const key = [a, b].sort().join("--");
    if (!linkSet.has(key)) { linkSet.add(key); links.push({ source: a, target: b }); }
  }

  // Books
  BOOKS.forEach(b => {
    nodes.push({
      id: b.id, type: "book",
      label: b.title.length > 18 ? b.title.split(": ")[0].split(" ").slice(0,3).join("\n") : b.title,
      displayLabel: b.title,
      author: b.author, year: b.year, rating: b.rating, status: b.status,
      quote: b.quote, summary: b.summary, ideas: b.ideas,
      topics: b.topics, conceptIds: b.concepts
    });
    // Link to concepts
    b.concepts.forEach(cid => addLink(b.id, cid));
    // Link to topics
    b.topics.forEach(t => {
      const topic = TOPICS.find(x => x.label === t);
      if (topic) addLink(b.id, topic.id);
    });
  });

  // Concepts
  CONCEPTS.forEach(c => {
    nodes.push({
      id: c.id, type: "concept",
      label: c.label,
      displayLabel: c.label,
      quote: c.quote, summary: c.summary,
      connections: c.books.map(bid => BOOKS.find(b => b.id === bid)?.title).filter(Boolean),
      unifiedPrinciple: c.unifiedPrinciple
    });
    // Link concept → books (already added from book side, addLink deduplicates)
  });

  // Topics
  TOPICS.forEach(t => {
    nodes.push({
      id: t.id, type: "topic",
      label: t.label,
      displayLabel: t.label
    });
  });

  return { nodes, links };
}

// Export for use in HTML files
if (typeof module !== "undefined") module.exports = { BOOKS, CONCEPTS, TOPICS, buildGraphData };
