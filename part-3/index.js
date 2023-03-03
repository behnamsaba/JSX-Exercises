const App = () => (
    <div>
        < Person name="Behnam saba english" age={30} hobbies={["reading","exercise","soccer"]}/>
        < Person name="testtttttttttttttttttttttttt" age={18} hobbies={["tv","game"]}/>
        < Person name="james" age={60} hobbies={["sleep","news","cooking","walk"]}/>
    </div>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);