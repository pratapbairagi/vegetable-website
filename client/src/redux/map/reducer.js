import { CURRENT_POSITION, DESTINATION_POSITION, DISTANCE } from "./type"


const mapCoords = (state = {
    current_position: [28.5230611, 77.2593576],
    destination_position : null,
    distance : 0
}, action) => {
    switch (action.type) {
        case CURRENT_POSITION:
            return {
                ...state,
                current_position: action.payload
            }
        case DESTINATION_POSITION :
            return {
                ...state,
                destination_position : action.payload
            }
        case DISTANCE :
            return {
                ...state,
                distance : action.payload
            }
        default: return state
    }
}

export default mapCoords