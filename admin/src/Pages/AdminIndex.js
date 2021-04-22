import React,{useState} from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import '../static/css/AdminIndex.css'
import {Route, Router} from 'react-router-dom'
import AddArticle from './AddArticle'
import ArticleList from './ArticleList'

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

function AdminIndex(props){

  const [collapsed,setCollapsed] = useState(false)

  const onCollapse = collapsed => {
    setCollapsed(collapsed)
  };
  const handleClickArticle = e =>{
    console.log(e.item.props)
    if(e.key =='addArticle'){
      props.history.push('/index/add')
    }else{
      props.history.push('/index/list')
    }
  }

    return (
      <Layout style={{ minHeight: '100vh' }}>
          {/* collapsible是否可收起  collapsed当前收起状态  onCollapse展开-收起时的回调函数， */}
        <Sider  collapsible collapsed={collapsed} onCollapse={onCollapse}>
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1">
              <span>工作台</span>
            </Menu.Item>
            <Menu.Item key="addArticle" onClick={handleClickArticle}>
              <span>添加文章</span>
            </Menu.Item>
            <Menu.Item key="articleList" onClick={handleClickArticle}>
              <span>文章列表</span>
            </Menu.Item>
            {/* <SubMenu
              key="sub1"
              onClick={handleClickArticle}
              title={
                <span>
                  <span>文章管理</span>
                </span>
              }
            >
              <Menu.Item key="addArticle">添加文章</Menu.Item>
              <Menu.Item key="articleList">文章列表</Menu.Item>
            </SubMenu> */}

            <Menu.Item key="9">
              <span>留言管理</span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }} />
          <Content style={{ margin: '0 16px' }}>
            {/* <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>后台管理</Breadcrumb.Item>
              <Breadcrumb.Item>工作台</Breadcrumb.Item>
            </Breadcrumb> */}
            <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
              <div>
                  <Route path ='/index/' exact component={AddArticle} />
                  <Route path="/index/add/" exact   component={AddArticle} />
                  <Route path="/index/add/:id"  exact   component={AddArticle} />
                  <Route path="/index/list/"   component={ArticleList} />
                  <Route path="/index/add/:id" exact component={AddArticle} />
              </div>
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>abaabaaba.com</Footer>
        </Layout>
      </Layout>
    )

}

export default AdminIndex