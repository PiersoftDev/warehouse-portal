import { NavLink } from 'react-router-dom'
import { styled } from 'styled-components'
import sidebarLinks from '../../assets/data/sidebarLinks'
import logo from '../../assets/images/logo.png'

const Sidebar = ({ sidebar }) => {
  return (
    <Wrapper sidebar={sidebar}>
      <div className='sidebar-container'>
        <div className='content'>
          <div className='logo-container'>
            <img src={logo} alt='logo' className='logo' />
            <div>Warehousing</div>
          </div>
          <ul className='nav-links'>
            {sidebarLinks.map((link, index) => {
              const { id, path, text, icon } = link
              return (
                <NavLink
                  className={({ isActive }) =>
                    isActive ? 'nav-link active' : 'nav-link'
                  }
                  key={index}
                  to={path}
                >
                  <span>{icon}</span>
                  <p>{text}</p>
                </NavLink>
              )
            })}
          </ul>
        </div>
      </div>
    </Wrapper>
  )
}
export default Sidebar

const Wrapper = styled.div`
  display: block;
  border-right: 1px solid var(--grey-50);
  width: 230px;
  overflow: hidden;
  transition: var(--transition);
  padding-right: 0.5rem;

  .sidebar-container {
    background-color: var(--white);
    height: 100vh;
    position: sticky;
    top: 0px;
    /* left: 0px; */
  }

  .logo-container {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem 0;
    padding-right: 1rem;
    gap: 0.5rem;
  }

  .logo {
    display: block;
    width: 3rem;
    cursor: pointer;
  }

  .logo-container div {
    font-weight: 600;
    letter-spacing: 2px;
    font-size: 1rem;
  }

  .nav-links {
    margin-top: 0.5rem;
  }

  .active {
    background-color: var(--primary-50);
    border-radius: 5px;
  }

  .nav-link {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 0.3rem 1.5rem;
    margin: 0.75rem 0.5rem;
    font-size: 0.75rem;
    font-weight: 700;
    border: 1px solid transparent;
  }

  .nav-link:hover {
    border-radius: 5px;
    border: 1px dotted var(--primary-500);

    span {
      color: var(--primary-400);
    }

    p {
      color: var(--primary-400);
    }
  }

  .nav-link span {
    font-size: 1.2rem;
    color: var(--grey-500);
  }

  .nav-link p {
    margin-bottom: 0;
    color: var(--grey-500);
  }
`
