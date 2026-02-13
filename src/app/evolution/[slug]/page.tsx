import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { EvolutionView } from "@/components/evolution-view";
import { getEvolutionaryDocBySlug, getAllEvolutionaryDocs } from "@/lib/content";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const doc = await getEvolutionaryDocBySlug(slug);
  if (!doc) {
    return {
      title: "Evolution Not Found",
      description: "Requested draft evolution document is unavailable.",
    };
  }
  return {
    title: `${doc.title} — Draft Evolution`,
    description: `Track the evolution of "${doc.title}" across ${doc.versions.length} drafts in the MET4MORFOSES thesis.`,
  };
}

export async function generateStaticParams() {
  const docs = await getAllEvolutionaryDocs();
  return docs.map((doc) => ({
    slug: doc.slug,
  }));
}

export default async function EvolutionPage({ params }: Props) {
  const { slug } = await params;
  const doc = await getEvolutionaryDocBySlug(slug);

  if (!doc) {
    notFound();
  }

  return (
    <main>
      <EvolutionView doc={doc} />
    </main>
  );
}
