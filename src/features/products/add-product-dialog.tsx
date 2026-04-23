"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Plus, ImagePlus, X, Info, Package, Truck, FileText, Camera } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const formSchema = z.object({
  mhArticelNumber: z.string().min(1, "M&H Art.-Nr. erforderlich"),
  c4cArticelNumber: z.string().min(1, "C4C Art.-Nr. erforderlich"),
  mhArticelName: z.string().min(1, "M&H Art.-Name erforderlich"),
  c4cArticelName: z.string().min(1, "C4C Art.-Name erforderlich"),
  beutelBarcode: z.string().optional(),
  eanKartonCode: z.string().optional(),
  kartonNumberName: z.string().optional(),
  
  c4cNotes: z.string().optional(),
  mnhNotes: z.string().optional(),
  
  mhd: z.string().optional(),
  packagingType: z.enum(["zipper", "gastro"]),
  coffeeForm: z.enum(["bohne", "gemahlen"]),
  weight: z.string().optional(),
  
  paletteType: z.enum(["euro", "einweg"]),
  layersPerPalette: z.coerce.number().optional(),
  piecesPerCarton: z.coerce.number().optional(),
  cartonsPerPalette: z.coerce.number().optional(),
  
  status: z.string().min(1, "Status erforderlich"),
  
  // Photos (URLs or Base64)
  musterVorderseite: z.string().optional(),
  musterRueckseite: z.string().optional(),
  musterStempel: z.string().optional(),
  musterBarcode: z.string().optional(),
  musterSeitenPhoto: z.string().optional(),
  musterKartonEtikett: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

export function AddProductDialog() {
  const [open, setOpen] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      mhArticelNumber: "",
      c4cArticelNumber: "",
      mhArticelName: "",
      c4cArticelName: "",
      beutelBarcode: "",
      eanKartonCode: "",
      kartonNumberName: "",
      c4cNotes: "",
      mnhNotes: "",
      mhd: "",
      packagingType: "zipper",
      coffeeForm: "bohne",
      weight: "",
      paletteType: "euro",
      layersPerPalette: 0,
      piecesPerCarton: 0,
      cartonsPerPalette: 0,
      status: "entwurf",
      musterVorderseite: "",
      musterRueckseite: "",
      musterStempel: "",
      musterBarcode: "",
      musterSeitenPhoto: "",
      musterKartonEtikett: "",
    },
  });

  const onSubmit = (data: FormValues) => {
    console.log("Neues Produkt hinzufügen:", data);
    toast.success("Produkt erfolgreich hinzugefügt");
    setOpen(false);
    reset();
  };

  const PhotoField = ({ id, label }: { id: keyof FormValues; label: string }) => (
    <div className="space-y-2">
      <Label htmlFor={id}>{label}</Label>
      <div className="relative group aspect-video rounded-md border-2 border-dashed flex flex-col items-center justify-center bg-muted/50 hover:bg-muted transition-colors overflow-hidden">
        <Camera className="h-6 w-6 mb-2 opacity-20" />
        <span className="text-[10px] text-muted-foreground uppercase tracking-wider font-semibold">Upload</span>
        <Input 
          id={id} 
          type="file" 
          className="absolute inset-0 opacity-0 cursor-pointer" 
          onChange={(e) => {
            const file = e.target.files?.[0];
            if (file) {
              // Mock URL for now
              setValue(id, URL.createObjectURL(file));
              toast.info(`${label} hochgeladen`);
            }
          }}
        />
      </div>
    </div>
  );

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground">
          <Plus className="mr-2 h-4 w-4" />
          Produkt hinzufügen
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[700px] max-h-[95vh] p-0 overflow-hidden">
        <DialogHeader className="p-6 pb-0">
          <DialogTitle className="text-2xl">Neues Kaffee-Produkt erfassen</DialogTitle>
          <DialogDescription>
            Befüllen Sie alle Felder gemäß der Spezifikation.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit(onSubmit)}>
          <Tabs defaultValue="stamm" className="w-full">
            <div className="px-6 border-b">
              <TabsList className="bg-transparent h-auto p-0 gap-6 w-full justify-start rounded-none">
                <TabsTrigger value="stamm" className="data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none px-0 py-3 flex items-center gap-2">
                  <Info className="h-4 w-4" /> Stammdaten
                </TabsTrigger>
                <TabsTrigger value="spec" className="data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none px-0 py-3 flex items-center gap-2">
                  <Package className="h-4 w-4" /> Spezifikation
                </TabsTrigger>
                <TabsTrigger value="logistics" className="data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none px-0 py-3 flex items-center gap-2">
                  <Truck className="h-4 w-4" /> Logistik
                </TabsTrigger>
                <TabsTrigger value="notes" className="data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none px-0 py-3 flex items-center gap-2">
                  <FileText className="h-4 w-4" /> Notizen
                </TabsTrigger>
                <TabsTrigger value="photos" className="data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none px-0 py-3 flex items-center gap-2">
                  <Camera className="h-4 w-4" /> Musterfotos
                </TabsTrigger>
              </TabsList>
            </div>

            <ScrollArea className="h-[55vh]">
              <div className="p-6 pt-4">
                <TabsContent value="stamm" className="mt-0 space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="mhArticelNumber">M&H Art.-Nummer</Label>
                      <Input id="mhArticelNumber" placeholder="z.B. 21626" {...register("mhArticelNumber")} />
                      {errors.mhArticelNumber && <p className="text-[10px] text-red-500">{errors.mhArticelNumber.message}</p>}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="c4cArticelNumber">C4C Art.-Nummer</Label>
                      <Input id="c4cArticelNumber" placeholder="z.B. 1011-256" {...register("c4cArticelNumber")} />
                      {errors.c4cArticelNumber && <p className="text-[10px] text-red-500">{errors.c4cArticelNumber.message}</p>}
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="mhArticelName">M&H Art.-Name</Label>
                      <Input id="mhArticelName" placeholder="z.B. Easy Espresso" {...register("mhArticelName")} />
                      {errors.mhArticelName && <p className="text-[10px] text-red-500">{errors.mhArticelName.message}</p>}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="c4cArticelName">C4C Art.-Name</Label>
                      <Input id="c4cArticelName" placeholder="z.B. Espresso gehamlhen" {...register("c4cArticelName")} />
                      {errors.c4cArticelName && <p className="text-[10px] text-red-500">{errors.c4cArticelName.message}</p>}
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="beutelBarcode">Beutel Barcode</Label>
                      <Input id="beutelBarcode" placeholder="z.B. 200165..." {...register("beutelBarcode")} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="eanKartonCode">EAN Karton Code</Label>
                      <Input id="eanKartonCode" placeholder="z.B. 300214..." {...register("eanKartonCode")} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="kartonNumberName">Karton-Nr./Name</Label>
                      <Input id="kartonNumberName" placeholder="z.B. C4C 6er..." {...register("kartonNumberName")} />
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="spec" className="mt-0 space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="mhd">MHD (Haltbarkeit)</Label>
                      <Input id="mhd" placeholder="z.B. 18 months" {...register("mhd")} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="weight">Gewicht</Label>
                      <Input id="weight" placeholder="z.B. 250g" {...register("weight")} />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="packagingType">Beutel-Typ</Label>
                      <Select onValueChange={(val: any) => setValue("packagingType", val, { shouldValidate: true })} defaultValue="zipper">
                        <SelectTrigger><SelectValue placeholder="Wählen" /></SelectTrigger>
                        <SelectContent>
                          <SelectItem value="zipper">Zipper</SelectItem>
                          <SelectItem value="gastro">Gastro</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="coffeeForm">Form</Label>
                      <Select onValueChange={(val: any) => setValue("coffeeForm", val, { shouldValidate: true })} defaultValue="bohne">
                        <SelectTrigger><SelectValue placeholder="Wählen" /></SelectTrigger>
                        <SelectContent>
                          <SelectItem value="bohne">Bohne</SelectItem>
                          <SelectItem value="gemahlen">Gemahlen</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="logistics" className="mt-0 space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="paletteType">Palette</Label>
                      <Select onValueChange={(val: any) => setValue("paletteType", val, { shouldValidate: true })} defaultValue="euro">
                        <SelectTrigger><SelectValue placeholder="Wählen" /></SelectTrigger>
                        <SelectContent>
                          <SelectItem value="euro">Euro-Palette</SelectItem>
                          <SelectItem value="einweg">Einweg-Palette</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="layersPerPalette">Lagen / Palette</Label>
                      <Input id="layersPerPalette" type="number" {...register("layersPerPalette")} />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="piecesPerCarton">Stück / Karton</Label>
                      <Input id="piecesPerCarton" type="number" {...register("piecesPerCarton")} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="cartonsPerPalette">Kartons / Palette</Label>
                      <Input id="cartonsPerPalette" type="number" {...register("cartonsPerPalette")} />
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="notes" className="mt-0 space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="status">Status</Label>
                    <Select onValueChange={(val) => setValue("status", val, { shouldValidate: true })} defaultValue="entwurf">
                      <SelectTrigger><SelectValue placeholder="Status" /></SelectTrigger>
                      <SelectContent>
                        <SelectItem value="entwurf">Entwurf</SelectItem>
                        <SelectItem value="approved">Approved</SelectItem>
                        <SelectItem value="gesperrt">Gesperrt</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="c4cNotes">C4C Notes</Label>
                    <Textarea id="c4cNotes" placeholder="..." {...register("c4cNotes")} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="mnhNotes">M&H Notes</Label>
                    <Textarea id="mnhNotes" placeholder="..." {...register("mnhNotes")} />
                  </div>
                </TabsContent>

                <TabsContent value="photos" className="mt-0 grid grid-cols-2 gap-6">
                  <PhotoField id="musterVorderseite" label="Muster Vorderseite" />
                  <PhotoField id="musterRueckseite" label="Muster Rückseite" />
                  <PhotoField id="musterStempel" label="Muster Stempel" />
                  <PhotoField id="musterBarcode" label="Muster Barcode" />
                  <PhotoField id="musterSeitenPhoto" label="Muster Seiten Photo" />
                  <PhotoField id="musterKartonEtikett" label="Muster Karton Etikett" />
                </TabsContent>
              </div>
            </ScrollArea>
          </Tabs>

          <DialogFooter className="p-6 pt-0 border-t mt-4 flex items-center justify-between">
            <div className="text-[10px] text-muted-foreground italic">
              Alle Felder werden für die Maschinenführer-Ansicht synchronisiert.
            </div>
            <div className="flex gap-3">
              <Button type="button" variant="ghost" onClick={() => setOpen(false)}>Abbrechen</Button>
              <Button type="submit" onClick={handleSubmit(onSubmit)}>Produkt anlegen</Button>
            </div>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
