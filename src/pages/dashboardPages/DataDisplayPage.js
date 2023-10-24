import { Button, Table } from 'antd'
import { useNavigate } from 'react-router-dom'

const columns = [
  {
    title: 'Item Code',
    dataIndex: 'itemCode',
    width: 150,
    // fixed: 'left',
  },
  {
    title: 'Item Description',
    dataIndex: 'itemDescription',
    responsive: ['md'],
    width: 250,
    ellipsis: true,
  },
  {
    title: 'Ready to issue',
    dataIndex: 'readyToIssue',
    width: 100,
  },
  {
    title: 'On Hand',
    dataIndex: 'onHand',
    width: 100,
  },
  {
    title: 'On Order',
    dataIndex: 'onOrder',
    width: 100,
  },
  {
    title: 'Blocked',
    dataIndex: 'blocked',
    width: 100,
  },
  {
    title: 'Demand',
    dataIndex: 'demand',
    width: 100,
  },
  {
    title: 'Issued Util',
    dataIndex: 'issuedUtil',
    width: 100,
  },
]

const DataDisplayPage = (props) => {
  const navigate = useNavigate()

  const data = new Array(1000).fill(null).map((_, index) => ({
    key: index + '',
    id: index,
    itemCode: `CV001${index}1020${index}04${index}`,
    itemDescription: `Some description about the item Some description about the item Some description about the item ${index}`,
    readyToIssue: `XXXX Nos ${index}`,
    onHand: `XXXX Nos ${index}`,
    onOrder: `XXXX Nos ${index}`,
    blocked: `XXXX Nos ${index}`,
    demand: `XXXX Nos ${index}`,
    issuedUtil: `XXXX Nos ${index}`,
  }))

  const goBack = () => {
    navigate('/stock')
  }

  const onChange = (pagination, filters, sorter, extra) => {
    console.log('params', pagination, filters, sorter, extra)
  }

  return (
    <div className="datapage-container">
      <div className="top-header-container">
        <Button type="primary" onClick={goBack}>
          back
        </Button>
        <div className="top-header-title">Location Stock</div>
        <span></span>
      </div>

      <div className="my-table-container">
        <div className="table-btns-container">
          <span>b</span>
          <span>b</span>
          <span>b</span>
          <span>b</span>
        </div>
        <Table
          className="my-custom-table"
          bordered
          virtual
          scroll={{ x: true, y: 700 }}
          columns={columns}
          dataSource={data}
          onChange={onChange}
        />
      </div>
    </div>
  )
}
export default DataDisplayPage
