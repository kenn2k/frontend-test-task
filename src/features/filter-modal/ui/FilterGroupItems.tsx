import { FilterItem } from '@/shared/api/types/Filter'
import { Checkbox } from '@/shared/ui/Checkbox'

import { FilterSection } from './FilterSection'

type TempFilter = {
	id: string
	optionsIds: string[]
}

type FilterGroupProps = {
	group: FilterItem
	tempFilters: TempFilter[]
	onChange: (groupId: string, optionId: string) => void
}

export const FilterGroupItems = ({
	group,
	tempFilters,
	onChange
}: FilterGroupProps) => {
	const selected = tempFilters.find(char => char.id === group.id)

	return (
		<FilterSection name={group.name}>
			{group.options.map(item => {
				const isChecked = selected?.optionsIds.includes(item.id) || false

				return (
					<Checkbox
						key={item.id}
						id={item.id}
						label={item.name}
						checked={isChecked}
						onChange={() => onChange(group.id, item.id)}
					/>
				)
			})}
		</FilterSection>
	)
}
