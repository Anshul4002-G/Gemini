import { createContext, useState } from "react";
import runChat from "../config/gemini";

export const Context = createContext();

const ContextProvider = (props) => {

    const [input, setInput] = useState("");
    const [recentprompt, setrecentprompt] = useState("");
    const [prevprompt, setprevprompt] = useState([]);
    const [showresult, setshowresult] = useState(false);
    const [loading, setloading] = useState(false);
    const [resultdata, setresultdata] = useState("");

    const delayPara = (index, nextword) => {
        setTimeout(function () {
            setresultdata(prev => prev + nextword)
        }, 75 * index)
    }

    const newchat = () => {
        setloading(false);
        setshowresult(false);
    }

    const onSent = async (prompt) => {
        setresultdata("");
        setloading(true);
        setshowresult(true);
        let response;
        if (prompt !== undefined) {
            response = await runChat(prompt);
            setrecentprompt(prompt)
        }
        else {
            setprevprompt(prev => [...prev, input]);
            setrecentprompt(input);
            response = await runChat(input);
        }
        let responsearray = response.split("**");
        let newResponse;
        for (let i = 0; i < responsearray.length; i++) {
            if (i === 0 || i % 2 !== 1) {
                newResponse += responsearray[i];
            }
            else {
                newResponse += "<b>" + responsearray[i] + "</b>"
            }
        }
        let newResponse2 = newResponse.split("*").join("</br>")
        let newResponseArray = newResponse2.split(" ");
        for (let i = 0; i < newResponseArray.length; i++) {
            const nextword = newResponseArray[i];
            delayPara(i, nextword + " ");
        }
        setloading(false);
        setInput(" ");
    }
    // onSent("what is react");


    const contextValue = {
        prevprompt,
        setprevprompt,
        onSent,
        recentprompt,
        setrecentprompt,
        showresult,
        loading,
        resultdata,
        input,
        setInput,
        newchat,
    }

    return (
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    )
}

export default ContextProvider;