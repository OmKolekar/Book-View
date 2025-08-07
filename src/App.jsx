import { Routes, Route } from 'react-router-dom';
import VisitorPage from './pages/VisitorPage';
import EventPage from './pages/EventPage';
import { EventProvider } from './context/EventContext';

const App = () => {
  return(
    <EventProvider>
      <Routes>
        <Route path='/' element={<VisitorPage />} />
        <Route path='/event' element={<EventPage />} />
      </Routes>
    </EventProvider>
  );
};

export default App;