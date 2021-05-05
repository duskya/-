import React, {useEffect, useState } from 'react';
import Img from '../img/two.jpg'
import '../styles/home.css'
import { SearchBar, Grid } from 'antd-mobile'
import servicePath from '../config/apiUrl';
import axios from 'axios'
import { Link } from 'react-router-dom';



function Home()  {
    
   
    const [datagood, setdata] = useState();
    

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(servicePath.getgoods).then(
                (res) => {
                    console.log(res.data.data, '+++++')
                    // setdata(res.data.data)
                    return (res.data.data)
                }
            )
            setdata(result)
        }
        fetchData()
    }, [])

    // console.log(datagood, '----')
    const handleClick = (param) => {
        console.log(param.id)
    //    <Link to={{path: '/detail' ,query:{id:dataItem.id}}}>
    //     </Link>
    // props.history.push('/detail?id='+param.id)
       
    }

    return (
        <>
            <div>
                {/* <SearchBar placeholder="搜索"  onChange={onChange} onSubmit={Searchword} /> */}
                <Link to="/search">
                    <SearchBar placeholder="搜索" />
                </Link>
            </div>
            <div className="img">
                <img src={Img} style={{ maxWidth: 375, height: 'auto' }} />

            </div>
            <Grid data={datagood} onClick={handleClick} columnNum={2} renderItem={dataItem => (
                <div className="goods" >
                    <Link to={'/detail/'+dataItem.id}>
                    <img src={dataItem.img} className="img" alt="" />
                    <div className="detail" >
                        <div className='price'>￥:{dataItem.price}</div>
                        <div className="title" >{dataItem.title}</div>
                    </div>
                    </Link>
                </div>
            )}
            />
        </>
    );

}


export default Home;