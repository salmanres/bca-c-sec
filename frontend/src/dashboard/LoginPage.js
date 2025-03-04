import React, { Fragment, useState } from "react";
import axios from 'axios';


function LoginPage() {

    const [data, setData] = useState({});
    const [userdata, setuserdata] = useState([]);

    const getData = (item) => {
        setData({
            ...data,
            [item.target.name]: item.target.value
        });
        console.log(data);
    }

    const savedata = async () => {
        try {
            const response = await axios.post('http://localhost:3500/login', data);
            console.log(response.data);
            alert(response.data.message);
            setuserdata(response.data.mydata);
        } catch (err) {
            console.log(err);
        }

    }

    return (
        <Fragment>
            <h1 className="heading">LOGIN PAGE</h1>
            <div className="container">
                <div className="form-container">
                    <input type="email" placeholder="enter email" name="email" onInput={getData} />
                    <input type="password" placeholder="enter password" name="password" onInput={getData} />
                    <button onClick={savedata}>LOGIN</button>
                </div>
            </div>
            <div>
                <table cellPadding={10} border={1}>
                    <thead>
                        <tr>
                            <td>EMAIL</td>
                            <td>PASSWORD</td>
                        </tr>
                    </thead>
                    <tbody>
                        {userdata ? userdata.map((item)=>(
                            <tr>
                                <td>{item.email}</td>
                                <td>{item.password}</td>
                                <td><button>view details</button></td>
                            </tr>
                        )):<h1>loading....</h1>}
                    </tbody>
                </table>
            </div>
        </Fragment>
    )
}

export default LoginPage;