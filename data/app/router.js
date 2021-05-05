'use strict';


module.exports = app => {
  const { router, controller } = app;
 
  router.get('/', controller.home.index);
  router.get('/getgoods',controller.home.getgoods)
  router.get('/goodDetail/:id',controller.home.goodDetail)
  router.get('/searchGood/:word',controller.home.searchGood)
  router.post('/checkLogin',controller.home.checkLogin)
  router.get('/getcart',controller.home.getcart)
  router.post('/addcart',controller.home.addcart)
  router.get('/getaddress',controller.home.getaddress)
  router.get('/getpurchased',controller.home.getpurchased)
  router.post('/addpurchased',controller.home.addpurchased)
  router.get('/delgood/:id',controller.home.delgood)

};
