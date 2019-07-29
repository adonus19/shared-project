import { NgModule } from "@angular/core";
import { ChallengesRoutingModule } from "./challenges-routing.module";
// import { CurrentChallengeComponent } from "./current-challenge/current-challenge.component.tns";
import { TodayComponent } from "./today/today.component.tns";
import { SharedModule } from "../shared/ui/shared.module";
import { ChallengeActionsModule } from "./challenge-actions/challenge-actions.module";
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    // CurrentChallengeComponent,
    TodayComponent
  ],
  imports: [CommonModule, ChallengesRoutingModule,
    SharedModule, ChallengeActionsModule]
})
export class ChallengesModule { }
