import './ExercisesSearch.scss';

import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import HorizontalScrollbar from './HorizontalScrollbar'

export const ExercisesSearch = () => {
  
  return (
    <section className = "exercises-search">
        <h2 className = "exercises-search__title">Search Exercises!</h2>
        <input type = "text" placeholder = "Which exercise?" />
        <Link to = "/exercises">
            <div className = "exercises-search__search-btn"> SEARCH</div>
        </Link>
        <div className = "exercises-search__body-part-container">
            <HorizontalScrollbar data = {bodyParts} bodyParts setBodyPart={setBodyPart} bodyPart = {bodyPart} />
        </div>
    </section>
  )
}