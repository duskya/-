import { useEffect, useState } from 'react'
import Back from '../../components/back'
import servicePath from '../../config/apiUrl';
import axios from 'axios'
import { useLocation ,useHistory} from 'react-router-dom';
import { Button ,Toast} from 'antd-mobile';
import '../../styles/my/purchased.css'
import {Link} from 'react-router-dom'

function ToBuy() {
   
    const [address, setAddress] = useState()
    const [goods,setGoods] =useState()
    // const goods = location.query.buy

    useEffect(() => {
        
        const fetchData = async () => {
            let result = await axios(servicePath.getpurchased).then(
                (res) => {
                    // console.log(res.data.data)
                    // return (res.data.data)
                    return (res.data.data)
                }
            )
            setGoods(result)
        }

        fetchData()
        console.log(goods)
        
    }, [])

    if ( goods) {
        return (
            <>
                <Back ></Back>
                <div className="title">
                   已购买 
                </div>
               
                <div className="buygoods">
                    {goods.map(i => (
                        <div className="good">
                            <Link to={'/detail/'+i.id}>
                            <img src={i.img} className="goodimg" ></img>
                            <span className="goodtitle">{i.title}</span>
                            <span className="goodprice"> ￥：{i.price}</span>
                            </Link>
                        </div>
                    ))}
                </div>
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