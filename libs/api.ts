export const getAnime = async (resource: any, query: any) => {
  const response = await fetch(
    `${process.env.PUBLIC_API_URL}/${resource}?${query}`,
    {
      cache: "no-cache",
    }
  );
  const anime = await response.json();
  return anime;
};

export const getNestedAnime = async (resource: any, objectProperty: any) => {
  const response = await getAnime(resource, "");
  return response.data.flatMap((data: any) => data[objectProperty]);
};

export const getRandom = (data: any, gap: any) => {
  const firstNumber = Math.floor(Math.random() * (data.length - gap));
  const lastNumber = firstNumber + gap;

  const response = {
    data: data.slice(firstNumber, lastNumber)
  }

  return response
};
