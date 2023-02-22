export const getCharacterId = (url) => {
    const matches = url.match(/\/([0-9]*)\/$/);
    return matches[1];
};
  