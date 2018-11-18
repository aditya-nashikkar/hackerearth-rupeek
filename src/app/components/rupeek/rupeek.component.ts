import { Component, OnInit } from '@angular/core';
import { RupeekService } from '../../services/rupeek.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-rupeek',
  templateUrl: './rupeek.component.html',
  styleUrls: ['./rupeek.component.css']
})
export class RupeekComponent implements OnInit {

  private wonderOfWorld;
  private starList: string[] = [];
  private totalLikes: number = 0;
  private totalHitsAPI: number = 0;
  private sortBy: string = "select";
  private checkKey: boolean;

  constructor(private _rupeekService:RupeekService, private _router: Router) { }

  ngOnInit() {
    this.getData();  
  }

  addKeyValue(obj, key, data){
    obj[key] = data;
  }

  getData() {
    this._rupeekService.getData().subscribe((data)=>{
      this.wonderOfWorld = data['data'];
      for(let i=0;i<this.wonderOfWorld.length;i++) {
        console.log();
        this.addKeyValue(this.wonderOfWorld[i], 'star', this.setStarRating(this.wonderOfWorld[i].ratings));
        this.addKeyValue(this.wonderOfWorld[i], 'updatedLikes', localStorage.getItem(this.wonderOfWorld[i].id));
        this.totalLikes = this.totalLikes + parseInt(this.wonderOfWorld[i].updatedLikes);

        this.checkKey = this.wonderOfWorld[i].hasOwnProperty("description");

        if(!this.checkKey || this.wonderOfWorld[i].description == null) {
          this.addKeyValue(this.wonderOfWorld[i], 'description', 'No description available for this item.');
        }

        localStorage.setItem(this.wonderOfWorld[i].id, this.wonderOfWorld[i].likes);
        this._router.navigate(['rupeek'], 
          {
            queryParams: {
                id1: localStorage.getItem(this.wonderOfWorld[0].likes),
                id2: localStorage.getItem(this.wonderOfWorld[1].likes),
                id3: localStorage.getItem(this.wonderOfWorld[2].likes),
                id4: localStorage.getItem(this.wonderOfWorld[3].likes),
                id5: localStorage.getItem(this.wonderOfWorld[4].likes),
                id6: localStorage.getItem(this.wonderOfWorld[5].likes),
                id7: localStorage.getItem(this.wonderOfWorld[6].likes)
            }
          }
        );
      }
      console.log(this.totalLikes);
      console.log(this.wonderOfWorld); 
      this.totalHitsAPI = this.totalHitsAPI + 1;
    }, (error)=> {
      console.log(error);
    });
  }

  setStarRating(value:number) {
    let starList: string[] = [];
    let i=1;
    for(i=1; i<=5; i++) {
      if(i<=value) {
        starList.push("glyphicon glyphicon-star");
      } else if(i<=value+0.5) {
        starList.push("fa fa-star-half");
      } else {
        starList.push("glyphicon glyphicon-star-empty");
      }
    }

    return starList;
  }

  filter(query:string) {
    console.log('Search');
    this.wonderOfWorld = (query) ? this.wonderOfWorld.filter(
      p => p.place.toLowerCase().includes(query.toLowerCase())
    ) : this._rupeekService.getData().subscribe((data)=>{
      this.wonderOfWorld = data['data'];
      for(let i=0;i<this.wonderOfWorld.length;i++) {
        this.addKeyValue(this.wonderOfWorld[i], 'star', this.setStarRating(this.wonderOfWorld[i].ratings));
        this.totalLikes = this.totalLikes + parseInt(this.wonderOfWorld[i].updatedLikes);
      }
    });
  }

  sort(sortBy) {
    console.log(sortBy);
    if(sortBy === 'ratings') {
      this.wonderOfWorld.sort( function(id1, id2) {
        if ( id1.ratings > id2.ratings ) {
          return -1;
        } else if( id1.ratings < id2.ratings ) {
            return 1;
        } else {
          return 0;	
        }
      })
      console.log(this.wonderOfWorld);
    }

    else if(sortBy === 'likes') {
      this.wonderOfWorld.sort( function(id1, id2) {
        if ( id1.likes > id2.likes ) {
          return -1;
        } else if( id1.likes < id2.likes ) {
            return 1;
        } else {
          return 0;	
        }
      })
      console.log(this.wonderOfWorld);
    }  
  }

  toggleLike(originalLikeCount: number, userUpdatedLikeCount: number, id: any, i: number) {
    let oCount;
    let uuCoumt;
    oCount = originalLikeCount;
    uuCoumt = userUpdatedLikeCount;

    if(oCount == uuCoumt) {
      uuCoumt = uuCoumt + 1;
      sessionStorage.setItem(id, uuCoumt.toString());
      this.wonderOfWorld[i].updatedLikes = uuCoumt;
      this.totalLikes = this.totalLikes+1;
    } else {
      oCount = oCount - 1;  
      this.wonderOfWorld[i].updatedLikes = oCount;
      sessionStorage.setItem(id, oCount.toString());
      this.totalLikes = this.totalLikes-1;
    }  
  }
}
