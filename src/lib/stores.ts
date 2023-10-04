import { writable } from "svelte/store";
import type { HyperDisplay } from "./types";

export const token = writable<string | null>(null);
export const username = writable<string | null>(null);
export const hypers = writable<HyperDisplay[] | null>(null);
