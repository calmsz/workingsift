import React from 'react';

class MessageList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            updateDetails: false
        };
        this.showExtendedMessage = {};
        this.messages = props.messages;
        this.passImg = <img width='18px' src='assets/checkmark.svg' />;
        this.failImg = <img width='18px' src='assets/cancel.svg' />;
        this.collapseImg = <img width='18px' src='assets/collapse.svg' />;
        this.expandImg = <img width='18px' src='assets/expand.svg' />;
        this.gmailImg = <img style={{padding: '4px'}} width='36px' src='assets/gmail.svg' />;
        this.primaryImg = <img width='27px' src='assets/primary.png' />;

    }

    clickShowHide = (id) => {
        this.showExtendedMessage[id] = (!!this.showExtendedMessage[id]) ? false: true;
        this.setState({ updateDetails: !this.state.updateDetails })
    };

    render() {
        const divInboxTitleStyle = {
            'display': 'table',
            'width': '100%',
            'background-image': 'linear-gradient(#ededed, #ededed, #ededed, #ededed, #c6c6c6)',
            'height': 70,
            'color': '#484848',
            'font': 'Jost',
            'font-size': 21,
            'display': 'flex',
            'align-items': 'center',
            'margin': 'auto'
        };
        const divPrincipalStyle = {
            'height': 70,
            'color': '#c71610',
            'font': 'Jost',
            'text-align': 'center',
            'width': 200,
            'border-bottom': '2px solid #c71610',
        };
        const divMessageRowStyle = {
            'display': 'table',
            'width': '100%',
            'table-layout': 'fixed',
            'font': 'Roboto',
            'border-spacing': 10,
        };
        const divMessageMainRowStyle = {
            // 'background-color': '#d3d3d3',
            'margin': 1,
            'padding': 1,
            'font-weight': 'bold'
        };
        const divMessageColStyle = {
            'display': 'table-cell',
            'text-align': 'left',
            'width': 300,
            'overflow': 'hidden',
            'text-overflow': 'ellipsis',
        };
        const divMessageSubjectStyle = {
            'display': 'table-cell',
            'text-align': 'left',
            'overflow': 'hidden',
            'text-overflow': 'ellipsis',
        };
        const divMessageDateStyle = {
            'display': 'table-cell',
            'text-align': 'right',
            'width': 100,
        };
        const smoothOperator = {
            'transition': 'margin .5s',
        }
        return (
            <div>
                <div style={divInboxTitleStyle}>
                    {this.gmailImg}&nbsp;<span>Gmail</span>
                </div>
                <div style={divPrincipalStyle}>
                    <p>{this.primaryImg}<br />
                    PRIMARY</p>
                </div>
                {this.messages.map((m, key) =>
                    <div key={key}>
                        <div style={{...divMessageRowStyle, ...divMessageMainRowStyle}} onClick={() => {this.clickShowHide(m.id)}}>
                            <div style={divMessageColStyle}>
                                {m.from['name']}
                            </div>
                            <div style={divMessageSubjectStyle}>
                                {m.subject}
                            </div>
                            <div style={divMessageDateStyle}>
                                {m.formattedDate}
                                &nbsp;
                                {(!!this.showExtendedMessage[m.id]) ?
                                 this.collapseImg : this.expandImg }
                            </div>
                        </div>
                        <div style={{...smoothOperator, ...{display: !!this.showExtendedMessage[m.id] ? "block" : "none" }}}>
                            <div style={divMessageRowStyle}>
                                {m.from['email']}
                            </div>
                            <div style={divMessageRowStyle}>
                                Pass DMARC validation:{m.DMARC ? this.passImg : this.failImg}
                            </div>
                            <div style={divMessageRowStyle}>
                                Pass SPF validation:{m.SPF ? this.passImg : this.failImg}
                            </div>
                            <div style={divMessageRowStyle}>
                                Pass DKIM validation:{m.DKIM ? this.passImg : this.failImg}
                            </div>
                            <div style={divMessageRowStyle}>
                                Email text:
                                <div dangerouslySetInnerHTML={{ __html: m.body }}></div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        );
    }
}

export default MessageList;