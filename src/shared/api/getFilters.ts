import filterData from '../temp/filterData.json'
import { FilterItem } from './types/Filter'

export const fetchFilters = async (): Promise<FilterItem[]> => {
	return filterData.filterItems as FilterItem[]
}
