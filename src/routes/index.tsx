import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Objection! Power Suit — Suits Simulator" },
      {
        name: "description",
        content:
          "A pixel courtroom drama. Win cases with evidence, objections, cross-examination, and closing arguments.",
      },
    ],
  }),
});

function Index() {
  return (
    <main className="min-h-screen w-full bg-background">
      <h1 className="sr-only">Objection! Power Suit — Suits Simulator</h1>
      <iframe
        src="/game/index.html"
        title="Objection! Power Suit"
        className="h-screen w-screen border-0 block"
      />
    </main>
  );
}
