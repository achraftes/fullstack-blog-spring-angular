import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const BASIC_URL = 'http://localhost:8080/';

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  constructor(private http: HttpClient) {}

  createComment(postId: number, postedBy: string, content: string): Observable<any> {
    const params = new HttpParams()
      .set('postId', postId.toString())
      .set('postedBy', postedBy)
      .set('content', content);

    return this.http.post(BASIC_URL + `api/comments/create`, null, {
      params,
      withCredentials: true // ✅ Permettre l'authentification si nécessaire
    });
  }

  getAllCommentsByPost(postId: number): Observable<any> {
    return this.http.get(BASIC_URL + `api/comments/${postId}`, { withCredentials: true });
  }
}
