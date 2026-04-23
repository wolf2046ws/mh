import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function SettingsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold tracking-tight">Einstellungen</h2>
        <p className="text-muted-foreground text-sm">
          Workspace-Einstellungen, Integrationen und Benutzer.
        </p>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>In Kürze</CardTitle>
          <CardDescription>
            Die Einstellungsseite wird in einer kommenden Iteration aktiviert.
          </CardDescription>
        </CardHeader>
        <CardContent className="text-muted-foreground text-sm">
          Hier erscheinen bald Workspace-Präferenzen, SAP C4C Verbindungsdaten,
          Rollen &amp; Rechte sowie API-Tokens.
        </CardContent>
      </Card>
    </div>
  );
}
