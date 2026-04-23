import type { MachineOperator, OperatorStatus, Shift } from "./types";

const names = [
  "Markus Weber",
  "Julia Schmidt",
  "Stefan Hoffmann",
  "Eva Maier",
  "Daniel Wagner",
  "Petra Schulz",
  "Thomas Becker",
  "Susanne Koch",
  "Martin Braun",
  "Nicole Wolf",
  "Andreas Neumann",
  "Katharina Zimmermann",
];
const machines = [
  "Röstmaschine-R1",
  "Mühle-M4",
  "Verpackungsanlage-V2",
  "Abfüllanlage-A7",
  "Vakuumpresse-V9",
  "Mischmaschine-M2",
  "Etikettierer-E5",
];
const shifts: Shift[] = ["morning", "afternoon", "night"];
const statuses: OperatorStatus[] = ["active", "break", "off_duty", "sick"];

export function generateOperators(count = 24): MachineOperator[] {
  return Array.from({ length: count }, (_, i) => {
    const d = new Date();
    d.setMonth(d.getMonth() + (i % 18) - 3);
    return {
      id: `op-${String(i + 1).padStart(4, "0")}`,
      name: names[i % names.length],
      employeeNumber: `MF-${String(100 + i).padStart(4, "0")}`,
      machine: machines[i % machines.length],
      shift: shifts[i % shifts.length],
      status: statuses[i % statuses.length],
      hoursThisWeek: 20 + ((i * 7) % 20),
      certificationExpiresAt: d.toISOString(),
      avatarUrl: `https://i.pravatar.cc/100?img=${(i % 70) + 1}`,
    };
  });
}

export const mockOperators = generateOperators();
