// third-party
import { FormattedMessage } from 'react-intl';

// assets
import { IconClipboardCheck, IconPictureInPicture, IconForms, IconBorderAll, IconChartDots, IconStairsUp } from '@tabler/icons';

// constant
const icons = {
    IconClipboardCheck,
    IconPictureInPicture,
    IconForms,
    IconBorderAll,
    IconChartDots,
    IconStairsUp
};

// ==============================|| UI FORMS MENU ITEMS ||============================== //

const forms = {
    id: 'ui-forms',
    title: <FormattedMessage id="Pages" />,
    type: 'group',
    children: [
        {
            id: 'components',
            title: <FormattedMessage id="Jobs" />,
            type: 'collapse',
            icon: icons.IconPictureInPicture,
            children: [
                {
                    id: 'jobs',
                    title: <FormattedMessage id="All Jobs" />,
                    type: 'item',
                    url: '/jobs',
                    breadcrumbs: false
                }
            ]
        }
    ]
};

export default forms;
