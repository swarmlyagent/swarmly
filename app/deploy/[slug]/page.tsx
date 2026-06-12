import { notFound } from "next/navigation";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { CustomizeForm } from "@/components/deploy/CustomizeForm";
import { getTemplate, TEMPLATES } from "@/lib/templates";

export function generateStaticParams() {
  return TEMPLATES.map((t) => ({ slug: t.slug }));
}

export default async function CustomizePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const template = getTemplate(slug);
  if (!template) notFound();

  return (
    <>
      <Nav />
      <main className="wrap dwrap dwrap-narrow">
        <div className="lab">
          <span className="rule" />
          <span>Step 2 of 2 · customize {template.name}</span>
        </div>
        <h1 className="h2">Customize your {template.name.toLowerCase()}.</h1>
        <p className="sub">
          Name it, shape its personality, and paste your @BotFather token to deploy.
        </p>
        <CustomizeForm template={template} />
      </main>
      <Footer />
    </>
  );
}
