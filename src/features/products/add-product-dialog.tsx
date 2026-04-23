"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Plus, ImagePlus, X } from "lucide-react";
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

const formSchema = z.object({
  name: z.string().min(2, "Name muss mindestens 2 Zeichen lang sein."),
  category: z.string().min(1, "Bitte wählen Sie eine Kategorie."),
  mhNumber: z.string().min(1, "MH-Nummer ist erforderlich."),
  c4cNumber: z.string().min(1, "C4C-Nummer ist erforderlich."),
  status: z.enum(["aktiv", "entwurf", "gesperrt", "pruefung"]),
  owner: z.string().min(2, "Verantwortlicher ist erforderlich."),
  c4cNotes: z.string().optional(),
  mnhNotes: z.string().optional(),
  photos: z.array(z.string()).max(6, "Maximal 6 Fotos erlaubt."),
});

type FormValues = z.infer<typeof formSchema>;

export function AddProductDialog() {
  const [open, setOpen] = useState(false);
  const [photoUrls, setPhotoUrls] = useState<string[]>([]);

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      category: "",
      mhNumber: "",
      c4cNumber: "",
      status: "entwurf",
      owner: "",
      c4cNotes: "",
      mnhNotes: "",
      photos: [],
    },
  });

  const onSubmit = (data: FormValues) => {
    console.log("Neues Produkt hinzufügen:", { ...data, photos: photoUrls });
    toast.success("Produkt erfolgreich hinzugefügt");
    setOpen(false);
    reset();
    setPhotoUrls([]);
  };

  const addPhoto = () => {
    if (photoUrls.length < 6) {
      const newPhoto = `https://placehold.co/200x200/png?text=Photo+${photoUrls.length + 1}`;
      const updated = [...photoUrls, newPhoto];
      setPhotoUrls(updated);
      setValue("photos", updated);
    }
  };

  const removePhoto = (index: number) => {
    const updated = photoUrls.filter((_, i) => i !== index);
    setPhotoUrls(updated);
    setValue("photos", updated);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button size="sm">
          <Plus className="mr-2 h-4 w-4" />
          Neues Produkt
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px] max-h-[90vh]">
        <DialogHeader>
          <DialogTitle>Neues Kaffee-Produkt</DialogTitle>
          <DialogDescription>
            Erfassen Sie hier ein neues Produkt mit allen Spezifikationen und Fotos.
          </DialogDescription>
        </DialogHeader>
        
        <ScrollArea className="max-h-[60vh] pr-4">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 py-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Aroma Classic 500g" {...register("name")} />
                {errors.name && <p className="text-xs text-red-500">{errors.name.message}</p>}
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="category">Kategorie</Label>
                <Select onValueChange={(value) => setValue("category", value, { shouldValidate: true })}>
                  <SelectTrigger>
                    <SelectValue placeholder="Wählen" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Ganze Bohnen">Ganze Bohnen</SelectItem>
                    <SelectItem value="Gemahlener Kaffee">Gemahlener Kaffee</SelectItem>
                    <SelectItem value="Espresso">Espresso</SelectItem>
                    <SelectItem value="Kaffeekapseln">Kaffeekapseln</SelectItem>
                  </SelectContent>
                </Select>
                {errors.category && <p className="text-xs text-red-500">{errors.category.message}</p>}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="mhNumber">MH-Nummer</Label>
                <Input id="mhNumber" placeholder="MH-XXXX" {...register("mhNumber")} />
                {errors.mhNumber && <p className="text-xs text-red-500">{errors.mhNumber.message}</p>}
              </div>
              <div className="space-y-2">
                <Label htmlFor="c4cNumber">C4C-Nummer</Label>
                <Input id="c4cNumber" placeholder="C4C-XXXXX" {...register("c4cNumber")} />
                {errors.c4cNumber && <p className="text-xs text-red-500">{errors.c4cNumber.message}</p>}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="status">Status</Label>
                <Select defaultValue="entwurf" onValueChange={(value: any) => setValue("status", value, { shouldValidate: true })}>
                  <SelectTrigger>
                    <SelectValue placeholder="Status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="entwurf">Entwurf</SelectItem>
                    <SelectItem value="aktiv">Aktiv</SelectItem>
                    <SelectItem value="pruefung">In Prüfung</SelectItem>
                    <SelectItem value="gesperrt">Gesperrt</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="owner">Verantwortlicher</Label>
                <Input id="owner" placeholder="Name" {...register("owner")} />
                {errors.owner && <p className="text-xs text-red-500">{errors.owner.message}</p>}
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="c4cNotes">C4C Notizen</Label>
              <Textarea id="c4cNotes" placeholder="Zusätzliche Informationen aus C4C..." {...register("c4cNotes")} />
            </div>

            <div className="space-y-2">
              <Label htmlFor="mnhNotes">MNH Notizen</Label>
              <Textarea id="mnhNotes" placeholder="Interne Notizen für Maschinenführer..." {...register("mnhNotes")} />
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <Label>Referenzfotos (Max. 6)</Label>
                <Button type="button" variant="outline" size="xs" onClick={addPhoto} disabled={photoUrls.length >= 6}>
                  <ImagePlus className="mr-2 h-3 w-3" />
                  Foto hinzufügen
                </Button>
              </div>
              
              <div className="grid grid-cols-3 gap-3">
                {photoUrls.map((url, index) => (
                  <div key={index} className="relative aspect-square rounded-md overflow-hidden border group">
                    <img src={url} alt={`Upload ${index}`} className="object-cover w-full h-full" />
                    <button
                      type="button"
                      onClick={() => removePhoto(index)}
                      className="absolute top-1 right-1 p-1 bg-red-500 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <X className="h-3 w-3" />
                    </button>
                  </div>
                ))}
                {photoUrls.length === 0 && (
                  <div className="col-span-3 py-8 border-2 border-dashed rounded-md flex flex-col items-center justify-center text-muted-foreground">
                    <ImagePlus className="h-8 w-8 mb-2 opacity-20" />
                    <p className="text-sm">Noch keine Fotos hinzugefügt</p>
                  </div>
                )}
              </div>
            </div>
          </form>
        </ScrollArea>

        <DialogFooter className="pt-4 border-t">
          <Button type="button" variant="outline" onClick={() => setOpen(false)}>
            Abbrechen
          </Button>
          <Button type="submit" onClick={handleSubmit(onSubmit)}>
            Produkt speichern
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
