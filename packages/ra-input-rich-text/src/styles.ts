import { Theme, StyleRules } from '@material-ui/core/styles';

import QuillSnowStylesheet from './QuillSnowStylesheet';

export default (theme: Theme): StyleRules<string, any> => ({
    label: {
        position: 'relative',
    },
    '@global': {
        ...QuillSnowStylesheet,
        '.ra-rich-text-input': {
            '& .ql-editor': {
                fontSize: '1rem',
                fontFamily: 'Roboto, sans-serif',
                padding: '6px 12px',
                backgroundColor: 'rgba(0, 0, 0, 0.04)',
                '&:hover::before': {
                    backgroundColor: 'rgba(0, 0, 0, 1)',
                    height: 2,
                },

                '&::before': {
                    left: 0,
                    right: 0,
                    bottom: 0,
                    height: 1,
                    content: '""',
                    position: 'absolute',
                    transition:
                        'background-color 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
                    backgroundColor: 'rgba(0, 0, 0, 0.42)',
                },

                '&::after': {
                    left: 0,
                    right: 0,
                    bottom: 0,
                    height: 2,
                    content: '""',
                    position: 'absolute',
                    transform: 'scaleX(0)',
                    transition:
                        'transform 200ms cubic-bezier(0, 0, 0.2, 1) 0ms',
                    backgroundColor: theme.palette.primary.main,
                },

                '& p:not(:last-child)': {
                    marginBottom: '1rem',
                },

                '& strong': {
                    fontWeight: 700,
                },
                '& h1': {
                    margin: '1rem 0 0.5rem 0',
                    fontWeight: 500,
                },
                '& h2': {
                    margin: '1rem 0 0.5rem 0',
                    fontWeight: 500,
                },
                '& h3': {
                    margin: '1rem 0 0.5rem 0',
                    fontWeight: 500,
                },
                '& a': {
                    color: theme.palette.primary.main,
                },
                '& ul': {
                    marginBottom: '1rem',
                },

                '& li:not(.ql-direction-rtl)::before': {
                    fontSize: '0.5rem',
                    position: 'relative',
                    top: '-0.2rem',
                    marginRight: '0.5rem',
                },

                '&:focus::after': {
                    transform: 'scaleX(1)',
                },
            },
            '& .standard .ql-editor': {
                backgroundColor: theme.palette.background.paper,
            },
            '& .outlined .ql-editor': {
                backgroundColor: theme.palette.background.paper,
            },
            '& .ql-toolbar.ql-snow': {
                margin: '0.5rem 0',
                border: 0,
                padding: 0,

                '& .ql-picker-item': {
                    color: theme.palette.text.primary,
                },
                '& .ql-stroke': {
                    stroke: theme.palette.text.primary,
                },
                '& .ql-fill': {
                    fill: theme.palette.text.primary,
                },
                '& .ql-picker-item.ql-active': {
                    color: theme.palette.primary.main,
                },
                '& .ql-picker-item:hover': {
                    color: theme.palette.primary.main,
                },
                '& .ql-picker-item.ql-selected': {
                    color: theme.palette.primary.main,
                },
                '& .ql-picker-label.ql-active': {
                    color: theme.palette.primary.main,
                },
                '& .ql-picker-label.ql-selected': {
                    color: theme.palette.primary.main,
                },
                '& .ql-picker-label:hover': {
                    color: theme.palette.primary.main,
                },

                '& button:hover .ql-fill': {
                    fill: theme.palette.primary.main,
                },
                '& button.ql-active .ql-fill': {
                    fill: theme.palette.primary.main,
                },

                '& button:hover .ql-stroke': {
                    stroke: theme.palette.primary.main,
                },
                '& button.ql-active .ql-stroke': {
                    stroke: theme.palette.primary.main,
                },
                '& .ql-picker-label:hover .ql-stroke': {
                    stroke: theme.palette.primary.main,
                },

                '& .ql-picker.ql-expanded .ql-picker-options': {
                    backgroundColor: theme.palette.background.paper,
                    borderColor: theme.palette.background.paper,
                },

                '& .ql-snow .ql-picker.ql-expanded .ql-picker-options': {
                    background: '#fff',
                    zIndex: 10,
                },

                '& .ql-picker-label': {
                    paddingLeft: 0,
                    color: theme.palette.text.primary,
                },

                '& + .ql-container.ql-snow': {
                    border: 0,
                },
            },
        },
    },
});
