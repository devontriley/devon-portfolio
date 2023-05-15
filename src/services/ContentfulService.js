import { createClient } from 'contentful'

const client = createClient({
    space: process.env.REACT_APP_CONTENTFUL_SPACE_ID,
    accessToken: process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN
});

const fetchContent = async ({ title }) => {
    try {
        const response = await client.getEntries({
            content_type: 'page',
            'fields.title': title,
            include: 1
        })
        return response.items[0]
    } catch ( error ) {
        console.log( 'Error retrieving content:', error )
        return []
    }
}

export default fetchContent