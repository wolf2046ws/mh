import type { Product, ProductStatus } from "./types";

const categories = [
  "Schuhe & Outdoor",
  "Accessoires",
  "Elektronik",
  "Bekleidung",
  "Sport",
  "Haushalt",
];

const namePool = [
  "Hydra Pro X-Runner",
  "Chronos Classic 40",
  "AudioSphere Elite",
  "Swift Step Onyx",
  "Nimbus Trailblazer",
  "Aurora Smart Band",
  "Echo Wave Studio",
  "Vertex Alpine Pack",
  "Solstice Glide 7",
  "Meridian Leather Wallet",
  "Cipher Bluetooth Mouse",
  "Halcyon Down Jacket",
  "Lumen Desk Lamp",
  "Prism Travel Cube",
  "Quartz Timekeeper",
  "Revere Commuter Bike",
  "Stratus Rain Shell",
  "Tempo Fitness Mat",
  "Umbra Sunglasses",
  "Vesper Carry-On",
];

const statuses: ProductStatus[] = ["aktiv", "entwurf", "gesperrt", "pruefung"];
const owners = [
  "M. Schneider",
  "A. Kaiser",
  "T. Huber",
  "L. Fischer",
  "K. Richter",
  "S. Bauer",
];

function seededRand(seed: number) {
  let s = seed;
  return () => {
    s = (s * 9301 + 49297) % 233280;
    return s / 233280;
  };
}

export function generateProducts(count = 120): Product[] {
  const rand = seededRand(42);
  return Array.from({ length: count }, (_, i) => {
    const name = namePool[i % namePool.length] + (i >= namePool.length ? ` ${Math.floor(i / namePool.length) + 1}` : "");
    const idx = Math.floor(rand() * statuses.length);
    const daysAgo = Math.floor(rand() * 60);
    const d = new Date();
    d.setDate(d.getDate() - daysAgo);
    return {
      id: `prod-${String(i + 1).padStart(4, "0")}`,
      name,
      category: categories[i % categories.length],
      mhNumber: `MH-${1000 + i * 7}-${String.fromCharCode(65 + (i % 26))}`,
      c4cNumber: `C4C-${20000 + i * 11}`,
      status: statuses[idx],
      imageUrl: `https://picsum.photos/seed/mh-${i}/200/150`,
      updatedAt: d.toISOString(),
      owner: owners[i % owners.length],
    };
  });
}

export const mockProducts = generateProducts();
