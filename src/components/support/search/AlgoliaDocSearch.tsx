import { DocSearch } from '@docsearch/react'

import '@docsearch/css'
import './AlgoliaDocSearch.css'

function AlgoliaDocSearch() {
    return (
        <DocSearch
            appId="64IMEC5R2V"
            indexName="gblog"
            apiKey="7ac5c4186da007de510dea63b58d5973"
        />
    )
}

export default AlgoliaDocSearch
