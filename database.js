// get access to environment variables
require('dotenv').config();
const mongoose = require('mongoose');
// import our database
const {
    Shirt,
    Dress, 
    Transaction,
    Product
} = require('./models'); // automatically looks for the index.js file by default


// create a game and print the new game
// Game.create({
//     title: 'FIFA',
//     publisher: 'EA Sports',
//     releaseYear: 2024,
//     price: 69,
//     genre: 'sports',
//     rating: 4.7
// })
//     .then(result => {
//         console.log(result);
//         /**
//          * result
//          * {
//             title: 'FIFA',
//             rating: 4.7,
//             releaseYear: 2024,
//             genre: 'sports',
//             price: 69,
//             publisher: 'EA Sports',
//             _id: new ObjectId("657a6f076d6108875eec8a57"),
//             createdAt: 2023-12-14T02:57:11.426Z,
//             updatedAt: 2023-12-14T02:57:11.426Z,
//             __v: 0
//     }
//          */
//     })
//     .catch(error => console.log(error));

// // READ A GAME
// // REAL all games
// //#region find all
// // ----------------------------
// // READ find all games 
// // ----------------------------
// Game.find({})
// .then(games => {
//     console.log('--- all games---\n', games)
// })
// .catch(error => {
//     console.log('---error---\n', error)
// })
// //#endregion
// //#region find by release year
// // ----------------------------
// // READ find all games released 2024
// // ----------------------------
// Game.find({ releaseYear: 2024 })
// .then(games => {
//     console.log('--- games releaseYear 2024 ---\n', games);
// })
// .catch(error => {
//     console.log('--- read all games error ---\n', error)
// })
// //#regionend

// //#region find one
// // ----------------------------
// // READ find one games NBA 2K Kobe Edition
// // ----------------------------
// Game.findOne({ title: 'NBA 2K Kobe Edition' })
// .then(game => {
//     console.log('---- game title NBA 2K Kobe Edition ---\n ', game);
// })
// .catch(error => {
//     console.log('--- read NBA 2K.... error ---\n'. error);
// })


// // ----------------------------
// // READ find one game by object ID
// // ----------------------------
// Game.findOne({ _id: '657506e6044c41d33383d9c8'})
// .then(game => {
//     console.log ('--- games search by ObjectId--- \n', game)
//     /**
//      * game
//      * --- games search by ObjectId--- 
//     {
//         _id: new ObjectId("657506e6044c41d33383d9c8"),
//         title: 'NBA 2K Kobe Edition',
//         releaseYear: 2024
//     }
//      */
// })
// .catch(error => {
//     console.log('---- read by id error ---\n', error)
// })

// // UPDATE GAME(S)
// // ----------------------------
// // UPDATE: Find one game by ObjectId - update title
// // ----------------------------
// Game.findByIdAndUpdate('657953ccf57fcc4ac1a9910d', { title: 'Smash Bros' })
// .then(result => {
//     // go back to the database and find the Game from here
//     Game.findById('657953ccf57fcc4ac1a9910d')
//     .then(game =>{
//         console.log(' --- find updated game title using ObjectId ---\n', game)
//     })
//     .catch(error => {
//         console.log('--- error on update --- \n', error);
//     })
// })
// .catch(error => {
//     console.log('--- update title error ---\n', error);
// })

// // ----------------------------
// // UPDATE: Find one game by title - update price
// // ----------------------------
// Game.findOneAndUpdate({ title: 'FIFA' }, { price: 89 })
// .then(result => {
//     // go back to the database and find the Game from here
//     Game.findById(result._id)
//     .then(game =>{
//         console.log(' --- find updated game price using ObjectId ---\n', game)
//         /** updated price
//          *  --- find updated game price using ObjectId ---
//     {  
//         _id: new ObjectId("657a6f076d6108875eec8a57"),
//         title: 'FIFA',
//         rating: 4.7,
//         releaseYear: 2024,
//         genre: 'sports',
//         price: 89,
//         publisher: 'EA Sports',
//         createdAt: 2023-12-14T02:57:11.426Z,
//         updatedAt: 2023-12-14T03:46:26.655Z,
//         __v: 0
//     }
//          */
//     })
//     .catch(error => {
//         console.log('--- error on update --- \n', error);
//     })
// })
// .catch(error => {
//     console.log('--- update title error ---\n', error);
// })

// // REMOVE GAME(S)
// // ----------------------------
// // REMOVE: Remove one game ObjectId
// // ----------------------------
// Game.findByIdAndDelete('657506e6044c41d33383d9c7')
// .then(result => {
//     console.log('--- remove game by ObjectId ---\n', result);
//     /**
//      * delete
//      * --- remove game by ObjectId ---
//             null
//      */
// })
// .catch(error=> {
//     console.log('--- ERROR removing game by ObjectId--- \n', error)
// })

Video.create({
    title: 'Cat scares dog',
    artist: 'Garfield',
    releaseYear: 2023,
    genre: 'Comedy',
    length: '2 minutes',
    rating: 4.7
})
    .then(result => {
        console.log(result);
        /**
         * result
         * {
            title: 'FIFA',
            rating: 4.7,
            releaseYear: 2024,
            genre: 'sports',
            price: 69,
            publisher: 'EA Sports',
            _id: new ObjectId("657a6f076d6108875eec8a57"),
            createdAt: 2023-12-14T02:57:11.426Z,
            updatedAt: 2023-12-14T02:57:11.426Z,
            __v: 0
    }
         */
    })
    .catch(error => console.log(error));
