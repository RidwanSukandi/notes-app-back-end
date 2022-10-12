

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
   

]

module.exports =routes;