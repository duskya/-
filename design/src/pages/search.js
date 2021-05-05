import React, { useEffect, useState } from 'react';
import { SearchBar, Grid } from 'antd-mobile';
import servicePath from '../config/apiUrl';
import { Link } from 'react-router-dom'
import axios from 'axios'
import '../styles/search.css'

function Search() {
    const [word, setWord] = useState()
    const [getRes, setRes] = useState()

    const getValue = (value) => {
        console.log(value)
        setWord(value)
        console.log(word)

    }
    useEffect(() => {

        const fetchData = async () => {
            const result = await axios(servicePath.searchGood + word).then(
                (res) => {
                    console.log(res.data.data)
                    // return (res.data.data)
                    return (res.data.data)
                }
            )
            setRes(result)
        }
        fetchData()
    }, [word])
    console.log(getRes)

    return (
        <>
            <div className="backhome" onClick={() => window.history.back(-1)}>
               返回主页
            </div>
            <div className="search">
                <SearchBar placeholder="搜索" onSubmit={getValue} onClear={value => console.log(value, 'onClear')}></SearchBar>
            </div>
            <Grid data={getRes} columnNum={2} renderItem={dataItem => (
                <div className="goods" >
                    <Link to={'/detail/' + dataItem.id}>
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
    )
}
export default Search