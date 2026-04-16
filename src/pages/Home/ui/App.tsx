import { useQuery } from '@tanstack/react-query'

import { fetchFilters } from '@/shared/api/getFilters'

export const App = () => {
	const {
		data: filters,
		isLoading,
		isError
	} = useQuery({
		queryKey: ['filters'],
		queryFn: fetchFilters
	})

	if (isLoading) {
		return <div>Loading...</div>
	}
	if (isError) {
		return <div>Error data fetching...</div>
	}

	return (
		<section className="w-full h-dvh flex items-center justify-center">
			{/* eslint-disable-next-line i18next/no-literal-string */}
			<h1 className="text-6xl text-gray-600 mb-12">
				WinWinTravel frontend test task
			</h1>
			<pre>{JSON.stringify(filters, null, 2)}</pre>
		</section>
	)
}
