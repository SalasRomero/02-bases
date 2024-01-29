import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';


platformBrowserDynamic()
.bootstrapModule(AppModule)
.catch((err) => console.error(err));


//Esta configuracion es cuando se quiere usar el stalone
//import { bootstrapApplication } from '@angular/platform-browser';
// bootstrapApplication(AppComponent)
//   .catch((err) => console.error(err));
