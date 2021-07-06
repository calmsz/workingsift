import React from 'react';

export default function MessageList({ messages }) {
    const passImg = <img width='18px' src='assets/checkmark.svg' />;
    const failImg = <img width='18px' src='assets/cancel.svg' />;
    return (
        <div>
            <ul>
                {messages.map((m, key) =>
                    <li>
                        <div key={key}>
                            <ul>
                                <div>
                                    <li>
                                        <div>
                                            <div>
                                                {m.from['name']}
                                            </div>
                                            <div>
                                                {m.subject}
                                            </div>
                                            <div>
                                                {m.formattedDate}
                                            </div>
                                        </div>
                                    </li>
                                </div>
                                <div>
                                    <li>
                                        {m.from['email']}
                                    </li>
                                    <li>
                                        Pass DMARC validation:{m.DMARC ? passImg : failImg}
                                    </li>
                                    <li>
                                        Pass SPF validation:{m.SPF ? passImg : failImg}
                                    </li>
                                    <li>
                                        Pass DKIM validation:{m.DKIM ? passImg : failImg}
                                    </li>
                                    <li>
                                        Email text:
                                        <div dangerouslySetInnerHTML={{ __html: m.body }}></div>
                                    </li>
                                </div>
                            </ul>
                        </div>
                    </li>
                )}
            </ul>
        </div>
    );
}
