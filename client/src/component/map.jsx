import { useCallback, useEffect, useMemo, useState } from "react";
import { MapContainer, TileLayer, Popup, Marker, useMap, useMapEvents } from "react-leaflet"
import "leaflet/dist/leaflet.css";
import L, { Icon } from "leaflet";
import "leaflet-routing-machine";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
import iconUrl from "../assets/icons8-marker-48.png";
import iconUrl2 from "../assets/icons8-human-48.png";
import { useDispatch, useSelector } from "react-redux";
import { user_update } from "../redux/user/action";
import { cPosition, dPosition, distanceAction } from "../redux/map/action";
const StoresMap = () => {

    const [routeControl, setRouteControl] = useState(null)
    const [suggestion, setSuggestion] = useState([])
    let [mapZoom, setMapZoom] = useState(localStorage.getItem("mapZoom") ? Number(JSON.parse(localStorage.getItem("mapZoom"))) : 13)
    const { user, auth } = useSelector(state => state.user)
    const dispatch = useDispatch()
    const { current_position, destination_position, distance } = useSelector(state => state.mapCoords)




    // useEffect(() => {

    //     if (navigator.geolocation) {
    //         navigator.geolocation.getCurrentPosition((res))
    //         function res(pos) {
    //             successCallback(pos)
    //         }
    //     }
    //     else {
    //         console.log("geolocation is not supported by this browser !")
    //     }

    // }, [destination_position])

    const getLiveRoute_handler = useCallback(() => {
        let watchId = localStorage.getItem("watchId");
        if (navigator.geolocation) {

            if (!watchId || watchId == null || watchId == undefined) {
                if (destination_position && current_position) {

                    let newWatchId = navigator.geolocation.watchPosition((successCallback))
                    localStorage.setItem("watchId", newWatchId)
                }
            }
            else {
                navigator.geolocation.clearWatch(parseInt(watchId, 10))
                localStorage.removeItem("watchId")
            }
        }
    })

    useEffect(() => {
        if (destination_position) {
            getLiveRoute_handler()
        }
    }, [destination_position, current_position])

    const successCallback = useCallback((watchPositionPos) => {
        if (watchPositionPos.coords) {
            console.log("posssssss =>>>> ", watchPositionPos.coords)
            const { latitude, longitude } = watchPositionPos.coords;
            dispatch(cPosition([latitude, longitude]))

            if (routeControl && destination_position && current_position) {
                console.log("live start")
                routeControl.setWaypoints([L.latLng([latitude, longitude]), L.latLng(destination_position)]);
            }
        }
    }, []);

    useCallback(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((res))
            function res(pos) {
                successCallback(pos)
            }
        }
    }, [destination_position])



    const errorCallback = (err) => {
        console.log("errorrrr =>", err)
    }


    // useEffect(() => {
    //     if (current_position && destination_position) {
    //         const distanceInMeters = getDitanceFun(current_position, destination_position)
    //         dispatch(distanceAction(destination_position, current_position))
    //     }
    // }, [current_position, destination_position])

    // useEffect(() => {
    //     if (current_position && destination_position) {
    //         if (routeControl) {
    //             routeControl.setWaypoints([L.latLng(current_position), L.latLng(destination_position)])
    //         }
    //     }
    // }, [current_position, destination_position, routeControl])

   const updateRouteAndDistance  = useCallback(()=>{
    if (current_position && destination_position) {
        const distanceInMeters = getDitanceFun(current_position, destination_position)
        dispatch(distanceAction(destination_position, current_position))
    }

    if (current_position && destination_position) {
        if (routeControl) {
            routeControl.setWaypoints([L.latLng(current_position), L.latLng(destination_position)])
        }
    }
    },[current_position, destination_position, routeControl])

    useEffect(()=>{
        updateRouteAndDistance()
    },[updateRouteAndDistance])

    // custome icon

    // for simple way to make separate 
    const RouteWaypoints = () => {
        useMapEvents({
            click: (e) => {
                if (destination_position) {
                    return dispatch(dPosition(null));
                }
                else {
                    handleMapClick(e)
                }
            }
        })
    }

    const getDitanceFun = useMemo(() => {
        return (current_position, destination_position) => {
            if (current_position && destination_position) {
                const earthRadius = 6371e3; // Earth radius in meters
                const posLat = (current_position[0] * Math.PI) / 180; // φ, λ in radians
                const destLat = (destination_position[0] * Math.PI) / 180; // φ, λ in radians

                const remainLat = ((destination_position[0] - current_position[0]) * Math.PI) / 180;
                const remainLong = ((destination_position[1] - current_position[1]) * Math.PI) / 180;

                const a = Math.sin(remainLat / 2) * Math.sin(remainLat / 2)
                    +
                    Math.cos(posLat) * Math.cos(destLat) * Math.sin(remainLong / 2) * Math.sin(remainLong / 2);

                const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

                return earthRadius * c
            }
        }
    }, [])

    const handleMapClick = (e) => {
        const { lat, lng } = e.latlng
        dispatch(dPosition([lat, lng]))
    }

    // search
    const searchLocationFun = async (e) => {
        const input = e.target.value;

        try {
            let clear = setTimeout(async () => {
                if (input) {
                    const response = await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${input}`);
                    const data = await response.json();
                    setSuggestion(data)
                    return clearTimeout(clear)
                }
            }, 2000)
        } catch (error) {
            console.log("search suggestion error => ", error)
        }
    }

    // searhed location set as destination location
    const handleSuggestionSelect = (items) => {
        const { lat, lon } = items;
        dispatch(dPosition([lat, lon]))
        setSuggestion([])
    }

    // set default zoom
    const zoomHandler = () => {
        let newValue = document.getElementById("zoomInput").value;
        localStorage.setItem("mapZoom", JSON.stringify(newValue))
        window.location.reload(true)
    }

    const submitDestinationMarl_As_storeLocation = () => {
        if (destination_position) {           
            dispatch(user_update({
                storeLocation: {
                    type: "Point",
                    coordinates: [destination_position[0], destination_position[1]]
                }
            }))
        }
    }

    console.log(destination_position)
    console.log(user?.storeLocation)


    return (
        <div className="w-full relative z-0 min-h-80vh">

            <div className="w-full flex items-center px-2 py-2 gap-x-4 border">
                <div className="text-xs md:text-sm text-center font-semibold text-gray-600">Distance : {(Math.ceil(distance).toString()).length >= 4 ? ((Math.ceil(distance)) / 1000).toFixed(2) + " km" : Math.ceil(distance) + " meter/s"}</div>
                <button onClick={() => getLiveRoute_handler()} className="button text-2xs md:text-sm text-gray-100 hover:bg-blue-500 px-3 py-1 bg-theme-blue-600 rounded">Get Live Route</button>
                <div className="w-max flex gap-x-1">
                    <input defaultValue={mapZoom} id="zoomInput" type="number" className="w-10 text-sm text-gray-500 px-1 rounded outline-0" />
                    <button onClick={() => zoomHandler("+")} className="text-2xs md:text-sm text-gray-100 hover:bg-blue-500 px-3 py-1 bg-theme-blue-600 rounded">Set Zoom</button>
                </div>
            </div>
            {current_position &&
                (<MapContainer center={current_position || [48.8566, 2.3522]} zoom={mapZoom} scrollWheelZoom={false} style={{ height: "70vh", width: "100%" }} id="map">
                    <TileLayer
                        key={current_position.join("_")}
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    {destination_position &&
                        <Marker position={destination_position} icon={L.icon({
                            iconUrl: iconUrl,
                            iconSize: [38, 38]
                        })}>
                            <Popup>
                                Destination
                            </Popup>
                        </Marker>
                    }
                    <Marker position={current_position} icon={L.icon({
                        iconUrl: iconUrl2,
                        iconSize: [38, 38]
                    })}>
                        <Popup>
                            Your location
                        </Popup>
                    </Marker>
                    {/* <CustomClickHandler onClick={handleMapClick}/> */}
                    <RouteWaypoints />
                    <Routing routeControl={setRouteControl} destination_position={destination_position} />
                </MapContainer>)
            }

            <div className="w-full bg-white jusitify-start flex gap-x-3 gap-y-2 flex-col px-4 py-2 mx-auto">
                <input type="text" defaultValue="" onChange={searchLocationFun} placeholder="Search here..." className="w-full lg:max-w-72 h-8 px-2 py-0.5 mx-auto my-1 block outline-0 border rounded" />
                <ul className="w-full flex flex-col mx-auto bg-white h-max max-h-20vh overflow-y-auto scroll-overflow-hidden text-center gap-y-1">
                    {suggestion.map((items, index) => {
                        return <li key={items.place_id} className="w-full h-12 border text-gray-600 block cursor-pointer bg-white pt-0.5" onClick={() => handleSuggestionSelect(items)}>{items.display_name}</li>
                    })}
                </ul>
            </div>
            <div className="w-full flex px-2 py-2">
               {auth && <button disabled={destination_position ? false : true} onClick={() => submitDestinationMarl_As_storeLocation()} className={`button text-sm text-gray-100 hover:bg-blue-500 px-3 py-1 ${destination_position ? "bg-theme-blue-600" : "bg-blue-300"} rounded`}>Set Store Location</button> }
            </div>
        </div>
    )
}

export default StoresMap;

// export const CustomClickHandler = ({onClick}) => {
//     const map = useMap();

//     useEffect(()=>{
//         if(map){
//             map.on("click", onClick)
//         }

//         return ()=>{
//             if(map){
//                 map.off("click", onClick)
//             }
//         }
//     },[map, onClick]);
//     return null
// }

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