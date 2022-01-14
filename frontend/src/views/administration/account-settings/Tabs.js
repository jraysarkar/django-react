import { Nav, NavItem, NavLink } from 'reactstrap'
import { useRef, useState } from 'react'
import { User, Lock, Info, Link, Bell } from 'react-feather'

const Tabs = ({ activeTab, toggleTab }) => {
  const [stepper, setStepper] = useState(null)
  const ref = useRef(null)
  return (
    <Nav className='nav-left' pills vertical>
      <NavItem>
        <NavLink active={activeTab === '1'} onClick={() => toggleTab('1')}>
          <User size={18} className='mr-1' />
          <span className='font-weight-bold'>Basic Details</span>
        
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink active={activeTab === '2'} onClick={() => toggleTab('2')}>
          <Lock size={18} className='mr-1' />
          <span className='font-weight-bold'>Statutory Details</span>
        
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink active={activeTab === '3'} onClick={() => toggleTab('3')}>
          <Info size={18} className='mr-1' />
          <span className='font-weight-bold'>Sensor Details</span>
        
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink active={activeTab === '4'} onClick={() => toggleTab('4')}>
          <Link size={18} className='mr-1' />
          <span className='font-weight-bold'>Integration</span>
        
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink active={activeTab === '5'} onClick={() => toggleTab('5')}>
          <Bell size={18} className='mr-1' />
          <span className='font-weight-bold'>AWS Credentials Settings</span>
        
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink active={activeTab === '6'} onClick={() => toggleTab('6')}>
          <Bell size={18} className='mr-1' />
          <span className='font-weight-bold'>Billing Details</span>
        
        </NavLink>
      </NavItem>
    </Nav>
  )
}

export default Tabs
