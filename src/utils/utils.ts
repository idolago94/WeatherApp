import { CityCoords } from "@types";

export const calculateDistance = (coord1: CityCoords, coord2: CityCoords): number => {
    const earthRadiusKm = 6371; // Earth radius in kilometers

    const toRadians = (degrees: number): number => {
        return degrees * (Math.PI / 180);
    };

    const deltaLat = toRadians(coord2.lat - coord1.lat);
    const deltaLon = toRadians(coord2.lng - coord1.lng);

    const a =
        Math.sin(deltaLat / 2) * Math.sin(deltaLat / 2) +
        Math.cos(toRadians(coord1.lat)) * Math.cos(toRadians(coord2.lat)) *
        Math.sin(deltaLon / 2) * Math.sin(deltaLon / 2);

    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    const distance = earthRadiusKm * c; // Distance in kilometers

    return distance;
};