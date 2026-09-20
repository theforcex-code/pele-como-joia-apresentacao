import DeckShell from "@/components/deck/deck-shell";
import { Slides } from "@/components/deck/slides";
import "./deck.css";

export default function Page() {
  return (
    <DeckShell>
      <main className="deck">
        <Slides />
      </main>
    </DeckShell>
  );
}
