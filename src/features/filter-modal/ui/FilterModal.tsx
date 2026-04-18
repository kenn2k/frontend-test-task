import { useState } from 'react'

import { FilterItem, FilterType } from '@/shared/api/types/Filter'
import { SearchRequestFilter } from '@/shared/api/types/SearchRequest/SearchRequestFilter'
import { useFilterStore } from '@/shared/model/filterStore'
import { Modal } from '@/shared/ui/Modal'

import { ConfirmDialog } from './ConfirmDialog'
import { FilterGroups } from './FilterGroups'
import { FilterModalFooter } from './FilterModalFooter'
import { FilterModalHeader } from './FilterModalHeader'

type FilterModalProps = {
	filters: FilterItem[] | undefined
	isLoading: boolean
	onClose: () => void
}

export const FilterModal = ({
	filters,
	isLoading,
	onClose
}: FilterModalProps) => {
	const appliedFilters = useFilterStore(state => state.appliedFilters)
	const setFilters = useFilterStore(state => state.setFilters)

	const [tempFilters, setTempFilters] =
		useState<SearchRequestFilter>(appliedFilters)
	const [isConfirmOpen, setIsConfirmOpen] = useState(false)

	const handleClearAll = () => {
		setTempFilters([])
	}

	const handleApplyButtonClick = () => {
		setIsConfirmOpen(true)
	}

	const handleFinalConfirm = () => {
		setFilters(tempFilters)
		setIsConfirmOpen(false)
		onClose()
	}

	const handleCancelConfirm = () => {
		setIsConfirmOpen(false)
	}

	const toggleOption = (arr: string[], id: string) =>
		arr.includes(id) ? arr.filter(i => i !== id) : [...arr, id]

	const handleCheckboxChange = (groupId: string, optionId: string) => {
		setTempFilters(prev => {
			const existingGroup = prev.find(group => group.id === groupId)

			if (!existingGroup) {
				return [
					...prev,
					{ id: groupId, type: FilterType.OPTION, optionsIds: [optionId] }
				]
			}

			const newOptions = toggleOption(existingGroup.optionsIds, optionId)

			if (newOptions.length === 0) {
				return prev.filter(group => group.id !== groupId)
			}

			return prev.map(group =>
				group.id === groupId ? { ...group, optionsIds: newOptions } : group
			)
		})
	}

	if (isLoading) {
		return <div>Loading...</div>
	}

	return (
		<Modal
			onClose={onClose}
			wrapperClassName="items-start"
			containerClassName="max-w-7xl w-full rounded-2xl shadow-black-100 mt-8"
		>
			<FilterModalHeader onClose={onClose} />

			<FilterGroups
				filters={filters}
				tempFilters={tempFilters}
				onChange={handleCheckboxChange}
			/>

			<FilterModalFooter
				onClearAll={handleClearAll}
				onApply={handleApplyButtonClick}
			/>

			{isConfirmOpen && (
				<ConfirmDialog
					onConfirm={handleFinalConfirm}
					onCancel={handleCancelConfirm}
				/>
			)}
		</Modal>
	)
}
