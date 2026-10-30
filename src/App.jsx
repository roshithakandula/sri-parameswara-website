import { lazy } from 'react'
import { Route, Routes } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'

// Each page is loaded only when it is visited, which keeps the first load small.
const Home = lazy(() => import('./pages/Home'))
const About = lazy(() => import('./pages/About'))
const Information = lazy(() => import('./pages/Information'))
const Contact = lazy(() => import('./pages/Contact'))
const SafetyLegal = lazy(() => import('./pages/SafetyLegal'))
const NotFound = lazy(() => import('./pages/NotFound'))

export default function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="information" element={<Information />} />
        <Route path="contact" element={<Contact />} />
        <Route path="safety-legal" element={<SafetyLegal />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
