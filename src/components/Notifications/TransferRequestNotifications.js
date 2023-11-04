import React, { useEffect, useState } from 'react'
import { Button, Table, Spin } from 'antd'
import { styled } from 'styled-components'
import axios from 'axios'

const TransferRequestNotifications = () => {
  const [
    TransferRequestNotificationsData,
    setTransferRequestNotificationsData,
  ] = useState([])
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    try {
      setLoading(true)
      axios
        .get(
          'https://96d415d8-ea21-4338-b79a-11ecdce7a284.mock.pstmn.io/request-notifications'
        )
        .then((res) => {
          console.log('Data: ', res.data)
          setLoading(false)
          setTransferRequestNotificationsData(res.data)
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
      title: 'Transfer Request',
      dataIndex: 'TransferRequest',
      align: 'center',
      width: '10vw',
    },
    {
      title: 'Transfer From',
      dataIndex: 'TransferFrom',
      align: 'center',
      width: '10vw',
    },
    {
      title: 'Transfer From Desc',
      dataIndex: 'TransferFromDesc',
      align: 'center',
      width: '13vw',
    },
    {
      title: 'Transfer To',
      dataIndex: 'TransferTo',
      align: 'center',
      width: '10vw',
    },
    {
      title: 'Transfer To Desc',
      dataIndex: 'TransferToDesc',
      align: 'center',
      width: '13vw',
    },
    {
      dataIndex: 'Action',
      align: 'center',
      width: '8vw',
      fixed: 'right',
      render: (text, record) => (
        <Button className='ProceedButton'>Create Transfer Order</Button>
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
            dataSource={TransferRequestNotificationsData}
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

export default TransferRequestNotifications

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
