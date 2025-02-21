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
  UNKNOWN = "Unknown",
}

export enum EAutonomyType {
  MANAGED = "Managed",
  SEMI_AUTONOMOUS = "Semi-autonomous",
  FULL_AUTONOMOUS = "Fully-autonomous",
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
