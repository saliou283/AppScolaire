import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angularFireStorage';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor(private afStrorage: AngularFireStore) { }
}

constructorconstructor(private afs: AngularFirestore) { }

  async uploadFile(file: File){
    try {
      const storageRef = this.afStorage.ref('files/' + file.name);
      await storageRef.put(file);
      const url = await storageRef.getdownloadURL();
      return url;
        } catch (error)
      {
         console.error(error);
      }
      }
 
      async downloadFile(fileName: string) {
       try{
        const storageRef this.afStorage.ref('files/' + file.Name);
        const url = await storageRef.getdownloadURL();
        return url;
        } catch (error)
      {
         console.error(error);
       } 
      }
  

