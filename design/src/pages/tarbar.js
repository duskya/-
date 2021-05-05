import { TabBar } from 'antd-mobile';
import React,{Component} from 'react';
import '../styles/tarbar.css'
import Home from './home'
import Cart from './cart'
import My from './my'

class TabBarExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'blueTab',
    };
  }

  renderContent(com) {
    return (
      <div>{com}</div>
    );
  }
  render() {
    return (
      <div style={{ position: 'fixed', height: '100%', width: '100%', top: 0 }}>
        <TabBar
          unselectedTintColor="#949494"
          tintColor="black"
          barTintColor="white"
        >
          <TabBar.Item
            title="首页"
            key="Index"
            icon={{ uri:'http://bpic.588ku.com/element_pic/01/39/34/62573cb8d86bb2d.jpg' }}
            selectedIcon={{ uri: 'http://bpic.588ku.com/element_pic/01/39/44/02573cbea315d34.jpg' }}
            selected={this.state.selectedTab === 'blueTab'} 
            onPress={() => {
              this.setState({
                selectedTab: 'blueTab',
              });
            }}
            data-seed="logId"
          >
            {this.renderContent(<Home />)}
          </TabBar.Item>
          <TabBar.Item
            icon={{ uri:'http://bpic.588ku.com/element_pic/01/39/10/77573ca9e2e60bc.jpg' }}
            selectedIcon={{ uri: 'http://www.shejiye.com/uploadfile/icon/2017/0203/shejiyeiconsbcx50im4r3.png' }}
        
            title="购物车"
            key="cart"
            selected={this.state.selectedTab === 'redTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'redTab',
              });
            }}
            data-seed="logId1"
          >
            {this.renderContent(<Cart />)}
          </TabBar.Item>
         
          <TabBar.Item
            icon={{ uri:'http://bpic.588ku.com/element_pic/01/37/02/66573c36bba94c7.jpg' }}
            selectedIcon={{ uri: 'http://img.51miz.com/Element/00/94/65/12/deb58bf9_E946512_07ec34a5.png!/quality/90/unsharp/true/compress/true/format/png' }}
            title="我的"
            key="my"
            selected={this.state.selectedTab === 'yellowTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'yellowTab',
              });
            }}
          >
            {this.renderContent(<My />)}
          </TabBar.Item>
        </TabBar>
      </div>
    );
  }
}

export default TabBarExample