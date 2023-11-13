import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Login";
import Users from "./Users";
import "./reset.css";
import "./App.css";
import "./Preservica.scss"
import { useState } from "react";

function App() {
    const [loggedIn, setLoggedIn] = useState(false);
    const [email, setEmail] = useState("");

    return (
        <div className="preservica">
            <BrowserRouter>
                <Routes>
                    <Route
                        path="/"
                        element={
                            <Login
                                email={email}
                                loggedIn={loggedIn}
                                setLoggedIn={setLoggedIn}
                                setEmail={setEmail}
                            />
                        }
                    />
                    <Route
                        path="/users"
                        element={
                            <Users
                                
                            />
                        }
                    />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
