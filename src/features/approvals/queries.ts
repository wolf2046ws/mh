import { mockApprovals } from "./mock-data";
import type { Approval, ApprovalStatus } from "./types";

export type ApprovalListParams = {
  status?: ApprovalStatus | "all";
  search?: string;
};

export async function fetchApprovals(
  params: ApprovalListParams = {},
): Promise<Approval[]> {
  await new Promise((r) => setTimeout(r, 120));
  const { status = "all", search = "" } = params;
  let list = mockApprovals;
  if (status !== "all") list = list.filter((a) => a.status === status);
  if (search) {
    const q = search.toLowerCase();
    list = list.filter(
      (a) =>
        a.mhArticelName.toLowerCase().includes(q) ||
        a.mhArticelNumber.toLowerCase().includes(q) ||
        a.c4cArticelNumber.toLowerCase().includes(q) ||
        a.change.toLowerCase().includes(q),
    );
  }
  return list;
}

export const approvalsQueryKey = (params: ApprovalListParams) =>
  ["approvals", params] as const;
