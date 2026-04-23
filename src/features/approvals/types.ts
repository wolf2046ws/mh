export type ApprovalStatus = "pending" | "approved" | "rejected" | "in_review";
export type ApprovalPriority = "low" | "normal" | "high" | "urgent";

export type Approval = {
  id: string;
  mhArticelName: string;
  mhArticelNumber: string;
  c4cArticelNumber: string;
  change: string;
  requestedBy: string;
  requestedAt: string;
  status: ApprovalStatus;
  priority: ApprovalPriority;
  reviewer?: string;
};
