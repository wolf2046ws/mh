import { mockOperators } from "./mock-data";
import type { MachineOperator, Shift } from "./types";

export type OperatorListParams = {
  shift?: Shift | "all";
  search?: string;
};

export async function fetchOperators(
  params: OperatorListParams = {},
): Promise<MachineOperator[]> {
  await new Promise((r) => setTimeout(r, 120));
  const { shift = "all", search = "" } = params;
  let list = mockOperators;
  if (shift !== "all") list = list.filter((o) => o.shift === shift);
  if (search) {
    const q = search.toLowerCase();
    list = list.filter(
      (o) =>
        o.name.toLowerCase().includes(q) ||
        o.employeeNumber.toLowerCase().includes(q) ||
        o.machine.toLowerCase().includes(q),
    );
  }
  return list;
}

export const operatorsQueryKey = (params: OperatorListParams) =>
  ["operators", params] as const;
