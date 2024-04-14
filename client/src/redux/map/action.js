import { CURRENT_POSITION, DESTINATION_POSITION, DISTANCE } from "./type"


export const cPosition = (cPosition) => async (dispatch) => {
    dispatch({
        type : CURRENT_POSITION,
        payload : cPosition
    })
}

export const dPosition = (dPosition) => async (dispatch) => {
    dispatch({
        type : DESTINATION_POSITION,
        payload : dPosition
    })
}

export const distanceAction = (position, destinationMark) => async (dispatch) => {
    const earthRadius = 6371e3; // Earth radius in meters
    const posLat = (position[0] * Math.PI) / 180; // φ, λ in radians
    const destLat = (destinationMark[0] * Math.PI) / 180; // φ, λ in radians

    const remainLat = ((destinationMark[0] - position[0]) * Math.PI) / 180;
    const remainLong = ((destinationMark[1] - position[1]) * Math.PI) / 180;

    const a = Math.sin(remainLat / 2) * Math.sin(remainLat / 2)
        +
        Math.cos(posLat) * Math.cos(destLat) * Math.sin(remainLong / 2) * Math.sin(remainLong / 2);

    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    let distance = earthRadius * c

    dispatch({
        type : DISTANCE,
        payload : distance
    })
}