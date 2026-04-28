import type {
  BentoCard,
  BentoCardVariant,
  CarouselScreenData,
} from "@/lib/content";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import contactBackgroundCircles from "./ui/backgroundcircles";
import contactBackgroundContour from "./ui/backgroundcontour";

type BentoGridProps = {
  screen: CarouselScreenData;
};

// ─── Card layout classes (desktop 4-col dense grid) ──────────────────────────
const sizeLayoutClass: Record<NonNullable<BentoCard["size"]>, string> = {
  xs: "md:col-span-1 md:row-span-1",
  sm: "md:col-span-1 md:row-span-2",
  md: "md:col-span-2 md:row-span-1",
  lg: "md:col-span-2 md:row-span-2",
  xl: "md:col-span-4 md:row-span-2",
};

const variantLayoutClass: Partial<Record<BentoCardVariant, string>> = {
  hero: "md:col-span-3 md:row-span-1",
  social: "md:col-span-1 md:row-span-1",
  stat: "md:col-span-1 md:row-span-1",
  photogear: "md:col-span-1 md:row-span-1",
  location: "md:col-span-2 md:row-span-1",
};

function getCardLayoutClass(item: BentoCard) {
  const variant = item.variant ?? "default";

  if (variantLayoutClass[variant]) {
    return variantLayoutClass[variant];
  }

  if (item.size) {
    return sizeLayoutClass[item.size];
  }

  return "md:col-span-2 md:row-span-1";
}

function SocialIcon({ icon }: { icon?: BentoCard["icon"] }) {
  const cls = "w-6 h-6";
  if (icon === "github")
    return (
      <svg className={cls} viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
      </svg>
    );
  if (icon === "twitter")
    return (
      <svg className={cls} viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    );
  if (icon === "linkedin")
    return (
      <svg className={cls} viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    );
  return null;
}

// ─── Card variants ────────────────────────────────────────────────────────────
function HeroCard({ item }: { item: BentoCard }) {
  return (
    <div className="relative flex h-auto flex-col justify-end overflow-hidden bg-[#2C2C2C] border-2 border-[#BEADE4] rounded-2xl p-4 text-background md:h-full md:p-5">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 560"
        preserveAspectRatio="xMidYMid slice"
        className="pointer-events-none absolute inset-0 h-full w-full opacity-15"
        aria-hidden="true"
      >
        <g fill="none">
          {contactBackgroundContour.map((path, index) => (
            <path key={index} d={path} stroke="#beade4" strokeWidth="2" />
          ))}
        </g>
      </svg>
      <div className="relative z-10">
        {item.eyebrow && (
          <p className="mb-2 text-xs uppercase tracking-widest text-background/60">
            {item.eyebrow}
          </p>
        )}
        <h2 className="text-2xl font-bold leading-tight md:text-4xl">
          {item.title}
        </h2>
        {item.body && (
          <p className="mt-3 text-sm text-background/70 leading-relaxed">
            {item.body} 
            <a className="underline underline-offset-4" target="_blank" href={item.link}>
              {item.ctabuttonforlink}
            </a>
          </p>
        )}
      </div>
    </div>
  );
}

function StatCard({ item }: { item: BentoCard }) {
  return (
    <div className="flex h-auto flex-col justify-between p-4 md:h-full md:p-5">
      {item.eyebrow && (
        <p className="text-xs uppercase tracking-widest text-muted-foreground">
          {item.eyebrow}
        </p>
      )}
      <p className="text-xl text-left md:text-center font-bold text-foreground lg:text-3xl">
        {item.stat}
      </p>
      {item.body && (
        <p className="text-xs text-muted-foreground leading-relaxed">
          {item.body}
        </p>
      )}
    </div>
  );
}

function PhotoGearCard({ item }: { item: BentoCard }) {
  return (
    <div className="flex justify-center items-center p-4 md:h-full md:p-5 bg-[#F2F2F2]">
      <p className="text-lg text-center font-thin text-foreground md:text-xl lg:text-2xl">
        {item.stat}
      </p>
    </div>
  );
}

function SocialCard({ item }: { item: BentoCard }) {
  return (
    <a
      href={item.href ?? "#"}
      target="_blank"
      rel="noreferrer"
      className="flex h-auto flex-col items-start justify-between p-4 transition-colors hover:bg-muted/40 md:h-full md:p-5"
    >
      <SocialIcon icon={item.icon} />
      <div>
        {item.eyebrow && (
          <p className="text-xs uppercase tracking-widest text-muted-foreground">
            {item.eyebrow}
          </p>
        )}
        <p className="mt-0.5 text-sm font-medium break-all">{item.handle}</p>
      </div>
    </a>
  );
}

function SpotifyCard({ item }: { item: BentoCard }) {
  const topSong = item.topSong ?? {
    title: "BIRDS OF A FEATHER",
    artist: "Billie Eilish",
    album: "HIT ME HARD AND SOFT",
    cover: "https://picsum.photos/seed/default-album-cover/640/640",
  };

  const topArtists = item.topArtists?.length
    ? item.topArtists.slice(0, 5)
    : ["Billie Eilish", "The 1975", "Keshi", "Joji", "Daniel Caesar"];

  return (
    <div className="relative flex h-auto flex-col xl:flex-row xl:justify-evenly xl:items-center gap-4 overflow-hidden rounded-2xl border border-[#1DB954]/30 bg-linear-to-br from-[#1DB954]/10 via-card to-card p-4 lg:h-full lg:p-5">
      <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-[#1DB954]/15 blur-2xl" />

      <div className="relative flex items-center gap-3">
        <img
          src={
            topSong.cover ??
            "https://picsum.photos/seed/default-album-cover/640/640"
          }
          alt={`${topSong.title} album cover`}
          className="h-20 w-20 shrink-0 rounded-xl border border-border/50 object-cover shadow-lg md:h-20 md:w-20"
        />
        <div className="min-w-0">
          <p className="flex items-center gap-1 text-[11px] uppercase tracking-widest text-[#1DB954]">
            <span className="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-[#1DB954]" />
            now playing
          </p>
          <p className="mt-1 truncate text-base font-semibold leading-tight text-foreground md:text-lg">
            {topSong.title}
          </p>
          <p className="truncate text-sm text-muted-foreground">
            {topSong.artist}
          </p>
          {topSong.album && (
            <p className="truncate text-xs text-muted-foreground/80">
              {topSong.album}
            </p>
          )}
        </div>
      </div>

      <div className="relative space-y-2">
        <p className="text-xs uppercase tracking-widest text-muted-foreground">
          top 5 artists
        </p>
        <ol className="grid gap-1 grid-cols-2">
          {topArtists.map((artist, index) => (
            <li
              key={artist}
              className="flex items-center gap-2 rounded-md bg-muted/50 px-2.5 py-1.5 text-sm text-foreground/90"
            >
              <span className="w-4 text-xs font-medium text-muted-foreground">
                {index + 1}.
              </span>
              <Tooltip>
                <TooltipTrigger className="text-left">{artist}</TooltipTrigger>
                <TooltipContent>
                  <span className="truncate font-medium">{artist}</span>
                </TooltipContent>
              </Tooltip>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}

function ProjectCard({ item }: { item: BentoCard }) {
  const href = item.ctaHref ?? item.href;
  const content = (
    <>
      <div className="flex flex-1 flex-col p-4 md:p-5">
        <h3 className="font-semibold leading-snug transition-colors group-hover:text-primary">
          {item.title}
        </h3>
        {item.body && (
          <p className="mt-1.5 text-sm text-muted-foreground">{item.body}</p>
        )}
        {item.tags && (
          <div className="mt-4 flex flex-wrap gap-1.5 md:mt-6">
            {item.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-md bg-muted px-2 py-0.5 text-xs font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
      {item.image && (
        <div className="relative h-36 shrink-0 overflow-hidden md:h-[60%]">
          <img
            src={item.image}
            alt={item.title}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
          />
          {item.eyebrow && (
            <span className="absolute left-3 top-3 rounded-full bg-background/80 px-2 py-0.5 text-xs backdrop-blur-sm">
              {item.eyebrow}
            </span>
          )}
        </div>
      )}
    </>
  );

  if (!href) {
    return (
      <div className="group flex h-auto flex-col overflow-hidden md:h-full">
        {content}
      </div>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="group flex h-auto flex-col overflow-hidden md:h-full"
    >
      {content}
    </a>
  );
}

function PhotoCard({ item }: { item: BentoCard }) {
  const content = (
    <>
      {item.image && (
        <img
          src={item.image}
          alt={item.title}
          className="h-full w-full object-cover"
        />
      )}
      <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
        {item.eyebrow && (
          <p className="text-xs uppercase tracking-widest text-white/70">
            {item.eyebrow}
          </p>
        )}
        <p className="mt-0.5 font-semibold leading-snug">{item.title}</p>
        {item.body && <p className="mt-1 text-xs text-white/60">{item.body}</p>}
      </div>
    </>
  );

  if (!item.href) {
    return (
      <div className="relative min-h-56 overflow-hidden md:h-full">
        {content}
      </div>
    );
  }

  return (
    <a
      href={item.href}
      className="group relative block min-h-56 overflow-hidden md:h-full"
    >
      {content}
    </a>
  );
}

function PostCard({ item }: { item: BentoCard }) {
  return (
    <div className="flex h-auto flex-col overflow-hidden md:h-full">
      {item.image && (
        <div className="h-40 shrink-0 overflow-hidden md:h-[35%]">
          <img
            src={item.image}
            alt={item.title}
            className="h-full w-full object-cover"
          />
        </div>
      )}
      <div className="flex flex-1 flex-col p-4">
        {item.eyebrow && (
          <p className="text-xs uppercase tracking-widest text-muted-foreground">
            {item.eyebrow}
          </p>
        )}
        <h3 className="mt-1.5 font-semibold leading-snug md:line-clamp-3">
          {item.title}
        </h3>
        {item.body && (
          <p className="mt-2 text-sm text-muted-foreground md:line-clamp-3">
            {item.body}
          </p>
        )}
        {item.ctaLabel && item.ctaHref && (
          <a
            href={item.ctaHref}
            className="mt-3 block text-xs font-medium text-primary hover:underline"
          >
            {item.ctaLabel}
          </a>
        )}
      </div>
    </div>
  );
}

function TagsCard({ item }: { item: BentoCard }) {
  return (
    <div className="flex h-auto flex-col p-4 md:h-full md:p-5">
      {item.eyebrow && (
        <p className="mb-3 text-xs uppercase tracking-widest text-muted-foreground">
          {item.eyebrow}
        </p>
      )}
      <h3 className="mb-3 font-semibold">{item.title}</h3>
      <div className="flex flex-wrap gap-2">
        {item.tags?.map((t) => (
          <span
            key={t}
            className="rounded-lg bg-muted px-3 py-1 text-sm font-medium"
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

function CtaCard({ item }: { item: BentoCard }) {
  return (
    <div className="relative flex h-auto flex-col justify-between overflow-hidden rounded-2xl border-2 border-[#BEADE4] bg-foreground p-4 text-background md:h-full md:p-5">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 560"
        preserveAspectRatio="xMidYMid slice"
        className="pointer-events-none absolute inset-0 h-full w-full opacity-45"
        aria-hidden="true"
      >
        {contactBackgroundCircles.map(([r, cx, cy], index) => (
          <circle
            key={`${cx}-${cy}-${index}`}
            r={r}
            cx={cx}
            cy={cy}
            stroke="#beade4"
            strokeOpacity="0.5"
            strokeWidth="2"
            fill="none"
          />
        ))}
      </svg>

      <div className="relative z-10">
        {item.eyebrow && (
          <p className="text-xs uppercase tracking-widest text-background/60">
            {item.eyebrow}
          </p>
        )}
      </div>

      <div className="relative z-99">
        <h3 className="text-lg font-bold leading-snug md:text-xl">
          {item.title}
        </h3>
        {item.body && (
          <p className="mt-2 text-sm text-background/70 leading-relaxed">
            {item.body}
          </p>
        )}
      </div>
      {item.ctaLabel && item.ctaHref && (
        <a
          href={item.ctaHref}
          className="mt-4 inline-block rounded-lg bg-background px-4 py-2 text-sm font-semibold text-foreground transition-opacity hover:opacity-90 z-99"
        >
          {item.ctaLabel}
        </a>
      )}
    </div>
  );
}

function TextCard({ item }: { item: BentoCard }) {
  return (
    <div className="flex h-auto flex-col p-4 md:h-full md:p-5">
      {item.eyebrow && (
        <p className="mb-1 text-xs uppercase tracking-widest text-muted-foreground">
          {item.eyebrow}
        </p>
      )}
      <h3 className="font-semibold">{item.title}</h3>
      {item.body && (
        <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
          {item.body}
        </p>
      )}
    </div>
  );
}

// ─── Variant dispatcher ───────────────────────────────────────────────────────
function CardContent({ item }: { item: BentoCard }) {
  const v: BentoCardVariant = item.variant ?? "default";
  if (v === "hero") return <HeroCard item={item} />;
  if (v === "stat" || v === "location") return <StatCard item={item} />;
  if (v === "photogear") return <PhotoGearCard item={item} />;
  if (v === "social") return <SocialCard item={item} />;
  if (v === "spotify") return <SpotifyCard item={item} />;
  if (v === "project") return <ProjectCard item={item} />;
  if (v === "photo") return <PhotoCard item={item} />;
  if (v === "post") return <PostCard item={item} />;
  if (v === "tags") return <TagsCard item={item} />;
  if (v === "cta") return <CtaCard item={item} />;
  return <TextCard item={item} />;
}

// ─── BentoGrid ────────────────────────────────────────────────────────────────
export default function BentoGrid({ screen }: BentoGridProps) {
  const items = screen.bentoGrid?.items ?? [];

  return (
    <section className="flex h-full min-h-0 w-full flex-col overflow-hidden p-3 md:p-6">
      {/* Screen header */}
      <div className="mb-3 shrink-0 md:mb-4">
        {screen.screenType && (
          <p className="text-md sm:text-lg uppercase tracking-widest text-muted-foreground">
            {screen.screenType}
          </p>
        )}
        <h1 className="text-8xl sm:text-9xl font-thin md:text-9xl tracking-tighter leading-none">
          {screen.title}
        </h1>
        {screen.subtitle && (
          <p className="mt-4 text-md sm:text-lg text-muted-foreground">
            {screen.subtitle}
          </p>
        )}
      </div>

      {/* Bento grid */}
      <div className="no-scrollbar flex min-h-0 flex-1 flex-col gap-3 overflow-y-auto overscroll-contain md:grid md:grid-flow-dense md:grid-cols-6 md:auto-rows-[minmax(140px,1fr)] md:gap-4">
        {items.map((item, index) => {
          const variant = item.variant ?? "default";
          return (
            <article
              key={item._key}
              className={`w-full shrink-0 overflow-hidden rounded-2xl bg-card md:min-h-0 text-black ${getCardLayoutClass(item)}`}
            >
              <CardContent item={item} />
            </article>
          );
        })}
      </div>
    </section>
  );
}
