import { styled } from 'styled-components'

const Orders = () => {
  return (
    <Wrapper>
      <div className="receipts card">
        <div className="card-value">Receipts </div>
      </div>
      <div className="material-intake card">
        <div className="card-value">Material Intake Log</div>
      </div>
      <div className="quality card">
        <div className="card-value">Quality Inspection</div>
      </div>
      <div className="issues card">
        <div className="card-value">Issues</div>
      </div>
      <div className="transfer card">
        <div className="card-value">Transfer</div>
      </div>
      <div className="cost-peg card">
        <div className="card-value">Cost Peg Transfers</div>
      </div>
      <div className="empty card">
        {/* <div className="card-value">Empty</div> */}
      </div>
    </Wrapper>
  )
}
export default Orders

const Wrapper = styled.div`
  padding: 1rem;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 2rem;
  overflow: scroll;
  scroll-behavior: smooth;
  grid-template-areas:
    'a b c'
    'd g g'
    'e g g'
    'f g g';

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

  .receipts {
    grid-area: a;
  }

  .material-intake {
    grid-area: b;
  }

  .quality {
    grid-area: c;
  }

  .issues {
    grid-area: d;
  }

  .transfer {
    grid-area: e;
  }

  .cost-peg {
    grid-area: f;
  }

  .empty {
    grid-area: g;
  }
`
