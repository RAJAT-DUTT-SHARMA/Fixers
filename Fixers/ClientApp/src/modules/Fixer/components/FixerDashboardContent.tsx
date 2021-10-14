import React, { Component } from 'react';
import IFixerDashboardProps from '../models/IFixerDashboardProps';
import IFixerDashboardState from '../models/IFixerDashboardState';
export default class FixerDashboardContent extends Component<IFixerDashboardProps, IFixerDashboardState>
{
    constructor(props: IFixerDashboardProps) {
        super(props);
    }

    onComponentDidMount

    render()
    {
        return (
            <div>
                Fixer Dashboard content
                <div className="Profile">
                    <h1 className="Name">{this.state.fixer.name}</h1>
                    <p className="Bio">{props.person.biography}</p>
                    <div className="Quote">
                        <blockquote>&ldquo; {props.quote.content} &rdquo;</blockquote>
                        <div className="byline">&mdash; {props.quote.source}</div>
                    </div>

                </div>
            </div>
        );
    }
}