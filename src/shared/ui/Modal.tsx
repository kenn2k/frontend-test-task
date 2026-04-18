import { MouseEventHandler, ReactNode } from 'react'
import { createPortal } from 'react-dom'

interface ModalProps {
	children: ReactNode
	onClose: MouseEventHandler<HTMLDivElement>
	containerClassName?: string
	wrapperClassName?: string
}

export const Modal = ({
	onClose,
	children,
	containerClassName = '',
	wrapperClassName = ''
}: ModalProps) => {
	return createPortal(
		<div
			className={`fixed inset-0 z-[100] flex justify-center overflow-y-auto p-4 md:p-10 ${wrapperClassName}`}
		>
			<div
				className="fixed inset-0  backdrop-blur-xl transition-opacity"
				onClick={onClose}
			/>

			<div
				className={`relative bg-white shadow-2xl flex flex-col overflow-hidden animate-in fade-in zoom-in duration-200 ${containerClassName}`}
			>
				{children}
			</div>
		</div>,
		document.body
	)
}
