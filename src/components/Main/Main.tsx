import React from 'react';
import MainLayout from "../../lauouts/MainLayout";
import FilterByStops from "../FilterByStops";
import Buttons from "../ButtonGroup";
import FilterByCompany from "../FilterByCompany/FilterByCompany";
import Items from "../Items/Items";

const Main = () => {
    return (
        <MainLayout>
            <div className={'flex justify-between items-start'}>
                <div className={'flex flex-col justify-between items-start h-[500px]'}>
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
