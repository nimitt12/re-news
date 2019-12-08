import { Component } from '@angular/core';
import { NewsService } from '../news.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  data: any;
  constructor(private newsService: NewsService, private router: Router) {}

  ngOnInit() {

    this.newsService.getData('top-headlines?country=in&category=business').subscribe(data => {
      console.log(data);
      this.data = data;
    })
  }

  onGoToNewsSinglePage(article){

    this.newsService.currentArticle = article;
    this.router.navigate(['/news-single'])
  }

  doRefresh(event) {

    setTimeout(() => {
      event.target.complete();
      
    }, 2000);
  }
}
