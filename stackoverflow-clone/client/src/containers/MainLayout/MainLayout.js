import React from 'react';
import './MainLayout.css';
import Banner from "../../components/Banner/Banner";
import LeftMenu from "../../components/LeftMenu/LeftMenu";
import TagsList from "../../components/TagsList/TagsList";
import RelatedTags from "../../components/RelatedTags/RelatedTags";
import MainTitle from "../../components/MainTitle/MainTitle";

const MainPage = (props) => {
    return (
        <div className="MainLayout">
            <Banner 
                showModalHandler={props.showModalHandler}
                logoutHandler={props.logoutHandler}
            />
            <LeftMenu/>
            <div className="MainLayout__content">
                <div className="MainLayout__questions">
                    <MainTitle/>
                    {props.children}
                </div>
                <div className="MainLayout__tags">
                    <TagsList title={"Watched Tags"} edit="edit"/>
                    <TagsList title={"Ignored Tags"} edit="edit"/>
                    <RelatedTags/>
                </div>
            </div>
        </div>
    );
};

export default MainPage;