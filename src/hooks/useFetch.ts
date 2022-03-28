import { useState, useEffect } from "react";

const useFetch = (
  url: string,
  options: Record<string, any>
): [boolean, Record<string, any>, boolean] => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState({});
  const [error, setIsError] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch(url, options)
      .then((res) => res.json)
      .then((res) => {
        setData(res);
        setIsError(false);
      })
      .catch((err) => {
        setIsError(true);
        setData({});
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [url, options]);

  return [isLoading, data, error];
};

export { useFetch };
