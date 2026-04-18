import { useTranslation } from 'react-i18next'

interface FilterModalFooterProps {
	onClearAll: () => void
	onApply: () => void
}

export const FilterModalFooter = ({
	onClearAll,
	onApply
}: FilterModalFooterProps) => {
	const { t } = useTranslation('filter')

	return (
		<footer className="px-10 pb-10 bg-white sticky bottom-0 z-10">
			<div className="flex items-center justify-center relative">
				<button
					onClick={onClearAll}
					className="absolute right-0  underline hover:no-underline text-[#078691]"
				>
					{t('clearAll')}
				</button>

				<button
					onClick={onApply}
					className="bg-[#FF5F00] text-white px-18 py-6 rounded-2xl font-semibold shadow-lg  active:scale-95 transition-all"
				>
					{t('apply')}
				</button>
			</div>
		</footer>
	)
}
