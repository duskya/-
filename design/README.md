1. 获取传的id值
function Detail({match}) {
    let id = match.params.id
2. detail 远程(axios)异步获取数据接口 返回的是对象 ,用useHook获取返回的数据，
但是页面会先渲染html 异步获取数据接口需要时间  他就会报错detail.id为空 detail用map循环输出 之后增加
&& 逻辑与判断条件 如果还没获取到数据 detail和detail-map都为undefined 不会报错 之后获取到数据后 显示
3. window.history.back(-1)
4. position: fixed; bottom:0
    position:fixed 的元素将相对于屏幕视口（viewport）的位置来指定其位置。并且元素的位置在屏幕滚动时不会改变
5. 添加到购物车时，默认id没有设置为自动递增
6. usehirtory 传参

    let history = useHistory();
    history.push({pathname:'/tobuy',query:{buy,sum}})

    let location = useLocation();
    location.query
7. for(let i=0;i<Object.keys(goods).length;i++){
        dataProps.buyid = goods[i].id