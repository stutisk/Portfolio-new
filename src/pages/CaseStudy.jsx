import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { motion, useScroll, useSpring, useReducedMotion } from "framer-motion";
import { FaArrowLeft, FaGithub, FaExternalLinkAlt } from "react-icons/fa";

/* ------------------------------------------------------------------ */
/* DATA                                                                */
/* ------------------------------------------------------------------ */

const studies = {
  outzy: {
    title: "Outzy",
    tagline: "Meet new people through real-world activities.",
    summary:
      "Outzy helps people find others to join real-world activities like hikes, cafes and gym classes. Browse plans near you, request to join with a short message, and chat once the host accepts.",
    tags: ["Next.js", "React", "TypeScript", "Supabase", "Leaflet", "Tailwind"],
    live: "https://outzyy.vercel.app/",
    github: "https://github.com/stutisk/outzy",

    // Optional: path or URL to a 30-60s walkthrough (mp4). Leave "" to hide.
    video: "",
    videoPoster: "",

    meta: [
      {
        label: "Role",
        value: "Solo build: product flow, UI, database and security",
      },
      {
        label: "Focus",
        value: "Realtime chat and access control with Row Level Security",
      },
      {
        label: "Status",
        value: "Live on Vercel, sign in with Google to try it",
      },
    ],

    // TODO: replace/add real numbers (Lighthouse score, weeks to build, plans hosted).
    stats: [
      {
        value: "0",
        label: "custom servers",
        note: "Auth, data and realtime all run on Supabase",
      },
      {
        value: "4",
        label: "RLS policy groups",
        note: "Profiles, requests, activities, chats",
      },
      {
        value: "1:1",
        label: "realtime chat",
        note: "Opens only after the host accepts",
      },
    ],

    // Files in /public are served from the site root, so "/feed.png" maps to
    // public/feed.png. If you move them into public/case-studies/outzy/,
    // update each src below (e.g. "/case-studies/outzy/feed.png").
    // Missing files show a placeholder.
    screenshots: [
      {
        src: "/feed.png",
        alt: "Outzy feed showing nearby plans",
        caption: "Explore activities near you.",
        role: "Everyone",
        ratio: "aspect-[16/10]",
      },
      {
        src: "/create.png",
        alt: "Host creating an activity plan",
        caption: "Create and publish an activity plan.",
        role: "Host",
        ratio: "aspect-[16/10]",
      },
      {
        src: "/plan.png",
        alt: "User viewing a plan and requesting to join",
        caption: "View a plan and send a request to join.",
        role: "User / Guest",
        ratio: "aspect-[16/10]",
      },
      {
        src: "/requests.png",
        alt: "Host reviewing requests to join an activity",
        caption: "Review requests and accept or reject guests.",
        role: "Host",
        ratio: "aspect-[16/10]",
      },
      {
        src: "/chat.png",
        alt: "Host and guest chatting in real time",
        caption: "Chat privately after a request is accepted.",
        role: "Host + Guest",
        ratio: "aspect-[16/10]",
      },
    ],

    why: "I moved back to my hometown and didn't know many people. I wanted a way to meet new people, explore new places, and find others with similar interests, like fellow developers. Existing social apps are built around feeds and followers, not around doing one specific thing together, so I built something focused on that.",

    process: [
      {
        title: "Notebook",
        text: "I started with rough notes and plans in a notebook, before opening any tool.",
      },
      {
        title: "Notion",
        text: "I wrote user stories and sorted every feature into P0 (must ship) and P1 (nice to have), so I always knew what to build first.",
      },
      {
        title: "Figma",
        text: "I designed the screens in Figma, with some help from Figma AI, and browsed Framer sites for design inspiration. All before writing any code.",
      },
      {
        title: "Code",
        text: "Then I built it, starting with the P0 flow. The design changed along the way.",
      },
    ],

    // TODO: add one specific example (what changed from Figma, and why).
    processNote:
      "The Figma design changed once I started coding. I treated it as a starting point, not a spec, and adjusted screens as the real app showed what worked.",

    // TODO: add one concrete RLS moment (what broke, what finally made it click).
    hardest: {
      title: "The hardest part: learning Row Level Security",
      text: "The hardest part of the build was understanding how Supabase and Row Level Security work. Outzy has no backend of its own, so the browser talks straight to the database, and every rule about who can read or change a row has to live in a policy.",
    },

    problem: [
      {
        title: "Discovery",
        text: "It's hard to see what's happening nearby, filtered by category and time, or on a map.",
      },
      {
        title: "Trust",
        text: "You want to know who is hosting, and hosts want to read a guest's message before they accept.",
      },
      {
        title: "Coordination",
        text: "People shouldn't have to swap phone numbers too early. The plan, the host and the guest should stay in one thread.",
      },
    ],

    goals: [
      "Ship an end-to-end flow: discover, request to join, accept or reject, chat",
      "Make it feel good on mobile, with a bottom nav, a full-screen chat and readable cards",
      "Keep data secure by default with Row Level Security, not by hiding things in the UI",
    ],

    flow: [
      {
        title: "Sign in",
        text: "Google sign-in through Supabase Auth. After login, you land on a feed of activities near you.",
      },
      {
        title: "Discover",
        text: "Plans are sorted by distance, nearest first, with category filters and a switch between list and map. Distance uses the browser's location.",
      },
      {
        title: "Create a plan",
        text: "Anyone can post an activity: title, description, how many people, time, category, and a landmark instead of an exact address. The host can edit the plan later.",
      },
      {
        title: "Request to join",
        text: "A guest sends the host a short note explaining why they want to come. The host reads it and can accept or reject.",
      },
      {
        title: "Chat after a yes",
        text: "Once the host accepts, a private realtime 1:1 chat opens. Messages show up live, without a refresh, and nobody has to share a phone number first.",
      },
      {
        title: "Stay in the loop",
        text: "A Messages inbox lists every conversation, and unread badges in the navigation clear after you open the thread.",
      },
    ],

    tryIt: [
      "Sign in with one Google account and create a plan. It shows up under Yours on the feed.",
      "Open the live site in an incognito window, sign in with a second account, and send a join request on that plan.",
      "Back as the host, open Requests, read the note and accept. The chat opens.",
      "Send a message from either side and watch it appear live on the other.",
    ],

    stack: [
      {
        layer: "Frontend",
        tool: "Next.js (App Router), React, TypeScript",
        why: "One framework for pages and routing, deployed straight from the repo.",
      },
      {
        layer: "Styling",
        tool: "Tailwind CSS",
        why: "Quick to build the mobile bottom nav and the full-height chat.",
      },
      {
        layer: "Auth",
        tool: "Supabase Auth (Google)",
        why: "Google sign-in without running my own auth.",
      },
      {
        layer: "Database",
        tool: "Supabase Postgres + Row Level Security",
        why: "Access rules live in the database, not in the UI.",
      },
      {
        layer: "Realtime",
        tool: "Supabase Realtime",
        why: "New messages and unread badges show up without a refresh.",
      },
      {
        layer: "Maps",
        tool: "Leaflet + Nominatim",
        why: "Leaflet draws the feed map and location picker. Nominatim turns a landmark into coordinates through a server route.",
      },
      {
        layer: "Hosting",
        tool: "Vercel",
        why: "The live demo deploys from the repo.",
      },
      {
        layer: "Design",
        tool: "Figma (with Figma AI), Framer for inspiration",
        why: "I planned the screens before coding and browsed Framer sites for ideas.",
      },
    ],

    buildNotes: [
      "A database function creates the chat thread once a request is accepted, so the client never has to.",
      "One shared Realtime channel handles unread totals. This avoids duplicate channels when the desktop and mobile navigation both use the same hook.",
    ],

    security:
      "The browser talks to the database directly with Supabase's public key, so access control has to live in the database. Row Level Security policies sit on every sensitive table, so Postgres decides who can read or change a row, no matter what the UI shows.",

    policies: [
      {
        title: "Profiles",
        text: "Any signed-in user can read them, but you can only create or edit your own.",
      },
      {
        title: "Join requests",
        text: "Guests create them, the host and the guest can read them, and only the host can accept or reject.",
      },
      {
        title: "Activities",
        text: "Signed-in users can read them, and only the host can edit or delete their own.",
      },
      {
        title: "Chats and messages",
        text: "Only the host and the guest of a conversation can read or send messages.",
      },
    ],

    securityNote:
      "Every policy is defined in the SQL migrations in the repo, so the whole database setup can be reviewed and rebuilt.",

    tradeoffs: [
      {
        title: "Chat in a modal",
        text: "It keeps people on the feed, while the Messages page gives a full inbox and direct links to a conversation.",
      },
      {
        title: "Fallbacks over fragile images",
        text: "Third-party images and GIFs for card covers often broke, so every card now falls back to a category gradient and emoji instead of a broken image.",
      },
      {
        title: "Landmark, not address",
        text: "Hosts enter a landmark instead of an exact address, which is easier to write and avoids sharing a home address.",
      },
      {
        title: "Migrations in the repo",
        text: "The schema and policies are plain SQL files that run in filename order, so anyone can reproduce the database.",
      },
    ],

    // Edit these so they are genuinely yours.
    differently: [
      "Design the privacy model first. Coordinates are readable by any signed-in user today; I'd store a separate approximate location from day one.",
      "Add notifications earlier. A chat only works if people know a request arrived.",
      "Learn Row Level Security before building features. Deciding who can read and change each row is easier up front than retrofitting it.",
    ],

    limitations: [
      "Row Level Security works on rows, not columns, so any signed-in user can read an activity's coordinates. Showing only an approximate location until a request is accepted is the planned fix.",
      "There are no email or push notifications yet, so people only see new requests and messages when they open the app.",
      "Geocoding uses the free public Nominatim service, which has usage limits.",
    ],

    next: [
      "Email notifications when a request or message arrives",
      "A waitlist and guest limits for hosts",
      "An approximate location until a request is accepted",
      "A last-message preview in the Messages list",
    ],
  },
};

const sections = [
  { id: "overview", label: "Overview" },
  { id: "why", label: "Why" },
  { id: "problem", label: "Problem" },
  { id: "process", label: "Process" },
  { id: "product", label: "Product" },
  { id: "try", label: "Try it" },
  { id: "build", label: "Build" },
  { id: "security", label: "Security" },
  { id: "learnings", label: "Learnings" },
  { id: "next", label: "Next" },
];

/* ------------------------------------------------------------------ */
/* SMALL COMPONENTS                                                    */
/* ------------------------------------------------------------------ */

const Section = ({ id, title, intro, children }) => {
  const reduce = useReducedMotion();
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: reduce ? 0 : 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="mb-20 scroll-mt-20"
    >
      <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
        {title}
      </h2>
      {intro && (
        <p className="text-gray-400 mt-2 max-w-2xl leading-7">{intro}</p>
      )}
      <div className="mt-8">{children}</div>
    </motion.section>
  );
};

const ImageFrame = ({
  src,
  alt,
  caption,
  ratio = "aspect-[16/10]",
  role,
  onClick,
}) => {
  const [failed, setFailed] = useState(false);

  return (
    <figure>
      <button
        type="button"
        onClick={onClick}
        aria-label={`View full screenshot: ${alt}`}
        className="group block w-full text-left"
      >
        <div
          className={`${ratio} relative w-full overflow-hidden rounded-2xl border border-gray-800 bg-neutral-900`}
        >
          {failed ? (
            <div className="h-full w-full flex flex-col items-center justify-center gap-1 px-4">
              <span className="text-xs text-pink-400">
                Screenshot unavailable
              </span>
              <span className="text-[11px] text-gray-500 break-all">
                {src}
              </span>
            </div>
          ) : (
            <img
              src={src}
              alt={alt}
              loading="lazy"
              onError={() => setFailed(true)}
              className="h-full w-full object-cover object-top transition-transform duration-300 group-hover:scale-[1.02]"
            />
          )}

          {!failed && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-colors group-hover:bg-black/30">
              <span className="rounded-full bg-black/70 px-4 py-2 text-xs text-white opacity-0 transition-opacity group-hover:opacity-100">
                View full screenshot ↗
              </span>
            </div>
          )}
        </div>
      </button>

      <figcaption className="mt-3 space-y-1">
        {role && (
          <span className="inline-block rounded-full border border-gray-700 px-2.5 py-1 text-xs text-pink-400">
            {role}
          </span>
        )}
        {caption && (
          <p className="text-sm text-gray-400 leading-6">{caption}</p>
        )}
      </figcaption>
    </figure>
  );
};

const Node = ({ title, sub, accent, small }) => (
  <div
    className={`rounded-xl border px-4 ${small ? "py-3" : "py-4"} ${
      accent
        ? "border-pink-500/40 bg-pink-500/5"
        : "border-gray-700 bg-neutral-900"
    }`}
  >
    <p className="text-white text-sm font-semibold">{title}</p>
    {sub && <p className="text-gray-400 text-xs leading-5 mt-1">{sub}</p>}
  </div>
);

const Arrow = ({ label }) => (
  <div className="flex items-center gap-3 pl-4">
    <div className="flex flex-col items-center text-pink-400/70 leading-none">
      <span className="block w-px h-4 bg-pink-400/40" />
      <span className="text-xs">▼</span>
    </div>
    <span className="text-xs text-gray-400">{label}</span>
  </div>
);

const Architecture = () => (
  <figure>
    <div className="rounded-2xl border border-gray-800 bg-neutral-900/60 p-5 md:p-6 space-y-3">
      <Node
        accent
        title="Browser · Next.js App Router"
        sub="React, TypeScript, Tailwind, Leaflet map and location picker"
      />
      <Arrow label="supabase-js with the public key. Every read and write is checked by RLS." />
      <div className="rounded-xl border border-dashed border-pink-500/40 p-4">
        <p className="text-xs font-medium text-pink-400 mb-3">Supabase</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
          <Node small title="Auth" sub="Google sign-in" />
          <Node
            small
            title="Postgres + RLS"
            sub="Policies on every sensitive table"
          />
          <Node small title="Realtime" sub="Messages and unread badges" />
          <Node
            small
            title="DB function"
            sub="Creates the chat when a request is accepted"
          />
        </div>
      </div>
      <Arrow label="Landmark text goes through a server route" />
      <Node
        small
        title="Nominatim"
        sub="Turns a landmark into coordinates (free tier, rate limited)"
      />
    </div>
    <figcaption className="text-sm text-gray-400 mt-2">
      Architecture: the browser talks to Supabase directly, so security lives in
      the database.
    </figcaption>
  </figure>
);

/* ------------------------------------------------------------------ */
/* PAGE                                                                */
/* ------------------------------------------------------------------ */

export const CaseStudy = () => {
  const { slug } = useParams();
  const study = studies[slug];

  // Hooks must live inside the component and run before any early return.
  const [activeScreenshot, setActiveScreenshot] = useState(null);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 24,
    restDelta: 0.001,
  });

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = study
      ? `${study.title} · Case study | Stuti Kumari`
      : "Stuti Kumari | Portfolio";
    return () => {
      document.title = "Stuti Kumari | Portfolio";
    };
  }, [study]);

  // Close the screenshot viewer with Escape and lock page scroll while open.
  useEffect(() => {
    if (!activeScreenshot) return;
    const onKey = (e) => {
      if (e.key === "Escape") setActiveScreenshot(null);
    };
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [activeScreenshot]);

  if (!study) {
    return (
      <div className="min-h-screen bg-[#0f0f0f] text-gray-300 px-6 py-16">
        <div className="max-w-3xl mx-auto">
          <Link
            to="/"
            state={{ tab: "Projects" }}
            className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white"
          >
            <FaArrowLeft className="w-3 h-3" />
            Projects
          </Link>
          <h1 className="text-3xl font-bold text-white mt-8">
            Case study not found
          </h1>
        </div>
      </div>
    );
  }

  const [heroShot, ...phoneShots] = study.screenshots;

  return (
    <div className="min-h-screen bg-[#0f0f0f] text-gray-300">
      <motion.div
        style={{ scaleX }}
        className="fixed top-0 left-0 right-0 h-0.5 origin-left bg-gradient-to-r from-pink-500 to-purple-500 z-50"
      />

      {/* Sticky section nav */}
      <nav
        aria-label="Case study sections"
        className="sticky top-0 z-40 border-b border-gray-800/80 bg-[#0f0f0f]/85 backdrop-blur"
      >
        <div className="max-w-4xl mx-auto px-6 h-12 flex items-center gap-6">
          <Link
            to="/"
            state={{ tab: "Projects" }}
            className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-pink-400 transition-colors shrink-0"
          >
            <FaArrowLeft className="w-3 h-3" />
            Projects
          </Link>
          <div className="flex gap-5 overflow-x-auto text-sm [scrollbar-width:none]">
            {sections.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="text-gray-400 hover:text-white whitespace-nowrap transition-colors"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </nav>

      <main className="px-6 py-12 md:py-16">
        <article className="max-w-4xl mx-auto">
          {/* HEADER */}
          <motion.header
            id="overview"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="mb-16 scroll-mt-20"
          >
            <p className="text-pink-400 text-sm font-medium tracking-wide mb-3">
              Case study
            </p>
            <h1 className="text-5xl md:text-6xl font-bold text-white tracking-tight">
              {study.title}
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mt-4 max-w-2xl leading-snug">
              {study.tagline}
            </p>
            <p className="text-gray-300 mt-4 max-w-2xl leading-7">
              {study.summary}
            </p>

            <div className="flex flex-wrap gap-2 mt-6">
              {study.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-sm px-3 py-1 rounded-full bg-neutral-800 text-gray-200 border border-gray-700"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-3 mt-6">
              <a
                href={study.live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium bg-gradient-to-r from-pink-500 to-purple-500 text-white shadow-lg shadow-pink-500/25 hover:from-pink-400 hover:to-purple-400 transition-all"
              >
                <FaExternalLinkAlt className="w-3.5 h-3.5" />
                Live demo
              </a>
              <a
                href={study.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium bg-neutral-900/80 border border-gray-700 text-gray-200 hover:text-white hover:border-gray-500 transition-all"
              >
                <FaGithub className="w-4 h-4" />
                GitHub
              </a>
            </div>

            {/* Hero screenshot */}
            <div className="mt-10">
              <ImageFrame
                {...heroShot}
                onClick={() => setActiveScreenshot(heroShot)}
              />
            </div>

            {/* Stats */}
            <dl className="grid sm:grid-cols-3 gap-px mt-8 rounded-2xl overflow-hidden border border-gray-800 bg-gray-800">
              {study.stats.map((s) => (
                <div key={s.label} className="bg-neutral-900 p-5">
                  <dd className="text-3xl font-bold text-white">{s.value}</dd>
                  <dt className="text-sm font-medium text-pink-400 mt-1">
                    {s.label}
                  </dt>
                  <p className="text-sm text-gray-400 mt-1 leading-6">
                    {s.note}
                  </p>
                </div>
              ))}
            </dl>

            {/* Meta */}
            <dl className="grid sm:grid-cols-3 gap-6 mt-8">
              {study.meta.map((item) => (
                <div key={item.label}>
                  <dt className="text-xs font-semibold uppercase tracking-wider text-pink-400">
                    {item.label}
                  </dt>
                  <dd className="text-gray-200 text-sm leading-6 mt-1">
                    {item.value}
                  </dd>
                </div>
              ))}
            </dl>
          </motion.header>

          {/* WHY */}
          <Section id="why" title="Why I built it">
            <blockquote className="border-l-2 border-pink-500 pl-6 text-lg md:text-xl text-gray-100 leading-8 max-w-3xl">
              {study.why}
            </blockquote>
          </Section>

          {/* PROBLEM */}
          <Section
            id="problem"
            title="The problem"
            intro="Social apps are good at feeds and followers. They are not built for one plan, one host, a few guests, and a clear outcome."
          >
            <div className="grid sm:grid-cols-3 gap-8">
              {study.problem.map((item) => (
                <div
                  key={item.title}
                  className="border-t-2 border-pink-500/60 pt-4"
                >
                  <h3 className="text-white font-semibold text-lg">
                    {item.title}
                  </h3>
                  <p className="text-gray-300 text-[15px] leading-7 mt-2">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>

            <h3 className="text-lg font-semibold text-white mt-12 mb-4">
              Goals
            </h3>
            <ul className="space-y-3 max-w-3xl">
              {study.goals.map((goal) => (
                <li
                  key={goal}
                  className="flex gap-3 text-gray-200 text-[15px] leading-7"
                >
                  <span className="mt-3 w-1.5 h-1.5 rounded-full bg-pink-400 shrink-0" />
                  <span>{goal}</span>
                </li>
              ))}
            </ul>
          </Section>

          {/* PROCESS */}
          <Section
            id="process"
            title="How I worked"
            intro="I planned on paper first and only opened the editor once the priorities and screens were clear."
          >
            <ol className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {study.process.map((step, index) => (
                <li
                  key={step.title}
                  className="bg-neutral-900/80 border border-gray-800 rounded-2xl p-5"
                >
                  <span className="text-xs font-medium text-pink-400">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-white font-semibold mt-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-300 text-[15px] leading-7 mt-2">
                    {step.text}
                  </p>
                </li>
              ))}
            </ol>
            <p className="border-l-2 border-pink-500 pl-6 mt-8 text-gray-100 leading-8 max-w-3xl">
              {study.processNote}
            </p>
          </Section>

          {/* PRODUCT */}
          <Section
            id="product"
            title="What it does"
            intro="The whole product is one loop: find a plan, ask to join, and talk only after the host says yes."
          >
            <ol className="relative border-l border-gray-800 ml-3 space-y-8">
              {study.flow.map((step, index) => (
                <li key={step.title} className="pl-8 relative">
                  <span className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-[#0f0f0f] border border-pink-500/60 text-[11px] font-medium text-pink-400 flex items-center justify-center">
                    {index + 1}
                  </span>
                  <h3 className="text-white font-semibold text-lg leading-6">
                    {step.title}
                  </h3>
                  <p className="text-gray-300 text-[15px] leading-7 mt-1 max-w-2xl">
                    {step.text}
                  </p>
                </li>
              ))}
            </ol>

            <div className="grid sm:grid-cols-2 gap-4 mt-12">
              {phoneShots.map((shot) => (
                <ImageFrame
                  key={shot.src}
                  {...shot}
                  onClick={() => setActiveScreenshot(shot)}
                />
              ))}
            </div>
          </Section>

          {/* TRY IT */}
          <Section
            id="try"
            title="Try it yourself"
            intro="You need two accounts to see both sides. A second browser window in incognito works."
          >
            {study.video && (
              <video
                controls
                playsInline
                preload="metadata"
                poster={study.videoPoster || undefined}
                className="w-full rounded-2xl border border-gray-800 mb-8"
              >
                <source src={study.video} type="video/mp4" />
              </video>
            )}
            <ol className="grid sm:grid-cols-2 gap-4">
              {study.tryIt.map((step, index) => (
                <li
                  key={step}
                  className="flex gap-4 bg-neutral-900/80 border border-gray-800 rounded-2xl p-5"
                >
                  <span className="w-7 h-7 shrink-0 rounded-full bg-pink-500/10 text-pink-400 text-sm font-medium flex items-center justify-center">
                    {index + 1}
                  </span>
                  <span className="text-gray-200 text-[15px] leading-7">
                    {step}
                  </span>
                </li>
              ))}
            </ol>
          </Section>

          {/* BUILD */}
          <Section
            id="build"
            title="How it's built"
            intro="One framework on the front, Supabase for everything behind it."
          >
            <div className="mb-10">
              <Architecture />
            </div>

            <div className="overflow-x-auto rounded-2xl border border-gray-800">
              <table className="w-full min-w-[640px] text-left text-[15px]">
                <caption className="sr-only">
                  Tech stack and why I chose each piece
                </caption>
                <thead className="bg-neutral-900 text-xs uppercase tracking-wider text-gray-400">
                  <tr>
                    <th scope="col" className="px-5 py-3 font-medium">
                      Layer
                    </th>
                    <th scope="col" className="px-5 py-3 font-medium">
                      What I used
                    </th>
                    <th scope="col" className="px-5 py-3 font-medium">
                      Why
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-800">
                  {study.stack.map((row) => (
                    <tr key={row.layer} className="align-top">
                      <th
                        scope="row"
                        className="px-5 py-4 text-white font-semibold whitespace-nowrap"
                      >
                        {row.layer}
                      </th>
                      <td className="px-5 py-4 text-gray-100">{row.tool}</td>
                      <td className="px-5 py-4 text-gray-300 leading-7">
                        {row.why}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h3 className="text-lg font-semibold text-white mt-12 mb-4">
              Two details worth knowing
            </h3>
            <ul className="space-y-3 max-w-3xl">
              {study.buildNotes.map((note) => (
                <li
                  key={note}
                  className="flex gap-3 text-gray-200 text-[15px] leading-7"
                >
                  <span className="mt-3 w-1.5 h-1.5 rounded-full bg-pink-400 shrink-0" />
                  <span>{note}</span>
                </li>
              ))}
            </ul>
          </Section>

          {/* SECURITY */}
          <Section id="security" title="Security">
            <div className="bg-neutral-900/80 border border-gray-800 border-l-2 border-l-pink-500 rounded-2xl p-6">
              <p className="text-gray-100 leading-8">{study.security}</p>
            </div>
            <div className="mt-6 divide-y divide-gray-800 border-y border-gray-800">
              {study.policies.map((policy) => (
                <div
                  key={policy.title}
                  className="grid md:grid-cols-[220px_1fr] gap-2 md:gap-8 py-5"
                >
                  <h3 className="text-white font-semibold">{policy.title}</h3>
                  <p className="text-gray-300 text-[15px] leading-7">
                    {policy.text}
                  </p>
                </div>
              ))}
            </div>
            <p className="text-gray-400 text-sm leading-6 mt-4">
              {study.securityNote}
            </p>
          </Section>

          {/* LEARNINGS */}
          <Section id="learnings" title="Tradeoffs and learnings">
            <div className="border-l-2 border-pink-500 pl-6 mb-10 max-w-3xl">
              <h3 className="text-white font-semibold text-lg">
                {study.hardest.title}
              </h3>
              <p className="text-gray-100 text-[15px] leading-7 mt-2">
                {study.hardest.text}
              </p>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {study.tradeoffs.map((item) => (
                <div
                  key={item.title}
                  className="bg-neutral-900/80 border border-gray-800 rounded-2xl p-5"
                >
                  <h3 className="text-white font-semibold">{item.title}</h3>
                  <p className="text-gray-300 text-[15px] leading-7 mt-2">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>

            <h3 className="text-lg font-semibold text-white mt-12 mb-4">
              What I'd do differently
            </h3>
            <ul className="space-y-3 max-w-3xl">
              {study.differently.map((item) => (
                <li
                  key={item}
                  className="flex gap-3 text-gray-200 text-[15px] leading-7"
                >
                  <span className="mt-3 w-1.5 h-1.5 rounded-full bg-pink-400 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Section>

          {/* LIMITATIONS + NEXT */}
          <Section id="next" title="Known limitations and what's next">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-neutral-900/80 border border-gray-800 rounded-2xl p-6">
                <h3 className="text-white font-semibold mb-1">
                  Known limitations
                </h3>
                <p className="text-gray-400 text-sm mb-4">
                  What I know isn't right yet, and how I plan to fix it.
                </p>
                <ul className="space-y-3">
                  {study.limitations.map((item) => (
                    <li
                      key={item}
                      className="flex gap-3 text-gray-200 text-[15px] leading-7"
                    >
                      <span className="mt-3 w-1.5 h-1.5 rounded-full bg-gray-500 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-neutral-900/80 border border-gray-800 rounded-2xl p-6">
                <h3 className="text-white font-semibold mb-4">What's next</h3>
                <ul className="space-y-3">
                  {study.next.map((item) => (
                    <li
                      key={item}
                      className="flex gap-3 text-gray-200 text-[15px] leading-7"
                    >
                      <span className="mt-3 w-1.5 h-1.5 rounded-full bg-pink-400 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Section>

          {/* CLOSING CTA */}
          <div className="rounded-3xl border border-gray-800 bg-gradient-to-br from-neutral-900 to-neutral-950 p-8 md:p-10 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white">
              Want to see it in action?
            </h2>
            <p className="text-gray-300 mt-2">
              Sign in with Google and create your first plan in under a minute.
            </p>
            <div className="flex flex-wrap justify-center gap-3 mt-6">
              <a
                href={study.live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium bg-gradient-to-r from-pink-500 to-purple-500 text-white shadow-lg shadow-pink-500/25 hover:from-pink-400 hover:to-purple-400 transition-all"
              >
                <FaExternalLinkAlt className="w-3.5 h-3.5" />
                Live demo
              </a>
              <a
                href={study.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium bg-neutral-900/80 border border-gray-700 text-gray-200 hover:text-white hover:border-gray-500 transition-all"
              >
                <FaGithub className="w-4 h-4" />
                GitHub
              </a>
              <Link
                to="/"
                state={{ tab: "Projects" }}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium text-gray-300 hover:text-pink-400 transition-colors"
              >
                <FaArrowLeft className="w-3 h-3" />
                More projects
              </Link>
            </div>
          </div>
        </article>
      </main>

      {/* FULL-SCREEN SCREENSHOT VIEWER */}
      {activeScreenshot && (
        <div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black/95 p-4 md:p-8"
          role="dialog"
          aria-modal="true"
          aria-label="Full-screen screenshot viewer"
          onClick={() => setActiveScreenshot(null)}
        >
          <div
            className="flex w-full max-w-6xl items-center justify-between gap-4 pb-4"
            onClick={(e) => e.stopPropagation()}
          >
            <p className="text-sm text-gray-300">{activeScreenshot.alt}</p>

            <button
              type="button"
              onClick={() => setActiveScreenshot(null)}
              className="rounded-full border border-gray-700 px-4 py-2 text-sm text-white hover:bg-white/10"
              aria-label="Close screenshot"
            >
              ✕ Close
            </button>
          </div>

          <div
            className="flex min-h-0 w-full max-w-6xl flex-1 items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={activeScreenshot.src}
              alt={activeScreenshot.alt}
              className="max-h-full max-w-full rounded-lg object-contain"
            />
          </div>

          <p className="pt-4 text-xs text-gray-500">
            Click outside the image or press Esc to close
          </p>
        </div>
      )}
    </div>
  );
};