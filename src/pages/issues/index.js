import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { navigate } from 'gatsby-link'
import Layout from '../../components/Layout'
import './index.css'

function Issues(props) {
    const [data, setData] = useState({});
    const [loading, setLoading] = useState("");

    const dataPayload = (data) => {
        JSON.parse({
            "item": {
                "payload": {
                    "name": JSON.stringify(data.name),
                    "email": JSON.stringify(data.emailAddress),
                    "subject": JSON.stringify(data.subject),
                    "type": JSON.stringify(data.type),
                    "description": JSON.stringify(data.description)
                }
            }
            
    })}

    function axiosPost(data) {
        setLoading("Loading...Hopefully this works!");
        dataPayload(data);
        axios.post("https://send.pageclip.co/LBrR9bjbQI31kZlraPoWT9L3N2Rh9D41/IssueSubmissions", dataPayload)
            .then(console.log(AxiosResponse), setLoading("Successful! Yeeeeeeeeet!"));
    }
return (
        <Layout>
            <section className="section">
                <div className="container">
                    <div className="content">
                        <form onSubmit={axiosPost} className="pageclip-form">
                            <input type="text" name="name" value={setData(data.name)} />
                            <input type="email" name="email" value={setData(data.emailAddress)} />
                            <select name="issue">
                                <option value={setData(data.type.bug)}>Bug</option>
                                <option value={setData(data.type.feature)}>Feature Request</option>
                                <option value={setData(data.type.custom)}>Custom</option>
                            </select>
                            <input type="text" name="subject" value={setData(data.subject)} />
                            <textarea name="description" value={setData(data.description)}>Description</textarea>
                            {loading}
                            <button type="submit" className="pageclip-form__submit">
                                <span>Send</span>
                            </button>
                        </form>
                    </div>
                </div>
            </section>

        </Layout>

    );

}

export default Index