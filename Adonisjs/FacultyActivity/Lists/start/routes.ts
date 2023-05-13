/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async () => {
  return { hello: 'world' }
})

Route.get('/teste', async () => {
  return { hello: 'teste' }
})

Route.group(() => {
  Route.post('ex1', 'List1sController.ex1')
  Route.post('ex2', 'List1sController.ex2')
  Route.post('ex3', 'List1sController.ex3')
  Route.post('ex4', 'List1sController.ex4')
  Route.post('ex5', 'List1sController.ex5')
  Route.post('ex6', 'List1sController.ex6')
  Route.post('ex7', 'List1sController.ex7')
  Route.post('ex8', 'List1sController.ex8')
  Route.post('ex9', 'List1sController.ex9')
}).prefix('/list1')

Route.group(() => {
  Route.post('ex1', 'List2sController.ex1')
  Route.post('ex2', 'List2sController.ex2')
  Route.post('ex3', 'List2sController.ex3')
  Route.post('ex4', 'List2sController.ex4')
  Route.post('ex5', 'List2sController.ex5')
  Route.post('ex6', 'List2sController.ex6')
  Route.post('ex7', 'List2sController.ex7')
  Route.post('ex8', 'List2sController.ex8')
  Route.post('ex9', 'List2sController.ex9')
}).prefix('/list2')