import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Popup, Marker, useMap, useMapEvents } from "react-leaflet"
import "leaflet/dist/leaflet.css";
import L, { Icon } from "leaflet";
import "leaflet-routing-machine";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
import iconUrl from "../assets/icons8-marker-48.png";
import iconUrl2 from "../assets/icons8-human-48.png";
const StoresMap = () => {
    const [position, setPosition] = useState(
        // [28.5230611, 77.2593576]
        // [48.8566, 2.3522]
        null
    );
    const [destinationMark, setDestinationMark] = useState(null)
    const [distance, setDistance] = useState(0)
    const [routeControl, setRouteControl] = useState(null)
    const [suggestion, setSuggestion] = useState([])




    useEffect(() => {

        if (navigator.geolocation) {
            // navigator.geolocation.getCurrentPosition((location) => {
            //     const { latitude, longitude } = location.coords;
            //     setPosition([latitude, longitude])

            // }, (error) => {
            //     console.log("location error => ", error)
            // })
            navigator.geolocation.getCurrentPosition((res))

            function res(pos) {
                successCallback(pos)
            }
            // navigator.geolocation.watchPosition((successCallback))

        }
        else {
            console.log("geolocation is not supported by this browser !")
        }

    }, [])

    const getLiveRoute_handler = () => {
        let watchId = localStorage.getItem("watchId");
        let liveRoutClear
        if (navigator.geolocation) {

            if (!watchId || watchId == null || watchId == undefined) {
                if( destinationMark && position){

                liveRoutClear = navigator.geolocation.watchPosition((successCallback))
                localStorage.setItem("watchId", JSON.stringify({from : position, to : destinationMark}))
                }
            }
            else {
                navigator.geolocation.clearWatch(liveRoutClear)
                localStorage.removeItem("watchId")
            }
        }
    }

    function successCallback(pos) {
        const { latitude, longitude } = pos.coords;
        setPosition([latitude, longitude])

        if(routeControl && destinationMark && position){
            console.log("live start")
                routeControl.setWaypoints([L.latLng([latitude, longitude]), L.latLng(destinationMark)]);
        }
    }

    const errorCallback = (err) => {
        console.log("errorrrr =>", err)
    }


    useEffect(() => {
        if (position && destinationMark) {
            const distanceInMeters = getDitanceFun(position, destinationMark)
            setDistance(distanceInMeters)
        }
    }, [position, destinationMark])

    useEffect(() => {
        if (position && destinationMark) {
            if (routeControl) {
                routeControl.setWaypoints([L.latLng(position), L.latLng(destinationMark)])
            }
        }
    }, [position, destinationMark, routeControl])

    // custome icon

    // for simple way to make separate 
    const RouteWaypoints = () => {
        useMapEvents({
            click: (e) => {
                if (destinationMark) {
                    return setDestinationMark(null);
                }
                else {
                    handleMapClick(e)
                }
            }
        })
    }

    const getDitanceFun = (position, destinationMark) => {
        console.log(position[0])
        const earthRadius = 6371e3; // Earth radius in meters
        const posLat = (position[0] * Math.PI) / 180; // φ, λ in radians
        const destLat = (destinationMark[0] * Math.PI) / 180; // φ, λ in radians

        const remainLat = ((destinationMark[0] - position[0]) * Math.PI) / 180;
        const remainLong = ((destinationMark[1] - position[1]) * Math.PI) / 180;

        const a = Math.sin(remainLat / 2) * Math.sin(remainLat / 2)
            +
            Math.cos(posLat) * Math.cos(destLat) * Math.sin(remainLong / 2) * Math.sin(remainLong / 2);

        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

        return earthRadius * c
    }

    const handleMapClick = (e) => {
        const { lat, lng } = e.latlng
        setDestinationMark([lat, lng])
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

    const handleSuggestionSelect = (items) => {
        const { lat, lon } = items;
        setDestinationMark([lat, lon])
        setSuggestion([])
    }

    return (
        <div className=" relative z-0 min-h-80vh">
           
            <div className="w-full flex px-2 py-2 gap-x-4 border">
                {console.log((Math.ceil(distance).toString()).length)}
                <div className=" text-center text-gray-600">Distance : {(Math.ceil(distance).toString()).length >= 4 ? ((Math.ceil(distance)) / 1000).toFixed(2) + " km" : Math.ceil(distance) + " meter/s"}</div>
                <button onClick={() => getLiveRoute_handler()} className="button text-sm text-gray-100 hover:bg-blue-500 px-3 py-1 bg-theme-blue-600 rounded">Get Live Route</button>
            </div>
            {position &&
                (<MapContainer center={position || [48.8566, 2.3522]} zoom={16} scrollWheelZoom={false} style={{ height: "70vh", width: "100%" }} id="map">
                    <TileLayer
                        key={position.join("_")}
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    {destinationMark &&
                        <Marker position={destinationMark} icon={L.icon({
                            iconUrl: iconUrl,
                            iconSize: [38, 38]
                        })}>
                            <Popup>
                                Destination
                            </Popup>
                        </Marker>
                    }
                    <Marker position={position} icon={L.icon({
                        iconUrl: iconUrl2,
                        iconSize: [38, 38]
                    })}>
                        <Popup>
                            Your location
                        </Popup>
                    </Marker>
                    {/* <CustomClickHandler onClick={handleMapClick}/> */}
                    <RouteWaypoints />
                    <Routing routeControl={setRouteControl} />
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

export const Routing = ({ routeControl }) => {
    const map = useMap();
    useEffect(() => {
        if (!map) {
            return;
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