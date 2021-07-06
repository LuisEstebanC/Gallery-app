import { useEffect, useState, useCallback, useContext } from "react";
import { InputContext, SelectContext } from "../contexts/NavOptionsContext";
export const useFetchImages = () => {
  const [images, setImages] = useState([]);
  const { input, setInput } = useContext(InputContext);
  const { perPage, setPerPage } = useContext(SelectContext);

  const [loading, setLoading] = useState(true);

  const getImages = useCallback(async () => {
    try {
      const key = "client_id=KLU4jVRLwfpURPnIPytZktbrkatLMatRBOlRHCDX97Y";

      let route = `https://api.unsplash.com/photos/?per_page=${perPage}&${key}`;

      if (input !== "") {
        route = `https://api.unsplash.com/search/photos/?page=2&per_page=${perPage}&query=${encodeURIComponent(
          input
        )}&min-h=6300&w=300&fit=crop&${key}`;
      }

      setLoading(true);

      const res = await fetch(route);
      const data = await res.json();

      if (!!data) {
        setImages(appendAspectRatio(data.results ?? data));
      } else {
        setImages(data);
      }
      setLoading(false);
    } catch (e) {}
  }, [input, perPage]);

  const appendAspectRatio = (imageArray) =>
    imageArray.map((img) => ({
      ...img,
      simpleAspect: calcSimpleAspect(img.width, img.height),
    }));

  // Simplifies aspect ratio information
  // categorizing between tall and wide images
  const calcSimpleAspect = (width, height) => {
    const aspect = width / height;

    return aspect >= 1 ? "wide" : "tall";
  };

  useEffect(() => {
    getImages();
  }, [getImages, perPage]);

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log(e.target[0].value);
  //   const text = e.target[0].value;

  //   setInput(text);
  // };
  // const selectChange = (e) => {
  //   const number = e.value;
  //   setPerPage(number);
  // };

  return [images, loading, setInput];
};
