import { Injectable } from '@angular/core';
import { Manager } from '../model/manager.module';


@Injectable({
  providedIn: 'root'
})
export class ManagerService {
    getLeave():Manager[]{
        return[
            {
              name:"kajal",
              
                
         
                
            },
    
    
        ]
    
    }

    constructor() { }

}

