"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Plus } from "lucide-react";
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

const formSchema = z.object({
  name: z.string().min(2, "Name muss mindestens 2 Zeichen lang sein."),
  category: z.string().min(1, "Bitte wählen Sie eine Kategorie."),
  mhNumber: z.string().min(1, "MH-Nummer ist erforderlich."),
  c4cNumber: z.string().min(1, "C4C-Nummer ist erforderlich."),
  status: z.enum(["aktiv", "entwurf", "gesperrt", "pruefung"]),
  owner: z.string().min(2, "Verantwortlicher ist erforderlich."),
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
      name: "",
      category: "",
      mhNumber: "",
      c4cNumber: "",
      status: "entwurf",
      owner: "",
    },
  });

  const onSubmit = (data: FormValues) => {
    console.log("Neues Produkt hinzufügen:", data);
    // Hier würde normalerweise eine API-Anfrage stattfinden
    // oder eine Mutation mit React Query (useMutation)
    
    toast.success("Produkt erfolgreich hinzugefügt");
    // Dialog schließen und Formular zurücksetzen
    setOpen(false);
    reset();
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button size="sm">
          <Plus className="mr-2 h-4 w-4" />
          Neues Produkt
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Neues Kaffee-Produkt</DialogTitle>
          <DialogDescription>
            Erfassen Sie hier ein neues Produkt für die Kaffeeproduktion.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <div className="col-span-3">
              <Input id="name" placeholder="z.B. Aroma Classic 500g" {...register("name")} />
              {errors.name && (
                <p className="text-sm text-red-500 mt-1">{errors.name.message}</p>
              )}
            </div>
          </div>
          
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="category" className="text-right">
              Kategorie
            </Label>
            <div className="col-span-3">
              <Select onValueChange={(value) => setValue("category", value, { shouldValidate: true })}>
                <SelectTrigger>
                  <SelectValue placeholder="Kategorie wählen" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Ganze Bohnen">Ganze Bohnen</SelectItem>
                  <SelectItem value="Gemahlener Kaffee">Gemahlener Kaffee</SelectItem>
                  <SelectItem value="Espresso">Espresso</SelectItem>
                  <SelectItem value="Zubehör">Zubehör</SelectItem>
                  <SelectItem value="Kaffeekapseln">Kaffeekapseln</SelectItem>
                  <SelectItem value="Verpackungsmaterial">Verpackungsmaterial</SelectItem>
                </SelectContent>
              </Select>
              {errors.category && (
                <p className="text-sm text-red-500 mt-1">{errors.category.message}</p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="mhNumber" className="text-right">
              MH-Nr.
            </Label>
            <div className="col-span-3">
              <Input id="mhNumber" placeholder="MH-XXXX" {...register("mhNumber")} />
              {errors.mhNumber && (
                <p className="text-sm text-red-500 mt-1">{errors.mhNumber.message}</p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="c4cNumber" className="text-right">
              C4C-Nr.
            </Label>
            <div className="col-span-3">
              <Input id="c4cNumber" placeholder="C4C-XXXXX" {...register("c4cNumber")} />
              {errors.c4cNumber && (
                <p className="text-sm text-red-500 mt-1">{errors.c4cNumber.message}</p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="status" className="text-right">
              Status
            </Label>
            <div className="col-span-3">
              <Select defaultValue="entwurf" onValueChange={(value: any) => setValue("status", value, { shouldValidate: true })}>
                <SelectTrigger>
                  <SelectValue placeholder="Status wählen" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="entwurf">Entwurf</SelectItem>
                  <SelectItem value="aktiv">Aktiv</SelectItem>
                  <SelectItem value="pruefung">In Prüfung</SelectItem>
                  <SelectItem value="gesperrt">Gesperrt</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="owner" className="text-right">
              Verantw.
            </Label>
            <div className="col-span-3">
              <Input id="owner" placeholder="Name des Verantwortlichen" {...register("owner")} />
              {errors.owner && (
                <p className="text-sm text-red-500 mt-1">{errors.owner.message}</p>
              )}
            </div>
          </div>

          <DialogFooter>
            <Button type="button" variant="outline" onClick={() => setOpen(false)}>
              Abbrechen
            </Button>
            <Button type="submit">Speichern</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
