import { NavBar,Icon} from 'antd-mobile';

function Back(){
    return(
        <>
        <NavBar
            mode="light"
            icon={<Icon type="left" />}
            onLeftClick={()=>window.history.back(-1)}
            />
        </>
    )
}
export default Back