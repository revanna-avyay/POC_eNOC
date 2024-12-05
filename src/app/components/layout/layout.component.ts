import { Component, inject, OnInit } from '@angular/core';
import { FileUploadComponent } from '../file-upload/file-upload.component';
import { ExpandCollapseComponent } from '../expand-collapse/expand-collapse.component';
import { TypeAheadComponent } from '../type-ahead/type-ahead.component';
import { SearchComponent } from '../search/search.component';
import { fileFormats, nocData, notificationCardData } from '../../data/states';
import { NotificationComponent } from '../notification/notification.component';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { LangTranslateComponent } from "../lang-translate/lang-translate.component";
import { CommonAlertComponent } from '../../common/common-alert/common-alert.component';
import { CommonCardComponent } from '../../common/common-card/common-card.component';
import { CommonModule } from '@angular/common';
import { TableService } from '../../services/table.service';
import { CommonTableComponent } from '../../common/table/common-table/common-table.component';
import { InformationLinksComponent } from '../information-links/information-links.component';
import { PdfComponent } from '../pdf/pdf.component';
import { StatusIndicatorComponent } from '../status-indicator/status-indicator.component';
import { BookmarksComponent } from '../bookmarks/bookmarks.component';
import { ApplicationStatusComponent } from '../application-status/application-status.component';
import { MeetingsComponent } from '../meetings/meetings.component';
import { NotificationCardComponent } from '../notification-card/notification-card.component';
import { FormsModule } from '@angular/forms';
import { NewENocComponent } from '../../common/new-enoc/new-enoc.component';

const data = [
  {
    id: 1,
    title: "5",
    subtitle: "Comments",
  },
  {
    id: 2,
    title: "4",
    subtitle: "Due To Revalidation",
  },
  {
    id: 3,
    title: "6",
    subtitle: "Fines",
  },
  {
    id: 4,
    title: "9",
    subtitle: "Payments",
  },
  {
    id: 5,
    title: "6",
    subtitle: "Fines",
  }
]

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [FileUploadComponent, NewENocComponent, PdfComponent, NotificationCardComponent, InformationLinksComponent, ExpandCollapseComponent, TypeAheadComponent, SearchComponent, NotificationComponent, NgbNavModule,
    LangTranslateComponent, FormsModule, ApplicationStatusComponent, BookmarksComponent, StatusIndicatorComponent, MeetingsComponent, CommonTableComponent, CommonCardComponent, CommonAlertComponent, CommonModule],
  providers: [TableService],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent implements OnInit {
  title = 'enoc';
  file_formats = fileFormats;
  active = "file-upload";
  cardData: any[] = []
  customTableData: [] = []
  notificationData: any[] = []
  nocData: any[] = []

  custTableData = inject(TableService)

  onFilesChanged(files: File[]): void {
    console.log('Uploaded files:', files);
  }

  ngOnInit(): void {
    this.cardData = data
    this.notificationData = notificationCardData
    this.nocData = nocData
    this.getCustomTableData()
  }

  getCustomTableData() {
    this.custTableData.getTableData().subscribe((res) => {
      this.customTableData = res
      console.log(res)
    })
  }
}
