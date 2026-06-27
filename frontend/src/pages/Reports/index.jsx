import { useWorkflow } from "../../context/WorkflowContext";

import ReportViewer from "../../components/reports/ReportViewer";

import ReportActions from "../../components/reports/ReportActions";

export default function Reports(){

const {workflow}=useWorkflow();

if(!workflow){

return(

<h2>

Run Workflow First

</h2>

)

}

return(

<div className="reports-page">

<ReportViewer

report={workflow.final_report}

/>

<ReportActions

report={workflow.final_report}

/>

</div>

)

}