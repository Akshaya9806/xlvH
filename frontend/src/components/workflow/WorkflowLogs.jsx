import { useWorkflow } from "../../context/WorkflowContext";

import "./../../styles/workflow.css";

export default function WorkflowLogs(){

const {workflow}=useWorkflow();

if(!workflow)

return(

<div className="logs-card">

No Logs

</div>

)

return(

<div className="logs-card">

<h2>

Workflow Logs

</h2>

{

workflow.workflow_logs.map((log,index)=>(

<div

key={index}

className="log-row"

>

{log}

</div>

))

}

</div>

)

}