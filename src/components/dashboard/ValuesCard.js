import { Form } from 'antd'
import MyBarChart from '../common/MyBarChart'
import SearchInput from '../common/SearchInput'

const ValuesCard = () => {
  const [form] = Form.useForm()
  const valuesData = [
    { name: 'Latest Price', value: 400 },
    { name: 'Avg Price', value: 800 },
    { name: 'MAUC', value: 600 },
  ]

  return (
    <div className="values card">
      <Form
        form={form}
        name="validateOnly"
        layout="vertical"
        autoComplete="off"
      >
        <div className="card-header-container">
          <div className="card-header"> Values</div>
          <Form.Item
            name="materialCode"
            label="Material Code"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <SearchInput dataIndex="materialCode" form={form} />
          </Form.Item>
        </div>
      </Form>

      <div className="chart-container">
        <MyBarChart
          width={350}
          height={250}
          data={valuesData}
          maxYAxisValue={1200}
        />
      </div>
    </div>
  )
}
export default ValuesCard
