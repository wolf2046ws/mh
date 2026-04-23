export type AuditAction =
  | "create"
  | "update"
  | "delete"
  | "sync"
  | "approve"
  | "reject"
  | "login";

export type AuditEntity = "product" | "approval" | "user" | "system" | "export";

export type AuditLog = {
  id: string;
  actor: string;
  action: AuditAction;
  entity: AuditEntity;
  entityId: string;
  summary: string;
  ip: string;
  createdAt: string;
};
