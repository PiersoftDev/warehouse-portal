import React, { useEffect, useState } from 'react'
import { Button, Table, Spin } from 'antd'
import { styled } from 'styled-components'
import axios from 'axios'

const CostPegRequestNotifications = () => {
  const [CostPegRequestNotificationsData, setCostPegRequestNotificationsData] =
    useState([])
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    try {
      setLoading(true)
      axios
        .get('https://e9f96ae3-24f5-4f64-9708-606a00c4af0c.mock.pstmn.io/cpt')
        .then((res) => {
          console.log('Data: ', res.data)
          setLoading(false)
          setCostPegRequestNotificationsData(res.data)
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
      title: 'CP Request',
      dataIndex: 'CPRequest',
      align: 'center',
      width: '8vw',
    },
    {
      title: 'From Activity',
      dataIndex: 'FromActivity',
      align: 'center',
      width: '8vw',
    },
    {
      title: 'From Activity Desc',
      dataIndex: 'FromActivityDesc',
      align: 'center',
      width: '13vw',
    },
    {
      title: 'To Activity',
      dataIndex: 'ToActivity',
      align: 'center',
      width: '10vw',
    },
    {
      title: 'To Activity Desc',
      dataIndex: 'ToActivityDesc',
      align: 'center',
      width: '13vw',
    },
    {
      title: 'Required Date',
      dataIndex: 'RequiredDate',
      align: 'center',
      width: '10vw',
    },
    {
      dataIndex: 'Action',
      align: 'center',
      width: '8vw',
      fixed: 'right',
      render: (text, record) => (
        <Button className='ProceedButton'>Process</Button>
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
            dataSource={CostPegRequestNotificationsData}
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

export default CostPegRequestNotifications

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
