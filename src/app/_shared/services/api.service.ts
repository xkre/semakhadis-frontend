import { Injectable } from '@angular/core'
import { environment } from 'environments/environment'

@Injectable()
export class ApiService {

    protected base_url: string = ''

    constructor() {
        this.base_url = environment.api
    }

}
