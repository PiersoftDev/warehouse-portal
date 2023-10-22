import { BarChart, Bar, XAxis, YAxis, LabelList } from 'recharts'

const MyBarChart = ({ data, height, width, maxYAxisValue }) => {
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
      >
        <LabelList dataKey="value" position="top" />
      </Bar>
    </BarChart>
  )
}
export default MyBarChart
