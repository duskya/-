import Head from 'next/head'
import Header from '../components/Header'
import { Row, Col, List } from 'antd'
import axios from 'axios'
import Link from 'next/link'
import React, { useState } from 'react'
import '../styles/pages/index.css'
import Author from '../components/Author'
import Footer from '../components/Footer'
import  servicePath  from '../config/apiUrl'

const Home = (list) => {
  console.log(list,'------')
  const [mylist, setMylist] = useState(list.data);
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <Header />
      <Row className="comm-main" type="flex" justify="center">
        <Col className="comm-left" xs={24} sm={24} md={16} lg={18} xl={14}  >
          <div>

            <List
              header={<div>所有笔记</div>}
              itemLayout="vertical"
              dataSource={mylist}
              renderItem={item => (
                <List.Item>
                  <div className="list-title">
                    <Link href={{ pathname: '/detail/', query: { id: item.id } }}>
                      <a>{item.title}</a>
                    </Link>
                  </div>
                  <div className="list-icon">
                    <span> {item.addTime}</span>
                    <span>{item.typeName}</span>
                    {/* <span><Icon type="fire" /> {item.view_count}人</span> */}
                  </div>
                  <div className="list-context">{item.introduce}</div>
                </List.Item>
              )}
            />
          </div>
        </Col>

        <Col className="comm-right" xs={0} sm={0} md={7} lg={5} xl={4}>
          <Author />
          {/* <Advert /> */}
        </Col>
      </Row>
      <Footer />

    </>
  )

}

Home.getInitialProps = async ()=>{
  const promise = new Promise((resolve)=>{
    axios(servicePath.getArticleList).then(
      (res)=>{
        resolve(res.data)
      }
    )
  })

  return await promise
}

export default Home