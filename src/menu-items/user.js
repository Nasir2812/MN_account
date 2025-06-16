// assets
import { IconCube, IconKey } from '@tabler/icons-react';

// constant
const icons = { IconCube, IconKey };

// ==============================|| DASHBOARD MENU ITEMS ||============================== //

const user = {
    id: 'User Management',
    title: 'User Management',
    type: 'group',
    children: [
        {
            id: 'User Management',
            title: 'User Management',
            type: 'collapse',
            icon: icons.IconCube,
            children: [
                {
                    id: 'User Management',
                    title: 'User Management',
                    type: 'item',
                    url: 'user',
                    breadcrumbs: false
                }
            ]
        },

    ]
};

export default user;
