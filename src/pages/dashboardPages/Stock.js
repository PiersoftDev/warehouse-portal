import { Form, Button, Input, Space } from 'antd'
import { BiCategoryAlt } from 'react-icons/bi'
import MyBarChart from '../../components/common/MyBarChart'
import SearchInput from '../../components/common/SearchInput'

const Stock = () => {
  const [form] = Form.useForm()
  const overViewData = [
    { name: 'Ready to Issue', value: 400 },
    { name: 'On Hand', value: 800 },
    { name: 'On Order', value: 200 },
    { name: 'Blocked', value: 600 },
    { name: 'Demand', value: 1000 },
    { name: 'Issued Until', value: 700 },
  ]

  return (
    <div className="stock-container">
      <div className="selection card">
        <div className="card-header"> Selection</div>

        <Form
          form={form}
          name="validateOnly"
          layout="vertical"
          autoComplete="off"
        >
          <Form.Item
            name="itemCode"
            label="Item Code"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <SearchInput dataIndex="itemCode" form={form} />
          </Form.Item>
          <Form.Item
            name="warehouseCode"
            label="Warehouse Code"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <SearchInput dataIndex="warehouseCode" form={form} />
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

          <div className="submit-container">
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </div>
        </Form>
      </div>

      <div className="overview card">
        <div className="card-header"> Stock Overview</div>
        <div className="chart-container">
          <MyBarChart
            width={700}
            height={300}
            data={overViewData}
            maxYAxisValue={1200}
          />
        </div>
      </div>
      <div className="warehouse card">
        <div className="card-value"> Warehouse Stock</div>
      </div>

      <div className="Location card">
        <div className="card-value"> Location Stock</div>
      </div>
      <div className="project card">
        <div className="card-value"> project stock</div>
      </div>

      <div className="Company card">
        <div className="card-value"> Company Stock</div>
      </div>
      <div className="Quarantine card">
        <div className="card-value"> Quarantine stock</div>
      </div>

      <div className="Surplus card">
        <div className="card-value"> Surplus declatation</div>
      </div>
      <div className="Transactions card">
        <div className="card-header"> Transactions</div>
        <ul className="transactions-body">
          <li>
            <span>
              <BiCategoryAlt />
            </span>
            <span>Planned transactions</span>
          </li>
          <li>
            <span>
              <BiCategoryAlt />
            </span>
            <span> Item transactions </span>
          </li>
        </ul>
      </div>
    </div>
  )
}
export default Stock
