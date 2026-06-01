import React from 'react';

// This component accepts "title" and "description" as inputs (props)
export default function RecommendationCard({ title, description }){
  return (
        <div style={{ padding: "12px", border: "1px solid #e2e8f0", borderRadius: "6px", margin: "10px 0", backgroundColor: "#fafafa" }}>
            <h4 style={{ margin: "0 0 5px 0", color: "#2d3748" }}>{title}</h4>
            <p style={{ margin: 0, fontSize: "14px", color: "#4a5568" }}>{description}</p>
        </div>
    );
};