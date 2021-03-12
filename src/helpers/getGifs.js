export const getGifs = async (category) => {
  const key = "XqCRv1HEDWIYiqu7eFTicBreMtRSceaF";
  const urlGIF = `https://api.giphy.com/v1/gifs/search?api_key=${key}&q=${encodeURI(
    category
  )}&limit=10&offset=0&rating=g&lang=en`;
  const resp = await fetch(urlGIF);
  const { data } = await resp.json();

  const gifs = data.map((img) => {
    return {
      id: img.id,
      title: img.title,
      url: img.images?.downsized_medium.url,
    };
  });
  // console.log(gifs)
  return gifs;
};
