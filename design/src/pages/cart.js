import axios from 'axios';
import React, { useEffect, useState } from 'react';
import servicePath from '../config/apiUrl';
import { Toast, List, Checkbox, Flex } from 'antd-mobile'
import { Link ,useHistory} from 'react-router-dom';
import '../styles/cart.css'
function Cart() {
    let history = useHistory();
    const [data, setdata] = useState()
    const [sel,setSel]=useState()
    const [buy,setBuy] =useState([])
    const [sum ,setSum] = useState(0)
    const CheckboxItem = Checkbox.CheckboxItem;

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(servicePath.getcart).then(
                (res) => {
                    // console.log(res.data.data)
                    return (res.data.data)
                }
            )
            setdata(result)
        }
        if (localStorage.getItem('openId')) {
            fetchData()
        }
    }, data)

    const countNum=(e)=>{
        // console.log(e.price,e)     
        if(buy.includes(e)){
            let a = sum-e.price
            
            setSum(a)
            buy.forEach((item,i)=>{
                if(item==e){
                    buy.splice(i,1)
                }
            })
        }else{
            buy.push(e)
            let a = sum+e.price
           
            setSum(a)
            console.log(buy)
        }
       
    }
   
    const toBuy=()=>{
        history.push({pathname:'/tobuy',query:{buy,sum}})
    }
   const deleteid=(id)=>{
       console.log(id)
        axios(servicePath.delgood+id).then(
            res =>{
                Toast.success('删除成功')
            }
        )
    }
    if (data) {

        return (
            <div>
                <div>
                <List renderHeader={() => '购物车'} >
                    {data.map(i => (
                        <div className="good"  >
                        <Checkbox key={i.id} onClick={()=>countNum(i)} ></Checkbox>
                            <img src={i.img} className="goodimg" ></img>
                             
                             <Link to={'/detail/'+i.id}>
                            <span className="goodtitle">{i.title}</span>
                            </Link>
                            <span className="goodprice" > ￥：{i.price}</span>
                            <span className="del" onClick={()=>deleteid(i.goodid)} >删除</span>
                       </div>
                        
                    ))}
                </List>
                <div className="selectall"> 
                    {/* <Checkbox onClick={()=>selAll()} >全选</Checkbox>  */}
                    <span className="price">
                        合计：{sum}
                    </span>
                    
                    <button onClick={toBuy}>结算</button>
                    
                </div>
                
            </div>
            </div>
        );
    } else {
        if (!localStorage.getItem('openId')) {
            Toast.fail('未登录')
            
        }
        return (
            <div>
                正在加载
            </div>
        )
    }
}

export default Cart;

// function Cart() {
//     const [data, setdata] = useState()
//     const [sel,setSel]=useState()
//     const [buy,setBuy] =useState([])
//     const [sum ,setSum] = useState(0)
//     const CheckboxItem = Checkbox.CheckboxItem;

//     useEffect(() => {
//         const fetchData = async () => {
//             const result = await axios(servicePath.getcart).then(
//                 (res) => {
//                     // console.log(res.data.data)
//                     return (res.data.data)
//                 }
//             )
//             setdata(result)
//         }
//         if (localStorage.getItem('openId')) {
//             fetchData()
//         }
//     }, [])

//     const countNum=(e)=>{
//         // console.log(e.price,e)     
//         if(buy.includes(e.id)){
//             let a = sum-e.price
            
//             setSum(a)
//             buy.forEach((item,i)=>{
//                 if(item==e.id){
//                     buy.splice(i,1)
//                 }
//             })
//         }else{
//             buy.push(e.id)
//             let a = sum+e.price
           
//             setSum(a)
//             console.log(buy)
//         }
       
//     }
   
//     const toBuy=()=>{
        
//     }
   
//     if (data) {

//         return (
//             <div>
//                 <div>
//                 <List renderHeader={() => '购物车'} >
//                     {data.map(i => (
//                         <div className="good"  >
//                         <Checkbox key={i.id} onClick={()=>countNum(i)} ></Checkbox>
//                             <img src={i.img} className="goodimg" ></img>
//                             <span className="goodtitle">{i.title}</span>
//                             <span className="goodprice"> ￥：{i.price}</span>
//                        </div>
                        
//                     ))}
//                 </List>
//                 <div className="selectall"> 
//                     {/* <Checkbox onClick={()=>selAll()} >全选</Checkbox>  */}
//                     <span className="price">
//                         合计：{sum}
//                     </span>
//                     <Link to={"/tobuy/"+buy}>
//                     <button onClick={toBuy}>结算</button>
//                     </Link>
//                 </div>
                
//             </div>
//             </div>
//         );
//     } else {
//         if (!localStorage.getItem('openId')) {
//             Toast.fail('未登录')
            
//         }
//         return (
//             <div>
//                 正在加载
//             </div>
//         )
//     }
// }

// export default Cart;