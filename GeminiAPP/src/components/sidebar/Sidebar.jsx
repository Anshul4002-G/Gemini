import React, { useContext, useState } from 'react'
import './sidebar.css'
import { assets } from '../../assets/assets';
import { Context } from '../../context/Context';
export default function Sidebar() {
    const [extended, setextended] = useState(false);
    const { onSent, prevprompt, setrecentprompt, newchat } = useContext(Context);

    const loadPrompt = async (prompt) => {
        setrecentprompt(prompt)
        await onSent(prompt);
    }
    return (
        <div className='sidebar'>
            <div className="top">
                <img className='menu' onClick={() => setextended(prev => !prev)} src={assets.menu_icon} alt="" />
                <div onClick={() => newchat()} className="new-chat">
                    <img src={assets.plus_icon} alt="" />
                    {extended ? <p>new chat</p> : ""}
                </div>
                {extended ?
                    <div className="recent">
                        <p className="recent-title">
                            Recent
                        </p>
                        {prevprompt.map((item, index) => {
                            return (
                                <div onClick={() => loadPrompt(item)} className="recent-entry">
                                    <img src={assets.message_icon} alt="" />
                                    {console.log(item)}
                                    <p>{item.slice()}...</p>
                                </div>
                            )
                        })}

                    </div> : ""
                }

            </div>
            <div className="bottom">
                <div className="bottom-item recent-entry">
                    <img src={assets.question_icon} alt="" />
                    {extended ? <p>Help</p> : ""}
                </div>
                <div className="bottom-item recent-entry">
                    <img src={assets.history_icon} alt="" />
                    {extended ? <p>Activity</p> : ""}
                </div>
                <div className="bottom-item recent-entry">
                    <img src={assets.setting_icon} alt="" />
                    {extended ? <p>Setting's</p> : ""}
                </div>
            </div>
        </div>
    )
}
