import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { ChallengesRoutingModule } from "./challenges-routing.module";
import { ChallengeTabsComponent } from "./challenge-tabs/challenge-tabs.component.tns";
import { CurrentChallengeComponent } from "./current-challenge/current-challenge.component.tns";
import { TodayComponent } from "./today/today.component.tns";
import { SharedModule } from "../shared/ui/shared.module";
import { ChallengeActionsModule } from "./challenge-actions/challenge-actions.module";

@NgModule({
  declarations: [
    ChallengeTabsComponent,
    CurrentChallengeComponent,
    TodayComponent
  ],
  imports: [NativeScriptCommonModule, ChallengesRoutingModule,
    SharedModule, ChallengeActionsModule],
  schemas: [NO_ERRORS_SCHEMA]
})
export class ChallengesModule { }
