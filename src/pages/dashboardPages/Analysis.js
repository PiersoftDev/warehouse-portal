import { styled } from 'styled-components'

const Analysis = () => {
  return (
    <Wrapper>
      <div className="card">
        <div className="card-value"> Expected Receipts </div>
      </div>
      <div className="card">
        <div className="card-value"> Expected Issues</div>
      </div>
      <div className="card">
        <div className="card-value">Receipt transactions</div>
      </div>
      <div className="card">
        <div className="card-value">Stock Turn Over</div>
      </div>
      <div className="card">
        <div className="card-value">Aging analysis</div>
      </div>
      <div className="card">
        <div className="card-value">Periodic Stock check</div>
      </div>
      <div className="card">
        <div className="card-value">Adjustment Orders</div>
      </div>
    </Wrapper>
  )
}
export default Analysis

const Wrapper = styled.div`
  padding: 1rem;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 2rem;
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

  .card-value {
    display: grid;
    place-items: center;
    padding: 1rem;
    font-size: 1.2rem;
    font-weight: 500;
    cursor: pointer;
    letter-spacing: 2px;
  }
`
