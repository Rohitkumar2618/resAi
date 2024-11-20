import React, { useEffect, useState, useContext } from "react";
import { useSelector } from "react-redux";
import GoogleMapReact from "google-map-react";
import axios from 'axios';

const markerColors = ['#43fd10', '#43fd10', '#faf32c', '#ffa601', '#ff720d', '#ff250d'];

const Gmap = () => {
  const { city, area, climateType } = useSelector((state) => state.mapTopBar);

  const [location, setLocation] = useState({
    lat: 28.613939,
    lng: 77.209023
  });

  const [defaultProps, setDefaultProps] = useState({
    center: location,
    zoom: 15
  });
  const [mapLoader, setMapLoader] = useState(false);
  const [mapDataToShow, setMapDatToShow] = useState([]);

  const fetchDataFromJson = (jsonPath) => {
    const baseUrl = window.location.protocol + '//' + window.location.host + '/';
    if (jsonPath != '') {
      setMapLoader(true);
      axios.get(baseUrl + jsonPath)
        .then(response => {
          setLocation({ lat: response.data.features[0].geometry.coordinates[0][0][1], lng: response.data.features[0].geometry.coordinates[0][0][0] });
          setDefaultProps({
            center: { lat: response.data.features[0].geometry.coordinates[0][0][1], lng: response.data.features[0].geometry.coordinates[0][0][0] },
            zoom: 18
          });
          setMapDatToShow(response.data);
          setMapLoader(false);
        }).catch(err => {
          setMapLoader(false);
          console.log(err)
        })
    }
  }

  useEffect(() => {
    console.log('city, area, climateType', city, area, climateType);
    if (climateType != '') {
      fetchDataFromJson(city + '_' + climateType + '.json');
    }
  }, [city, climateType]);

  const renderMarkers = (map, maps) => {
    if (mapDataToShow && mapDataToShow.features) {
      setLocation({ lat: mapDataToShow.features[0].geometry.coordinates[0][0][1], lng: mapDataToShow.features[0].geometry.coordinates[0][0][0] });
      setDefaultProps({
        center: { lat: mapDataToShow.features[0].geometry.coordinates[0][0][1], lng: mapDataToShow.features[0].geometry.coordinates[0][0][0] },
        zoom: 22
      });
      mapDataToShow.features.map((ftr, indx) => {
        //if (indx < 10) {


        return ftr.geometry.coordinates[0].map((latLng, index) => {
          return (
            // new maps.Circle({
            //   strokeColor: markerColors[ftr.properties.risk_score],
            //   strokeOpacity: 0.8,
            //   strokeWeight: 1,
            //   fillColor: markerColors[ftr.properties.risk_score],
            //   fillOpacity: 1,
            //   map,
            //   center: {
            //     lat: latLng[1],
            //     lng: latLng[0],
            //   },
            //   radius: 2,
            // })
            new maps.Polygon({
              path: [{
                lat: latLng[1],
                lng: latLng[0],
              }, {
                lat: latLng[1],
                lng: latLng[0],
              }, {
                lat: latLng[1],
                lng: latLng[0],
              }, {
                lat: latLng[1],
                lng: latLng[0],
              }, {
                lat: latLng[1],
                lng: latLng[0],
              }],
              strokeColor: markerColors[ftr.properties.risk_score],
              strokeOpacity: 1,
              strokeWeight: 10,
              fillColor: markerColors[ftr.properties.risk_score],
              fillOpacity: 1,
              map
            })
            // new maps.Polyline({
            //   path: [{
            //     lat: latLng[1],
            //     lng: latLng[0],
            //   }, {
            //     lat: latLng[1],
            //     lng: latLng[0],
            //   }],
            //   geodesic: true,
            //   strokeColor: markerColors[ftr.properties.risk_score],
            //   strokeOpacity: 1.0,
            //   strokeWeight: 9,
            //   map
            // })
            // new maps.Rectangle({
            //   strokeColor: markerColors[ftr.properties.risk_score],
            //   strokeOpacity: 1,
            //   strokeWeight: 5,
            //   fillColor: markerColors[ftr.properties.risk_score],
            //   fillOpacity: 1,
            //   map,
            //   bounds: {
            //     north: latLng[1],
            //     south: latLng[1],
            //     east: latLng[0],
            //     west: latLng[0] + 1,
            //   }
            // })
          )
        })
        // } else {
        //   return;
        // }
      })
    }
  }

  return (
    <div style={{ height: "100%", width: "100%" }}>
      {mapLoader ? (
        <div className="mapLoaderStyles">
          <img src="https://media1.tenor.com/m/Fv9Tr4SKoxAAAAAC/load-blue.gif" />
        </div>
      ) : (
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyANgyPWflrxP830mLK1HYp2HlpTudzdjIQ" }}
          center={defaultProps.center}
          zoom={defaultProps.zoom}
          heatmapLibrary={true}
          yesIWantToUseGoogleMapApiInternals={true}
          options={
            {
              mapTypeControl: true,
              streetViewControl: true,
              mapTypeId: 'satellite',
              controlSize: 30,
            }
          }
          onGoogleApiLoaded={({ map, maps }) => renderMarkers(map, maps
          )}
        >

        </GoogleMapReact>
      )
      }

    </div >
  );
};

export default Gmap;
