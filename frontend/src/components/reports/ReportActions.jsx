import "./../../styles/reports.css";

export default function ReportActions({ report }) {

    const download = () => {

        const blob = new Blob([report], { type: "text/plain" });

        const url = URL.createObjectURL(blob);

        const a = document.createElement("a");

        a.href = url;

        a.download = "AI_Report.txt";

        a.click();

        URL.revokeObjectURL(url);

    }

    return(

        <div className="report-actions">

            <button onClick={download}>

                Download Report

            </button>

        </div>

    )

}