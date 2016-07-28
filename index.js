exports.decorateConfig = (config) => {
    return Object.assign({}, config, {
        foregroundColor: 'rgba(0,0,0,.87)',
        backgroundColor: '#FAFAFA',
        borderColor: '#E0E0E0',
        cursorColor: 'rgba(244, 67, 54, .8)',
        colors: [
            '#000000',  // Black
            '#D32F2F',  // Red
            '#388E3C',  // Green
            '#F9A825',  // Yellow
            '#1976D2',  // Blue
            '#7B1FA2',  // Magenta (Purple)
            '#0097A7',  // Cyan
            '#FAFAFA',  // White
            '#424242',  // Light Black
            '#EF5350',  // Light Red
            '#7CB342',  // Light Green
            '#FDD835',  // Light Yellow
            '#03A9F4',  // Light Blue
            '#BA68C8',  // Light Magenta
            '#4DD0E1',  // Light Cyan
            '#FFFFFF'   // Light White
        ],
        css: `
            ${config.css || ''}
            span {
                color:rgba(0,0,0,.87);
            }
            .hyperterm_main {
                border: none !important;
            }
            .header_header {
                background: #F5F5F5 !important;
            }
            .tab_tab {
                border: 0;
            }
            .tab_active {
                font-weight:bold;
                color: rgba(0,0,0,.87);
            }
            .tab_active:hover {
                color:rgba(0,0,0,.87);
                transition:none !important;
            }
            .tab_active::before {
                border-bottom: 2px solid #F44336;
            }
            .tabs_title {
                color:rgba(0,0,0,.87);
            }
            .tab_icon {
                color:rgba(0,0,0,.87);
            }
        `
    });
};
