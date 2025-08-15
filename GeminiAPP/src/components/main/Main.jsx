import React, { useContext } from 'react';
import './Main.css';
import { assets } from '../../assets/assets';
import { Context } from '../../context/Context';
export default function Main() {

    const { onSent, recentprompt, showresult, loading, resultdata, input, setInput } = useContext(Context);
    return (
        <div className='main'>
            <div className="nav">
                <p>Gemini</p>
                <img src={assets.user_icon} alt="" />
            </div>

            <div className="main-container">
                {
                    !showresult ? <>
                        <div className="greet">
                            <p>
                                <span>
                                    Hello , Dev
                                </span>
                            </p>
                            <p>How , can i you Today</p>
                        </div>
                        <div className="cards">
                            <div className="card">
                                <p>Suggest beautiful places to see on an ipcoming road trip </p>
                                <img src={assets.compass_icon} alt="" />
                            </div>
                            <div className="card">
                                <p>Whats the eather tommorrow </p>
                                <img src={assets.bulb_icon} alt="" />
                            </div>
                            <div className="card">
                                <p>best restraurants near Me  </p>
                                <img src={assets.message_icon} alt="" />
                            </div>
                            <div className="card">
                                <p>Suggest some best dihes of ths place </p>
                                <img src={assets.code_icon} alt="" />
                            </div>
                        </div>
                    </>
                        : <div className='result'>
                            <div className="result-title">
                                <img src={assets.user_icon} alt="" />
                                <p>{recentprompt}</p>
                            </div>
                            <div className="result-data">
                                <img src={assets.gemini_icon} alt="" />
                                {loading ?
                                    <div className="loader">
                                        <hr />
                                        <hr />
                                        <hr />
                                    </div>
                                    :
                                    <p dangerouslySetInnerHTML={{ __html: resultdata }}></p>
                                }

                            </div>
                        </div>
                }
                <div className="main-bottom">
                    <div className="search-box">
                        <input onChange={(e) => setInput(e.target.value)} type="text" placeholder='"Enter a Prompt here'  />
                        <div>
                            <img src={assets.gallery_icon} alt="" />
                            <img src={assets.mic_icon} alt="" />
                            {input ?
                                <img onClick={() => onSent()} src={assets.send_icon} alt=""  />
                                : ""
                            }
                        </div>
                    </div>
                    <p className='bottom-info'>
                        Gemmini may display inaccurrate info , including about people , so doubl check its value
                    </p>
                </div>
            </div>
        </div >
    )
}
