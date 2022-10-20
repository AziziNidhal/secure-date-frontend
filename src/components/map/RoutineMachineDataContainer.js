import React,{useState, useRef, useEffect } from "react";
import RoutineMachine from "./RoutineMachine";


const RoutineMachineDataContainer = ({ geolocList }) => {

    const rMachine = useRef();

    useEffect(() => {
        if (rMachine.current) {
          rMachine.current.setWaypoints([geolocList[0]]);
        }
      }, [geolocList, rMachine]);

    console.log('DataContainer', geolocList);


    return <RoutineMachine geolocList={geolocList} />

}

export default RoutineMachineDataContainer;