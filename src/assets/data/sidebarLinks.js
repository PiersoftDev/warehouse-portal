import { AiOutlineHome } from 'react-icons/ai'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { MdOutlineLocalShipping } from 'react-icons/md'
import { BsReceiptCutoff } from 'react-icons/bs'
import { FaProductHunt } from 'react-icons/fa'
import { FiSettings } from 'react-icons/fi'
import { BiHelpCircle } from 'react-icons/bi'

import { RiAuctionLine } from 'react-icons/ri'

const sidebarLinks = [
  {
    id: 1,
    path: '/',
    text: 'Dashboard',
    icon: <AiOutlineHome />,
  },
  {
    id: 2,
    path: '/stock',
    text: 'Stock 360',
    icon: <RiAuctionLine />,
  },

  {
    id: 3,
    path: '/orders',
    text: 'Orders',
    icon: <AiOutlineShoppingCart />,
  },
  {
    id: 4,
    path: '/planning',
    text: 'Planning',
    icon: <MdOutlineLocalShipping />,
  },
  {
    id: 5,
    path: '/analysis',
    text: 'Analysis',
    icon: <BsReceiptCutoff />,
  },
  {
    id: 6,
    path: '/royalty',
    text: 'Royalty',
    icon: <FaProductHunt />,
  },
  {
    id: 7,
    path: '/reports',
    text: 'Reports',
    icon: <FiSettings />,
  },
]

export default sidebarLinks
