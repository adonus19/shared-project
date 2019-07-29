"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("nativescript-angular/common");
var router_1 = require("nativescript-angular/router");
var action_bar_component_1 = require("./action-bar/action-bar.component");
var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        core_1.NgModule({
            imports: [common_1.NativeScriptCommonModule, router_1.NativeScriptRouterModule],
            declarations: [action_bar_component_1.ActionBarComponent],
            exports: [action_bar_component_1.ActionBarComponent]
        })
    ], SharedModule);
    return SharedModule;
}());
exports.SharedModule = SharedModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hhcmVkLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNoYXJlZC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBeUM7QUFDekMsc0RBQXVFO0FBQ3ZFLHNEQUF1RTtBQUN2RSwwRUFBdUU7QUFPdkU7SUFBQTtJQUE0QixDQUFDO0lBQWhCLFlBQVk7UUFMeEIsZUFBUSxDQUFDO1lBQ1IsT0FBTyxFQUFFLENBQUMsaUNBQXdCLEVBQUUsaUNBQXdCLENBQUM7WUFDN0QsWUFBWSxFQUFFLENBQUMseUNBQWtCLENBQUM7WUFDbEMsT0FBTyxFQUFFLENBQUMseUNBQWtCLENBQUM7U0FDOUIsQ0FBQztPQUNXLFlBQVksQ0FBSTtJQUFELG1CQUFDO0NBQUEsQUFBN0IsSUFBNkI7QUFBaEIsb0NBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRDb21tb25Nb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvY29tbW9uXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBBY3Rpb25CYXJDb21wb25lbnQgfSBmcm9tIFwiLi9hY3Rpb24tYmFyL2FjdGlvbi1iYXIuY29tcG9uZW50XCI7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtOYXRpdmVTY3JpcHRDb21tb25Nb2R1bGUsIE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZV0sXG4gIGRlY2xhcmF0aW9uczogW0FjdGlvbkJhckNvbXBvbmVudF0sXG4gIGV4cG9ydHM6IFtBY3Rpb25CYXJDb21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIFNoYXJlZE1vZHVsZSB7IH0gIl19