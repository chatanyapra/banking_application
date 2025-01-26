'use client'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = ({ accounts }: DoughnutChartProps) => {

    const acountNames = accounts.map((a) => a.name);
    const balances = accounts.map((a) => a.currentBalance);

    const data = {
        datasets: [
            {
                label: "Bank",
                data: balances,
                backgroundColor: ['#FF6633', '#FFB399', '#FF33FF', '#FFFF99']
            }
        ],
        labels: acountNames
    }
    return <Doughnut
        options={{
            cutout: "60%",
            plugins: {
                legend:{
                    display: false
                }
            }
        }}
        data={data}
    />
}

export default DoughnutChart
