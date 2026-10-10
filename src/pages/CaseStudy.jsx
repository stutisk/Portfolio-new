import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { FaArrowLeft, FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const studies = {
  outzy: {
    title: "Outzy",
    tagline: "Meet new people through real-world activities.",
    summary:
      "Outzy helps people find others to join real-world activities like hikes, cafes and gym classes. Browse plans near you, request to join with a short message, and chat once the host accepts.",
    tags: ["Next.js", "React", "TypeScript", "Supabase", "Leaflet", "Tailwind"],
    live: "https://outzyy.vercel.app/",
    github: "https://github.com/stutisk/outzy",
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
    why: "I moved back to my hometown and didn't know many people. I wanted a way to meet new people, explore new places, and find others with similar interests, like fellow developers. Existing social apps are built around feeds and followers, not around doing one specific thing together, so I built something focused on that.",
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
    built: [
      {
        title: "Supabase, no custom backend",
        text: "Google login, the Postgres database, Realtime chat, and Row Level Security all live in Supabase, so I could ship the whole product without running my own server. The browser talks to the database directly, and a database function creates the chat thread once a request is accepted.",
      },
      {
        title: "Realtime chat and unread counts",
        text: "Supabase Realtime watches the messages table, so new messages and unread badges update live. One shared channel handles the unread totals, which avoids duplicate channels when the desktop and mobile navigation both use the same hook.",
      },
      {
        title: "Maps",
        text: "Leaflet draws the feed map and the location picker. Nominatim turns a landmark into coordinates through a server route.",
      },
      {
        title: "The app",
        text: "Next.js with the App Router, React, and TypeScript. Tailwind CSS handles the layout, including a mobile bottom nav and a full-height chat. Activity cards use a category gradient and emoji instead of external images, so nothing breaks when a third-party image disappears.",
      },
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
        title: "Gradients over GIFs",
        text: "Third-party GIFs for card covers often broke, so cards now use a category gradient and emoji with zero external requests.",
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

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

export const CaseStudy = () => {
  const { slug } = useParams();
  const study = studies[slug];

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = study
      ? `${study.title} · Case study | Stuti Kumari`
      : "Stuti Kumari | Portfolio";
    return () => {
      document.title = "Stuti Kumari | Portfolio";
    };
  }, [study]);

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
          <h1 className="text-3xl font-bold text-white mt-8">Case study not found</h1>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0f0f0f]">
      <main className="px-6 py-10 md:py-14">
        <motion.article
          className="max-w-3xl mx-auto"
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
        >
          <motion.div variants={fadeUp}>
            <Link
              to="/"
              state={{ tab: "Projects" }}
              className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-pink-400 transition-colors"
            >
              <FaArrowLeft className="w-3 h-3" />
              Projects
            </Link>
          </motion.div>

          <motion.header variants={fadeUp} className="mt-8 mb-10">
            <p className="text-pink-400 text-sm font-medium tracking-wide mb-3">
              Case study
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
              {study.title}
            </h1>
            <p className="text-xl text-gray-300 mt-3">{study.tagline}</p>
            <p className="text-gray-400 mt-4 leading-relaxed">{study.summary}</p>

            <div className="flex flex-wrap gap-2 mt-6">
              {study.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-medium px-3 py-1 rounded-full bg-neutral-800 text-gray-300 border border-gray-700"
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
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium bg-neutral-900/80 border border-gray-800 text-gray-300 hover:text-white hover:border-gray-700 transition-all"
              >
                <FaGithub className="w-4 h-4" />
                GitHub
              </a>
            </div>

            <dl className="grid sm:grid-cols-3 gap-4 mt-8">
              {study.meta.map((item) => (
                <div
                  key={item.label}
                  className="bg-neutral-900/80 border border-gray-800 rounded-2xl p-4"
                >
                  <dt className="text-xs font-medium text-pink-400">{item.label}</dt>
                  <dd className="text-gray-300 text-sm leading-relaxed mt-1">{item.value}</dd>
                </div>
              ))}
            </dl>
          </motion.header>

          <motion.section variants={fadeUp} className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">Why I built it</h2>
            <div className="bg-neutral-900/80 border border-gray-800 rounded-2xl p-6">
              <p className="text-gray-300 leading-relaxed">{study.why}</p>
            </div>
          </motion.section>

          <motion.section variants={fadeUp} className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-2">The problem</h2>
            <p className="text-gray-400 text-sm mb-5">
              Social apps are good at feeds and followers. They are not built for one plan, one host, a few guests, and a clear outcome.
            </p>
            <div className="grid sm:grid-cols-3 gap-4">
              {study.problem.map((item) => (
                <div
                  key={item.title}
                  className="bg-neutral-900/80 border border-gray-800 rounded-2xl p-5"
                >
                  <h3 className="text-white font-semibold">{item.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed mt-2">{item.text}</p>
                </div>
              ))}
            </div>
            <h3 className="text-lg font-semibold text-white mt-8 mb-3">Goals</h3>
            <ul className="bg-neutral-900/80 border border-gray-800 rounded-2xl p-6 space-y-3">
              {study.goals.map((goal) => (
                <li key={goal} className="flex gap-3 text-gray-300 text-sm leading-relaxed">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-pink-400 shrink-0" />
                  <span>{goal}</span>
                </li>
              ))}
            </ul>
          </motion.section>

          <motion.section variants={fadeUp} className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-2">What it does</h2>
            <p className="text-gray-400 text-sm mb-5">
              The whole product is one loop: find a plan, ask to join, and talk only after the host says yes.
            </p>
            <ol className="grid sm:grid-cols-2 gap-4">
              {study.flow.map((step, index) => (
                <li
                  key={step.title}
                  className="bg-neutral-900/80 border border-gray-800 rounded-2xl p-5"
                >
                  <span className="text-xs font-medium text-pink-400">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-white font-semibold mt-2">{step.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed mt-2">{step.text}</p>
                </li>
              ))}
            </ol>
          </motion.section>

          <motion.section variants={fadeUp} className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-2">Try it yourself</h2>
            <p className="text-gray-400 text-sm mb-5">
              You need two accounts to see both sides. A second browser window in incognito works.
            </p>
            <ol className="bg-neutral-900/80 border border-gray-800 rounded-2xl p-6 space-y-3">
              {study.tryIt.map((step, index) => (
                <li key={step} className="flex gap-3 text-gray-300 text-sm leading-relaxed">
                  <span className="text-xs font-medium text-pink-400 mt-0.5 shrink-0">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </motion.section>

          <motion.section variants={fadeUp} className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">How it's built</h2>
            <div className="space-y-4">
              {study.built.map((item) => (
                <div
                  key={item.title}
                  className="bg-neutral-900/80 border border-gray-800 rounded-2xl p-6"
                >
                  <h3 className="text-white font-semibold">{item.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed mt-2">{item.text}</p>
                </div>
              ))}
            </div>
          </motion.section>

          <motion.section variants={fadeUp} className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">Security</h2>
            <div className="bg-neutral-900/80 border border-gray-800 border-l-pink-500 border-l-2 rounded-2xl p-6">
              <p className="text-gray-300 leading-relaxed">{study.security}</p>
            </div>
            <div className="grid sm:grid-cols-2 gap-4 mt-4">
              {study.policies.map((policy) => (
                <div
                  key={policy.title}
                  className="bg-neutral-900/80 border border-gray-800 rounded-2xl p-5"
                >
                  <h3 className="text-white font-semibold">{policy.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed mt-2">{policy.text}</p>
                </div>
              ))}
            </div>
            <p className="text-gray-500 text-sm leading-relaxed mt-4">{study.securityNote}</p>
          </motion.section>

          <motion.section variants={fadeUp} className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">Tradeoffs and learnings</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {study.tradeoffs.map((item) => (
                <div
                  key={item.title}
                  className="bg-neutral-900/80 border border-gray-800 rounded-2xl p-5"
                >
                  <h3 className="text-white font-semibold">{item.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed mt-2">{item.text}</p>
                </div>
              ))}
            </div>
          </motion.section>

          <motion.section variants={fadeUp} className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-2">Known limitations</h2>
            <p className="text-gray-400 text-sm mb-5">
              What I know isn't right yet, and how I plan to fix it.
            </p>
            <ul className="bg-neutral-900/80 border border-gray-800 rounded-2xl p-6 space-y-3">
              {study.limitations.map((item) => (
                <li key={item} className="flex gap-3 text-gray-300 text-sm leading-relaxed">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-gray-500 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.section>

          <motion.section variants={fadeUp}>
            <h2 className="text-2xl font-bold text-white mb-4">What's next</h2>
            <ul className="bg-neutral-900/80 border border-gray-800 rounded-2xl p-6 space-y-3">
              {study.next.map((item) => (
                <li key={item} className="flex gap-3 text-gray-300 text-sm leading-relaxed">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-pink-400 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.section>
        </motion.article>
      </main>
    </div>
  );
};