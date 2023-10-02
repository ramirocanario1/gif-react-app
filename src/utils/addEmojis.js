const EMOJIS = {
  actions: "🏃‍♂️",
  adjectives: "📝",
  animals: "🐕",
  anime: "⛩️",
  "art & design": "🎨",
  "cartoons & comics": "🦸‍♂️",
  celebrities: "🌟",
  decades: "🕰️",
  emotions: "😄",
  "fashion & beauty": "💄",
  "food & drink": "🍔",
  gaming: "🎮",
  greetings: "👋",
  holiday: "🎉",
  identity: "🧑‍💼",
  interests: "🤓",
  memes: "😂",
  movies: "🎬",
  music: "🎵",
  nature: "🌿",
  "news & politics": "📰",
  reactions: "🙌",
  science: "🔬",
  sports: "🏀",
  stickers: "📱",
  transportation: "🚗",
  tv: "📺",
  weird: "👽",
};

export default function addEmojis(categories) {
  if (!categories) return;
  return categories.map((c) => `${EMOJIS[c] + " " || ""}${c}`);
}
