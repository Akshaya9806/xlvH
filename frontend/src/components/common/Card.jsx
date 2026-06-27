export default function Card({title,children}){

return(

<div
style={{
background:"#1E293B",
borderRadius:"15px",
padding:"20px",
border:"1px solid #334155"
}}
>

<h2
style={{
marginBottom:"20px"
}}
>

{title}

</h2>

{children}

</div>

)

}