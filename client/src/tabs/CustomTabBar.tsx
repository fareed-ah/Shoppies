import { Paper, Tabs, Tab } from '@material-ui/core';
import React from 'react'

interface CustomTabBarProps {
    setShowResults: React.Dispatch<React.SetStateAction<boolean>>
}

export const CustomTabBar: React.FC<CustomTabBarProps> = ({ setShowResults }) => {

    const [value, setValue] = React.useState(0);
    const handleTabChange = (_event: React.ChangeEvent<{}>, newValue: number) => {
        setValue(newValue);
        setShowResults(newValue == 0 ? true : false)
    };

    return (
        <Paper style={{ maxWidth: "320px" }}>
            <Tabs
                value={value}
                indicatorColor="secondary"
                textColor="secondary"
                onChange={handleTabChange}
                aria-label="disabled tabs example">
                <Tab label="Search Results" />
                <Tab label="Nominations" />
            </Tabs>
        </Paper>);
}
