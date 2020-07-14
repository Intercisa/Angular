import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data, Params, Router } from '@angular/router';

import { ServersService } from '../servers.service';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server: {id: number, name: string, status: string};

  constructor(private serversService: ServersService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    
    this.route.data.subscribe((data: Data)=>{
      this.server = data['server']; //have to match the name we use in app-routing.module
    });

    /*
    const id = +this.route.params['id']; //the + here will convert the 'id' from string to number 
    this.server = this.serversService.getServer(id);
    this.route.params.subscribe((params: Params) =>{
      this.server = this.serversService.getServer(+params['id']);

    });
    */
  }

  onEdit(){
    this.router.navigate(['edit'], {relativeTo: this.route, queryParamsHandling: 'preserve'}); //relative route / queryParamsHandling: 'preserve' -> preserve our query params, megrge -> merging something new withe axisting wuery params 
  }

}
