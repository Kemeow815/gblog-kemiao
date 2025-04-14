import { DocSearch } from '@docsearch/react'

import '@docsearch/css'
import './AlgoliaDocSearch.css'

function AlgoliaDocSearch() {
    return (
        <DocSearch
            appId="64IMEC5R2V"
            indexName="gblog"
            apiKey="6b2d146b29a701ba8ef6d617a0c1d4e1"
        />
    )
}

export default AlgoliaDocSearch
