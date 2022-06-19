import "./win-tab.scss";

const WinTab = ({winText}) => {
    return (
        <div className={`win_tab ${winText ? 'active' : null}`}>
            {winText}
        </div>
    )
}

export default WinTab;