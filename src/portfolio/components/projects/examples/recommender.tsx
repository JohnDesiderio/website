import React from 'react';
import Project from '../project-component';
import { IProject } from '../types';

const name = 'Content-Based Recommendation System for Movies';
const details:Array<string> = [
    'Collaborated with two students to compare the merit of multiple information filtering recommender system algorithms',
    'Implemented the recommender system using the term frequency-inverse document frequency algorithm',
    'Tested the recommender system on participants to gauge the reception of the movie recommendations',
    'Presented our research in a paper that compared the results of three different recommender systems',
]

const Recommender:React.FC<{}> = () => {
    const props: IProject = {
        name: name,
        details: details,
        sh: 'recommnender',
    }
    
    return (<Project {...props}/>);
}

export default Recommender;