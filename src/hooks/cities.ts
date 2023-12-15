import { cities } from '@content/cities.json'
import { City } from '@types'

type UseCitiesFilterFunction = (item: City, index: number) => boolean
type UseCitiesSortFunction = (a: City, b: City) => number
export const useCities = (filterFn: UseCitiesFilterFunction = () => true, sortFn?: UseCitiesSortFunction) => {
    let filteredCities = cities.filter((city, index) => city.active && filterFn(city, index));

    if (sortFn) {
        filteredCities = filteredCities.sort((a, b) => sortFn(a, b));
    }

    return filteredCities;
};