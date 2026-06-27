export const getAgentStatusColor = (status) => {
  switch (status) {
    case "Completed":
      return "green";
    case "Running":
      return "blue";
    case "Failed":
      return "red";
    default:
      return "gray";
  }
};

export const getProgress = (currentAgent) => {
  const steps = [
    "Planner",
    "Trigger",
    "Search",
    "Research",
    "Qualification",
    "Recommendation",
    "Report",
  ];

  return ((steps.indexOf(currentAgent) + 1) / steps.length) * 100;
};