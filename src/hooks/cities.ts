import { cities } from '@content/cities.json'
import { City } from '@types'

type UseCitiesFilterFunction = (item: City, index: number) => boolean
export const useCities = (filterFn: UseCitiesFilterFunction = () => true) => {
    return cities.filter((city, index) => city.active && filterFn(city, index))
}