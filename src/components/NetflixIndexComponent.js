import './NetflixIndexComponent.css';
import NetflixFooterComponent from './NetflixFooterComponent';
import NetflixHeaderComponent from './NetflixHeaderComponent';
import NetflixMainComponent from './NetflixMainComponent';
import { NetflixRegisterComponent } from './NetflixRegisterComponents';
export default function NetflixIndexComponent()
{
    return (
        <div className="container-fluid">
            <div className="box">
                <header>
                <NetflixHeaderComponent></NetflixHeaderComponent>
                </header>
                <section className='d-flex justify-content-center align-items-center h-50'>
                    <main>
                        <NetflixMainComponent />
                        <NetflixRegisterComponent />
                    </main>
                </section>

                <footer className='m-2 p-2'>
                    <NetflixFooterComponent />
                </footer>
                
            </div>
        </div>
    )
    }