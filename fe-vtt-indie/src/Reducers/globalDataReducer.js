import { initialState } from "../Store/index.js"


const dataReducer = (state = initialState, action) => {
	switch (action.type) {
		case "SETLOGGEDIN": 
			return {
					...state,
			loggedIn: action.payload,
		}
		case "SETINGAME": 
			return {
					...state,
			inGame: action.payload,
		}
		case "SETTOAST": 
			return {
					...state,
			toast: action.payload,
		}
		case "SETDICEROLL":
			return {
			...state,
			diceNotation: action.payload,
		}	
		case "ADDOPENCHAR": 
		return {
			...state, 
			activeCharacters: state.activeCharacters.length > 0 ? state.activeCharacters.filter(char => char._id === action.payload._id).length > 0 ? [...state.activeCharacters] : [...state.activeCharacters, action.payload]  : [action.payload] 
		}
		case "SETCHARACTERCLOSED": 
		return {
			...state, 
			activeCharacters: state.activeCharacters.filter(char => char._id !== action.payload)
		}
		default:
		return state 	
	}
}

export default dataReducer