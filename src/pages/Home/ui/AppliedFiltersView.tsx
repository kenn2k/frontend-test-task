import { useTranslation } from 'react-i18next'

import { useFilterStore } from '@/shared/model/filterStore'

export const AppliedFiltersView = () => {
	const appliedFilters = useFilterStore(state => state.appliedFilters)
	const { t } = useTranslation('filter')
	return (
		<>
			<h3>{t('appliedFilters')}</h3>
			<pre>{JSON.stringify(appliedFilters, null, 2)}</pre>
		</>
	)
}
