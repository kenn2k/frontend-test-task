export const FilterSection = ({
	name,
	children
}: {
	name: string
	children: React.ReactNode
}) => {
	return (
		<section className=" first:pt-0">
			<h3 className=" font-medium text-2xl mb-4">{name}</h3>
			<div className="grid grid-cols-1 md:grid-cols-3 gap-x-4 gap-y-3">
				{children}
			</div>
			<hr className="my-8 border-1 border-[#B4B4B4]" />
		</section>
	)
}
