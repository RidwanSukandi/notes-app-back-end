const { addNoteHandler,
        getAllNotesHandler,
         getNoteByIdHandler,
         editNoteByIdHandler,
         deleteNoteByIdHandler
         } = require("./handler");


const routes = [
    {
    method : 'get',
    path : '/',
    handler : (request,h)=>{
        return "Home Page";
    }
   },

   {
    method : 'get',
    path : '/about',
    handler : (request,h)=>{
        return "About Page";
    }
   },

   {
    method : 'get',
    path : '/hello/{name?}',
    handler : (request,h)=>{
        const {name = 'dadang'} = request.params;
        return `hello ${name}`;
    }
   },

   {
    method : 'POST',
    path : '/notes',
    handler : addNoteHandler,
   },

   {
    method: 'GET',
    path: '/notes',
    handler: getAllNotesHandler,
  },

  {
    method: 'GET',
    path: '/notes/{id}',
    handler: getNoteByIdHandler,
  },

  {
    method: 'PUT',
    path: '/notes/{id}',
    handler: editNoteByIdHandler,
  },

  {
    method: 'DELETE',
    path: '/notes/{id}',
    handler: deleteNoteByIdHandler,
  },
   

]

module.exports =routes;