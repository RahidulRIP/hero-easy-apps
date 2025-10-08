
import {
    ComposedChart,
    Line,
    Area,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from 'recharts';



const VerticalChart = ({ ratings }) => {

    const sortedRatings = [...ratings].sort(
        (a, b) => parseInt(b.name) - parseInt(a.name)
    );      
    return (
        <ResponsiveContainer width="100%" height={350}>
            <ComposedChart
                layout="vertical"
                width={500}
                height={400}
                data={sortedRatings}
                margin={{
                    top: 20,
                    right: 20,
                    bottom: 20,
                    left: 20,
                }}
            >
                <CartesianGrid stroke="#f5f5f5" />
                <XAxis type="number" />
                <YAxis dataKey="name" type="category" scale="band" />
                {/* <Tooltip />
                <Legend /> */}
                <Area dataKey="amt" fill="#8884d8" stroke="#8884d8" />
                <Bar dataKey="count" barSize={20} fill="#ff892d" />
                <Line dataKey="uv" stroke="#ff7300" />
            </ComposedChart>
        </ResponsiveContainer>

    );
};

export default VerticalChart;
