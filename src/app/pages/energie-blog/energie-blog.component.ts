import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface BlogPost {
  id: number;
  title: string;
  description: string;
  category: string;
  image: string;
  date: string;
  readTime: string;
  author: string;
}

@Component({
  selector: 'app-energie-blog',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './energie-blog.component.html',
  styleUrls: ['./energie-blog.component.css']
})
export class EnergieBlog {
  selectedCategory: string = 'ALL';
  searchQuery: string = '';
  currentPage: number = 1;
  
  categories = [
    { id: 'ALL', label: 'ALL' },
    { id: 'WELLNESS', label: 'WELLNESS' },
    { id: 'NUTRITION', label: 'NUTRITION' },
    { id: 'FITNESS', label: 'FITNESS' },
    { id: 'RECIPES', label: 'RECIPES' }
  ];

  // Empty array - add your blogs here
  blogPosts: BlogPost[] = [];

  get filteredPosts(): BlogPost[] {
    let filtered = this.blogPosts;
    
    if (this.selectedCategory !== 'ALL') {
      filtered = filtered.filter(post => post.category === this.selectedCategory);
    }
    
    if (this.searchQuery) {
      const query = this.searchQuery.toLowerCase();
      filtered = filtered.filter(post => 
        post.title.toLowerCase().includes(query) ||
        post.description.toLowerCase().includes(query)
      );
    }
    
    return filtered;
  }

  get totalPages(): number {
    return Math.ceil(this.filteredPosts.length / 6);
  }

  get paginatedPosts(): BlogPost[] {
    const start = (this.currentPage - 1) * 6;
    return this.filteredPosts.slice(start, start + 6);
  }

  get pageNumbers(): number[] {
    return Array.from({ length: this.totalPages }, (_, i) => i + 1);
  }

  selectCategory(category: string): void {
    this.selectedCategory = category;
    this.currentPage = 1;
  }

  goToPage(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  previousPage(): void {
    this.goToPage(this.currentPage - 1);
  }

  nextPage(): void {
    this.goToPage(this.currentPage + 1);
  }

  onImageError(event: any): void {
    event.target.src = 'https://via.placeholder.com/600x300/2c3e50/c4d82e?text=Blog+Image';
  }
}