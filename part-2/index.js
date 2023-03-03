const App = () => (
    <div>
        < Tweet username="bensaba" name="ben" date={2023}/>
        < Tweet username="ElonMusk" name="Elon" date={2021}/>
        < Tweet username="Springboard" name="coding" date={2000}/>
    </div>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);