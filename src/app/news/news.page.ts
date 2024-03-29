import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {

  data: any;
  constructor(private newsService: NewsService, private router: Router) { }

  ngOnInit() {

    this.newsService.getData('top-headlines?sources=google-news-in').subscribe(data => {
     
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
