import React from 'react';
import { Box } from '@mui/material';
import './styles.css';

const skills: Array<string> = [
    'JavaScript', 'TypeScript', 'Node.js', 'React.js', 'RxJS', 'Material-UI', 'NestJS', 'MongoDB', 'HTML5/CSS3', 'NextJS', 
    'Responsive Design', 'MongoDB', 'Firebase', 'SQL Server', 'UI/UX Design', 'Full-Stack Development', 'REST API\'s', 
    'CRUD Design', 'Front-End Development', 'Back-End Development', 'UML', 'Java', 'Spring Boot', 'Python', 'Flask', 
    'Data Science', 'Data Analytics', 'Recommender Systems', 'Information Filtering', 'Cloud Programming', 'SQL', 'C++', 
    'C', 'Algorithms', 'Simulation and Modeling', 'Simpy', 
];

const SkillsSection:React.FC<{}> = () => {
    return (
        <Box>
            <Box className='skills-section skills-typography'>Skills</Box>
            <Box className='skills-section skills-list'>
                {skills.map((skill, idx) => 
                    <Box 
                        key={`skills-section-${idx}`}
                        className='font-bold text-lg inline-block skill-point'
                    >
                        {skill}
                    </Box>    
                )}
            </Box>
        </Box>
    )
}

export default SkillsSection;