import {NextResponse} from 'next/server'
import {search} from 'scholarly'

export async function GET(request) {
   const {searchParams} = new URL(request.url)
   const query = searchParams.get('query')
   const category = searchParams.get('category')
   const page = parseInt(searchParams.get('page') || '1', 10)
   const limit = parseInt(searchParams.get('limit') || '9', 10)

    try {
        let scholarQuery = scholarQuery
        if (category === 'Core Engineering') {
            scholarQuery += 'engineering'
        } else if (category === 'AI/ML') {
            scholarQuery += 'artificial intelligence and machine learning'
        }

        const results = await search(scholarQuery)
        const startIndex = (page - 1) * limit
        const endIndex = startIndex + limit
        const paginatedResults = results.slice(startIndex, endIndex)

        // TODO : paginatedResults
    }
}
