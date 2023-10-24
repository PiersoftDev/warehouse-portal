import { Form, Button, Input, Space } from 'antd'
import { BiCategoryAlt } from 'react-icons/bi'
import { styled } from 'styled-components'
import MyBarChart from '../../components/common/MyBarChart'
import SearchInput from '../../components/common/SearchInput'

const Stock = () => {
  const [form] = Form.useForm()
  const overViewData = [
    { name: 'Ready to Issue', value: 400, color: '#81C784' },
    { name: 'On Hand', value: 800, color: '#9FA8DA' },
    { name: 'On Order', value: 200, color: '#CE93D8' },
    { name: 'Blocked', value: 600, color: '#F48FB1' },
    { name: 'Demand', value: 1000, color: '#A5D6A7' },
    { name: 'Issued Until', value: 700, color: '#90CAF9' },
  ]

  return (
    <Wrapper>
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
            // rules={[
            //   {
            //     required: true,
            //   },
            // ]}
          >
            <SearchInput dataIndex="warehouseCode" form={form} />
          </Form.Item>
          <Form.Item
            name="projectCode"
            label="Project Code"
            // rules={[
            //   {
            //     required: true,
            //   },
            // ]}
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
        <div className="card-value"> Stock Point Stock</div>
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
    </Wrapper>
  )
}
export default Stock

const Wrapper = styled.div`
  padding: 1rem;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 2rem;
  grid-template-areas:
    'a b b'
    'c d i'
    'e f i'
    'g h i';
  overflow: scroll;
  scroll-behavior: smooth;

  .card {
    background: var(--white);
    border-radius: var(--borderRadius);
    /* box-shadow: var(--shadow-2); */
    border: 1px solid var(--grey-50);
    padding: 1rem;
    transition: var(--transition);
  }

  .card:hover {
    border: 1px solid var(--grey-100);
    box-shadow: var(--shadow-3);
  }

  .card-header {
    letter-spacing: 2px;
    text-transform: uppercase;
    color: var(--grey-500);
    font-weight: 600;
    font-size: 0.7rem;
    margin-bottom: 1.5rem;
  }

  .card-value {
    display: grid;
    place-items: center;
    padding: 1rem;
    font-size: 1.2rem;
    font-weight: 500;
    cursor: pointer;
    letter-spacing: 2px;
  }

  .selection {
    grid-area: a;
  }

  .overview {
    grid-area: b;
  }

  .warehouse {
    grid-area: c;
  }

  .Location {
    grid-area: d;
  }

  .project {
    grid-area: e;
  }

  .Company {
    grid-area: f;
  }

  .Quarantine {
    grid-area: g;
  }

  .Surplus {
    grid-area: h;
  }

  .Transactions {
    grid-area: i;
  }

  .transactions-body {
    padding-left: 1rem;
  }

  .transactions-body li {
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    letter-spacing: 1px;
  }

  .transactions-body li span {
    display: grid;
    place-items: center;
    color: var(--grey-700);
  }
`
