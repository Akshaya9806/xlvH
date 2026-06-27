const agents=[

"Planner",

"Trigger",

"Search",

"Research",

"Qualification",

"Recommendation",

"Report"

]

export default function AgentMonitorCard(){

return(

<div className="agent-card">

<h2>

Agent Monitor

</h2>

{

agents.map(agent=>(

<div
className="agent-row"
key={agent}
>

🟢

<div>

<b>

{agent}

</b>

<br/>

<small>

Ready

</small>

</div>

</div>

))

}

</div>

)

}