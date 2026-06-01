import React from 'react';
import RecommendationCard from "./RecommendationCard";


export default function RecommendationPanel(){// The static mock data required by the task instructions
    const recommendations = [
        {
            id: 1,
            title: "React State Management",
            description: "Review how useState helps manage changing interface data."
        },
        {
            id: 2,
            title: "Async JavaScript",
            description: "Revise how async and await are used when working with APIs."
        }
    ];

    return (
        <div style={{ marginTop: "30px", borderTop: "2px solid #e2e8f0", paddingTop: "20px" }}>
            <h3>Suggested Learning Resources</h3>
            {recommendations.map((item) => (
                <RecommendationCard 
                    key={item.id} 
                    title={item.title} 
                    description={item.description} 
                />
            ))}
        </div>
    );};