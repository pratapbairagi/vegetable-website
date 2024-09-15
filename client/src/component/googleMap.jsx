
import { MapContainer, TileLayer, Marker, Popup, useMapEvents, useMap, CircleMarker, Polyline } from "react-leaflet";
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { useCallback, useEffect, useState } from "react";
import axios from "axios";
// import mark from "./markedIcon.svg"
import iconUrl from "../assets/icons8-marker-48.png";
import iconUrl2 from "../assets/icons8-human-48.png";
import { useDispatch, useSelector } from "react-redux";
import {cPosition} from "../redux/map/action"



const markedIcon = L.icon({
    iconUrl: iconUrl,
    iconRetinaUrl: iconUrl,
    popupAnchor:  [38, 38],
    iconAnchor : [20, 36],
    iconSize: [38,38], 
});


const currentLocationIcon = L.icon({
    iconUrl: iconUrl2,
    iconRetinaUrl: iconUrl2,
    popupAnchor:  [38, 38],
    iconAnchor : [19, 36],
    iconSize: [38,38], 
});

// function LocationMarker({ pos, setPos }) {

//     const map = useMapEvents({
//         click(event) {
//             const { lat, lng } = event.latlng;
//             if (lat && lng) {
//                 console.log("useMapevents ", lng)
//                 setPos({ lat, lng })
//             }
//         }
//     });



//     return pos ? <Marker position={[pos.lat, pos.lng]} icon={markedIcon} /> : null;
// }

function CurrentLocation({ currentLocation }) {

    if (!currentLocation) {
        return null
    }
    console.log("lanlng ", currentLocation.lat, " == ", currentLocation.lng)
    // return currentLocation ? <CircleMarker center={[currentLocation.lat, currentLocation.lng]} radius={10} /> : null;
    return currentLocation ? <CircleMarker center={[currentLocation.lat, currentLocation.lng]} radius={20} > <Marker position={[currentLocation.lat, currentLocation.lng]} icon={currentLocationIcon}  /> </CircleMarker> : null;
    
}


const Googlemap = () => {
    const [pos, setPos] = useState(null);
    const dispatch = useDispatch()
    const [currentLocation, setCurrentLocation] = useState(null);
    // const [routePolyline, setRoutePolyline] = useState(null);
    const [multipleRoutes, setMultipleRoutes] = useState([]);
    const [routeControl, setRouteControl] = useState(null)
    const [option, setOption] = useState([
        {
            option: "foot",
            active: false
        },
        {
            option: "car",
            active: true
        },
        {
            option: "bike",
            active: false
        }
    ])

    // function LocationMarker() {

    //     const map = useMapEvents({
    //         click(event) {
    //             const { lat, lng } = event.latlng;
    //             if (lat && lng) {
    //                 console.log("useMapevents ", lng)
    //                 setPos({ lat, lng })
    //             }
    //         }
    //     });
    //     return pos ? <Marker position={[pos.lat, pos.lng]} icon={markedIcon} /> : null;
    // }

        // select searched location handler
        // const selectSearchedLocationHandler = (v) => {
        //     const {lat, lon} = v;
        //     setPos({lat, lon})
        //     console.log("res lat   ", lat)
        //     console.log("res lonn  ", lon)
        // } 
        const selectSearchedLocationHandler = (v) => {
            console.log(v)
            // if(v){
            // const { lat, lon } = v;
            // setPos({ lat, lon });
            // const map = useMap();

            // }
        };

    
    // useEffect(() => {
    //     if (navigator.geolocation) {
    //         const watchId = navigator.geolocation.watchPosition(
    //             (position) => {
    //                 const { latitude, longitude } = position.coords;
    //                 setCurrentLocation({ lat: latitude, lng: longitude });
    //             },
    //             (error) => {
    //                 console.error('Error getting current location:', error);
    //             }
    //         );
    //         return () => {
    //             navigator.geolocation.clearWatch(watchId);
    //         };
    //     }
    // }, []);

    useEffect(() => {

        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((res))
            function res(pos) {
                successCallback(pos)
            }
        }
        else {
            console.log("geolocation is not supported by this browser !")
        }

    }, [pos])

    function successCallback(pos) {
        const { latitude, longitude } = pos.coords;
        dispatch(cPosition([latitude, longitude]))

        if (routeControl && destination_position && current_position) {
            console.log("live start")
            routeControl.setWaypoints([L.latLng([latitude, longitude]), L.latLng(destination_position)]);
        }
    }
    
    useEffect(() => {
        const fetchData = async () => {
            if (currentLocation && pos) {
                try {
                    const activeOption = option.find(v => v.active).option;
                    const routingEndpoint = `https://routing.openstreetmap.de/routed-${activeOption}/route/v1/driving/${currentLocation.lng},${currentLocation.lat};${pos.lng},${pos.lat}?alternatives=true&overview=full&geometries=geojson`;

                    const response = await axios.get(routingEndpoint);
                    const routes = response.data.routes;

                    if (routes) {
                        const allRoutes = routes.map((r) => {
                            const coordinates = r.geometry.coordinates.map(coords => [coords[1], coords[0]]);
                            return {
                                coordinates,
                                duration: r.duration,
                                distance: r.distance
                            };
                        });
                        setMultipleRoutes(allRoutes);
                    }
                } catch (error) {
                    console.error('Error fetching routing data:', error);
                }
            }
        };

        fetchData();
    }, [currentLocation, pos, option]);


    const selectOption_hanndler = (e) => {
        let x = option.map(v => v.option === e.target.value ? { ...v, active: true } : { ...v, active: false })
        setOption(x)
    }

    // search for a place
    const [result, setResults] = useState({
        searchQuery : "",
        result : [],
        success : false
    })

 const search_submit_handler = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.get(`https://nominatim.openstreetmap.org/search?format=json&q=${result.searchQuery}`);
            setResults({ ...result, result: response.data, searchQuery: "", success: true });
        } catch (error) {
            setResults({ ...result, success: false });
            console.error('Error searching location:', error);
        }
    }




    console.log("result ", pos)
    return (
        <>
            <div className="w-full h-max min-h-50vh hidden">
                {currentLocation ? <MapContainer
                    center={currentLocation ? [currentLocation.lat, currentLocation.lng] : [0, 0]}
                    zoom={13}
                    style={{ height: "400px" }}
                    scrollWheelZoom={false}
                >
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

                    <CurrentLocation currentLocation={currentLocation} />
                    {/* <LocationMarker/> */}

                    {/* Render the route polyline if available */}
                    {/* {routePolyline && <Polyline positions={routePolyline} />} */}

                    {/* {multipleRoutes.map((v, i) => {
                        return <Polyline positions={v.coordinates} key={i} color={i === 0 ? 'blue' : 'gray'} >
                            <Popup>
                                <div>
                                    <p><strong>Route {i + 1}</strong></p>
                                    <p>Distance: {(v.distance / 1000).toFixed(2)} km</p>
                                    <p>Duration: {(v.duration / 60).toFixed(2)} min</p>
                                </div>
                            </Popup>
                        </Polyline>
                    })} */}

                    <RouteWaypoints />
                    <Routing routeControl={setRouteControl} destination_position={pos} />

                </MapContainer> : <div>No Location allowed</div>
                }
            </div>
            <div className="w-full flex flex-wrap gap-x-4 gap-y-3 hidden">
            <select onChange={selectOption_hanndler} value={option.find(v => v.active).option} name="" id="">
                {
                    option.map((v, i) => {
                        return <option value={v.option} key={i}>{v.option}</option>
                    })
                }
            </select>
            <div className="flex">
                Time : {multipleRoutes.map((v, i) => { return <span key={i}>{(v.duration / 60).toFixed(2)} min</span> })}
            </div>
            <div className="flex">
                Distance : {multipleRoutes.map((v, i) => { return <span key={i}>{(v.distance / 1000).toFixed(2)} km</span> })}
            </div>
            <fieldset className="w-max flex">
                <input value={result.searchQuery} type="search" className="w-max min-w-40 h-9 border border-gray-400 outline-0 px-2 text-sm" onChange={(e)=> setResults(search=> ({...search, searchQuery : e.target.value }))} name="" id="" />
                <button onClick={search_submit_handler} className="h-9 px-2 text-gray-100 bg-theme-blue-600">SEARCH</button>
            </fieldset>
            <ul className="w-full flex-col justify-center">
               { result.result.length > 0 ? 
               result.result.map((v,i)=>{ 
                return <li key={i} onClick={()=> selectSearchedLocationHandler(v)} className="text-blue-300 text-sm border border-gray-200 px-2 py-1 w-full cursor-pointer">{v.display_name}</li>
            }) : 
            result.result.length === 0 && result.success &&
            <h5 className="text-red-500 text-sm font-bold w-full ">No Result Found</h5>
            
            }
            </ul>
                </div>

        </>
    )
}

export default Googlemap;

export const Routing = ({ routeControl, destination_position }) => {
    const map = useMap();

    console.log("routinggg")
    useEffect(() => {
        if (!map) {
            return;
        }
        if (destination_position) {
            map.flyTo(destination_position, 13);
        }
        const control = L.Routing.control({
            router: L.Routing.osrmv1({
                serviceUrl: "https://router.project-osrm.org/route/v1"
            }),
            routeWhileDragging: true,
            waypoints: []
        }).addTo(map)

        if (routeControl) {
            routeControl(control)
        }

        return () => map.removeControl(control)

    }, [map, routeControl])
}
