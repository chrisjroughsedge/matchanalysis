const { app } = require('@azure/functions');

app.http('match-analysis-api', {
    methods: ['GET', 'POST'],
    authLevel: 'anonymous',
    handler: async (request, context) => {
        context.log(`Http function processed request for url "${request.url}"`);
        
        const shot = {id: "1", x: 206.6875, y: 58, fill: "green", text: "SHOT"}
        const pass = {id: "2", x: 207.6875, y: 98, fill: "blue", text: "PASS"}
        const start = {id: "3", x: 19.6875, y: 362, fill: "black", text: "START PLAY"}
        const oa = {id: "4", x: 4, y: 462, fill: "black", text: "ORG. ATTACK"}
        const dat = {id: "5", x: 12, y: 412, fill: "black", text: "ATTK. TRANS"}
        const def_start = {id: "6", x: 325, y: 356, fill: "red", text: "DEF START"}
        const od = {id: "7", x: 334, y: 462, fill: "red", text: "ORG. DEF"}
        const adt = {id: "8", x: 327, y: 414, fill: "red", text: "DEF TRANS"}
        const a_corner = {id: "9", x: 2, y: 226, fill: "gray", text: "ATTK CORNER"}
        const d_corner = {id: "10", x: 282, y: 227, fill: "orange", text: "DEF CORNER"}
        const a_fk = {id: "11", x: 5, y: 183, fill: "gray", text: "ATTK FK"}
        const d_fk = {id: "12", x: 368, y: 184, fill: "orange", text: "DEF FK"}

        const lst = []
        lst.push(shot)
        lst.push(pass)
        lst.push(start)
        lst.push(oa)
        lst.push(dat)
        lst.push(def_start)
        lst.push(od)
        lst.push(adt)
        lst.push(a_corner)
        lst.push(d_corner)
        lst.push(a_fk)
        lst.push(d_fk)

        // const name = request.query.get('name') || await request.text() || 'world';
        return { body: JSON.stringify(lst) };
    }
});

app.http('match-analysis-api-update', {
    methods: ['GET', 'POST'],
    authLevel: 'anonymous',
    handler: async (request, context) => {
        context.log(`Http function processed request for url "${request.url}"`);
        

        const test = {
            id: '1', x: 10, y: 10, fill: 'blue', text: "Shot" 
        }
        const test1 = {
            id: '2', x: 10, y: 30, fill: 'red', text: "Pass1" 
        }
        // const ret = JSON.stringify(test)

        const lst = []
        lst.push(test)
        lst.push(test1)

        // const name = request.query.get('name') || await request.text() || 'world';
        return { body: JSON.stringify(lst) };
    }
});


