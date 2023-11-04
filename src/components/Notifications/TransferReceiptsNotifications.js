import React, { useEffect, useState } from 'react'
import { Button, Table, Spin } from 'antd'
import { styled } from 'styled-components'
import axios from 'axios'

const TransferReceiptNotifications = () => {
  const [
    TransferReceiptNotificationsData,
    setTransferReceiptNotificationsData,
  ] = useState([])
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    try {
      setLoading(true)
      axios
        .get(
          'https://4a4ceeb8-9ac7-4b9b-becb-31e136c53282.mock.pstmn.io/notifications'
        )
        .then((res) => {
          console.log('Data: ', res.data)
          setLoading(false)
          setTransferReceiptNotificationsData(res.data)
        })
        .catch((err) => {
          console.log('Error:', err)
        })
    } catch (error) {
      console.error('An error occurred:', error)
      setLoading(false)
    }
  }, [])

  const Columns = [
    {
      title: 'Gatepass',
      dataIndex: 'Gatepass',
      align: 'center',
      width: '8vw',
    },
    {
      title: 'Received From',
      dataIndex: 'ReceivedFrom',
      align: 'center',
      width: '8vw',
    },
    {
      title: 'Received From Desc',
      dataIndex: 'ReceivedFromDesc',
      align: 'center',
      width: '15vw',
    },
    {
      title: 'Vehicle Number',
      dataIndex: 'vehicleNumber',
      align: 'center',
      width: '8vw',
    },
    {
      title: 'Order Number',
      dataIndex: 'orderNumber',
      align: 'center',
      width: '10vw',
    },
    {
      title: 'Received To Details',
      dataIndex: 'ReceivedToDetails',
      align: 'center',
      width: '10vw',
    },
    {
      dataIndex: 'Action',
      align: 'center',
      width: '8vw',
      fixed: 'right',
      render: (text, record) => (
        <Button className='ProceedButton'>Proceed to MIL</Button>
      ),
    },
  ]
  return (
    <Wrapper>
      <div
        style={{
          maxHeight: '60vh',
          width: '100%',
          overflowY: 'hidden',
          margin: '-2vh 0',
          position: 'relative',
        }}
      >
        <Spin spinning={loading}>
          <Table
            columns={Columns}
            dataSource={TransferReceiptNotificationsData}
            className='custom-table'
            size='small'
            pagination={{
              className: 'custom-pagination',
              pageSize: 20,
              position: ['bottomCenter'],
              style: {
                textAlign: 'center',
                margin: '5vh 0 3vh 0',
              },
            }}
          />
        </Spin>
      </div>
    </Wrapper>
  )
}

export default TransferReceiptNotifications

const Wrapper = styled.div`
  padding: 1rem 1rem 0 0;
  .ProceedButton {
    background: rgb(89, 89, 191);
    color: inherit;
    font-size: 0.8rem;
    font-weight: 500;
  }
  .ProceedButton:hover {
    color: white !important;
  }
  .custom-pagination .ant-pagination-item {
    margin: 0 0.5rem;
    justify-content: center;
  }
  .custom-table .ant-table-cell {
    font-size: 0.7rem !important;
  }
`
