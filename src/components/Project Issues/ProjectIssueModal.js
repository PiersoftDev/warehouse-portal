import { Card, Checkbox, Modal, Switch, Table, Button, Input } from 'antd'
import React, { useState } from 'react'
import { styled } from 'styled-components'
import { PlusOutlined, CloseOutlined } from '@ant-design/icons'

const ProjectsIssueModal = ({
  projectissue,
  ProcessedRecord,
  setProjectIssue,
}) => {
  const [selectedRowKeys, setSelectedRowKeys] = useState([])
  const [ReceivedLines, setReceivedLines] = useState([
    {
      Position: 1,
      item: 'Item1',
      itemDesc: 'Description for Item1',
      Orderedquantity: 100,
      plannedDeliveryDate: '10-11-2023',
      taxCode: 'ACZERO',
      location: 'BLK1',
    },
  ])
  const [showButtons, setShowButtons] = useState(false)
  const Columns = [
    {
      title: 'Position',
      dataIndex: 'Position',
      align: 'center',
      width: '8vw',
    },
    {
      title: 'Item',
      dataIndex: 'item',
      align: 'center',
      width: '8vw',
    },
    {
      title: 'Item Desc',
      dataIndex: 'itemDesc',
      align: 'center',
      width: '12vw',
    },
    {
      title: 'Ordered Quantity',
      dataIndex: 'Orderedquantity',
      align: 'center',
      width: '10vw',
    },
    {
      title: 'Planned Delivery Date',
      dataIndex: 'plannedDeliveryDate',
      align: 'center',
      width: '12vw',
    },
    {
      title: 'Tax Code',
      dataIndex: 'taxCode',
      align: 'center',
      width: '8vw',
    },
    {
      title: 'Location',
      dataIndex: 'location',
      align: 'center',
      width: '8vw',
    },
  ]

  const CloseModal = () => {
    setProjectIssue(false)
  }
  const rowSelection = {
    type: 'checkbox',
    onChange: (selectedRowKeys, selectedRows) => {
      setSelectedRowKeys(selectedRowKeys)
    },
  }
  return (
    <Modal
      width='92vw'
      height='93vh'
      title='Project Issue'
      open={projectissue}
      closable={false}
      footer={null}
      style={{ overflow: 'hidden', marginTop: '-10vh' }}
    >
      <Wrapper>
        <div className='Container'>
          <Card className='Card1'>
            <div className='CardContent'>
              <div className='headerlabel'>Warehouse Orders</div>
              <div className='DisplayField'>
                <div className='Label'>Order Origin</div>
                <div className='Input'>Project</div>
              </div>
              <div className='DisplayField'>
                <div className='Label'>Order Number</div>
                <div className='Input'>PWO002301</div>
              </div>
              <div className='DisplayField'>
                <div className='Label'>Transaction Type</div>
                <div className='Input'>Issue</div>
              </div>
              <div className='DisplayField'>
                <div className='Label'>Order Status</div>
                <div className='Input'>Open</div>
              </div>
              <div className='DisplayField'>
                <div className='Label'>Order Date</div>
                <div className='Input'>01-11-2021</div>
              </div>
              <div className='DisplayField'>
                <div className='Label'>Actual Delivery Date</div>
                <div className='Input'>12-09-2023</div>
              </div>
              <div className='DisplayField'>
                <div className='Label'>Actual Receipt Date</div>
                <div className='Input'>12-11-2023</div>
              </div>
              <div className='DisplayField'>
                <div className='Label'>Return Order</div>
                <div className='Input'>
                  <Checkbox />
                </div>
              </div>
              <div className='DisplayField'>
                <div className='Label'>Return Of Rejected Goods</div>
                <div className='Input'>
                  <Checkbox />
                </div>
              </div>
              <div className='headerlabel'>Ship From Details</div>
              <div className='DisplayField'>
                <div className='Label'>Ship From</div>
                <div className='Input'>1532-1</div>
              </div>
              <div className='DisplayField'>
                <div className='Label'>Description</div>
                <div className='Input'>ESI Warehouse</div>
              </div>
              <div className='DisplayField'>
                <div className='Label'>Address</div>
                <div className='Input'>ADD02468</div>
              </div>
              <div className='DisplayField'>
                <div className='Label'>Description</div>
                <div className='Input'>Ameerpet</div>
              </div>
              <div className='DisplayField'>
                <div className='Label'>Location</div>
                <div className='Input'>BLK01</div>
              </div>
              <div className='DisplayField'>
                <div className='Label'>Description</div>
                <div className='Input'>5th Location</div>
              </div>
              <div className='DisplayField'>
                <div className='Label'>Expected Delivery Date</div>
                <div className='Input'>10-11-2023</div>
              </div>
              <div className='headerlabel'>Ship To Details</div>
              <div className='DisplayField'>
                <div className='Label'>Ship To</div>
                <div className='Input'>1503-1</div>
              </div>
              <div className='DisplayField'>
                <div className='Label'>Description</div>
                <div className='Input'>ESI Warehouse</div>
              </div>
              <div className='DisplayField'>
                <div className='Label'>Address</div>
                <div className='Input'>ADD02468</div>
              </div>
              <div className='DisplayField'>
                <div className='Label'>Description</div>
                <div className='Input'>Ameerpet</div>
              </div>
              <div className='DisplayField'>
                <div className='Label'>Location</div>
                <div className='Input'>BLK01</div>
              </div>
              <div className='DisplayField'>
                <div className='Label'>Description</div>
                <div className='Input'>5th Location</div>
              </div>
              <div className='DisplayField'>
                <div className='Label'>Expected Receipt Date</div>
                <div className='Input'>15-11-2023</div>
              </div>
              <div className='headerlabel'>General Details</div>
              <div className='DisplayField'>
                <div className='Label'>Order Type</div>
                <div className='Input'>ISS01</div>
              </div>
              <div className='DisplayField'>
                <div className='Label'>Description</div>
                <div className='Input'>Project Issues</div>
              </div>
              <div className='DisplayField'>
                <div className='Label'>Department</div>
                <div className='Input'>COPO</div>
              </div>
              <div className='DisplayField'>
                <div className='Label'>Description</div>
                <div className='Input'>Project Office</div>
              </div>
              <div className='DisplayField'>
                <div className='Label'>Carrier/LSP</div>
                <div className='Input'>CL0291</div>
              </div>
              <div className='DisplayField'>
                <div className='Label'>Description</div>
                <div className='Input'>Transport Desc</div>
              </div>
              <div className='DisplayField'>
                <div className='Label'>Delivery Terms</div>
                <div className='Input'>FOB</div>
              </div>
              <div className='DisplayField'>
                <div className='Label'>Description</div>
                <div className='Input'>Free On Board</div>
              </div>
              <div className='DisplayField'>
                <div className='Label'>Point of Title Passage</div>
                <div className='Input'>Y Location</div>
              </div>
              <div className='DisplayField'>
                <div className='Label'>Header Text</div>
                <div className='Input'>
                  <Input.TextArea placeholder='Enter Text Here' />
                </div>
              </div>
            </div>
          </Card>
          <Card className='Card2'>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <div className='headerlabel'>Issue Lines</div>
              <div style={{ marginRight: '1rem' }}>
                <Button
                  icon={<PlusOutlined />}
                  className='addLine-Buttons'
                  onClick={() => setShowButtons(!showButtons)}
                />
              </div>
            </div>
            <Table
              className='custom-table'
              dataSource={ReceivedLines}
              columns={Columns}
              pagination={false}
              rowSelection={rowSelection}
              size='small'
            />
          </Card>
        </div>
        <div className='ButtonsList'>
          <Button onClick={CloseModal}>Close</Button>
          <Button>Proceed</Button>
        </div>
      </Wrapper>
    </Modal>
  )
}

export default ProjectsIssueModal

const Wrapper = styled.div`
  .Container {
    display: flex;
  }
  .Card1 {
    width: 20vw;
    min-width: 300px;
    border-radius: 10px;
    background: #ecf3fd;
    margin-right: 0.3rem;
  }
  .CardContent {
    max-height: 65vh;
    overflow-y: auto;
    scrollbar-width: thin;
    scrollbar-color: transparent transparent;
    padding-bottom: 1rem;
  }
  .CardContent::-webkit-scrollbar {
    width: 12px;
  }
  .headerlabel {
    font-size: 0.9rem;
    font-weight: 500;
    letter-spacing: 1px;
    margin: 1rem 0;
    color: #545457;
  }
  .DisplayField {
    display: flex;
    margin-bottom: 0.4rem;
  }
  .Label {
    font-size: 0.7rem;
    width: 120px;
    letter-spacing: 0.5px;
  }
  .Input {
    font-size: 0.8rem;
    margin-left: 1rem;
    font-weight: 500;
    letter-spacing: 0.6px;
  }
  .purchaseOrders {
    background-color: rgb(127, 146, 165);
    padding: 4px;
    font-size: 0.6rem;
    border-radius: 5px;
    margin-right: 0.3rem;
  }
  .Card2 {
    width: 80vw;
    border-radius: 10px;
    background: #ecf3fd;
  }
  .addLine-Buttons {
    transition: 0.5s ease-in-out;
  }
  .custom-table .ant-table-cell {
    font-size: 0.7rem !important;
  }
  .ExpectedOrderLines {
    position: absolute;
    transform: translateY(100%);
    top: 0;
    left: 0;
    transition: all 0.5s ease-in-out;
    width: 100%;
    height: 100%;
    background: white;
  }
  .ExpectedOrderLines.show {
    transform: translateY(0%);
  }
  .ButtonsList {
    display: flex;
    gap: 1rem;
    margin: 1% 0 2% 85%;
  }
`
