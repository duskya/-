import { useEffect, useState } from 'react'
import Back from '../components/back'
import servicePath from '../config/apiUrl';
import axios from 'axios'
import { useLocation, useHistory } from 'react-router-dom';
import { Button, Toast } from 'antd-mobile';
import '../styles/tobuy.css'

function ToBuy() {

    let location = useLocation();
    let history = useHistory();

    const [address, setAddress] = useState()
    const [goods, setGoods] = useState()
    const [sum, setSum] = useState()
    console.log(location.query)
    
    // const goods = location.query.buy

    useEffect(() => {
       
        if (location.query) {
            console.log(location.query.buy)
            const g = location.query.buy
            setGoods(g)
            
            const s = location.query.sum
            setSum(s)
        }

         const fetchData = async () => {
            let result = await axios(servicePath.getaddress).then(
                (res) => {
                    // console.log(res.data.data)
                    // return (res.data.data)
                    return (res.data.data)
                }
            )
            setAddress(result[0])
        }

        fetchData()
        console.log(address)
        
    }, address)

    const finish = () => {
        Toast.success('付款成功')
        history.push({ pathname: '/' })

        // let a=Object.keys(goods)
        for(let i=0;i<Object.keys(goods).length;i++){

        let dataProps = {}
        dataProps.buyid = goods[i].id
        axios({
            method: 'post',
            url: servicePath.addpurchased,
            data: dataProps,
            withCredentials: true
        }).then(
            res => {
                if (res.data.isSuccess) {
                    Toast.success('付款成功')
                } else {
                    Toast.fail('付款失败')
                }
            }
        )
    }

    }

    if (address && goods) {
        return (
            <>
                <Back />
                <div className="address">
                    {address.addname}  {address.addtel}
                    <div className="add">
                        {address.address}
                    </div>
                </div>
                <div className="buygoods">
                    {goods.map(i => (
                        <div className="good">
                            <img src={i.img} className="goodimg" ></img>
                            <span className="goodtitle">{i.title}</span>
                            <span className="goodprice"> ￥：{i.price}</span>

                        </div>
                    ))}
                </div>
                <div className='allpay'>
                    总计 :{sum}
                </div>
                <button className='pay' onClick={finish}>
                    付款
                </button>
            </>
        )
    } else {
        return (
            <div>
                正在加载
            </div>
        )
    }

}
export default ToBuy