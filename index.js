const express = require('express');
const helmet = require('helmet');

const server = express();

server.use(express.json());
server.use(helmet());


const db = require('./data/dbConfig');

server.get('/', (req, res) => {
    res.send('James Basile: BackEnd Week 2 Sprint Challenge')
})

//GET all projects
server.get('/api/projects', (req, res) => {
    db('projects')
        .then(projects => res.status(200).json(projects))
        .catch(err => res.status(500).json(err));
})

//Post a new project
server.post('/api/projects', (req, res) => {
    db('projects')
        .insert(req.body)
        .then( project => res.status(201).json(project))
        .catch(err => res.status(500).json(err));
})

//GET project by id that also shows actions
server.get('/api/projects/:id', (req, res) => {
    const projId = req.params.id;

    db('projects')
        .where({id: projId})
        .first()
        .then(proj => {
            db('actions')
                .where({ project_id: projId })
                .then( actions => res.status(200).json({...proj, actions}))
        })
        .catch(err => res.status(500).json(err));
});


//GET all actions
server.get('/api/actions', (req, res) => {
    db('actions')
        .then(actions => res.status(200).json(actions))
        .catch(err => res.status(500).json(err));
})

//Post a new action
server.post('/api/actions', (req, res) => {
    db('actions')
        .insert(req.body)
        .then( action => res.status(201).json(action))
        .catch(err => res.status(500).json(err));
})



const port = 5000;

server.listen(port, () => {
    console.log(`\n** API running on http://localhost:${port} **\n`)
})