import { useContext } from 'react';
import Dashboard from './component/Dashboard';
import './App.css';
import { ThemeContext } from './context/ThemeContext'
import {FollowContextProvider} from './context/FollowContext'
import {OverviewProvider} from './context/OverviewContext'
function App() {
  const {mode} = useContext(ThemeContext)
  return (
     <FollowContextProvider>
          <OverviewProvider>
              <div className={mode ? "App light-bg":"App dark-bg"}>
                 <Dashboard />
              </div>
          </OverviewProvider>
     </FollowContextProvider>
  );
}

export default App;
