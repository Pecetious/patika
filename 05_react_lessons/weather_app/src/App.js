import "./App.css";
import Main from "./components/Main";
import Wrapper from "./components/Wrapper";
import { CityProvider } from "./context/CityContext";
import { WeatherProvider } from "./context/WeatherContext";
function App() {
  return (
    <Wrapper>
      <CityProvider>
        <WeatherProvider>
          <Main />
        </WeatherProvider>
      </CityProvider>
    </Wrapper>
  );
}

export default App;
