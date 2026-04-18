import { FilterItem } from '@/shared/api/types/Filter'
import { SearchRequestFilter } from '@/shared/api/types/SearchRequest/SearchRequestFilter'

import { FilterGroupItems } from './FilterGroupItems'

interface FilterGroupsProps {
	filters: FilterItem[] | undefined
	tempFilters: SearchRequestFilter

	onChange: (filterId: string, optionId: string) => void
}

export const FilterGroups = ({
	filters,
	tempFilters,
	onChange
}: FilterGroupsProps) => {
	return (
		<div className="flex-1 overflow-y-auto p-6">
			{filters?.map(group => (
				<FilterGroupItems
					key={group.id}
					group={group}
					tempFilters={tempFilters}
					onChange={onChange}
				/>
			))}
		</div>
	)
}
