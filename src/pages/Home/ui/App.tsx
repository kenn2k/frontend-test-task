import { useState } from 'react'
import { useTranslation } from 'react-i18next'

import { useQuery } from '@tanstack/react-query'

import { FilterModal } from '@/features/filter-modal/ui/FilterModal'
import { fetchFilters } from '@/shared/api/getFilters'

import { AppliedFiltersView } from './AppliedFiltersView'

export const App = () => {
	const { t } = useTranslation('filter')

	const { data: filters, isLoading } = useQuery({
		queryKey: ['filters'],
		queryFn: fetchFilters
	})
	const [isModalOpen, setIsModalOpen] = useState(false)

	return (
		<main className="relative w-full min-h-dvh bg-white p-4 md:p-10 flex flex-col items-center">
			<div className="w-full max-w-4xl">
				<h1 className="text-3xl font-bold mb-8 text-center text-gray-800">
					{t('home')}
				</h1>

				<AppliedFiltersView />

				<div className="flex justify-center">
					<button
						onClick={() => setIsModalOpen(true)}
						className="px-8 py-4 bg-[#FF5F00]  text-white font-bold rounded-full transition-all shadow-lg hover:shadow-blue-200 active:scale-95"
					>
						{t('headerTitle')}
					</button>
				</div>
			</div>

			{isModalOpen && (
				<FilterModal
					filters={filters}
					isLoading={isLoading}
					onClose={() => setIsModalOpen(false)}
				/>
			)}
		</main>
	)
}
