import React, { useEffect, useState } from 'react';
import servicePath from '../config/apiUrl';
import axios from 'axios'
import '../styles/detail.css'
import { NavBar, Icon,Button,Toast  } from 'antd-mobile';
import { Tabs, WhiteSpace } from 'antd-mobile';
import { Link } from 'react-router-dom';


function Detail({ match }) {
    const [detail, setdetail] = useState()

    let id = match.params.id
    console.log(id)

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(servicePath.goodDetail + id).then(
                (res) => {
                    // console.log(res.data.data)
                    // return (res.data.data)
                    return (res.data.data)
                }
            )
            setdetail(result)

        }
        fetchData()
    }, [])
    // console.log(detail)
    function addcart(){
        console.log(id)
        let dataProps={}
        dataProps.goodid = id
        axios({
            method:'post',
            url:servicePath.addcart,
            data:dataProps,
            withCredentials:true
        }).then(
            res=>{
                if(res.data.isSuccess){
                    Toast.success('添加成功')
                }else{
                    Toast.fail('添加失败')
                }
            }
        )
    }

    const tabs = [
        { title: '详情' },
        { title: '评论' },

    ];

    if (detail) {
        // console.log(detail)
        return (
            <>{
                detail.map((detail) => {
                    return (
                        <>
                            <div className="back">
                                <NavBar
                                    mode="light"
                                    icon={<Icon type="left" />}
                                    onLeftClick={() => window.history.back(-1)}

                                >详情</NavBar>
                            </div>
                            <div className='image'>
                                <img className='img' src={detail.img}></img>
                            </div>
                            <div className='info'>
                                <div className="price">
                                    ￥：{detail.price}
                                </div>
                                <div className="title">
                                    {detail.title}
                                </div>
                            </div>
                            <div className="more">
                                <WhiteSpace />
                                <Tabs tabs={tabs} tabBarActiveTextColor="black" renderTabBar={props => <Tabs.DefaultTabBar {...props} page={2} />}>
                                    <div className="detailimg">
                                        <img className='img' src={detail.img}></img>
                                    </div>
                                    <div className="comment">
                                        {detail.comment}
                                    </div>
                                </Tabs>
                                <WhiteSpace />
                            </div>
                            <div className="footer">
                                <Button className="addcart"  onClick={addcart}>加入购物车</Button>
                            </div>
                        </>
                    )
                })

            }
            </>
        );
    }
    return (
        <>
            正在加载
        </>
    )

}

export default Detail;