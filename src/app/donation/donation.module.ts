import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'
import { DONATION_NAV } from 'Donation/donation.nav'
import { BaseDonationComponent } from 'Donation/base-donation.component'
import { MainDonationComponent } from 'Donation/c/main-donation/main-donation.component'

@NgModule({
    declarations: [
        BaseDonationComponent,
        MainDonationComponent
    ],
    imports: [
        RouterModule,
        CommonModule,
        RouterModule.forChild(DONATION_NAV)
    ]
})
export class DonationModule {
}
