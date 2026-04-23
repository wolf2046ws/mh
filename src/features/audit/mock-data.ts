import type { AuditAction, AuditEntity, AuditLog } from "./types";

const actors = [
  "admin@kurator.de",
  "a.kaiser@kurator.de",
  "l.fischer@kurator.de",
  "s.bauer@kurator.de",
  "t.huber@kurator.de",
  "system",
];
const actions: AuditAction[] = [
  "create",
  "update",
  "delete",
  "sync",
  "approve",
  "reject",
  "login",
];
const entities: AuditEntity[] = [
  "product",
  "approval",
  "user",
  "system",
  "export",
];
const summaries = [
  "Artikel aktualisiert",
  "Freigabe erteilt",
  "Artikel gelöscht",
  "Synchronisation ausgeführt",
  "Benutzer angemeldet",
  "CSV Export erzeugt",
  "Freigabe abgelehnt",
];

export function generateAuditLogs(count = 80): AuditLog[] {
  return Array.from({ length: count }, (_, i) => {
    const d = new Date();
    d.setMinutes(d.getMinutes() - i * 27);
    return {
      id: `log-${String(i + 1).padStart(5, "0")}`,
      actor: actors[i % actors.length],
      action: actions[i % actions.length],
      entity: entities[i % entities.length],
      entityId: `${entities[i % entities.length].slice(0, 3)}-${1000 + i * 3}`,
      summary: summaries[i % summaries.length],
      ip: `10.0.${(i * 7) % 256}.${(i * 11) % 256}`,
      createdAt: d.toISOString(),
    };
  });
}

export const mockAuditLogs = generateAuditLogs();
