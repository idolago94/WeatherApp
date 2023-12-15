import { City } from "@types"
import { calculateDistance } from "./utils"

export enum SortKeys {
    NAME = 'NAME',
    TLV = 'TLV'
}

const COORDS = {
    TLV: {
        lat: 32.109333,
        lng: 34.855499
    }
}

export const getSortFunctionByKey = (key: string) => {
    switch(key) {
        case SortKeys.NAME: {
            return (a: City, b: City) => (a.name.localeCompare(b.name))
        }
        case SortKeys.TLV: {
            return (a: City) => (calculateDistance(a.coords, COORDS.TLV))
        }
        default: return undefined
    }
}