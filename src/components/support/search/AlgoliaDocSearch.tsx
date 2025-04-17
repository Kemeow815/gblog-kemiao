import { DocSearch } from '@docsearch/react'

import '@docsearch/css'
import './AlgoliaDocSearch.css'

function AlgoliaDocSearch() {
    return (
        <DocSearch
            appId="IEETPPXHIW"
            indexName="kemiaosw"
            apiKey="b36afa7c543f62532af783c401e8d800"
        />
    )
}

export default AlgoliaDocSearch
