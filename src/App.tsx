import { Navigate, Route, Routes } from 'react-router-dom';
import { AddressInputScreen } from './screens/AddressInputScreen';
import { HomeScreen } from './screens/HomeScreen';
import { LandmarkNotesScreen } from './screens/LandmarkNotesScreen';
import { LoginScreen } from './screens/LoginScreen';
import { MapPinScreen } from './screens/MapPinScreen';
import { ProfileStatsScreen } from './screens/ProfileStatsScreen';
import { StartMappingScreen } from './screens/StartMappingScreen';
import { SuccessScreen } from './screens/SuccessScreen';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route path="/login" element={<LoginScreen />} />
      <Route path="/home" element={<HomeScreen />} />
      <Route path="/start-mapping" element={<StartMappingScreen />} />
      <Route path="/address-input" element={<AddressInputScreen />} />
      <Route path="/map-pin" element={<MapPinScreen />} />
      <Route path="/landmark-notes" element={<LandmarkNotesScreen />} />
      <Route path="/success" element={<SuccessScreen />} />
      <Route path="/profile-stats" element={<ProfileStatsScreen />} />
    </Routes>
  );
}
