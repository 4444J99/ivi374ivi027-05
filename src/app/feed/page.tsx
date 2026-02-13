import type { Metadata } from "next";

import { AnalyticsViewTracker } from "@/components/analytics-view-tracker";
import { FeedView } from "@/components/feed-view";
import { ScrollMemory } from "@/components/scroll-memory";
import { getAllCanonicalDocs } from "@/lib/content";
import { getFeedItems } from "@/lib/nodes";

export const metadata: Metadata = {
  title: "Faux Social Feed",
  description:
    "Sequenced thesis excerpts as a fabricated social surface — narrative as signal flood, revealing cross-threads in motion.",
};

export default async function FeedPage() {
  const docs = await getAllCanonicalDocs();
  const items = getFeedItems();

  return (
    <>
      <AnalyticsViewTracker mode="feed" />
      <ScrollMemory keyName="feed" />

      <section className="hero tabloid-maximalist">
        <p className="eyebrow">Mode 2 • Faux Social Feed</p>
        <h1>Narrative as Signal Flood</h1>
        <p>
          Sequenced excerpts move like posts across a fabricated social surface, preserving the thesis language
          while revealing cross-threads in motion.
        </p>
      </section>

      <FeedView docs={docs} items={items} />
    </>
  );
}
