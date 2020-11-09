import React from 'react';
import "./Dashboard.scss"
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';

function Dashboard(props) {
    return (
        <div className="dashboard__container">
            <h2> My Dashboard</h2>
            <section className="number__container">
                <div><span>A</span><p>Time worked</p><a href="/">Register a new performance</a></div>
                <div><span>A</span><p>Activity achieved</p><a href="/">Register a new performance</a></div>
                <div><span>A</span><p># Ranking</p><a href="/">Register a new performance</a></div>
                <div><span>A</span><p>Old performances</p><a href="/">Register a new performance</a></div>
            </section>
            <section>
                <h3>TO DOs for today/this week/this month</h3>
                <div>List...</div>
            </section>
            <section>
                <p>Graph made with canvajs</p>
            </section>
        </div>
    );
}

export default Dashboard;