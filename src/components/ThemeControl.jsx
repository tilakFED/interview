export function ThemeControl({ theme, setTheme }) {
    return (
        <div className="theme-control">
            <label htmlFor="theme-select">Theme</label>
            <select
                id="theme-select"
                value={theme}
                onChange={(event) => setTheme(event.target.value)}
                aria-label="Choose color theme"
            >
                <option value="system">System</option>
                <option value="light">Light</option>
                <option value="dark">Dark</option>
            </select>
        </div>
    )
}
