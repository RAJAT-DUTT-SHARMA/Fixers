import React, { Component } from 'react';
import IDashboardProps from '../models/IDashboardProps';
import FixerDashboardContent from '../modules/Fixer/components/FixerDashboardContent';
import UserDashboardContent from '../modules/User/components/UserDashboardContent';

export default class DashBoard extends Component<IDashboardProps>
{
    constructor(props: IDashboardProps)
    {
        super(props);
    }

    render()
    {
        if (this.props.fixer) {
            return (
                <FixerDashboardContent
                    id={this.props.id} />
                   );
        }
        else
        {
            return (<UserDashboardContent />);
        }
    }
}