import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import RoutineMachineDataContainer from "./RoutineMachineDataContainer";
import L from "leaflet";
import { transformMsTimestampToDate, transformMsTimestampToTime } from "../../utils";


const Map = ({ geoPosList }) => {




    var greenIcon = L.icon({
        iconUrl: 'location.png',

        iconSize: [20, 20], // size of the icon

    });






    return (
        <>
            <MapContainer
                doubleClickZoom={false}
                id="mapId"
                zoom={20}
                style={{
                    height: '500px',
                    width: '500px',
                    margin: '0',
                    padding: '0'
                }}
            >
                <TileLayer
                    url="https://api.maptiler.com/maps/basic/256/{z}/{x}/{y}.png?key=fXmTwJM642uPLZiwzhA1"
                    attribution='&copy; <a href="https://www.maptiler.com/">MapTiler</a> &copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                />
                {geoPosList.length % 2 && <RoutineMachineDataContainer geolocList={geoPosList} />}
                {!(geoPosList.length % 2) && <RoutineMachineDataContainer geolocList={geoPosList} />}
                {geoPosList.map(geoloc => <Marker position={L.latLng(geoloc.lat, geoloc.long)} icon={greenIcon} >

                    <Popup>

                        {transformMsTimestampToTime(Number(geoloc.timestamp))}
                        <br />
                        {transformMsTimestampToDate(Number(geoloc.timestamp))}

                    </Popup>
                </Marker>)}
            </MapContainer>
        </>
    );
};

export default Map;
