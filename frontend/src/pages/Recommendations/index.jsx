import { useWorkflow } from "../../context/WorkflowContext";

import RecommendationCard from "../../components/recommendations/RecommendationCard";

export default function Recommendations(){

const {workflow}=useWorkflow();

if(!workflow){

return(

<h2>

Run Workflow First

</h2>

)

}

return(

<div className="recommendations-page">

<h1>

AI Recommendations

</h1>

<div className="recommendation-grid">

{

workflow.recommendations.map((item,index)=>(

<RecommendationCard

recommendation={item}

key={index}

/>

))

}

</div>

</div>

)

}