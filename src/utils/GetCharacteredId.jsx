export const getCharacterId = (url) => {
  const segments = url.split("/").filter(Boolean);
  return segments[segments.length - 1];
};
