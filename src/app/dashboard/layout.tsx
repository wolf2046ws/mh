import { AppSidebar } from "@/components/layout/app-sidebar";
import { AppHeader } from "@/components/layout/app-header";
import { AppMain } from "@/components/layout/app-main";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <AppSidebar />
      <AppMain>
        <AppHeader />
        <main className="flex-1 p-4 lg:p-6">{children}</main>
      </AppMain>
    </>
  );
}
