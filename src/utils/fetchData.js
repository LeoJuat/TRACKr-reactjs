export const exerciseOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "097984f24bmsh8811627c5414e29p1326f4jsn71648956b79b",
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
};

export const fetchData = async (url, options) => {
  const res = await fetch(url, options);
  const data = await res.json();

  return data;
};
