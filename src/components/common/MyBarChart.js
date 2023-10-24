import { BarChart, Bar, XAxis, YAxis, LabelList, Cell } from 'recharts'

const MyBarChart = ({ data, height, width, maxYAxisValue }) => {
  const colors = data.map(({ color }) => color)

  const CustomLabel = (props) => {
    const { x, y, value } = props

    return (
      <text
        x={x}
        y={y}
        dy={-10}
        dx={10}
        fontSize={11}
        textAnchor="middle"
        fill="#000"
      >
        {value} Tons
      </text>
    )
  }

  return (
    <BarChart width={width} height={height} data={data}>
      <XAxis
        dataKey="name"
        axisLine={false}
        tickLine={false}
        tick={{
          fill: 'var(--grey-700)',
          fontSize: 14,
          letterSpacing: '2px',
        }}
      />
      <YAxis domain={[0, maxYAxisValue]} hide={true} />

      <Bar
        dataKey="value"
        fill="#8884d8"
        animationDuration={1500}
        barSize={20}
        radius={[5, 5, 0, 0]}
        barCategoryGap={0}
        barGap={0}
        // label={{ position: 'top' }}
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={colors[index]} />
        ))}
        <LabelList dataKey="value" position="top" content={<CustomLabel />} />
      </Bar>
    </BarChart>
  )
}
export default MyBarChart
