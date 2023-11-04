import { Card, Checkbox, Modal, Switch, Table, Button } from 'antd'
import React, { useState } from 'react'
import { styled } from 'styled-components'
import { PlusOutlined, CloseOutlined } from '@ant-design/icons'
import ExpectedOrderLines from './ExpectedOrderLines'

const MilModal = ({ processMIL, ProcessedRecord, setProcessMIL }) => {
  const [expectedlines, setExpectedLines] = useState(false)
  const [ReceivedLines, setReceivedLines] = useState([
    {
      Position: 1,
      item: 'Item1',
      itemDesc: 'Description for Item1',
      ReceivedQuantity: 100,
      LatestPurchasePrice: 10.5,
      Value: 1050.0,
    },
  ])
  const [showButtons, setShowButtons] = useState(false)
  const Columns = [
    {
      title: 'Position',
      dataIndex: 'Position',
      align: 'center',
      width: '7vw',
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
      title: 'Received Quantity',
      dataIndex: 'ReceivedQuantity',
      align: 'center',
      width: '10vw',
    },
    {
      title: 'Latest Purchase Price',
      dataIndex: 'LatestPurchasePrice',
      align: 'center',
      width: '12vw',
    },
    {
      title: 'Value',
      dataIndex: 'Value',
      align: 'center',
      width: '8vw',
    },
  ]

  const AddOrderLineClick = () => {
    setExpectedLines(true)
  }

  const CloseModal = () => {
    setProcessMIL(false)
  }
  return (
    <Modal
      width='92vw'
      height='93vh'
      title='Material Intake Log'
      open={processMIL}
      onCancel={CloseModal}
      style={{ overflow: 'hidden', marginTop: '-10vh' }}
    >
      <Wrapper>
        <div className='Container'>
          <Card className='Card1'>
            <div className='CardContent'>
              <div className='headerlabel'>MI Details</div>
              <div className='DisplayField'>
                <div className='Label'>MIL Number</div>
                <div className='Input'>MIL000001</div>
              </div>
              <div className='DisplayField'>
                <div className='Label'>MIL Date</div>
                <div className='Input'>03-11-2018</div>
              </div>
              <div className='DisplayField'>
                <div className='Label'>Gatepass No.</div>
                <div className='Input'>GPN000053</div>
              </div>
              <div className='DisplayField'>
                <div className='Label'>Gatepass Date</div>
                <div className='Input'>02-11-2018</div>
              </div>
              <div className='DisplayField'>
                <div className='Label'>Vehicle No.</div>
                <div className='Input'>TS00EE1267</div>
              </div>
              <div className='headerlabel'>Received From Details</div>
              <div className='DisplayField'>
                <div className='Label'>Received From</div>
                <div className='Input'>SUP000564</div>
              </div>
              <div className='DisplayField'>
                <div className='Label'>Description</div>
                <div className='Input'>Srinivas Traders</div>
              </div>
              <div className='headerlabel'>Weighment Details</div>
              <div className='DisplayField'>
                <div className='Label'>DC/Packing Slip No.</div>
                <div className='Input'>PS0000564</div>
              </div>
              <div className='DisplayField'>
                <div className='Label'>Weighment Slip No.</div>
                <div className='Input'>WSN00870012</div>
              </div>
              <div className='DisplayField'>
                <div className='Label'>KMV Gross Weight</div>
                <div className='Input'>120 Tons</div>
              </div>
              <div className='DisplayField'>
                <div className='Label'>Supplier Net Weight</div>
                <div className='Input'>120 Tons</div>
              </div>
              <div className='DisplayField'>
                <div className='Label'>KMV Net Weight</div>
                <div className='Input'>119 Tons</div>
              </div>
              <div className='DisplayField'>
                <div className='Label'>3rd Party Net Weight</div>
                <div className='Input'>118 Tons</div>
              </div>
              <div className='DisplayField'>
                <div className='Label'>Volume</div>
                <div className='Input'>80 M^3</div>
              </div>
              <div className='headerlabel'>Order Details</div>
              <div className='DisplayField'>
                <div className='Label'>Linked Orders</div>
                <div className='purchaseOrders'>PUR20123</div>
                <div className='purchaseOrders'>PUR20145</div>
              </div>
              <div className='DisplayField'>
                <div className='Label'>Local Purchase</div>
                <div className='Input'>
                  <Checkbox />
                </div>
              </div>
              <div className='DisplayField'>
                <div className='Label'>Without Order</div>
                <div className='Input'>
                  <Checkbox />
                </div>
              </div>
              <div className='headerlabel'>Invoice Details</div>
              <div className='DisplayField'>
                <div className='Label'>Invoice No.</div>
                <div className='Input'>INV00273</div>
              </div>
              <div className='DisplayField'>
                <div className='Label'>Invoice Value</div>
                <div className='Input'>90,000</div>
              </div>
              <div className='DisplayField'>
                <div className='Label'>Invoice Date</div>
                <div className='Input'>04-11-2022</div>
              </div>
              <div className='headerlabel'>Return Details</div>
              <div className='DisplayField'>
                <div className='Label'>Returning Material</div>
                <div className='Input'>
                  <Switch size='small' />
                </div>
              </div>
            </div>
          </Card>
          <Card className='Card2'>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <div className='headerlabel'>MIL Lines</div>
              <div style={{ marginRight: '1rem' }}>
                {showButtons ? (
                  <>
                    <Button
                      style={{ marginRight: '8px' }}
                      onClick={AddOrderLineClick}
                    >
                      Add Order Line
                    </Button>
                    <Button
                      style={{ marginRight: '8px' }}
                      className='addLine-Buttons'
                    >
                      Add Line
                    </Button>
                    <Button
                      icon={<CloseOutlined />}
                      onClick={() => setShowButtons(false)}
                      className='addLine-Buttons'
                    />
                  </>
                ) : (
                  <Button
                    icon={<PlusOutlined />}
                    className='addLine-Buttons'
                    onClick={() => setShowButtons(!showButtons)}
                  />
                )}
              </div>
            </div>
            <Table
              className='Table'
              dataSource={ReceivedLines}
              columns={Columns}
              pagination={false}
            />
          </Card>
        </div>
        <ExpectedOrderLines
          expectedlines={expectedlines}
          setExpectedLines={setExpectedLines}
        />
      </Wrapper>
    </Modal>
  )
}

export default MilModal

const Wrapper = styled.div`
  .Container {
    display: flex;
  }
  .Card1 {
    width: 20vw;
    min-width: 300px;
    border-radius: 10px;
    background: #d8d8e3;
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
    background: #d8d8e3;
  }
  .addLine-Buttons {
    transition: 0.5s ease-in-out;
  }
  .Table {
    background: #d3d3e6;
  }
`
