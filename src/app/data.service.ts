import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructorconstructor(private afs: AngularFirestore) { }

  async getData(collection: string){
    try {
      const data = await this.afs.collection(collection).get();
      return data;
        } catch (error)
      {
         console.error(error);
      }
      }
 
      async addData(collection: string, data: any) {
       try{
        await this.afs.collection(collection).add(data);
    
        } catch (error)
      {
         console.error(error);
       } 
      }
    
   async updateData(collection: string, id: string, dat: any){
    try{
      await this.afs.collection(collection).doc(id).update(data);
      }catch (error) {
        console.error(error);
      }
   }
   async deleteData(collection: string, id: string){
    try{
      await this.afs.collection(collection).doc(id).delete();
      }catch (error) {
        console.error(error);
}
}

}

