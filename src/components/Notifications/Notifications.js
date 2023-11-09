import React, { useEffect, useState } from 'react'
import { Button, Table, Badge } from 'antd'
import { styled } from 'styled-components'
import axios from 'axios'
import PurchaseReceiptNotifications from './PurchaseReceiptsNotifications'
import TransferReceiptNotifications from './TransferReceiptsNotifications'
import TransferRequestNotifications from './TransferRequestNotifications'
import ProjectIssueNotifications from './ProjectIssueNotifications'
import ProjectReturnNotifications from './ProjectReturnsNotifications'
import CostPegRequestNotifications from './CostPegRequestNotifications'
import ReturnRejectNotifications from './ReturnRejectNotifications'

const Notifications = () => {
  const [selectedComponent, setSelectedComponent] = useState('PurchaseReceipt')

  const openComponent = (component) => {
    setSelectedComponent(component)
  }
  const renderSelectedComponent = () => {
    switch (selectedComponent) {
      case 'PurchaseReceipt':
        return <PurchaseReceiptNotifications />
      case 'TransferReceipt':
        return <TransferReceiptNotifications />
      case 'TransferRequest':
        return <TransferRequestNotifications />
      case 'ProjectIssue':
        return <ProjectIssueNotifications />
      case 'ProjectReturn':
        return <ProjectReturnNotifications />
      case 'CostPegRequest':
        return <CostPegRequestNotifications />
      case 'ReturnReject':
        return <ReturnRejectNotifications />
      default:
        return null
    }
  }

  return (
    <Wrapper>
      <h4 className='Header'>Notifications</h4>
      <div className='ButtonsContainer'>
        <Badge
          count={10}
          style={{ fontSize: '0.6rem', padding: '1px' }}
          showZero
        >
          <Button
            className={
              selectedComponent === 'PurchaseReceipt'
                ? 'selectedButton'
                : 'normalButton'
            }
            onClick={() => openComponent('PurchaseReceipt')}
          >
            Purchase Receipts
          </Button>
        </Badge>
        <Badge
          count={7}
          style={{ fontSize: '0.6rem', padding: '1px' }}
          showZero
        >
          <Button
            className={
              selectedComponent === 'TransferReceipt'
                ? 'selectedButton'
                : 'normalButton'
            }
            onClick={() => openComponent('TransferReceipt')}
          >
            Transfer Receipts
          </Button>
        </Badge>
        <Badge
          count={3}
          style={{ fontSize: '0.6rem', padding: '1px' }}
          showZero
        >
          <Button
            className={
              selectedComponent === 'TransferRequest'
                ? 'selectedButton'
                : 'normalButton'
            }
            onClick={() => openComponent('TransferRequest')}
          >
            Transfer Requests
          </Button>
        </Badge>
        <Badge
          count={16}
          style={{ fontSize: '0.6rem', padding: '1px' }}
          showZero
        >
          <Button
            className={
              selectedComponent === 'ProjectIssue'
                ? 'selectedButton'
                : 'normalButton'
            }
            onClick={() => openComponent('ProjectIssue')}
          >
            Project Issues
          </Button>
        </Badge>
        <Badge
          count={5}
          style={{ fontSize: '0.6rem', padding: '1px' }}
          showZero
        >
          <Button
            className={
              selectedComponent === 'ProjectReturn'
                ? 'selectedButton'
                : 'normalButton'
            }
            onClick={() => openComponent('ProjectReturn')}
          >
            Project Returns
          </Button>
        </Badge>
        <Badge
          count={4}
          style={{ fontSize: '0.6rem', padding: '1px' }}
          showZero
        >
          <Button
            className={
              selectedComponent === 'CostPegRequest'
                ? 'selectedButton'
                : 'normalButton'
            }
            onClick={() => openComponent('CostPegRequest')}
          >
            Cost Peg Requests
          </Button>
        </Badge>
        <Badge
          count={5}
          style={{ fontSize: '0.6rem', padding: '1px' }}
          showZero
        >
          <Button
            className={
              selectedComponent === 'ReturnReject'
                ? 'selectedButton'
                : 'normalButton'
            }
            onClick={() => openComponent('ReturnReject')}
          >
            Return Rejects
          </Button>
        </Badge>
      </div>
      {renderSelectedComponent()}
    </Wrapper>
  )
}

export default Notifications

const Wrapper = styled.div`
  padding: 2rem;
  overflow: hidden;
  background: #ecf3fd;
  height: 90vh;
  width: 80vw;
  .Header {
    font-size: 1rem;
    font-weight: 600;
    letter-spacing: 1px;
  }
  .custom-pagination .ant-pagination-item {
    margin: 0 0.5rem;
    justify-content: center;
  }
  .ButtonsContainer {
    display: flex;
    gap: 1.5rem;
    margin: 1rem;
    padding: 1.6vh 1vh 3vh 1vh;
    width: 75vw;
    position: relative;
    overflow-x: auto;
    scrollbar-width: thin;
    scrollbar-color: transparent transparent;
  }
  .ButtonsContainer::-webkit-scrollbar {
    width: 12px;
  }
  .selectedButton {
    background: rgb(89, 89, 191);
    color: white;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.8);
    transition: 0.4s ease-in-out;
    border: none !important;
    font-size: 0.6rem;
    font-weight: 500;
    letter-spacing: 1px;
    width: 8vw;
    position: relative;
    padding: 3px;
  }

  .normalButton {
    background: #e1e3e3;
    color: black;
    font-size: 0.7rem;
    box-shadow: none;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
    transition: 0.4s ease-in-out;
    border: none !important;
    width: 8vw;
    position: relative;
    padding: 3px;
  }
  .selectedButton:hover {
    color: white !important;
    border: none !important;
  }
  .normalButton:hover {
    color: black !important;
    border: none !important;
    background: white;
  }
`
