export type Shift = "morning" | "afternoon" | "night";
export type OperatorStatus = "active" | "break" | "off_duty" | "sick";

export type MachineOperator = {
  id: string;
  name: string;
  employeeNumber: string;
  machine: string;
  shift: Shift;
  status: OperatorStatus;
  hoursThisWeek: number;
  certificationExpiresAt: string;
  avatarUrl: string;
};
