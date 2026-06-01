function RecommendationCard({
  title,
  description
}) {
  return (
    <div className="recommendation-card">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default RecommendationCard;