import React from 'react';
import {Container, Row} from 'react-bootstrap';
import MainLayout from "../../lauouts/MainLayout";
import FilterByStops from "../FilterByStops";

const Main = () => {
    return (
        <MainLayout>
            <div className={'d-flex justify-content-center align-items-center'}>
                <FilterByStops/>
                <FilterByStops/>
            </div>
        </MainLayout>
    );
};

export default Main;
