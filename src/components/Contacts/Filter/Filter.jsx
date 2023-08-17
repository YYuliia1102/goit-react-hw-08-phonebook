import React from "react";
import { useDispatch } from "react-redux";
import { setFilter } from "../../../redux/contactsReducer.js";
import styled from './Filter.module.css';

const Filter = () => {
    const dispatch = useDispatch();

    const handleFilterChange = (event) => {
        dispatch(setFilter(event.target.value));
    };

    return (
        <div className={styled.searchContainer}>
            <input type="text" className={styled.searchInput} onChange={handleFilterChange} />
            <span className={styled.searchIcon}>&#128269;</span>
        </div>
    );
};

export default Filter;
