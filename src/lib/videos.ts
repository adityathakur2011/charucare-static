import catalog from "@/data/videos.json";

export type VideoDomain = "cancer_education" | "supportive_care";

export type VideoItem = {
  id: string;
  title: string;
  category: string;
  categoryLabel: string;
  domain: VideoDomain;
  domainLabel: string;
  section: string | null;
  url: string;
  languages: string[];
};

export const videoDomains = catalog.domains as { id: VideoDomain; label: string }[];
export const allVideos = catalog.videos as VideoItem[];

export function getCategoriesForDomain(domain: VideoDomain | "all") {
  const source =
    domain === "all" ? allVideos : allVideos.filter((v) => v.domain === domain);
  const map = new Map<string, { id: string; label: string; count: number }>();
  for (const video of source) {
    const existing = map.get(video.category);
    if (existing) {
      existing.count += 1;
    } else {
      map.set(video.category, {
        id: video.category,
        label: video.categoryLabel,
        count: 1,
      });
    }
  }
  return Array.from(map.values()).sort((a, b) => a.label.localeCompare(b.label));
}

export function filterVideos(
  domain: VideoDomain | "all",
  category: string | "all"
) {
  return allVideos.filter((video) => {
    if (domain !== "all" && video.domain !== domain) return false;
    if (category !== "all" && video.category !== category) return false;
    return true;
  });
}
