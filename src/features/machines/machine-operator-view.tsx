import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { QrCode, Package, ImageIcon, Info, CheckCircle2, Factory, Zap } from "lucide-react";
import Image from "next/image";

export function MachineOperatorView() {
  const identifiers = [
    { label: "M&H Art.-Nummer", value: "MH-21626-A" },
    { label: "C4C Art.-Nummer", value: "1011-256" },
    { label: "Beutel Barcode", value: "200165889" },
    { label: "EAN Karton Code", value: "300214889" },
    { label: "Karton-Nr./Name", value: "C4C 6er Karton" },
  ];

  const specifications = [
    { label: "Form", value: "Bohne" },
    { label: "Gewicht", value: "500g" },
    { label: "Verpackungsart", value: "Zipper" },
    { label: "Haltbarkeit (MHD)", value: "18 Monate" },
    { label: "Logistik", value: "Euro-Palette (5 Lagen / 50 Kartons)" },
  ];

  const samplePhotos = [
    { src: "/images/coffee/photo1.png", alt: "Muster Vorderseite" },
    { src: "/images/coffee/photo2.png", alt: "Muster Rückseite" },
    { src: "/images/coffee/photo3.png", alt: "Muster Stempel" },
    { src: "/images/coffee/photo4.png", alt: "Muster Barcode" },
    { src: "/images/coffee/photo5.png", alt: "Muster Seiten Photo" },
    { src: "/images/coffee/photo1.png", alt: "Muster Karton Etikett" },
  ];

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      
      {/* Premium Header Area */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-zinc-900 via-zinc-800 to-black p-8 text-zinc-50 shadow-xl border border-zinc-800/50">
        <div className="absolute top-0 right-0 -mt-16 -mr-16 text-zinc-800/40 opacity-20">
          <Factory className="h-64 w-64 rotate-12" strokeWidth={1} />
        </div>
        
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-emerald-500/20 text-emerald-400">
                <Zap className="h-5 w-5" />
              </div>
              <Badge variant="outline" className="border-zinc-700 text-zinc-300 bg-zinc-800/50 backdrop-blur-sm">
                Röstmaschine Alpha-1
              </Badge>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-white drop-shadow-md">
              Espresso Roast Premium
              <span className="block text-xl md:text-2xl font-medium text-zinc-400 mt-1">500g Bohnen</span>
            </h1>
          </div>
          <div className="flex flex-col items-start md:items-end gap-3">
            <Badge className="px-4 py-1.5 text-sm bg-emerald-500 text-zinc-950 hover:bg-emerald-600 font-medium shadow-[0_0_15px_rgba(16,185,129,0.3)]">
              <CheckCircle2 className="mr-2 h-4 w-4" />
              Produktion Aktiv
            </Badge>
            <p className="text-zinc-400 text-sm flex items-center gap-1.5">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              Live-Daten synchronisiert
            </p>
          </div>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Identifiers Card */}
        <Card className="shadow-lg border-zinc-200/60 dark:border-zinc-800/60 bg-white/50 dark:bg-zinc-950/50 backdrop-blur-xl overflow-hidden transition-all duration-300 hover:shadow-xl">
          <div className="absolute top-0 left-0 w-1 h-full bg-blue-500" />
          <CardHeader className="pb-4">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">
                <QrCode className="h-5 w-5" />
              </div>
              <div>
                <CardTitle className="text-xl">Identifikatoren</CardTitle>
                <CardDescription>Produktions- und Trackingdaten</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-0 divide-y divide-zinc-100 dark:divide-zinc-800/60 rounded-lg border border-zinc-100 dark:border-zinc-800/60 overflow-hidden bg-white dark:bg-zinc-900/30">
              {identifiers.map((item, index) => (
                <div key={index} className="flex justify-between items-center p-3.5 hover:bg-zinc-50 dark:hover:bg-zinc-800/40 transition-colors">
                  <span className="text-sm font-medium text-zinc-500 dark:text-zinc-400">{item.label}</span>
                  <span className="text-sm font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">{item.value}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Specifications Card */}
        <Card className="shadow-lg border-zinc-200/60 dark:border-zinc-800/60 bg-white/50 dark:bg-zinc-950/50 backdrop-blur-xl overflow-hidden transition-all duration-300 hover:shadow-xl">
          <div className="absolute top-0 left-0 w-1 h-full bg-amber-500" />
          <CardHeader className="pb-4">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400">
                <Package className="h-5 w-5" />
              </div>
              <div>
                <CardTitle className="text-xl">Spezifikationen & Verpackung</CardTitle>
                <CardDescription>Details zur Beschaffenheit</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-0 divide-y divide-zinc-100 dark:divide-zinc-800/60 rounded-lg border border-zinc-100 dark:border-zinc-800/60 overflow-hidden bg-white dark:bg-zinc-900/30">
              {specifications.map((item, index) => (
                <div key={index} className="flex justify-between items-center p-3.5 hover:bg-zinc-50 dark:hover:bg-zinc-800/40 transition-colors">
                  <span className="text-sm font-medium text-zinc-500 dark:text-zinc-400">{item.label}</span>
                  <span className="text-sm font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">{item.value}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Photo Gallery Card */}
      <Card className="shadow-lg border-zinc-200/60 dark:border-zinc-800/60 overflow-hidden">
        <div className="bg-zinc-50/50 dark:bg-zinc-900/20 border-b border-zinc-100 dark:border-zinc-800/60">
          <CardHeader className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-4 gap-4">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400">
                <ImageIcon className="h-5 w-5" />
              </div>
              <div>
                <CardTitle className="text-xl">Referenz Muster Fotos</CardTitle>
                <CardDescription>Qualitätskontrolle für die Verpackungslinie</CardDescription>
              </div>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 text-xs font-medium border border-blue-100 dark:border-blue-800/30">
              <Info className="h-3.5 w-3.5" />
              <span>Optischer Abgleich zwingend erforderlich</span>
            </div>
          </CardHeader>
        </div>
        <CardContent className="p-6">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {samplePhotos.map((photo, index) => (
              <div key={index} className="group flex flex-col gap-3">
                <div className="relative aspect-square rounded-xl overflow-hidden border border-zinc-200 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-900 shadow-sm transition-all duration-500 hover:shadow-xl hover:border-blue-400/50 dark:hover:border-blue-500/50">
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 20vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </div>
                <div className="text-center px-1">
                  <p className="text-sm font-medium text-zinc-800 dark:text-zinc-200 leading-tight">
                    {photo.alt}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
