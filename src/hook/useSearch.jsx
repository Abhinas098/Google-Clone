import { useEffect, useState } from "react";
import API_KEY, { CX } from "../key";

// https://developers.google.com/custom-search/v1/using_rest
// https://programmablesearchengine.google.com/controlpanel/create

const useSearch = (val) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        `https://customsearch.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CX}&q=${val}`
      );
      const result = await res.json();
      await setData(result);
    };

    fetchData();
  }, [val]);

  return { data };
};

export default useSearch;
