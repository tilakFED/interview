import { useEffect, useState } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { InterviewLayout } from './layouts/InterviewLayout.jsx'
import { AnswerPage } from './pages/AnswerPage.jsx'
import { LevelSelectionPage } from './pages/LevelSelectionPage.jsx'
import { QuestionsPage } from './pages/QuestionsPage.jsx'
import { TopicPage } from './pages/TopicPage.jsx'
import { TopicsPage } from './pages/TopicsPage.jsx'
import { ThemeControl } from './components/ThemeControl.jsx'
import './App.css'

function App() {
    const [theme, setTheme] = useState(() => localStorage.getItem('interview-prep-theme') ?? 'system')

    useEffect(() => {
        document.documentElement.dataset.theme = theme
        localStorage.setItem('interview-prep-theme', theme)
    }, [theme])

    return (
        <>
            <Routes>
                <Route path="/" element={<LevelSelectionPage theme={theme} setTheme={setTheme} />} />
                <Route path="/:profileId/:levelId" element={<InterviewLayout theme={theme} setTheme={setTheme} />}>
                    <Route index element={<Navigate to="questions" replace />} />
                    <Route path="questions" element={<QuestionsPage />} />
                    <Route path="answers/:questionId" element={<AnswerPage />} />
                    <Route path="topics" element={<TopicsPage />} />
                    <Route path="topics/:topicId" element={<TopicPage />} />
                </Route>
                <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
        </>
    )
}

export default App
