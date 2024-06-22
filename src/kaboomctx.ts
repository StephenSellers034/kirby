import kaboom from "kaboom";// used to import kaboom 
import { scale } from "./constants"
export const k = kaboom({// used to initalize kaboom
    width: 256 * scale,// used to adress bug issues for scale size fits 16 by 9 ratio gameboy screen size
    height: 144 * scale,// multiplys scale by 4 to prevent issues in kaboom
    scale,
    letterbox: true,// canvas will scale despite screen size while keeping the 16 by 9 ratio
    global: false,// used to make sure only use kaboom related functions in game
});