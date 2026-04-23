"use client";

import {
  parseAsInteger,
  parseAsString,
  parseAsStringLiteral,
  useQueryStates,
} from "nuqs";

const statusValues = ["all", "aktiv", "entwurf", "gesperrt", "pruefung"] as const;

export function useProductFilters() {
  return useQueryStates(
    {
      q: parseAsString.withDefault(""),
      status: parseAsStringLiteral(statusValues).withDefault("all"),
      category: parseAsString.withDefault(""),
      page: parseAsInteger.withDefault(1),
      perPage: parseAsInteger.withDefault(10),
    },
    { history: "replace", shallow: false },
  );
}
