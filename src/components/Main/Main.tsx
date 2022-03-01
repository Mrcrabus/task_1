import React from 'react';
import MainLayout from "../../lauouts/MainLayout";
import FilterByStops from "../FilterByStops";
import Buttons from "../ButtonGroup";
import FilterByCompany from "../FilterByCompany/FilterByCompany";
import Items from "../Items/Items";

const Main = () => {
    return (
        <MainLayout>
            <div className={'d-flex justify-content-between align-items-start'}>
                <div>
                    <FilterByStops/>
                    <FilterByCompany/>
                </div>
                <div>
                    <Buttons/>
                    <Items/>
                </div>

            </div>
        </MainLayout>
    );
};

export default Main;
