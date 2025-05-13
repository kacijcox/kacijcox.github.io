import react from 'react';

function Navigation() {
    return (
        <nav>
            <h2>kaci's projects</h2>
            <ul className="projects">
                <li>
                    <a href="https://luxury-bridal-p8oh.vercel.app/" target="_blank" rel="noopener noreferrer">luxury-bridal |</a>
                    <a href="https://github.com/kacijcox/luxury-bridal" target="_blank" rel="noopener noreferrer"> source-code</a>
                </li>
                <li>
                    <a href="https://sage-stop-kacis-projects-3a794fbc.vercel.app/" target="_blank" rel="noopener noreferrer">sage-stop |</a>
                    <a href="https://github.com/kacijcox/sage-stop" target="_blank" rel="noopener noreferrer"> source-code</a>
                </li>
                <li>
                    <a href="https://chromewebstore.google.com/detail/dnspector/lfelimmkjkhbbcokjocdeelbnpkicihd?hl=en" target="_blank" rel="noopener noreferrer">dns-spector extension |</a>
                    <a href="https://github.com/kacijcox/dns-spector" target="_blank" rel="noopener noreferrer"> source-code</a>
                </li>
                <li>
                    <a href="https://github.com/kacijcox/connectwise-monitor" target="_blank" rel="noopener noreferrer">connectwise-monitor |</a>
                    <a href="https://github.com/kacijcox/connectwise-monitor" target="_blank" rel="noopener noreferrer"> source-code</a>
                </li>
            </ul>
        </nav>
    );
}

export default Navigation;