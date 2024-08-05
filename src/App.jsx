import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import Games from "./routes/Games";
import Features from "./routes/Features";
import OnlineStreaming from "./routes/OnlineStreaming";

const App = () => {
  return (
    <div className="w-full bg-gradient-to-r from-zinc-950 to-slate-900">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="routes/games" element={<Games />} />
          <Route path="routes/features" element={<Features />} />
          <Route path="routes/online-streaming" element={<OnlineStreaming />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
