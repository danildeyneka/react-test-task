import React, {FC} from 'react';
import './App.scss';
import News from "./components/News/News";

const App: FC = () => {
    return <>
        <header className='header'>
            <h1>Блог и соцсети</h1>
        </header>
        <main>
            <h4 className='title'>
                Идейные соображения высшего порядка, а также сложившаяся структура организации представляет собой
                интересный эксперимент проверки направлений прогрессивного развития.
            </h4>
            <News/>
        </main>
    </>
}

export default App;

