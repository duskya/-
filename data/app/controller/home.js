'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'hi, egg';
  }
  async getgoods() {
    let sql = 'SELECT goods.id as id,' +
      'goods.title as title, ' +
      'goods.price as price, ' +
      'goods.img as img ' +
      'FROM goods'
    const result = await this.app.mysql.query(sql)
    this.ctx.body = {
      data: result
    }
  }
 
  async goodDetail(){
    let id = this.ctx.params.id
    // console.log(id)
    let sql = 'SELECT goods.id as id,' +
      'goods.title as title,' +
      'goods.price as price,' +
      'goods.comment as comment,' +
      'goods.img as img ' +
      'FROM goods ' +
      'WHERE id='+id
    const result = await this.app.mysql.query(sql)
    this.ctx.body = {
      data: result
    }  
  }
  async searchGood() {
      let word = this.ctx.params.word
      let sql = 'SELECT goods.id as id,' +
        'goods.title as title, ' +
        'goods.price as price, ' +
        'goods.img as img ' +
        'FROM goods ' + 
        'WHERE title LIKE ' + `'%${word}%'`
        const result = await this.app.mysql.query(sql)
        // console.log(result,sql)
        this.ctx.body = {
          data: result
        }  
    }
    async checkLogin(){
      let username = this.ctx.request.body.username
      let password = this.ctx.request.body.password
      const sql ="SELECT name from user WHERE name = '"+username +
                  "' AND password = '"+password+"'"
      const res = await this.app.mysql.query(sql)
      console.log(username,password,sql,res)
      console.log(res,'-----')
      if(res.length>0){
        let openId = new Date().getTime()
        console.log(openId)
        //设置 session
        this.ctx.session.openId = {'openId':openId}
        this.ctx.body ={'data':'登录成功','openId':openId,'username':username,'password':password}
      }else{
        this.ctx.body={data:'登录失败'}
      } 
    }

    async getcart(){
      let sql = 'SELECT goods.id as id,' +
      'goods.title as title,' +
      'goods.price as price,' +
      'goods.img as img, ' +
      'cart.id as goodid '+
      'FROM goods RIGHT JOIN cart ON goods.id = cart.goodid'
      const result = await this.app.mysql.query(sql)
      this.ctx.body={data:result}
    }
    async addcart(){
      let good = this.ctx.request.body
      console.log(good)
      const result = await this.app.mysql.insert('cart',good)
      const suc = result.affectedRows ===1
      // const insertId = 
      // console.log(good,'------',result,'-----',suc)
      this.ctx.body={
        isSuccess:suc
      }
    }

    async getaddress(){
      let sql = 'SELECT user.address as address, '+
      'user.addtel as addtel, '+
      'user.addname as addname '+
      'FROM user'
      const result = await this.app.mysql.query(sql)
      this.ctx.body = {data:result}
    }
    async getpurchased(){
      let sql = 'SELECT goods.id as id,' +
      'goods.title as title,' +
      'goods.price as price,' +
      'goods.img as img, ' +
      'buy.buyid as buyid '+
      'FROM goods RIGHT JOIN buy ON goods.id = buy.buyid'
      const result = await this.app.mysql.query(sql)
      this.ctx.body={data:result}
    }
    async addpurchased(){
      let id = this.ctx.request.body
      console.log(id)
      const result = await this.app.mysql.insert('buy',id)
      const suc = result.affectedRows ===1
      // const insertId = 
      // console.log(good,'------',result,'-----',suc)
      this.ctx.body={
        isSuccess:suc
      }
    }
    async delgood(){
      let id = this.ctx.params.id
      console.log(id)
      const res = await this.app.mysql.delete('cart',{'id':id})
      this.ctx.body = {data:res}
    }
    
}

module.exports = HomeController;
