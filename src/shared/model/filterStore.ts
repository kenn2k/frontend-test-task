import { create } from 'zustand'

import { SearchRequestFilter } from '../api/types/SearchRequest/SearchRequestFilter'

interface FIlterState {
	appliedFilters: SearchRequestFilter
	setFilters: (filters: SearchRequestFilter) => void
}

export const useFilterStore = create<FIlterState>(set => ({
	appliedFilters: [],
	setFilters: filters => set({ appliedFilters: filters })
}))
