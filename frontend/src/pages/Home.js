import { React, useEffect, useState } from "react";
import { getCountries } from "../api/query";

const Form = ({ param1, instruction, submit }) => {
    const [val1, setVal1] = useState(param1);
    const [data, setData] = useState("");
    // const [val2, setVal2] = useState(param2);
    const submitForm = () => {
        submit(data);
        // clear data
        setData("");
    }

    return (
        <form>
            <text>
                {instruction}
            </text>
            <label>
                {val1}:
                <input onChange={(e) => { setData(e.target.value) }} />
            </label>
            <input type="button" value="Query" onMouseDown={() => {
                console.log("submitted!");
                submitForm()
            }} />
        </form>
    );
}

const Home = () => {
    const [result, setResult] = useState(null);
    return (
        <div className="home">
            <Form
                instruction={"See the countries that this airline operates in:"}
                param1={"Airline (case sensitive)"}
                submit={async (data) => {
                    // const res = await getCountries(data);
                    // setResult(res ? res : "placeholder");
                }}
            />
            {result ?
                <div className="query-result">
                    {result.map((tuple) =>
                        <div className="row">
                            {tuple}
                        </div>)}
                </div> : null}
        </div>
    );
}

export default Home;
