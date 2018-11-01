import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ChallengeService } from '../services/challenge.service';

import { User } from '../model/User';
import { Challenge } from '../model/Challenge';

@Component({
    selector: 'app-profile',
    templateUrl: 'profile.component.html',
    styleUrls: ['profile.component.css']
})

export class ProfileComponent implements OnInit, OnDestroy {
    user: User = new User()
    challengeList: Challenge[]
    
    sub: any;
    username: string = "";

    constructor(private route: ActivatedRoute, private challengeService: ChallengeService) { }

    ngOnInit() {
        // this.getUserProfile()
        // this.getChallenges()
        this.sub = this.route.params.subscribe(params => {
            this.username = params['username'];
        })
    }

    ngOnDestroy(){
        this.sub.unsubscribe();
    }

    getUserProfile() {
        // const username = this.route.snapshot.paramMap.get('username')
        // this.challengeService.getUser(username)
        //     .subscribe(user => this.user = user)
    }

    // getChallenges() {
    //     this.challengeService.getChallengeByUser(this.user.getUserId())
    //         .subscribe(challenges => this.challengeList = challenges)
    // }
}