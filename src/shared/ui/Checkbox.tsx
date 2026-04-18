import { ChangeEvent } from 'react'

interface CheckboxProps {
	id: string
	label: string
	checked: boolean

	onChange: (event: ChangeEvent<HTMLInputElement>) => void
}

export const Checkbox = ({ label, checked, onChange, id }: CheckboxProps) => {
	return (
		<label
			htmlFor={id}
			className="flex items-center gap-3 cursor-pointer group select-none"
		>
			<div className="relative flex items-center justify-center">
				<input
					id={id}
					type="checkbox"
					checked={checked}
					onChange={onChange}
					className=" w-5 h-5 border-2 border-gray-300 rounded bg-white  cursor-pointer"
				/>

				<svg
					className="absolute w-3 h-3 text-white pointer-events-none hidden peer-checked:block"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					strokeWidth={4}
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M5 13l4 4L19 7"
					/>
				</svg>
			</div>
			<span>{label}</span>
		</label>
	)
}
