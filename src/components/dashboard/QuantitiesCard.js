import { Form } from 'antd'
import MyBarChart from '../common/MyBarChart'
import SearchInput from '../common/SearchInput'

const QuantitiesCard = () => {
  const [form] = Form.useForm()
  const quantitiesData = [
    { name: 'Budgeted', value: 400, color: '#CE93D8' },
    { name: 'Recieved', value: 800, color: '#80DEEA' },
    { name: 'Issued', value: 600, color: '#7986CB' },
    { name: 'Surplus', value: 1000, color: '#90CAF9' },
    // Add more data points...
  ]
  return (
    <div className="quantities card">
      <Form
        form={form}
        name="validateOnly"
        layout="vertical"
        autoComplete="off"
      >
        <div className="card-header-container">
          <div className="card-header"> Quantities</div>
          <div className="items-container">
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
            <Form.Item
              name="projectCode"
              label="Project Code"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <SearchInput dataIndex="projectCode" form={form} />
            </Form.Item>
            <Form.Item
              name="activityCode"
              label="Activity Code"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <SearchInput dataIndex="activityCode" form={form} />
            </Form.Item>
          </div>
        </div>
      </Form>

      <div className="chart-container">
        <MyBarChart
          width={600}
          height={250}
          data={quantitiesData}
          maxYAxisValue={1200}
        />
      </div>
    </div>
  )
}
export default QuantitiesCard
