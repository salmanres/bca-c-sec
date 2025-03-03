import React, { Fragment, useState } from "react";


function LoginPage() {

    const [data, setData] = useState({});

    const getData = (item) => {
        setData({
            ...data,
            [item.target.name]:item.target.value
        });
        console.log(data);
    }

    return (
        <Fragment>
            <h1 className="heading">LOGIN PAGE</h1>
            <div className="container">
                <div className="form-container">
                    <input type="email" placeholder="enter email" name="email" onInput={getData} />
                    <input type="password" placeholder="enter password" name="password" onInput={getData} />
                    <button>LOGIN</button>
                </div>
            </div>
        </Fragment>
    )
}

export default LoginPage;