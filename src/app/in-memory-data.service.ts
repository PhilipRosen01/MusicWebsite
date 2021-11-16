import { Injectable } from '@angular/core';
import { Content } from "./helper-files/content-interface";
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { MUSICLIST} from "./helper-files/contentDb";


@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  constructor() { }

  createDb() {
    const content : Content[] = [{
      id: 0,
      author: "Author",
      imgUrl: "https://upload.wikimedia.org/wikipedia/en/2/21/Web_of_Spider-Man_Vol_1_129-1.png",
      type: "type 1",
      title: "title 1",
      body: "body 1",
      tags: ["tag 1", "tag 2"]
    }]

    return {content};
  }

  getId(content: Content[]): number{
    return content.length ? Math.max(...content.map(contentItem => content.id ?? 0)) + 1 : 0
  }
}
