import { ThemeProvider } from "next-themes"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Index from "./pages/Index"

function App() {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <Router>
        <Routes>
          <Route path="/" element={<Index />} />
        </Routes>
      </Router>
    </ThemeProvider>
  )
}

export default App