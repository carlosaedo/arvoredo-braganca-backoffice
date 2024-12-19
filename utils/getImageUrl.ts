export const resolveImageUrl = (image?: string) => {
  const baseUrl = process.env.NEXT_PUBLIC_STRAPI_API_URL ?? "https://localhost";
  if (!image) return baseUrl;
  if (baseUrl.includes("https")) return image;
  return `${baseUrl}/${image}`;
};
