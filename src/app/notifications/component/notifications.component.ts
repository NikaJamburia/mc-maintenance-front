import { Component, OnInit, TemplateRef } from '@angular/core';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { ToastStantardContent } from '../service/notification-toast';
import { NotificationService } from '../service/notification.service';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {

  constructor(public notificationService: NotificationService) { }

  successIcon = faCheckCircle

  ngOnInit(): void {
  }


  asStandardContent(content: ToastStantardContent | TemplateRef<any>) {
    return content as ToastStantardContent
  }

  clearNotifications() {
    this.notificationService.notificationToasts = []
  }

}
