import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'
import { HADITH_NAV } from 'Hadith/hadith.nav'

import { BaseHadithComponent } from 'Hadith/base-hadith.component'
import { HadithItemComponent } from 'Hadith/c/hadith-item/hadith-item.component'
import { MainHadithComponent } from 'Hadith/c/main-hadith/main-hadith.component'
import { FooterReportComponent } from 'Hadith/c/footer-report/footer-report.component'

@NgModule({
    declarations: [
        BaseHadithComponent,
        MainHadithComponent,
        HadithItemComponent,
        FooterReportComponent,
    ],
    imports: [
        RouterModule,
        CommonModule,
        RouterModule.forChild(HADITH_NAV)
    ]
})
export class HadithModule {
}