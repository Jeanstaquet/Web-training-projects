import React from 'react';
import './MainLayout.css';
import Banner from "../../components/Banner/Banner";

const MainPage = (props) => {
    return (
        <div>
            <Banner/>
            {props.children}
        </div>
    );
};

export default MainPage;