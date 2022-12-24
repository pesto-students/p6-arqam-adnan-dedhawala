export const getShortUrlService = url => {
  return fetch("https://api.shrtco.de/v2/shorten?url=" + url)
    .then(res => res.json())
    .then(result => {
      return result;
    });
};
