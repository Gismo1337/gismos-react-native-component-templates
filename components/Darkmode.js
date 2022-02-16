// Color Switch Component
function ToggleDarkMode() {
    const { colorMode, toggleColorMode } = useColorMode();
    return (
        <HStack space={2} alignItems="center">
            <Text>Dark</Text>
            <Switch
                isChecked={colorMode === "light" ? true : false}
                onToggle={toggleColorMode}
                aria-label={
                    colorMode === "light" ? "switch to dark mode" : "switch to light mode"
                }
            />
            <Text>Light</Text>
        </HStack>
    );
}

// Usage: 
// Copy Darmode.js to your 'Project/Components/' Path.
// Edit App.js, import Darkmode from 'yourpath/Darkmode' and
// Insert <Darkmode /> on position you want the switch.
//
// Define the config in App.js
// const config = {
//     useSystemColorMode: false,
//     initialColorMode: "dark",
//   };
//
// extend the theme in App.js
//   export const theme = extendTheme({ config });