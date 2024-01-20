import { FaGear, FaWallet, FaHouse, FaUser } from 'react-icons/fa6'

const links = [
    {
        icon: <FaHouse></FaHouse>,
        url: '/',
        text: 'Inicio'
    },
    {
        icon: <FaWallet></FaWallet>,
        url: '/contracts',
        text: 'Contratos'
    },
    {
        icon: <FaUser></FaUser>,
        url: '/cooperatives',
        text: 'Cooperativas'
    },
    {
        icon: <FaGear></FaGear>,
        url: '/settings',
        text: 'Configuracion'
    }
]

export default links