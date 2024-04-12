import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Popup, Marker, useMap, useMapEvents } from "react-leaflet"
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import "leaflet-routing-machine";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css"

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
            navigator.geolocation.getCurrentPosition((location) => {
                const { latitude, longitude } = location.coords;
                setPosition([latitude, longitude])
            }, (error) => {
                console.log("location error => ", error)
            })
        }
        else {
            console.log("geolocation is not supported by this browser !")
        }

}, [])

useEffect(()=>{
    if(position && destinationMark){
        const distanceInMeters = getDitanceFun(position, destinationMark)
        setDistance(distanceInMeters)
    }
},[position, destinationMark])

useEffect(()=>{
    if(position && destinationMark){
        if(routeControl){
            routeControl.setWaypoints([L.latLng(position), L.latLng(destinationMark)])
        }
    }
},[position, destinationMark, routeControl])

// for simple way to make separate 
const RouteWaypoints = () => {
    useMapEvents({
        click : (e) => {
            if(destinationMark){
                return setDestinationMark(null);
            }
            else{            
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

    const a = Math.sin(remainLat /2) * Math.sin(remainLat /2)
    +
    Math.cos(posLat) * Math.cos(destLat) * Math.sin(remainLong/2) * Math.sin(remainLong/2);

    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));

    return earthRadius * c
}

const handleMapClick = (e) => {
    // alert("hhh")
    console.log(e.latlng)
    const {lat, lng} = e.latlng
    setDestinationMark([lat, lng])
}

// search
const searchLocationFun = async (e) => {
    const input = e.target.value;

    try {
        let clear = setTimeout(async()=>{
        if(input){
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
    const {lat, lon} = items;
    setDestinationMark([lat, lon])
    setSuggestion([])
}

    return (
        <>
        <input type="text" defaultValue="" onChange={searchLocationFun} placeholder="Search here..." className="w-60 h-8 px-2 mx-auto my-1 block" />
            <div className="w-full text-center">{distance}</div>
        <ul className="w-60 flex flex-col h-12 mx-auto">
            {suggestion.map((items, index)=>{
                return <li key={items.place_id} className="w-full h-12 border block cursor-pointer" onClick={()=>handleSuggestionSelect(items)}>{items.display_name}</li>
            })}
        </ul>
        { position && 
           (<MapContainer center={position || [48.8566, 2.3522]} zoom={16} scrollWheelZoom={false} style={{height:"70vh"}} id="map">
                <TileLayer
                    key={position.join("_")}
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {destinationMark &&
                    <Marker position={destinationMark}>
                        <Popup>
                        
                        </Popup>
                    </Marker>
                }
                <Marker position={position}>
                    <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Marker>
                {/* <CustomClickHandler onClick={handleMapClick}/> */}
                <RouteWaypoints/>
                <Routing routeControl={setRouteControl} />
            </MapContainer>)
}

            </>
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

export const Routing = ({routeControl}) => {
    const map = useMap();
    useEffect(()=>{
        if(!map){
            return ;
        }
        const control = L.Routing.control({
            router : L.Routing.osrmv1({
                serviceUrl : "http://router.project-osrm.org/route/v1"
            }),
            routeWhileDragging : true,
            waypoints : []
        }).addTo(map)

        if(routeControl){
            routeControl(control)
        }

        return () => map.removeControl(control)
        
    },[map, routeControl])

    
}