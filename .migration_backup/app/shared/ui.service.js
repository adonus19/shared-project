"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var UIService = /** @class */ (function () {
    function UIService() {
        this._drawerState = new rxjs_1.BehaviorSubject(null);
    }
    Object.defineProperty(UIService.prototype, "drawerState", {
        get: function () {
            return this._drawerState.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    UIService.prototype.toggleDrawer = function () {
        this._drawerState.next(null);
    };
    UIService.prototype.setRootVCRef = function (vcRef) {
        this._rootVCRef = vcRef;
    };
    UIService.prototype.getRootVCRef = function () {
        return this._rootVCRef;
    };
    UIService = __decorate([
        core_1.Injectable({ providedIn: 'root' })
    ], UIService);
    return UIService;
}());
exports.UIService = UIService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidWkuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInVpLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBNkQ7QUFDN0QsNkJBQXVDO0FBR3ZDO0lBREE7UUFFVSxpQkFBWSxHQUFHLElBQUksc0JBQWUsQ0FBTyxJQUFJLENBQUMsQ0FBQztJQW1CekQsQ0FBQztJQWhCQyxzQkFBSSxrQ0FBVzthQUFmO1lBQ0UsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQzFDLENBQUM7OztPQUFBO0lBRUQsZ0NBQVksR0FBWjtRQUNFLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQy9CLENBQUM7SUFFRCxnQ0FBWSxHQUFaLFVBQWEsS0FBdUI7UUFDbEMsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7SUFDMUIsQ0FBQztJQUVELGdDQUFZLEdBQVo7UUFDRSxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7SUFDekIsQ0FBQztJQWxCVSxTQUFTO1FBRHJCLGlCQUFVLENBQUMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLENBQUM7T0FDdEIsU0FBUyxDQW9CckI7SUFBRCxnQkFBQztDQUFBLEFBcEJELElBb0JDO0FBcEJZLDhCQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgVmlld0NvbnRhaW5lclJlZiB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QgfSBmcm9tIFwicnhqc1wiO1xuXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxuZXhwb3J0IGNsYXNzIFVJU2VydmljZSB7XG4gIHByaXZhdGUgX2RyYXdlclN0YXRlID0gbmV3IEJlaGF2aW9yU3ViamVjdDx2b2lkPihudWxsKTtcbiAgcHJpdmF0ZSBfcm9vdFZDUmVmOiBWaWV3Q29udGFpbmVyUmVmO1xuXG4gIGdldCBkcmF3ZXJTdGF0ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fZHJhd2VyU3RhdGUuYXNPYnNlcnZhYmxlKCk7XG4gIH1cblxuICB0b2dnbGVEcmF3ZXIoKSB7XG4gICAgdGhpcy5fZHJhd2VyU3RhdGUubmV4dChudWxsKTtcbiAgfVxuXG4gIHNldFJvb3RWQ1JlZih2Y1JlZjogVmlld0NvbnRhaW5lclJlZikge1xuICAgIHRoaXMuX3Jvb3RWQ1JlZiA9IHZjUmVmO1xuICB9XG5cbiAgZ2V0Um9vdFZDUmVmKCkge1xuICAgIHJldHVybiB0aGlzLl9yb290VkNSZWY7XG4gIH1cblxufSJdfQ==