import {
  EAutonomyType,
  EDataSources,
  EFramework,
  ELLM,
  ETools,
} from "@/app/types";

export const AGENTS = [
  {
    name: "Maia",
    avatar: "/images/agent_avatar_01.png",
    role: "Community Agent",
    description:
      "A community agent managing your community across Discord and Telegram.",
    llm: ELLM.LLAMA_3_1_405B,
    framework: EFramework.FAIR,
    tools: [ETools.DISCORD, ETools.TELEGRAM],
    dataSources: [EDataSources.X],
    autonomyType: EAutonomyType.MANAGED,
  },
  {
    name: "Amy",
    avatar: "/images/agent_avatar_02.png",
    role: "Social Media Agent",
    description:
      "A social media agent replying, mentioning, reposting and posting project relevant content across X, Instagram, Farcaster or TikTok",
    llm: ELLM.GROK_2,
    framework: EFramework.PIPPIN,
    tools: [ETools.X, ETools.INSTAGRAM, ETools.FARCASTER, ETools.TIKTOK],
    dataSources: [
      EDataSources.X,
      EDataSources.INSTAGRAM,
      EDataSources.FARCASTER,
      EDataSources.YOUTUBE,
    ],
    autonomyType: EAutonomyType.FULL_AUTONOMOUS,
  },
  {
    name: "Judge",
    avatar: "/images/agent_avatar_03.png",
    role: "Market Analyst",
    description:
      "A market analyst querying data across CoinGecko, CoinMarketCap, Helius, Solscan and X relevant to your project.",
    llm: ELLM.GROK_2,
    framework: EFramework.PIPPIN,
    tools: [
      ETools.DISCORD,
      ETools.TELEGRAM,
      ETools.TRADINGVIEW,
      ETools.CACULATOR,
    ],
    dataSources: [
      EDataSources.X,
      EDataSources.COINGECKO,
      EDataSources.COINMARKETCAP,
      EDataSources.UNKNOWN,
      EDataSources.SOLSCAN,
    ],
    autonomyType: EAutonomyType.FULL_AUTONOMOUS,
  },
  {
    name: "Sky",
    avatar: "/images/agent_avatar_04.png",
    role: "Airdrop Manager",
    description:
      "An Airdrop agent that measures the contributions of your community and airdrops to them automatically.",
    llm: ELLM.GEMINI_2_0,
    framework: EFramework.PIPPIN,
    tools: [ETools.AI_POOL],
    dataSources: [
      EDataSources.RAYDIUM,
      EDataSources.METEORA,
      EDataSources.PUMPFUN,
    ],
    autonomyType: EAutonomyType.FULL_AUTONOMOUS,
  },
  {
    name: "Zek",
    avatar: "/images/agent_avatar_05.png",
    role: "Github Agent",
    description:
      "A Coder agent that can develop code in Python and commit to Github.",
    llm: ELLM.CHATGPT_O_3_MINI,
    framework: EFramework.FAIR,
    tools: [ETools.DISCORD, ETools.SEND_AI, ETools.GOOGLE_SHEET],
    dataSources: [EDataSources.PHANTOM],
    autonomyType: EAutonomyType.SEMI_AUTONOMOUS,
  },
  {
    name: "Jup",
    avatar: "/images/agent_avatar_06.png",
    role: "Webscraper",
    description:
      "A Copywriter agent that create blog posts, social media posts, FAQ’s, email responses for your community in the tone of voice for your project.",
    llm: ELLM.DEEPSEEK_V3,
    framework: EFramework.ELIZA_OS,
    tools: [ETools.SEND_AI],
    dataSources: [
      EDataSources.RAYDIUM,
      EDataSources.METEORA,
      EDataSources.JUPITER,
      EDataSources.UNKNOWN,
    ],
    autonomyType: EAutonomyType.FULL_AUTONOMOUS,
  },
  {
    name: "Pyth",
    avatar: "/images/agent_avatar_07.png",
    role: "Token Launch Agent",
    description:
      "Powered by AI TeePool an AI Agent that fairly launches and distributes your token to holders.",
    llm: ELLM.LLAMA_3_2_70b,
    framework: EFramework.VIRTUALS,
    tools: [ETools.PYTHON, ETools.GITHUB],
    dataSources: [EDataSources.GITHUB],
    autonomyType: EAutonomyType.MANUAL,
  },
  {
    name: "Shake",
    avatar: "/images/agent_avatar_08.png",
    role: "Liquidity Agent",
    description:
      "A Liquidity agent that constantly monitors liquidity pools on Meteora making sure liquidity ir provided at all values.",
    llm: ELLM.CHATGPT_O_3_MINI,
    framework: EFramework.FAIR,
    tools: [ETools.GRAMMARLY, ETools.GITBOOK, ETools.MASHABLE, ETools.NOTION],
    dataSources: [EDataSources.MASHABLE, EDataSources.GITHUB],
    autonomyType: EAutonomyType.MANAGED,
  },
  {
    name: "Shania",
    avatar: "/images/agent_avatar_09.png",
    role: "Image & Video",
    description:
      "An Image & Video AI Agent that creates unique image and video content for your project to be shared with your community.",
    llm: ELLM.DALL_E_3,
    framework: EFramework.FAIR,
    tools: [ETools.DISCORD, ETools.TELEGRAM],
    dataSources: [],
    autonomyType: EAutonomyType.MANAGED,
  },
];

export const BRANDS = [
  "/images/brand_01.png",
  "/images/brand_02.png",
  "/images/brand_03.png",
  "/images/brand_04.png",
  "/images/brand_05.png",
  "/images/brand_06.png",
];

export const WORKS_WITH_BRANDS = [
  "/images/works_with_brand_01.png",
  "/images/works_with_brand_02.png",
  "/images/works_with_brand_03.png",
  "/images/works_with_brand_04.png",
  "/images/works_with_brand_05.png",
];

export const AGENT_ACTIONS = [
  "COMMUNITY",
  "SOCIAL MEDIA",
  "MARKET ANALYST",
  "TOKEN LAUNCH",
  "AIRDROP",
  "LIQUIDITY",
  "CODING",
  "COPYWRITING",
  "IMAGE & VIDEO",
];

export const TOOL_ICONS = {
  [ETools.CACULATOR]: "/images/calculator.png",
  [ETools.COINGECKO]: "/images/coingecko.png",
  [ETools.COINMARKETCAP]: "/images/coinmarketcap.png",
  [ETools.DISCORD]: "/images/discord.png",
  [ETools.FARCASTER]: "/images/farcaster.png",
  [ETools.GITHUB]: "/images/github.png",
  [ETools.GITBOOK]: "/images/gitbook.png",
  [ETools.GOOGLE_SHEET]: "/images/google_sheet.png",
  [ETools.GRAMMARLY]: "/images/grammarly.png",
  [ETools.INSTAGRAM]: "/images/instagram.png",
  [ETools.JUPITER]: "/images/jupiter.png",
  [ETools.MASHABLE]: "/images/mashable.png",
  [ETools.METEORA]: "/images/meteora.png",
  [ETools.NOTION]: "/images/notion.png",
  [ETools.PHANTOM]: "/images/phantom.png",
  [ETools.PUMPFUN]: "/images/pump.png",
  [ETools.PYTHON]: "/images/python.png",
  [ETools.RAYDIUM]: "/images/raydium.png",
  [ETools.SEND_AI]: "/images/send_ai.png",
  [ETools.SOLSCAN]: "/images/solscan.png",
  [ETools.TELEGRAM]: "/images/telegram.png",
  [ETools.TIKTOK]: "/images/tiktok.png",
  [ETools.TRADINGVIEW]: "/images/tradingview.png",
  [ETools.YOUTUBE]: "/images/youtube.png",
  [ETools.UNKNOWN]: "/images/unknown.png",
  [ETools.X]: "/images/x.png",
  [ETools.AI_POOL]: "/images/ai_pool.png",
};

export const DATA_SOURCE_ICONS = {
  [EDataSources.CACULATOR]: "/images/calculator.png",
  [EDataSources.COINGECKO]: "/images/coingecko.png",
  [EDataSources.COINMARKETCAP]: "/images/coinmarketcap.png",
  [EDataSources.DISCORD]: "/images/discord.png",
  [EDataSources.FARCASTER]: "/images/farcaster.png",
  [EDataSources.GITHUB]: "/images/github.png",
  [EDataSources.GITBOOK]: "/images/gitbook.png",
  [EDataSources.GOOGLE_SHEET]: "/images/google_sheet.png",
  [EDataSources.GRAMMARLY]: "/images/grammarly.png",
  [EDataSources.INSTAGRAM]: "/images/instagram.png",
  [EDataSources.JUPITER]: "/images/jupiter.png",
  [EDataSources.MASHABLE]: "/images/mashable.png",
  [EDataSources.METEORA]: "/images/meteora.png",
  [EDataSources.NOTION]: "/images/notion.png",
  [EDataSources.PHANTOM]: "/images/phantom.png",
  [EDataSources.PUMPFUN]: "/images/pump.png",
  [EDataSources.PYTHON]: "/images/python.png",
  [EDataSources.RAYDIUM]: "/images/raydium.png",
  [EDataSources.SEND_AI]: "/images/send_ai.png",
  [EDataSources.SOLSCAN]: "/images/solscan.png",
  [EDataSources.TELEGRAM]: "/images/telegram.png",
  [EDataSources.TIKTOK]: "/images/tiktok.png",
  [EDataSources.TRADINGVIEW]: "/images/tradingview.png",
  [EDataSources.YOUTUBE]: "/images/youtube.png",
  [EDataSources.UNKNOWN]: "/images/unknown.png",
  [EDataSources.X]: "/images/x.png",
  [EDataSources.AI_POOL]: "/images/ai_pool.png",
};

export const FAQs = [
  {
    title: "What is FAIR? Is it an agency or a framework?",
    content:
      "FAIR is both an agency and a framework. As an agency, we work hands-on with crypto projects to design, deploy, and manage fully automated AI multi-agent teams tailored to your needs. These teams can automate a wide range of processes including Social Media Management, Market Analysis, Community Management, Airdrop Automation, Liquidity Management, Token Launches, Copywriting, Image & Video Creation, and even Coding. As a framework, FAIR leverages Microsoft's open-source AutoGen Studio, allowing for seamless integration, customization, and scalability of AI agents. You'll have direct access to a dedicated customer support agent throughout your journey.",
  },
  {
    title: "Is there a FAIR token?",
    content:
      "Yes, we are launching a token for FAIR. All existing $MATRIX holders will be eligible to swap their tokens for $FAIR. After the swap, $MATRIX will no longer be supported. The $FAIR token is designed to reward contributors to the FAIR framework, powered by AI agents that measure real value added to the project. Contributions include mindshare on social platforms like X, introductions to potential clients, and overall ecosystem growth. Projects working with FAIR will see a portion of their tokens purchased and distributed to $FAIR stakers. Additionally, every project that integrates FAIR will receive $FAIR tokens.",
  },
  {
    title: "How can my project save by using FAIR?",
    content:
      "By automating repetitive and resource-intensive tasks, FAIR significantly reduces operational costs. Our cloud-hosted, enterprise-grade software runs 24/7 on Microsoft Azure, ensuring reliability and scalability. We begin by assessing your project’s processes to identify automation opportunities, then build and deploy a custom AI agent team. You can choose to manage this team manually, semi-autonomously, or fully autonomously, allowing you to focus on strategic growth while reducing overhead.",
  },
  {
    title: "What is your tech stack?",
    content:
      "Our team management system is built on Microsoft's AutoGen framework, an open-source multi-agent platform with over 39k stars on GitHub and 447 contributors. AutoGen allows us to integrate AI agents from other leading providers like ElizaOS, TopHat, Virtuals, Pippin, Arc, and ZerePy. Hosted on Microsoft Azure, our infrastructure benefits from enterprise-grade security, reliability, and scalability. Additionally, we are part of the Microsoft for Startups Program and actively contribute custom extensions to AutoGen, tailored for the crypto industry's unique needs.",
  },
  {
    title: "Can I integrate AI agents from other frameworks into FAIR?",
    content:
      "Absolutely. FAIR supports seamless integration of AI agents from various frameworks, including OpenAI, Anthropic, ElizaOS, TopHat, Virtuals, Pippin, Arc, and ZerePy. This flexibility allows you to build a diverse and powerful multi-agent team tailored to your project's specific needs.",
  },
  {
    title: "What makes FAIR different from other AI automation platforms?",
    content:
      "FAIR stands out due to its dual role as both a hands-on agency and a robust technical framework. Unlike generic AI solutions, FAIR is specifically designed for the crypto industry, offering tailored automation for critical project processes. Our deep integration with Microsoft's AutoGen Studio, combined with our active development of custom extensions for crypto use cases, ensures unmatched flexibility, scalability, and efficiency. Plus, our tokenomics model incentivizes ecosystem growth and rewards both users and contributors.",
  },
  {
    title: "Who is behind FAIR?",
    content:
      "FAIR is a project by Matrix One, an established crypto venture with multiple applications and agents in the market. Matrix One is backed by 27 leading AI and crypto investors, including Animoca Brands, DCG, Hypersphere, and RedBeard Ventures. This strong backing ensures robust development, continuous innovation, and trust in our ecosystem.",
  },
  {
    title: "What is the FAIR framework capable of?",
    content:
      "The FAIR framework is built for comprehensive automation of crypto project operations. Capabilities include but are not limited to: </br>- Social Media and Community Management</br>- Market Analysis and Reporting</br>- Airdrop Campaign Automation</br>- Liquidity Pool Management</br>- Token Launch Coordination</br>- Copywriting, Content Creation (Image & Video)</br>- Automated Coding and Development Tasks</br>- Live Team Management with Human-in-the-Loop Options",
  },
  {
    title: "What does it cost to use FAIR?",
    content:
      "There is no upfront fee for setting up your AI agent team. We believe in delivering value first—you only start paying once your team is operational and meets your satisfaction. The monthly fee is based on the token usage of your AI team, with cost estimates provided after our initial onboarding call. This flexible model ensures you only pay for what you use, with the option to scale as needed.",
  },
  {
    title: "How does FAIR ensure data security?",
    content:
      "FAIR prioritizes data security with enterprise-grade protections. Your AI agent team's data is securely stored using Nillion's privacy-focused technology, ensuring that sensitive information remains private and protected. Our infrastructure is hosted on Microsoft Azure, leveraging its robust security protocols and compliance certifications.",
  },
  {
    title: "Will I have control over my AI agent team?",
    content:
      "Yes, you maintain full control over your AI agent team. After setup, you can choose to manage your team manually, semi-autonomously, or fully autonomously. Our platform also offers human-in-the-loop options, allowing you to intervene and guide your agents when needed. Additionally, our drag-and-drop team management tool makes it easy to adjust workflows and agent responsibilities on the fly.",
  },
  {
    title: "How do I get started with FAIR?",
    content:
      "Getting started is simple. Contact us through the 'Get Access' button on our site to schedule an onboarding call. During this session, we'll assess your project's needs and identify automation opportunities. From there, we'll build and deploy your custom AI agent team, with ongoing support to ensure success",
  },
];

export const AGENT_SESSION_MOCK_DATA = [
  {
    avatar: "/images/agent_avatar_10.png",
    role: "CEO",
    text: "Determine the top token trend today and share this news on X.",
  },
  {
    avatar: "/images/agent_avatar_03.png",
    role: "Market Analyst",
    text: "The fastest growing Solana token today is $TRUMP with a 20% increase in FDV, 15% increase in volume and 32% increase in holders on Raydium.",
  },
  {
    avatar: "/images/agent_avatar_02.png",
    role: "Social Media Agent",
    text: "$TRUMP token is mentioned 12321 times in the past 24h on X with a positive sentiment.",
  },
  {
    avatar: "/images/agent_avatar_08.png",
    role: "Liquidity Agent",
    text: 'Writing X Post "$TRUMP token the biggest gainer today on X with 20% increase in FDV. Sentiment is positive."',
  },
  {
    avatar: "/images/agent_avatar_09.png",
    role: "Image & Video",
    text: 'Creating an image for X post "IMAGE URL"Social Media: Posting to X',
  },
];

export const BLOCKED_WALLET_NAMES = ["Trust"];
