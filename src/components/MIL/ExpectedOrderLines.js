import { Modal, Table, Button } from 'antd'
import React from 'react'
import styled from 'styled-components'

const ExpectedOrderLines = ({ expectedlines, setExpectedLines }) => {
  const CloseModal = () => {
    setExpectedLines(false)
  }

  const data = [
    {
      key: '1',
      Order: '123',
      position: 'A1',
      item: 'ABC',
      itemDesc: 'Product ABC',
    },
    {
      key: '2',
      Order: '456',
      position: 'B2',
      item: 'DEF',
      itemDesc: 'Product DEF',
    },
  ]

  const Columns = [
    {
      title: 'Order Number',
      dataIndex: 'Order',
      align: 'center',
      width: '8vw',
    },
    {
      title: 'Position',
      dataIndex: 'position',
      align: 'center',
      width: '8vw',
    },
    {
      title: 'Item Code',
      dataIndex: 'item',
      align: 'center',
      width: '10vw',
    },
    {
      title: 'Item Desc',
      dataIndex: 'itemDesc',
      align: 'center',
      width: '12vw',
    },
  ]

  const rowSelection = {
    type: 'checkbox',
    onChange: (selectedRowKeys, selectedRows) => {
      console.log('Selected Row Keys:', selectedRowKeys)
      console.log('Selected Rows:', selectedRows)
    },
  }
  return (
    <div>
      <Modal
        width='70vw'
        height='80vh'
        title='Expected Order Lines'
        open={expectedlines}
        onCancel={CloseModal}
        style={{ overflow: 'hidden' }}
      >
        <Wrapper>
          <div
            style={{
              maxHeight: '60%',
              width: '100%',
              overflowY: 'hidden',
              position: 'relative',
            }}
          >
            <Table
              columns={Columns}
              dataSource={data}
              rowSelection={rowSelection}
              pagination={false}
            />
          </div>
        </Wrapper>
      </Modal>
    </div>
  )
}

export default ExpectedOrderLines

const Wrapper = styled.div`
  padding: 2rem;
`
