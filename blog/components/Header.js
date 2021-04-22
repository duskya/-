import React, { useState, useEffect } from 'react'
import './header.css'
import { Row, Col, Menu, Icon } from 'antd'
import Router from 'next/router'
import Link from 'next/link'
import axios from 'axios'
import servicePath from '../config/apiUrl'

const Header = () => {
    const [navArray , setNavArray] = useState([])

    useEffect(()=>{
        const fetchData = async ()=>{
           const result= await axios(servicePath.getTypeInfo).then(
                (res)=>{
                    console.log(res.data,res.data.data,'header.js里面的第16行')
                    // setNavArray(res.data.data)
                    return res.data.data
                }
              )
           setNavArray(result)
        }
        fetchData()
    },[])

    const handleClick = (e)=>{
        if(e.key==0){
            Router.push('/')
        }else if(e){
            Router.push('/list?id='+e.key)
        }
    }

    return (
        <div className="header">
            <Row type="flex" justify="center">
                <Col xs={24} sm={24} md={10} lg={15} xl={12}>
                    <span className="header-logo">阿巴阿巴阿巴</span>
                    <span className="header-txt">前端学习</span>
                </Col>
                <Col className="memu-div" xs={0} sm={0} md={14} lg={10} xl={7}>
                    <Menu
                        mode="horizontal"
                        onClick={handleClick}
                    >
                        <Menu.Item key="0">
                            {/* <Icon type="home" /> */}
                            首页
                        </Menu.Item>
                        {
                            navArray.map((item) => {
                                return (
                                    <Menu.Item key={item.Id}>
                                        {/* <Icon type={item.icon} /> */}
                                        {item.typeName}
                                    </Menu.Item>
                                )
                            })
                        }
                    </Menu>
                </Col>
            </Row>
        </div>
    )
}
export default Header