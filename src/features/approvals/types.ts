export type ApprovalStatus = "pending" | "approved" | "rejected" | "in_review";
export type ApprovalPriority = "low" | "normal" | "high" | "urgent";

export type Approval = {
  id: string;
  productName: string;
  mhNumber: string;
  change: string;
  requestedBy: string;
  requestedAt: string;
  status: ApprovalStatus;
  priority: ApprovalPriority;
  reviewer?: string;
};
