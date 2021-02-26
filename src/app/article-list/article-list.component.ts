import { Component } from '@angular/core'; 
import { IArticle } from './article';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.scss']
})

export class articleListComponent{

  public title = 'Liste de tous les articles';

  public articles :  IArticle[] = [{
      articleId:1, 
      articleTitle: 'Lorem Ipsum', 
      articleContent: 'Lorem Ipsum dolores sit...', 
      imageUrl: '',
      articleLink: ''
    },
    {
      articleId:2, 
      articleTitle: 'Lorem Ipsum 2', 
      articleContent: 'Lorem Ipsum dolores sit...',
      imageUrl: '',
      articleLink: ''
    },
  ]; 
}