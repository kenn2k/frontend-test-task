import { useTranslation } from 'react-i18next'

export const FilterModalHeader = ({ onClose }: { onClose: () => void }) => {
	const { t } = useTranslation('filter')

	return (
		<header className=" px-6 py-8 bg-white relative">
			<div className="flex items-center justify-center">
				<h2 className="text-4xl font-medium">{t('headerTitle')}</h2>

				<button
					onClick={onClose}
					className="absolute right-10 text-3xl text-gray-400 hover:text-gray-600 transition-colors leading-none"
				>
					&times;
				</button>
			</div>

			<hr className="mt-8 mb-4 border-1 border-[#B4B4B4]" />
		</header>
	)
}
