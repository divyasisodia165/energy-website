import { Component } from '@angular/core';

export interface Review {
  id: number;
  name: string;
  date: string;
  rating: number;
  title: string;
  content: string;
  hasReply?: boolean;
  replyDate?: string;
}

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class Reviews {
  // Sample reviews data - you can replace with real data
  reviews: Review[] = [
    {
      id: 1,
      name: 'Michelle Saycell',
      date: '11 hours ago',
      rating: 5,
      title: 'Andy on front desk is always smiling and makes you feel welcome',
      content: 'The gym is very welcoming from the minute you arrive... Andy greets you with a smile and always makes you feel...',
      hasReply: false
    },
    {
      id: 2,
      name: 'Liam Williamson',
      date: '5 days ago',
      rating: 5,
      title: 'Great first session at the gym',
      content: 'Great first session at the gym, lots of quality equipment. Cheers Niall...',
      hasReply: false
    },
    {
      id: 3,
      name: 'julie wolahan',
      date: '6 days ago',
      rating: 5,
      title: 'Welcoming and well equipped',
      content: 'I hadn\'t been in a gym for a while so I needed a bit of support. Great environment and lovely staff team, really welcoming. Matteo, in particular has been outstanding.',
      hasReply: true,
      replyDate: '2 days ago'
    },
    {
      id: 4,
      name: 'Ruth Brown',
      date: '28 November',
      rating: 5,
      title: 'This is a great gym',
      content: 'This is a great gym! All the staff are very helpful and knowledgeable. Enjoy the classes and have no gym fear using the gym!',
      hasReply: false
    },
    {
      id: 5,
      name: 'isabel',
      date: '28 November',
      rating: 5,
      title: 'Just started getting back into the gym',
      content: 'Just started getting back into the gym, and Evie one of the PT really helped me fall back in love with working out and working on my self.',
      hasReply: false
    },
    {
      id: 6,
      name: 'Zoe',
      date: '28 November',
      rating: 5,
      title: 'Great gym, equipment, classes and staff!',
      content: 'I\'ve been a member of this gym for just over a year. I think it\'s a great gym, plenty of space and equipment and a nice friendly feel. I particularly enjoy the...',
      hasReply: false
    },
    {
      id: 7,
      name: 'VB',
      date: '26 November',
      rating: 5,
      title: 'The best gym !!!',
      content: 'The best gym !!!! I prefer the classes and there is so much choice available- I enjoy the strength, cardio, spin, Clubercise & yoga. It\'s such a very...',
      hasReply: false
    },
    {
      id: 8,
      name: 'steven hill',
      date: '28 November',
      rating: 5,
      title: 'Been a member for sometime now and i...',
      content: 'Been a member for sometime now and i cam say its a brilliant gym run by a fantastic team, its very welcoming and always full of friendly faces, keep smashing it 🌟',
      hasReply: false
    },
    {
      id: 9,
      name: 'Ruth Morrison',
      date: '28 November',
      rating: 5,
      title: 'Thank you Charlotte Leech and Team énergie Fitness Hyde',
      content: 'I\'m a fairly confident gym-floor regular, but I wanted to widen what I do by adding in boxing. I was a complete beginner, and Charlotte Leech has been...',
      hasReply: false
    },
    {
      id: 10,
      name: 'Kate S',
      date: '26 November',
      rating: 5,
      title: 'I love coming here for my PT sessions',
      content: 'I love coming here for my PT sessions with Charlotte Moore. She keeps me so motivated & we always have all the equipment we need. 10/10 gym and service. Would recommend highly!',
      hasReply: false
    },
    {
      id: 11,
      name: 'Charlotte',
      date: '28 November',
      rating: 5,
      title: 'I\'ve been coming to the gym for around...',
      content: 'I\'ve been coming to the gym for around 2-3 months now. All the staff are so kind and friendly however in particular, Andy who always takes the time out to...',
      hasReply: false
    },
    {
      id: 12,
      name: 'Alexis',
      date: '26 November',
      rating: 5,
      title: 'Sydney\'s Boxing Classes Are Top-Notch',
      content: 'I joined the gym about a month ago and have done a couple of boxing sessions with Sydney. She\'s is really good, knowledgeable and makes the class...',
      hasReply: false
    },
    {
      id: 13,
      name: 'Megan',
      date: '26 November',
      rating: 5,
      title: 'Best PT & Gym',
      content: 'Charlotte M is a brilliant PT! She creates a safe, non-judgmental space, listens closely, and consistently encourages me... Which takes a lot! Charlotte is...',
      hasReply: false
    },
    {
      id: 14,
      name: 'Gillian',
      date: '18 November',
      rating: 5,
      title: 'Classes with maggie',
      content: 'Classes with maggie! Maggie has been an amazing addition to the gym! Really enjoy all her classes and her ability to push you and motivate you',
      hasReply: true,
      replyDate: '19 November'
    },
    {
      id: 15,
      name: 'LIAQUAT YOUNIS',
      date: '26 November',
      rating: 5,
      title: 'Great class with Sydney tonight..',
      content: 'Great class with Sydney tonight..',
      hasReply: false
    },
    {
      id: 16,
      name: 'Ian Barrow',
      date: '26 November',
      rating: 5,
      title: 'Really good gym',
      content: 'Really good gym, all the instructors do great classes. Luca, Sydney, Niall, Evie and the Charlottes highly recommended.',
      hasReply: true,
      replyDate: '19 November'
    },
    {
      id: 17,
      name: 'Madi',
      date: '18 November',
      rating: 5,
      title: 'classes are always great',
      content: 'classes are really enjoyable, charlotte always creates a fun and welcoming environment, she\'s there and happy to help when needed. She also has a great sense of humour so we\'re always',
      hasReply: true,
      replyDate: '19 November'
    },
    {
      id: 18,
      name: 'sarra',
      date: '15 November',
      rating: 5,
      title: 'Amazing Hyrox training',
      content: 'I have been a member here for about 4 years now and in this time I have always been encouraged by the incredible dedicated staff like Mark to push myself',
      hasReply: true,
      replyDate: '19 November'
    },
    {
      id: 19,
      name: 'Nikky G',
      date: '14 November',
      rating: 5,
      title: 'Best gym near me',
      content: 'I joined at this gym in September. I absolutely love it as I found big gyms too intimidating. This gym is not small or too big its just perfect for a shy gym goer like',
      hasReply: true,
      replyDate: '19 November'
    },
    {
      id: 20,
      name: 'Shelley Millar',
      date: '11 November',
      rating: 5,
      title: 'Knowledgeable gym staff .....',
      content: 'I\'ve been at the gym since it started but recently I needed to use the PT staff for some physio. They tailored classes to my current needs and supported me every step with equipment. Amazing.',
      hasReply: true,
      replyDate: '19 November'
    }
  ];

  // Helper method to create star rating array
  getStarArray(rating: number): boolean[] {
    return Array(5).fill(false).map((_, index) => index < rating);
  }
}