// ─── Portable Text (kept for compatibility) ───────────────────────────────────
export type PortableTextSpan = {
  _type: "span";
  _key: string;
  text: string;
};

export type PortableTextBlock = {
  _type: "block";
  _key: string;
  children?: PortableTextSpan[];
};

// ─── Card variant union ───────────────────────────────────────────────────────
export type BentoCardVariant =
  | "hero"
  | "text"
  | "stat"
  | "social"
  | "spotify"
  | "project"
  | "photo"
  | "post"
  | "tags"
  | "cta"
  | "default";

// ─── Bento Card ───────────────────────────────────────────────────────────────
export type BentoCard = {
  _key: string;
  variant?: BentoCardVariant;
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  title: string;
  eyebrow?: string;
  body?: string;
  // media
  image?: string;
  // social
  handle?: string;
  href?: string;
  icon?: "github" | "twitter" | "linkedin" | "instagram";
  // spotify
  track?: string;
  artist?: string;
  albumArt?: string;
  spotifyUrl?: string;
  // stat
  stat?: string;
  // tags
  tags?: string[];
  // cta / project / post
  ctaLabel?: string;
  ctaHref?: string;
  // legacy fields kept for back-compat
  content?: PortableTextBlock[];
  media?: { alt?: string; url?: string };
};

// ─── Bento Grid ───────────────────────────────────────────────────────────────
export type BentoGridData = {
  layoutPreset?: "balanced" | "compact" | "editorial" | "feature";
  density?: "spacious" | "normal" | "dense";
  items?: BentoCard[];
};

// ─── Carousel Screen ─────────────────────────────────────────────────────────
export type CarouselScreenData = {
  _key: string;
  title: string;
  subtitle?: string;
  screenType?: string;
  screenKey?: { current?: string };
  bentoGrid?: BentoGridData;
};

// ─── Markdown frontmatter shape ───────────────────────────────────────────────
export type RawCard = Omit<BentoCard, "_key"> & { key: string };

export type ScreenFrontmatter = {
  screenKey: string;
  title: string;
  subtitle?: string;
  screenType?: string;
  color?: string;
  layoutPreset?: BentoGridData["layoutPreset"];
  density?: BentoGridData["density"];
  cards: RawCard[];
};

export function frontmatterToScreen(fm: ScreenFrontmatter): CarouselScreenData {
  return {
    _key: fm.screenKey,
    title: fm.title,
    subtitle: fm.subtitle,
    screenType: fm.screenType,
    screenKey: { current: fm.screenKey },
    bentoGrid: {
      layoutPreset: fm.layoutPreset,
      density: fm.density,
      items: fm.cards.map(({ key, ...rest }): BentoCard => ({
        _key: key,
        ...rest,
      })),
    },
  };
}
