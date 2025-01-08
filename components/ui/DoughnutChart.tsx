'use client'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = ({ accounts }: DoughnutChartProps) => {
    const data = {
        datasets: [
            {
                label: "Bank",
                data: [1250, 2500, 1000, 500],
                backgroundColor: ['#FF6633', '#FFB399', '#FF33FF', '#FFFF99']
            }
        ],
        labels: ['Bank1', 'Bank2', 'Bank3', 'Bank4']
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
