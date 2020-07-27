import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  filteredStatus = '';
  appStatus = new Promise((resolve, reject)=>{
    setTimeout(()=>{
      resolve('stable');
    },2000)
  });

  servers = [
    {
      instanceType: 'medium',
      name: 'Production Server',
      status: 'stable',
      started: new Date(2017, 1, 5)
    },
    {
      instanceType: 'large',
      name: 'User Database',
      status: 'stable',
      started: new Date()
    },
    {
      instanceType: 'small',
      name: 'Development Server',
      status: 'offline',
      started: new Date()
    },
    {
      instanceType: 'small',
      name: 'Testing Environment Server',
      status: 'stable',
      started: new Date()
    },
    {
      instanceType: 'small',
      name: 'ECS-01',
      status: 'stable',
      started: new Date()
    }
  ];

  onAddServer(){
    this.servers.push(
      {
        instanceType: 'small',
        name: 'ESS-T',
        status: 'stable',
        started: new Date()
      });
  }

  getStatusClasses(server: {instanceType: string, name: string, status: string, started: Date}) {
    return {
      'list-group-item-success': server.status === 'stable',
      'list-group-item-warning': server.status === 'offline',
      'list-group-item-danger': server.status === 'critical'
    };
  }
}
