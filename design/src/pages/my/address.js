import { useEffect, useState } from 'react'
import Back from '../../components/back'
import servicePath from '../../config/apiUrl';
import axios from 'axios'


function Address() {

    const [address , setAddress] =useState()

    useEffect(() => {
        const fetchData = async () => {
            let result = await axios(servicePath.getaddress).then(
                (res) => {
                    return (res.data.data)
                }
            )
            setAddress(result[0])
        }

        fetchData()
        console.log(address)
    }, address)

    if (address) {
        return (
            <>
                <Back />
                <div className="address">
                    {address.addname}
                    {address.addtel}
                    <div className="add">
                        {address.address}
                    </div>
                </div>
             </>
        )
    } else {
        return (
            <div>
                正在加载
            </div>
        )
    }

}
export default Address