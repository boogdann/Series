import React from 'react';
import { YMaps, Map, Placemark } from 'react-yandex-maps';

const apiKey = '96c450a5-0d18-4ed8-ba67-527d9039ef83';

const MapItem = (props) => {

    return (
        <YMaps query={{apikey: apiKey}}>
            <Map  defaultState={{center: props.map.center, zoom: props.map.zoom}}>
                <Placemark geometry={props.map.center}/>
            </Map>
        </YMaps>
    )
};

export default MapItem;