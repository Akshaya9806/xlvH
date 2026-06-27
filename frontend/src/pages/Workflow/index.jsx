import WorkflowGraph from "../../components/workflow/WorkflowGraph";

import WorkflowTimeline from "../../components/workflow/WorkflowTimeline";

import WorkflowLogs from "../../components/workflow/WorkflowLogs";

import WorkflowLegend from "../../components/workflow/WorkflowLegend";

import "../../styles/workflow.css";

export default function Workflow(){

return(

<div className="workflow-page">

<h1>

LangGraph Workflow

</h1>

<WorkflowLegend/>

<WorkflowGraph/>

<div className="workflow-grid">

<WorkflowTimeline/>

<WorkflowLogs/>

</div>

</div>

)

}