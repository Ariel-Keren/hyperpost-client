import { writable } from "svelte/store";
import type { Hyper, HyperDisplay } from "./types";

export const token = writable<string | null>(null);
export const username = writable<string | null>(null);
export const hypers = writable<HyperDisplay[] | null>(null);
export const fetchedHyper = writable<Hyper | null | undefined>(undefined);
