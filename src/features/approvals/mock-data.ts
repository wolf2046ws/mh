import type { Approval, ApprovalPriority, ApprovalStatus } from "./types";

const changes = [
  "Preisanpassung EUR",
  "Neue Produktbilder",
  "Beschreibung aktualisiert",
  "Kategorie geändert",
  "Varianten hinzugefügt",
  "Stück­liste korrigiert",
  "Zollcode zugewiesen",
];
const people = [
  "Anna Kaiser",
  "Lukas Fischer",
  "Sara Bauer",
  "Tim Huber",
  "Nora Richter",
];
const statuses: ApprovalStatus[] = ["pending", "in_review", "approved", "rejected"];
const priorities: ApprovalPriority[] = ["low", "normal", "high", "urgent"];

export function generateApprovals(count = 40): Approval[] {
  return Array.from({ length: count }, (_, i) => {
    const d = new Date();
    d.setHours(d.getHours() - i * 3);
    return {
      id: `apr-${String(i + 1).padStart(4, "0")}`,
      mhArticelName: `Artikel ${["Hydra Pro", "Swift Step", "AudioSphere", "Chronos", "Aurora"][i % 5]} #${i + 1}`,
      mhArticelNumber: `MH-${2000 + i * 5}-${String.fromCharCode(65 + (i % 26))}`,
      c4cArticelNumber: `C4C-${20000 + i * 11}`,
      change: changes[i % changes.length],
      requestedBy: people[i % people.length],
      requestedAt: d.toISOString(),
      status: statuses[i % statuses.length],
      priority: priorities[i % priorities.length],
      reviewer: i % 3 === 0 ? people[(i + 1) % people.length] : undefined,
    };
  });
}

export const mockApprovals = generateApprovals();
