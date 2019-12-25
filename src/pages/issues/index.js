import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { navigate } from 'gatsby-link'
import Layout from '../../components/Layout'
import 'https://s.pageclip.co/v1/pageclip.css'

function Index(props) {
    const [data, setData] = useState({});
    const [loading, setLoading] = useState("");

    const dataPayload = {
            "item": {
                "payload": {
                "name": JSON.stringify(data.name),
                "email": JSON.stringify(data.emailAddress),
                "subject": JSON.stringify(data.subject),
                "type": JSON.stringify(data.type),
                "description": JSON.stringify(data.description)
            }}
        }    

    function axiosPost(dataPayload) {

    
    setLoading("Loading...Hopefully this works!");
    axios.post("https://send.pageclip.co/LBrR9bjbQI31kZlraPoWT9L3N2Rh9D41/IssueSubmissions", dataPayload)
    .then(console.log(AxiosResponse), setLoading("Successful! Yeeeeeeeeet!"));
}

    return (
        <Layout>
            <section className="section">
                <form onSubmit={axiosPost} className="pageclip-form">
            <input type="text" name="name" value={data.name} />
            <input type="email" name="email" value={data.emailAddress} />
            <select name="issue">
                <option value={data.type.bug}>Bug</option>
                <option value={data.type.feature}>Feature Request</option>
                <option value={data.type.custom}>Custom</option>
            </select>
            <input type="text" name="subject" value={data.subject} />
            <textarea name="description" value={data.description}>Description</textarea>
            {loading}
            <button type="submit" className="pageclip-form__submit">
                <span>Send</span>
            </button>
        </form>
            </section>

        </Layout>
        
    );

}

export default Index