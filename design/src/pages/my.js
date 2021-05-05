import React, { useState } from 'react';
import { List, InputItem,Toast } from 'antd-mobile';
// import InputItem from 'antd-mobile'
import '../styles/my.css'
import servicePath from '../config/apiUrl'
import axios from 'axios'
import {Link} from 'react-router-dom'

function My() {
    const [login, setlogin] = useState(false)
    const [name,setname] = useState()
    const [password ,setpass] =useState()

    const getname=(value)=>{
    //    console.log(value)
       setname(value)
    }
    const getpass=(value)=>{
        // console.log(value)
        setpass(value)
    }
    function commit(){
        console.log(name,password)
        let dataProps = {
            'username':name,
            'password':password
        }
        axios({
            method:'post',
            url:servicePath.checkLogin,
            data:dataProps,
            withCredentials: true
            //第三方cookies
        }).then(
            res=>{
                console.log(res.data)
                if(res.data.data=='登录成功'){
                    localStorage.setItem('openId',res.data.openId)
                    localStorage.setItem('username',res.data.username)
                    setlogin(true)
                }else{
                   Toast.fail('用户名密码错误')
                }
            }
        )
    }
    if (login || localStorage.getItem('openId')) {
        return (
            <div className="all">
                <div className='username'>
                    {localStorage.getItem('username')}
                </div>
                <div className="buygoods" >
                    <Link to='/purchased'>
                        我的订单
                    </Link>
                </div>
                <div className='adress' >
                    <Link to='/address'>
                    收货地址
                    </Link>
                </div>
                <div className='logistics' >
                    <Link to='/logistics'>
                    物流信息
                    </Link>
                </div>
               
                
            </div>
        );
    }
    
    return (
        <>
            <div className="user">
            <List renderHeader={() => ''}>
                <InputItem className="username"
                    onChange={getname}
                    type="text"
                    placeholder=""
                >用户名：</InputItem>
                <InputItem className="password"
                    onChange={getpass}
                    type="password"
                    placeholder=""
                >密码：</InputItem>
                
                </List>
                <button className="login" onClick={commit}>登录</button>
            </div>
        </>
    )

}

export default My;