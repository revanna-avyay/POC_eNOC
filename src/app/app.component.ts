import { Component } from '@angular/core';
import { FileUploadComponent } from './components/file-upload/file-upload.component';
import { ExpandCollapseComponent } from './components/expand-collapse/expand-collapse.component';
import { TypeAheadComponent } from './components/type-ahead/type-ahead.component';
import { SearchComponent } from './components/search/search.component';
import { fileFormats } from './data/states';
import { NotificationComponent } from './components/notification/notification.component';
import { NgbActiveModal, NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { LangTranslateComponent } from "./components/lang-translate/lang-translate.component";
import { InformationLinksComponent } from './components/information-links/information-links.component';
import { PdfComponent } from './components/pdf/pdf.component';
import { StatusIndicatorComponent } from './components/status-indicator/status-indicator.component';
import { BookmarksComponent } from './components/bookmarks/bookmarks.component';
import { ApplicationStatusComponent } from './components/application-status/application-status.component';
import { CalenderComponentComponent } from './components/calender-component/calender-component.component';
import { AnnouncementComponent } from './components/announcement/announcement.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FileUploadComponent, PdfComponent, InformationLinksComponent, ExpandCollapseComponent, TypeAheadComponent, SearchComponent, NotificationComponent, NgbNavModule,
    LangTranslateComponent, ApplicationStatusComponent, BookmarksComponent, StatusIndicatorComponent, CalenderComponentComponent, AnnouncementComponent],
    providers:[NgbActiveModal],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'enoc';
  file_formats = fileFormats;
  // active = "file-upload";
  active= "Announcement"
  onFilesChanged(files: File[]): void {
    console.log('Uploaded files:', files);
  }
}
