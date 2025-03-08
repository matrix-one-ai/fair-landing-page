export enum ETools {
  X = "X",
  DISCORD = "Discord",
  GITHUB = "Github",
  CACULATOR = "Calculator",
  COINGECKO = "CoinGecko",
  COINMARKETCAP = "CoinMarketCap",
  FARCASTER = "Farcaster",
  GITBOOK = "Gitbook",
  GOOGLE_SHEET = "Google_Sheet",
  GRAMMARLY = "Grammarly",
  INSTAGRAM = "Instagram",
  JUPITER = "Jupiter",
  MASHABLE = "Mashable",
  METEORA = "Meteora",
  NOTION = "Notion",
  PHANTOM = "Phantom",
  PUMPFUN = "PumpFun",
  PYTHON = "Python",
  RAYDIUM = "Raydium",
  SEND_AI = "SendAI",
  SOLSCAN = "Solscan",
  TELEGRAM = "Telegram",
  TIKTOK = "TikTok",
  TRADINGVIEW = "TradingView",
  YOUTUBE = "Youtube",
  AI_POOL = "AI_POOL",
  UNKNOWN = "Unknown",
}

export enum EDataSources {
  X = "X",
  DISCORD = "Discord",
  GITHUB = "Github",
  CACULATOR = "Calculator",
  COINGECKO = "CoinGecko",
  COINMARKETCAP = "CoinMarketCap",
  FARCASTER = "Farcaster",
  GITBOOK = "Gitbook",
  GOOGLE_SHEET = "Google_Sheet",
  GRAMMARLY = "Grammarly",
  INSTAGRAM = "Instagram",
  JUPITER = "Jupiter",
  MASHABLE = "Mashable",
  METEORA = "Meteora",
  NOTION = "Notion",
  PHANTOM = "Phantom",
  PUMPFUN = "PumpFun",
  PYTHON = "Python",
  RAYDIUM = "Raydium",
  SEND_AI = "SendAI",
  SOLSCAN = "Solscan",
  TELEGRAM = "Telegram",
  TIKTOK = "TikTok",
  TRADINGVIEW = "TradingView",
  YOUTUBE = "Youtube",
  AI_POOL = "AI_POOL",
  UNKNOWN = "Unknown",
}

export enum EAutonomyType {
  MANAGED = "Managed",
  SEMI_AUTONOMOUS = "Semi-autonomous",
  FULL_AUTONOMOUS = "Fully-autonomous",
  MANUAL = "Manual",
}

export enum EFramework {
  FAIR = "FAIR",
  PIPPIN = "Pippin",
  ELIZA_OS = "ElizaOS",
  VIRTUALS = "Virtuals",
}

export enum ELLM {
  LLAMA_3_1_405B = "Llama 3.1 405B",
  LLAMA_3_2_70b = "Llama 3.2 70b",
  GROK_2 = "Grok 2",
  GEMINI_2_0 = "Gemini 2.0",
  CHATGPT_O_3_MINI = "ChatGPT o3 - Mini",
  DEEPSEEK_V3 = "DeepSeek V3",
  DALL_E_3 = "Dall-E 3",
}

// TODO: Deprecated types below
export enum EActivityLogModuleType {
  Twitter = "twitter",
  Discord = "discord",
}

export interface IActivityLog {
  moduleType: EActivityLogModuleType;
  title: string;
  description: string;
  timestamp: string;
  tweetId?: string;
}

export enum ERelationship {
  Friend = "Friend",
  Family = "Family",
  Partner = "Partner",
  Colleague = "Colleague",
  Other = "Other",
}

export enum ECountries {
  USA = "United States",
  CANADA = "Canada",
  // EUROPE = "Europe",
  UNITED_KINGDOM = "United Kingdom",
}

export enum EAmount {
  TEN = "10",
  FIFTY = "50",
}

export type TFairUser = {
  id: number;
  twitter_handle: string;
  wallet_address: string;
  invite_codes: string;
  created_at: string;
};
