import { Button, Tab, Tabs } from '@blueprintjs/core';
import {
    AccessibilitySettings,
    AdvancedSettings,
    GeneralSettings,
    ThemeSettings,
} from '@frontend/toolbars/SettingsContent/SettingsContent';
import React, { useState } from 'react';

export const SettingsPage = (props: { goBack: any }) => {
    const { goBack } = props;

    const [activeTab, setActiveTab] = useState('general');

    return (
        <div className='settings-page'>
            <Tabs
                id='SettingsTabs'
                onChange={id => setActiveTab(id.toString())}
                defaultSelectedTabId='general'
                selectedTabId={activeTab}
                vertical
                renderActiveTabPanelOnly
            >
                <Tab id='general' title='General' panel={<GeneralSettings />} className='settings-tab' />
                <Tab id='theme' title='Theme' panel={<ThemeSettings />} className='settings-tab' />
                <Tab id='accessibility' title='Accessibility' panel={<AccessibilitySettings />} className='settings-tab' />
                <Tab id='advanced' title='Advanced' panel={<AdvancedSettings />} className='settings-tab' />
                <Tabs.Expander />
            </Tabs>
            <Button
                icon='arrow-left'
                style={{ alignSelf: 'center', position: 'absolute', top: '20px', left: '20px' }}
                onClick={() => goBack()}
                minimal
            />
        </div>
    );
};
