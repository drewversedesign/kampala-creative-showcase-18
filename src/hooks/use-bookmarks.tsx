
import { useState, useEffect } from 'react';

interface BookmarkableItem {
  id: number;
  title: string;
}

export function useBookmarks<T extends BookmarkableItem>(storageKey: string = 'bookmarked-items') {
  const [bookmarkedItems, setBookmarkedItems] = useState<number[]>([]);
  
  // Load bookmarks from localStorage on mount
  useEffect(() => {
    const savedBookmarks = localStorage.getItem(storageKey);
    if (savedBookmarks) {
      try {
        const parsedBookmarks = JSON.parse(savedBookmarks);
        if (Array.isArray(parsedBookmarks)) {
          setBookmarkedItems(parsedBookmarks);
        }
      } catch (error) {
        console.error('Error parsing bookmarks:', error);
      }
    }
  }, [storageKey]);
  
  // Save bookmarks to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify(bookmarkedItems));
  }, [bookmarkedItems, storageKey]);
  
  const toggleBookmark = (itemId: number) => {
    setBookmarkedItems(prev => {
      if (prev.includes(itemId)) {
        return prev.filter(id => id !== itemId);
      } else {
        return [...prev, itemId];
      }
    });
  };
  
  const isBookmarked = (itemId: number): boolean => {
    return bookmarkedItems.includes(itemId);
  };
  
  const getAllBookmarkedItems = <T extends BookmarkableItem>(items: T[]): T[] => {
    return items.filter(item => bookmarkedItems.includes(item.id));
  };
  
  return {
    bookmarkedItems,
    toggleBookmark,
    isBookmarked,
    getAllBookmarkedItems
  };
}
