import React, { useEffect, useState } from 'react'
import { Button, Table, Spin } from 'antd'
import { styled } from 'styled-components'
import axios from 'axios'

const ProjectReturnNotifications = () => {
  const [ProjectReturnNotificationsData, setProjectReturnNotificationsData] =
    useState([])
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    try {
      setLoading(true)
      axios
        .get(
          'https://39c07945-61dd-482d-9e2f-fc78cb6ef698.mock.pstmn.io/project-returns'
        )
        .then((res) => {
          console.log('Data: ', res.data)
          setLoading(false)
          setProjectReturnNotificationsData(res.data)
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
      title: 'Return Order',
      dataIndex: 'ReturnOrder',
      align: 'center',
      width: '8vw',
    },
    {
      title: 'Received From',
      dataIndex: 'ReceivedFrom',
      align: 'center',
      width: '10vw',
    },
    {
      title: 'Received From Desc',
      dataIndex: 'ReceivedFromDesc',
      align: 'center',
      width: '13vw',
    },
    {
      title: 'Delivered at',
      dataIndex: 'Deliveredat',
      align: 'center',
      width: '8vw',
    },
    {
      title: 'Delivered at Desc',
      dataIndex: 'DeliveredatDesc',
      align: 'center',
      width: '13vw',
    },
    {
      dataIndex: 'Action',
      align: 'center',
      width: '8vw',
      fixed: 'right',
      render: (text, record) => (
        <Button className='ProceedButton'>Receive Project Return</Button>
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
            dataSource={ProjectReturnNotificationsData}
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

export default ProjectReturnNotifications

const Wrapper = styled.div`
  padding: 1rem 1rem 0 0;
  .ProceedButton {
    background: rgb(89, 89, 191);
    color: #ccd4cb !important;
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
