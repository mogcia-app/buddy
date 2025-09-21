import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { storage } from './firebase';

export async function uploadImage(file: File, path: string): Promise<string> {
  try {
    // ファイル名を生成（タイムスタンプ + 元のファイル名）
    const timestamp = Date.now();
    const fileName = `${timestamp}_${file.name}`;
    const fullPath = `${path}/${fileName}`;
    
    // Firebase Storageにアップロード
    const storageRef = ref(storage, fullPath);
    const snapshot = await uploadBytes(storageRef, file);
    
    // ダウンロードURLを取得
    const downloadURL = await getDownloadURL(snapshot.ref);
    
    return downloadURL;
  } catch (error) {
    console.error('画像アップロードエラー:', error);
    throw new Error('画像のアップロードに失敗しました');
  }
}

export async function uploadBlogImage(file: File): Promise<string> {
  return uploadImage(file, 'blog');
}

export async function uploadNewsImage(file: File): Promise<string> {
  return uploadImage(file, 'news');
}
