const { app } = require('@azure/functions');

app.http('match-analysis-api', {
    methods: ['GET', 'POST'],
    authLevel: 'anonymous',
    handler: async (request, context) => {
        context.log(`Http function processed request for url "${request.url}"`);

        const test = {
            "text": "Hi there1"
        }
        const test1 = {
            "text": "Hi there2"
        }
        // const ret = JSON.stringify(test)

        const lst = []
        lst.push(test)
        lst.push(test1)

        // const name = request.query.get('name') || await request.text() || 'world';
        return { body: JSON.stringify(lst) };
    }
});


