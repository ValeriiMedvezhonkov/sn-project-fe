import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LoginPage, RegisterPage } from '@/pages';

function App() {
   return (
      <>
         <div className="flex h-screen">
            <div className="m-auto">
               <Router>
                  <Routes>
                     <Route path="/" element={<div>News feed</div>} />
                     <Route path="/login" element={<LoginPage />} />
                     <Route path="/register" element={<RegisterPage />} />
                  </Routes>
               </Router>
            </div>
         </div>
      </>
   );
}

export default App;
