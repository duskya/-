let ipUrl = 'http://127.0.0.1:7001/' 

let servicePath = {
    getgoods:ipUrl +'getgoods',
    goodDetail:ipUrl + 'goodDetail/',
    searchGood:ipUrl +'searchGood/',
    checkLogin:ipUrl +'checkLogin',
    getcart:ipUrl +'getcart',
    addcart:ipUrl+'addcart',
    getaddress:ipUrl+'getaddress',
    getpurchased:ipUrl+'getpurchased',
    addpurchased:ipUrl+'addpurchased',
    delgood:ipUrl+'delgood/'
}
export default servicePath;