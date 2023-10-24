import { Progress } from 'antd'
import { styled } from 'styled-components'
import QuantitiesCard from '../../components/dashboard/QuantitiesCard'
import ValuesCard from '../../components/dashboard/ValuesCard'

const Dashboard = () => {
  return (
    <Wrapper>
      <div className="reciepts card">
        <div className="card-header">Reciepts</div>
        <div className="card-body-container">
          <div className="card-body">
            <div className="card-body-item">
              <div className="card-body-item-header">Open Order lines</div>
              <div className="card-body-item-value">
                <span style={{ color: '#4CAF50' }}>12</span> of 32
              </div>
              <Progress
                percent={40}
                showInfo={false}
                size="small"
                strokeColor={'#4CAF50'}
              />
            </div>
            <div className="card-items-line"></div>
            <div className="card-body-item">
              <div className="card-body-item-header">To be inspected</div>
              <div className="card-body-item-value">
                <span style={{ color: '#FFCA28' }}>05</span> of 32
              </div>
              <Progress
                percent={15}
                showInfo={false}
                size="small"
                strokeColor={'#FFCA28'}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="issues card">
        <div className="card-header">Issues</div>
        <div className="card-body-container">
          <div className="card-body">
            <div className="card-body-item">
              <div className="card-body-item-header">Open Order lines</div>
              <div className="card-body-item-value">
                <span style={{ color: '#EF5350' }}>08</span> of 44
              </div>
              <Progress
                percent={40}
                showInfo={false}
                size="small"
                strokeColor={'#EF5350'}
              />
            </div>
            <div className="card-items-line"></div>
            <div className="card-body-item">
              <div className="card-body-item-header">Open Shipment lines</div>
              <div className="card-body-item-value">
                <span style={{ color: '#42A5F5' }}>06</span> of 42
              </div>
              <Progress
                percent={15}
                showInfo={false}
                size="small"
                strokeColor={'#42A5F5'}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="expected-transactions card">
        <div className="card-header"> Expected Transactions</div>
        <div className="card-body-container">
          <div className="card-body">
            <div className="card-body-item">
              <div className="card-body-item-header">Expected Recipets</div>
              <div className="card-body-item-value">
                <span style={{ color: '#7E57C2' }}>10</span> of 18
              </div>
              <Progress
                percent={40}
                showInfo={false}
                size="small"
                strokeColor={'#7E57C2'}
              />
            </div>
            <div className="card-items-line"></div>
            <div className="card-body-item">
              <div className="card-body-item-header">Expected issues</div>
              <div className="card-body-item-value">
                <span style={{ color: '#AB47BC' }}>14</span> of 16
              </div>
              <Progress
                percent={78}
                showInfo={false}
                size="small"
                strokeColor={'#AB47BC'}
              />
            </div>
          </div>
        </div>
      </div>

      <QuantitiesCard />

      <ValuesCard />

      <div className="counting-orders card">
        <div className="card-header"> Counting orders</div>
        <div className="card-body-container">
          <div className="card-body">
            <div className="card-body-item">
              <div className="card-body-item-header">
                Open Cycle Counting Orders
              </div>
              <div className="card-body-item-value">
                <span style={{ color: '#FFCA28' }}>08</span> of 18
              </div>
              <Progress
                percent={40}
                showInfo={false}
                size="small"
                strokeColor={'#FFCA28'}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="adjustment-orders card">
        <div className="card-header"> Adjustment orders</div>
        <div className="card-body-container">
          <div className="card-body">
            <div className="card-body-item">
              <div className="card-body-item-header">Adjustment orders</div>
              <div className="card-body-item-value">
                <span style={{ color: '#EF5350' }}>02</span> of 18
              </div>
              <Progress
                percent={10}
                showInfo={false}
                size="small"
                strokeColor={'#EF5350'}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="project-returns card">
        <div className="card-header"> Project-returns</div>
        <div className="card-body-container">
          <div className="card-body">
            <div className="card-body-item">
              <div className="card-body-item-header">Project-returns</div>
              <div className="card-body-item-value">
                <span style={{ color: '#42A5F5' }}>16</span> of 18
              </div>
              <Progress
                percent={90}
                showInfo={false}
                size="small"
                strokeColor={'#42A5F5'}
              />
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}
export default Dashboard

const Wrapper = styled.div`
  padding: 1rem;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 2rem;
  grid-template-areas:
    'a b c'
    'd d e'
    'f g h';
  overflow: scroll;
  scroll-behavior: smooth;

  .card {
    background: var(--white);
    border-radius: var(--borderRadius);
    /* box-shadow: var(--shadow-2); */
    border: 1px solid var(--grey-50);
    padding: 1rem;
    transition: var(--transition);
  }

  .card:hover {
    border: 1px solid var(--grey-100);
    box-shadow: var(--shadow-3);
  }

  .card-header {
    letter-spacing: 2px;
    text-transform: uppercase;
    color: var(--grey-500);
    font-weight: 600;
    font-size: 0.7rem;
    margin-bottom: 1.5rem;
  }

  .card-body-container {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .card-body {
    display: flex;
    align-items: center;
    gap: 2rem;
  }

  .card-items-line {
    border-left: 1px solid var(--grey-100);
    align-self: stretch;
  }

  .card-body-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.75rem;
  }

  .card-body-item-header {
    font-size: 0.9rem;
    font-weight: 600;
    letter-spacing: 1px;
  }

  .card-body-item-value {
    font-size: 0.8rem;
  }

  .card-body-item-value span {
    font-size: 1.4rem;
    font-weight: 800;
    color: green;
  }

  .chart-container {
    width: 100%;
    display: flex;
    justify-content: center;
  }

  .reciepts {
    grid-area: a;
  }

  .issues {
    grid-area: b;
  }

  .expected-transactions {
    grid-area: c;
  }

  .quantities {
    grid-area: d;
  }

  .values {
    grid-area: e;
  }

  .counting-orders {
    grid-area: f;
  }

  .adjustment-orders {
    grid-area: g;
  }

  .project-returns {
    grid-area: h;
  }
`
