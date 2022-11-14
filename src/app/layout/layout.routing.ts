import { Routes, RouterModule } from "@angular/router";
import { LayoutComponent } from "./layout.component";


const LAYOUT_ROUTES: Routes = [
	{
		path: "",
		component: LayoutComponent,
		children: [


			{ path: "", redirectTo: "home", pathMatch: "full", },

      {
        path: "home",
        loadChildren: () => import('src/app/pages/home/home.module').then(m => m.HomeModule)
      }
		]
	},

	// 404 Page Not Found
	{ path: "**", redirectTo: "" }
];

export const LayoutRoutingModule = RouterModule.forChild(LAYOUT_ROUTES);

