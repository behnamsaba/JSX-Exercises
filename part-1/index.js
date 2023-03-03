const App = () => (
    <div>
    < FirstComponent />
    < NamedComponent name='ben' />
    </div>
)


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

