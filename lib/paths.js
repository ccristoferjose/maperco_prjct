export const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export function mediaPath(src) {
  if (!src || typeof src !== "string") return src;
  if (/^(https?:|data:|blob:|mailto:|tel:|#)/.test(src)) return src;
  if (!basePath || !src.startsWith("/")) return src;
  if (src === basePath || src.startsWith(`${basePath}/`)) return src;
  return `${basePath}${src}`;
}
