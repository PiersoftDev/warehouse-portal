import React, { useEffect, useState } from 'react'
import { Button, Table, Spin } from 'antd'
import { styled } from 'styled-components'
import axios from 'axios'

const ProjectIssueNotifications = () => {
  const [ProjectIssueNotificationsData, setProjectIssueNotificationsData] =
    useState([])
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    try {
      setLoading(true)
      axios
        .get(
          'https://f46775bc-b31c-42a0-9df8-1f01d27c4ce4.mock.pstmn.io/projectissue-notifications'
        )
        .then((res) => {
          console.log('Data: ', res.data)
          setLoading(false)
          setProjectIssueNotificationsData(res.data)
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
      title: 'Issue Order',
      dataIndex: 'issueOrder',
      align: 'center',
      width: '8vw',
    },
    {
      title: 'Issue To',
      dataIndex: 'issueTo',
      align: 'center',
      width: '8vw',
    },
    {
      title: 'Issue To Desc',
      dataIndex: 'issueToDesc',
      align: 'center',
      width: '12vw',
    },
    {
      title: 'Issue From',
      dataIndex: 'issueFrom',
      align: 'center',
      width: '8vw',
    },
    {
      title: 'Issue From Desc',
      dataIndex: 'issueFromDesc',
      align: 'center',
      width: '8vw',
    },
    {
      dataIndex: 'Action',
      align: 'center',
      width: '8vw',
      fixed: 'right',
      render: (text, record) => (
        <Button className='ProceedButton'>Project Issue</Button>
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
            dataSource={ProjectIssueNotificationsData}
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

export default ProjectIssueNotifications

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
