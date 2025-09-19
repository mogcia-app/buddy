import {
  collection,
  doc,
  getDocs,
  getDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  query,
  where,
  orderBy,
  limit,
  Timestamp
} from 'firebase/firestore';
import { db } from './firebase';
import { NewsItem, BlogItem, COLLECTIONS } from '../types/firebase';

// ユーティリティ関数
const convertTimestamp = (timestamp: Timestamp | Date | null | undefined): Date => {
  if (timestamp && typeof timestamp === 'object' && 'toDate' in timestamp) {
    return (timestamp as Timestamp).toDate();
  }
  if (timestamp instanceof Date) {
    return timestamp;
  }
  if (timestamp) {
    return new Date(timestamp as string | number);
  }
  return new Date();
};

const createSlug = (title: string): string => {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\u3040-\u309f\u30a0-\u30ff\u4e00-\u9faf\s]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();
};

// ========== NEWS CRUD ==========

export const getNews = async (limitCount?: number): Promise<NewsItem[]> => {
  try {
    let q = query(
      collection(db, COLLECTIONS.NEWS),
      orderBy('publishedAt', 'desc')
    );
    
    if (limitCount) {
      q = query(q, limit(limitCount));
    }
    
    const snapshot = await getDocs(q);
    return snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
      publishedAt: convertTimestamp(doc.data().publishedAt),
      createdAt: convertTimestamp(doc.data().createdAt),
      updatedAt: convertTimestamp(doc.data().updatedAt)
    })) as NewsItem[];
  } catch (error) {
    console.error('お知らせの取得に失敗:', error);
    return [];
  }
};

export const getNewsById = async (id: string): Promise<NewsItem | null> => {
  try {
    const docRef = doc(db, COLLECTIONS.NEWS, id);
    const docSnap = await getDoc(docRef);
    
    if (docSnap.exists()) {
      return {
        id: docSnap.id,
        ...docSnap.data(),
        publishedAt: convertTimestamp(docSnap.data().publishedAt),
        createdAt: convertTimestamp(docSnap.data().createdAt),
        updatedAt: convertTimestamp(docSnap.data().updatedAt)
      } as NewsItem;
    }
    return null;
  } catch (error) {
    console.error('お知らせの取得に失敗:', error);
    return null;
  }
};

export const getNewsByCategory = async (category: string): Promise<NewsItem[]> => {
  try {
    const q = query(
      collection(db, COLLECTIONS.NEWS),
      where('category', '==', category),
      orderBy('publishedAt', 'desc')
    );
    
    const snapshot = await getDocs(q);
    return snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
      publishedAt: convertTimestamp(doc.data().publishedAt),
      createdAt: convertTimestamp(doc.data().createdAt),
      updatedAt: convertTimestamp(doc.data().updatedAt)
    })) as NewsItem[];
  } catch (error) {
    console.error('お知らせの取得に失敗:', error);
    return [];
  }
};

export const createNews = async (newsData: Omit<NewsItem, 'id' | 'createdAt' | 'updatedAt' | 'slug'>): Promise<string | null> => {
  try {
    const slug = createSlug(newsData.title);
    const now = Timestamp.now();
    
    const docRef = await addDoc(collection(db, COLLECTIONS.NEWS), {
      ...newsData,
      slug,
      publishedAt: Timestamp.fromDate(newsData.publishedAt),
      createdAt: now,
      updatedAt: now
    });
    
    return docRef.id;
  } catch (error) {
    console.error('お知らせの作成に失敗:', error);
    return null;
  }
};

export const updateNews = async (id: string, newsData: Partial<NewsItem>): Promise<boolean> => {
  try {
    const docRef = doc(db, COLLECTIONS.NEWS, id);
    const updateData: Record<string, unknown> = {
      ...newsData,
      updatedAt: Timestamp.now()
    };
    
    // タイトルが変更された場合はslugも更新
    if (newsData.title) {
      updateData.slug = createSlug(newsData.title);
    }
    
    // 日付フィールドをTimestampに変換
    if (newsData.publishedAt) {
      updateData.publishedAt = Timestamp.fromDate(newsData.publishedAt);
    }
    
    await updateDoc(docRef, updateData);
    return true;
  } catch (error) {
    console.error('お知らせの更新に失敗:', error);
    return false;
  }
};

export const deleteNews = async (id: string): Promise<boolean> => {
  try {
    const docRef = doc(db, COLLECTIONS.NEWS, id);
    await deleteDoc(docRef);
    return true;
  } catch (error) {
    console.error('お知らせの削除に失敗:', error);
    return false;
  }
};

// ========== BLOG CRUD ==========

export const getBlog = async (limitCount?: number): Promise<BlogItem[]> => {
  try {
    let q = query(
      collection(db, COLLECTIONS.BLOG),
      orderBy('publishedAt', 'desc')
    );
    
    if (limitCount) {
      q = query(q, limit(limitCount));
    }
    
    const snapshot = await getDocs(q);
    return snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
      publishedAt: convertTimestamp(doc.data().publishedAt),
      createdAt: convertTimestamp(doc.data().createdAt),
      updatedAt: convertTimestamp(doc.data().updatedAt)
    })) as BlogItem[];
  } catch (error) {
    console.error('ブログの取得に失敗:', error);
    return [];
  }
};

export const getBlogById = async (id: string): Promise<BlogItem | null> => {
  try {
    const docRef = doc(db, COLLECTIONS.BLOG, id);
    const docSnap = await getDoc(docRef);
    
    if (docSnap.exists()) {
      return {
        id: docSnap.id,
        ...docSnap.data(),
        publishedAt: convertTimestamp(docSnap.data().publishedAt),
        createdAt: convertTimestamp(docSnap.data().createdAt),
        updatedAt: convertTimestamp(docSnap.data().updatedAt)
      } as BlogItem;
    }
    return null;
  } catch (error) {
    console.error('ブログの取得に失敗:', error);
    return null;
  }
};

export const getBlogByCategory = async (category: string): Promise<BlogItem[]> => {
  try {
    const q = query(
      collection(db, COLLECTIONS.BLOG),
      where('category', '==', category),
      orderBy('publishedAt', 'desc')
    );
    
    const snapshot = await getDocs(q);
    return snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
      publishedAt: convertTimestamp(doc.data().publishedAt),
      createdAt: convertTimestamp(doc.data().createdAt),
      updatedAt: convertTimestamp(doc.data().updatedAt)
    })) as BlogItem[];
  } catch (error) {
    console.error('ブログの取得に失敗:', error);
    return [];
  }
};

export const getFeaturedBlog = async (): Promise<BlogItem[]> => {
  try {
    const q = query(
      collection(db, COLLECTIONS.BLOG),
      where('featured', '==', true),
      orderBy('publishedAt', 'desc')
    );
    
    const snapshot = await getDocs(q);
    return snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
      publishedAt: convertTimestamp(doc.data().publishedAt),
      createdAt: convertTimestamp(doc.data().createdAt),
      updatedAt: convertTimestamp(doc.data().updatedAt)
    })) as BlogItem[];
  } catch (error) {
    console.error('注目ブログの取得に失敗:', error);
    return [];
  }
};

export const createBlog = async (blogData: Omit<BlogItem, 'id' | 'createdAt' | 'updatedAt' | 'slug'>): Promise<string | null> => {
  try {
    const slug = createSlug(blogData.title);
    const now = Timestamp.now();
    
    const docRef = await addDoc(collection(db, COLLECTIONS.BLOG), {
      ...blogData,
      slug,
      publishedAt: Timestamp.fromDate(blogData.publishedAt),
      createdAt: now,
      updatedAt: now
    });
    
    return docRef.id;
  } catch (error) {
    console.error('ブログの作成に失敗:', error);
    return null;
  }
};

export const updateBlog = async (id: string, blogData: Partial<BlogItem>): Promise<boolean> => {
  try {
    const docRef = doc(db, COLLECTIONS.BLOG, id);
    const updateData: Record<string, unknown> = {
      ...blogData,
      updatedAt: Timestamp.now()
    };
    
    // タイトルが変更された場合はslugも更新
    if (blogData.title) {
      updateData.slug = createSlug(blogData.title);
    }
    
    // 日付フィールドをTimestampに変換
    if (blogData.publishedAt) {
      updateData.publishedAt = Timestamp.fromDate(blogData.publishedAt);
    }
    
    await updateDoc(docRef, updateData);
    return true;
  } catch (error) {
    console.error('ブログの更新に失敗:', error);
    return false;
  }
};

export const deleteBlog = async (id: string): Promise<boolean> => {
  try {
    const docRef = doc(db, COLLECTIONS.BLOG, id);
    await deleteDoc(docRef);
    return true;
  } catch (error) {
    console.error('ブログの削除に失敗:', error);
    return false;
  }
};
