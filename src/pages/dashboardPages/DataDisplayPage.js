import { Button } from 'antd'

import { useNavigate } from 'react-router-dom'

const DataDisplayPage = (props) => {
  const navigate = useNavigate()

  const goBack = () => {
    navigate('/stock')
  }

  return (
    <div className="datapage-container">
      <div className="top-header-container">
        <Button type="primary" onClick={goBack}>
          back
        </Button>
        <div className="top-header-title">Location Stock</div>
        <div className="btns-container">
          <span>b</span>
          <span>b</span>
          <span>b</span>
          <span>b</span>
        </div>
      </div>
    </div>
  )
}
export default DataDisplayPage
