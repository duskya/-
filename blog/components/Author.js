import {Avatar,Divider} from 'antd'
import '../styles/components/Author.css'
// import headimg from '../img/head.jpg'

const Author =()=>{

    return (
        <div className="author-div comm-box">
            <div> <Avatar size={100} src="" />
            
            </div>
            <div className="author-introduction">
                敲代码一分钟 改bug一小时
                <Divider>社交账号</Divider>
                <div> 微信:abaabaaba0222</div>
                <div>https://github.com/duskya/-</div>
            </div>
        </div>
    )

}

export default Author