import React, { useEffect, useState } from 'react'
import { Button, Table, Spin } from 'antd'
import { styled } from 'styled-components'
import axios from 'axios'
import MilModal from '../MIL/MilModal'

const PurchaseReceiptNotifications = () => {
  const [PurchaseNotificationsData, setPurchaseNotificationsData] = useState([])
  const [loading, setLoading] = useState(false)
  const [processMIL, setProcessMIL] = useState(false)
  const [ProcessedRecord, setProcessedRecord] = useState({})

  const ProceedButonClick = (record) => {
    setProcessMIL(true)
    setProcessedRecord(record)
  }
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
          setPurchaseNotificationsData(res.data)
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
    },
    {
      title: 'Received From',
      dataIndex: 'ReceivedFrom',
      align: 'center',
    },
    {
      title: 'Received From Desc',
      dataIndex: 'ReceivedFromDesc',
      align: 'center',
    },
    {
      title: 'Vehicle Number',
      dataIndex: 'vehicleNumber',
      align: 'center',
    },
    {
      title: 'Order Number',
      dataIndex: 'orderNumber',
      align: 'center',
    },
    {
      title: 'Received To Details',
      dataIndex: 'ReceivedToDetails',
      align: 'center',
    },
    {
      dataIndex: 'Action',
      align: 'center',

      fixed: 'right',
      render: (text, record) => (
        <Button
          className='ProceedButton'
          onClick={() => ProceedButonClick(record)}
        >
          Proceed to MIL
        </Button>
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
            dataSource={PurchaseNotificationsData}
            className='custom-table'
            size='small'
            // scroll={{ y: 'calc(70vh - 100px)', x: '70vw' }}
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
      <MilModal
        processMIL={processMIL}
        setProcessMIL={setProcessMIL}
        ProcessedRecord={ProcessedRecord}
      />
    </Wrapper>
  )
}

export default PurchaseReceiptNotifications

const Wrapper = styled.div`
fontSize: '1rem',
  padding: 1rem 1rem 1rem 0;
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
.custom-table .ant-table-cell {
  font-size: 0.7rem !important;
}
`
