export default function StatusBadge({status}){

const colors={

Completed:"#22C55E",

Running:"#3B82F6",

Failed:"#EF4444",

Idle:"#64748B"

}

return(

<span

style={{

background:colors[status]||"#64748B",

padding:"6px 14px",

borderRadius:"20px",

fontSize:"12px"

}}

>

{status}

</span>

)

}