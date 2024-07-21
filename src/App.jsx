import Page1 from './components/Page1.jsx';
import Page2 from './components/Page2.jsx';
import Page3 from './components/Page3.jsx';
import Page4 from './components/Page4.jsx';


export default function App() {
    return (
        <div className="snap-y snap-mandatory overflow-y-scroll h-screen ">
            <div className="snap-always snap-center">
                <Page1 />
            </div>
            <div className="snap-always snap-center" >
                <Page2 />
            </div>
            <div className="snap-always snap-center" >
                <Page3 />
            </div>
              <div className="snap-always snap-center" >
                <Page4 />
            </div>
        </div>
    );
}