import React from "react";
import { useFetchImages } from "../hooks/useFetchImages";
import Card from "./Card";

import Loading from "./Loading";

import Select from "react-select";

const Cards = () => {
  const [images, loading, selectChange] = useFetchImages();

  const tallImages = images.filter((images) => images.simpleAspect === "tall");
  const wideImages = images.filter((images) => images.simpleAspect === "wide");
  let tallIndex = 0;
  let wideIndex = 0;
  let imagesCombos = [];

  while (tallIndex < tallImages.length || wideIndex < wideImages.length) {
    const tallSlice = tallImages.slice(tallIndex, tallIndex + 1);
    const wideSlice = wideImages.slice(wideIndex, wideIndex + 2);

    imagesCombos = [...imagesCombos, [...tallSlice], [...wideSlice]];

    tallIndex += tallSlice.length;
    wideIndex += wideSlice.length;
  }

  imagesCombos = [...imagesCombos.filter((combo) => combo.length !== 0)];

  // const options = [
  //   { value: 10, label: "10" },
  //   { value: 20, label: "20" },
  //   { value: 120, label: "All images" },
  // ];

  // const customStyles = {
  //   borderRadius: "4px",
  //   colors: {
  //     primary25: "#b8b1bb",
  //     primary: "#C022F5",
  //   },
  // };

  return (
    <div className="text-Center">
      <div className="forndiv my-5 mx-5">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-sm-9 col-12"></div>
            <div className="col-xl-6 col-sm-3 col-12">
              {/* <div className="selectD">
                <Select
                  className="selectD"
                  options={options}
                  onChange={selectChange}
                  theme={customStyles}
                />
              </div> */}
            </div>
          </div>
        </div>
      </div>
      <div className="loading">{loading && <Loading />}</div>

      <div className="container2">
        {imagesCombos.map((combo, index) => (
          <div className="image-container" key={index}>
            {combo.map((img) => (
              <Card key={img.id} img={img.urls.small} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
