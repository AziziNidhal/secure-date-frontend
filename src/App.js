import React, { useCallback, useEffect, useState } from "react";
import Map from "./components/map/map";
import "./App.css";
import { useSearchParams } from "react-router-dom";
import useInterval from "./hooks/use-interval";
import ImageList from "./components/imageList/ImageList";

export default function App() {
  const [geoPosList, setGeoPosList] = useState([]);
  const [imageList, setImageList] = useState([]);

  const [error, setError] = useState(false);
  const [errorImg, setErrorImg] = useState(false);

  const [searchParams] = useSearchParams();

  console.log(searchParams.get('secretCode'));
  const secretCode = searchParams.get('secretCode');
  const url = `https://secure-date-back.herokuapp.com/alert/getGeoPosList?tracabilityCode=${secretCode}`;
  const urlImage = `https://secure-date-back.herokuapp.com/alert/getImagesList?tracabilityCode=${secretCode}`;

  const fetchGeoPos = async () => {
    try {
      setError(false);
      const response = await fetch(url);
      const json = await response.json();
      if(json && json.length > 0){
        setGeoPosList([json[0],json[0]])
      }
      // setGeoPosList(json);
    } catch (error) {
      console.log(error)
      setError(true);

    }
  };

  const fetchImageList = async () => {
    try {
      setErrorImg(false);
      const response = await fetch(urlImage);
      const json = await response.json();
      if(json && json.length > 0){
        setImageList(json)
      }
    } catch (error) {
      console.log(error)
      setErrorImg(true);

    }
  };

  const fetchGeoPosCb = useCallback(() => fetchGeoPos(), []);
  const fetchImgCb = useCallback(() => fetchImageList(), []);

  useEffect(()=>{
    fetchGeoPosCb();
    fetchImgCb();
  },[fetchGeoPosCb,fetchImgCb])


  useInterval(() => {
    fetchGeoPosCb();
    fetchImgCb();

  }, 4000)


  return (
    <div className="App">
      {geoPosList.length > 0 && <Map geoPosList={geoPosList} />}

      {imageList.length > 0 && <ImageList imageList={imageList}/>}
    </div>
  );
}