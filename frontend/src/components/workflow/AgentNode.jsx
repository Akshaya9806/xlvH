import "./../../styles/workflow.css";

export default function AgentNode({

name,

status="idle"

}){

const colors={

idle:"#64748B",

running:"#3B82F6",

completed:"#22C55E",

failed:"#EF4444"

}

return(

<div className="agent-node">

<div

className="agent-circle"

style={

{

background:colors[status]

}

}

>

{name.charAt(0)}

</div>

<h3>

{name}

</h3>

<p>

{status}

</p>

</div>

)

}