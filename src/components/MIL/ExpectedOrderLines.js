import { Modal, Table, Button } from 'antd'
import React, { useState } from 'react'
import styled from 'styled-components'
import { VerticalAlignBottomOutlined } from '@ant-design/icons'

const ExpectedOrderLines = ({
  expectedlines,
  setExpectedLines,
  setReceivedLines,
  ReceivedLines,
  selectedRowKeys,
  setSelectedRowKeys,
}) => {
  const data = [
    {
      key: '1',
      Order: 'PUR002501',
      position: 'A1',
      item: 'ABC',
      itemDesc: 'Product ABC',
    },
    {
      key: '2',
      Order: 'PUR002501',
      position: 'A2',
      item: 'DEF',
      itemDesc: 'Product DEF',
    },
    {
      key: '3',
      Order: 'PUR002504',
      position: 'A1',
      item: 'DEF',
      itemDesc: 'Product DEF',
    },
    {
      key: '4',
      Order: 'PUR002504',
      position: 'A2',
      item: 'ABC',
      itemDesc: 'Product ABC',
    },
    {
      key: '5',
      Order: 'PUR002531',
      position: 'A1',
      item: 'DEF',
      itemDesc: 'Product DEF',
    },
    {
      key: '6',
      Order: 'PUR002531',
      position: 'A2',
      item: 'DEF',
      itemDesc: 'Product DEF',
    },
  ]

  const CloseModal = () => {
    setExpectedLines(false)
    setSelectedRowKeys([])
  }

  const LinkandClose = () => {
    const selectedRows = data.filter((row) => selectedRowKeys.includes(row.key))
    setReceivedLines([...ReceivedLines, ...selectedRows])
    CloseModal()
  }

  const Columns = [
    {
      title: 'Order Number',
      dataIndex: 'Order',
      align: 'center',
      width: '10vw',
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
      setSelectedRowKeys(selectedRowKeys)
    },
  }
  return (
    <div className={`ExpectedOrderLines ${expectedlines ? 'show' : ''}`}>
      <Wrapper>
        <h4 className='Header'>Expected Order Lines</h4>
        <div
          style={{
            // maxHeight: '60%',
            width: '100%',
            overflowY: 'hidden',
          }}
          className='Container'
        >
          <div className='toplist'>
            <div className='OrderList'>
              <div
                style={{
                  fontSize: '0.8rem',
                  letterSpacing: '1px',
                  marginRight: '1rem',
                }}
              >
                Orders :
              </div>
              <div>PUR002501 / PUR002504 / PUR002531</div>
            </div>
            <div>
              {selectedRowKeys.length > 0 && (
                <Button
                  onClick={LinkandClose}
                  style={{ marginRight: '1rem', marginTop: '-4px' }}
                >
                  Link And Close
                </Button>
              )}
              <Button className='BackIcon' onClick={CloseModal}>
                <VerticalAlignBottomOutlined />
              </Button>
            </div>
          </div>
          <Table
            columns={Columns}
            dataSource={data}
            rowSelection={rowSelection}
            pagination={false}
            bordered
            size='small'
            className='custom-table'
          />
        </div>
      </Wrapper>
    </div>
  )
}

export default ExpectedOrderLines

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 2rem;
  .custom-table {
    margin-bottom: 2rem;
  }
  .custom-table .ant-table-cell {
    font-size: 0.7rem !important;
  }
  .custom-table .ant-table-tbody > tr {
    border-radius: 5px;
    background: #ecf3fd;
    margin-bottom: 10px;
  }
  .Header {
    font-size: 1rem;
    font-weight: 600;
    letter-spacing: 1px;
    margin: 1rem;
  }
  .Container {
    padding: 3rem 3rem 0 3rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  .OrderList {
    display: flex;
    margin-bottom: 2rem;
  }
  .toplist {
    display: flex;
    justify-content: space-between;
  }
  .ButtonsList {
    display: flex;
    gap: 1rem;
  }
  .BackIcon {
    font-size: 1rem;
    font-weight: 600;
  }
`
