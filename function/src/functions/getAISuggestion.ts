import {app, HttpRequest, HttpResponseInit, InvocationContext} from '@azure/functions';

import OpenAI from 'openai';

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

export async function getAISuggestion(
    request: HttpRequest,
    context: InvocationContext
): Promise<HttpResponseInit> {
    context.log(`Http function processed request for url "${request.url}"`);

    const name = request.query.get('name') || (await request.text()) || 'world';

    return {body: `Hello, ${name}!`};
}

app.http('getAISuggestion', {
    methods: ['GET', 'POST'],
    authLevel: 'anonymous',
    handler: getAISuggestion,
});
