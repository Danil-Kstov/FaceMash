import '../scss/main.scss'
import Image from './Image.tsx'
import {useEffect} from "react";

const Main = () => {
    useEffect(() => {
        const titleElement = document.querySelector('.main__title');
        const skipButton = document.querySelector('.main__skip');

        if (titleElement && skipButton) {
            const titleWidth = titleElement.offsetWidth;
            skipButton.style.width = `${titleWidth}px`;
        }
    }, []);

    return (
        <main className="main">
            <h2 className="main__title">Who is more beautiful?</h2>
            <div className="main__cards">
                <Image />
                <h2>Vs</h2>
                <Image />
            </div>
            <button className="main__skip">Skip</button>
        </main>
    )
}

export default Main;