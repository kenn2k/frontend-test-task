import { useTranslation } from 'react-i18next'

import { Modal } from '@/shared/ui/Modal'

export const ConfirmDialog = ({
	onConfirm,
	onCancel
}: {
	onConfirm: () => void
	onCancel: () => void
}) => {
	const { t } = useTranslation('filter')
	return (
		<Modal
			onClose={onCancel}
			wrapperClassName="items-start"
			containerClassName=" h-[296px]  p-6 max-w-7xl w-full rounded-2xl shadow-black-100 mt-20"
		>
			<div className="flex flex-col h-full text-center relative">
				<h3 className="text-4xl font-medium mb-4">
					{t('confirm.applyQuestion')}
				</h3>
				<div className="flex gap-4 justify-center items-center mt-auto">
					<button
						onClick={onCancel}
						className="px-12 py-4 rounded-xl border border-[#B4B4B4] text-[#31393C] font-semibold hover:bg-gray-50 transition-colors min-w-[240px]"
					>
						{t('confirm.useOld')}
					</button>
					<button
						onClick={onConfirm}
						className="px-12 py-4 rounded-xl bg-[#FF5F00] text-white font-semibold shadow-lg hover:bg-[#e55600] active:scale-95 transition-all min-w-[240px]"
					>
						{t('confirm.applyNew')}
					</button>
				</div>
			</div>
		</Modal>
	)
}
