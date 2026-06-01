import RecommendationCard from "./RecommendationCard";

function RecommendationPanel() {
  const recommendations = [
    {
      id: 1,
      title: "React State Management",
      description:
        "Review how useState manages dynamic application data."
    },
    {
      id: 2,
      title: "Async JavaScript",
      description:
        "Learn how async and await work with APIs."
    },
    {
      id: 3,
      title: "Responsible AI UX",
      description:
        "Understand transparency and trust in AI interfaces."
    }
  ];

  return (
    <section className="recommendations">
      <h2>Recommended Learning Resources</h2>

      {recommendations.map((item) => (
        <RecommendationCard
          key={item.id}
          title={item.title}
          description={item.description}
        />
      ))}
    </section>
  );
}

export default RecommendationPanel;