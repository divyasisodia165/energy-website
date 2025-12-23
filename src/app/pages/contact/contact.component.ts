import { Component, OnInit } from '@angular/core';
import { NgForm, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

interface Question {
  question: string;
  answer: string;
  isOpen: boolean;
}

interface FAQItem {
  category: string;
  isOpen: boolean;
  questions: Question[];
}

interface ContactFormData {
  gym: string;
  hearAbout: string;
  title: string;
  gender: string;
  firstName: string;
  lastName: string;
  day: string;
  month: string;
  year: string;
  email: string;
  postcode: string;
  phone: string;
  message: string;
  emailConsent: boolean;
  textConsent: boolean;
  phoneConsent: boolean;
  isMember: boolean;
}

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  // Form Data
  formData: ContactFormData = {
    gym: '',
    hearAbout: '',
    title: '',
    gender: '',
    firstName: '',
    lastName: '',
    day: '',
    month: '',
    year: '',
    email: '',
    postcode: '',
    phone: '',
    message: '',
    emailConsent: false,
    textConsent: false,
    phoneConsent: false,
    isMember: false
  };

  // Date of Birth Options
  days: number[] = Array.from({ length: 31 }, (_, i) => i + 1);
  months: string[] = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  years: number[] = [];

  // FAQ Data
  faqItems: FAQItem[] = [
    {
      category: 'All about us',
      isOpen: true,
      questions: [
        {
          question: 'What does it mean to be locally owned?',
          answer: `We're a market-leading fitness franchise group in the UK with over 80 gyms across our domestic and international territories, most of which are locally owned. By combining the power of a national brand with the passion of a local fitness gym owner, énergie is able to offer a gym experience like no other!`,
          isOpen: true
        },
        {
          question: 'What types of membership do you offer?',
          answer: 'We offer three tiers of membership, so you can choose the one that best suits you. You can also choose your ideal way to pay for your membership too – with options ranging from monthly to annually.',
          isOpen: false
        },
        {
          question: 'What is the difference between Classic, Wow and Epic memberships?',
          answer: `With our Classic membership you can be assured of a few things as standard – a great environment, top-quality equipment, passionate personal trainers, a range of inclusive classes and service that'll knock your socks off.
          <br><br>
          For a little extra per month, you can choose WOW! You'll get everything within our Classic membership, plus loads more, including free and unlimited entry to all énergie Fitness gyms nationwide, friends passes, exclusive deals and offers, access to loads more classes – including our signature YARD classes, with priority advanced booking – and access to our smart technologies.`,
          isOpen: false
        },
        {
          question: 'What is the énergie etiquette?',
          answer: `We're proud of our gyms and do our best to keep the facilities in check and our members happy, so we expect all members to adhere to the gym rules and be respectful to other members and our staff. Anyone who doesn't meet these expectations will be politely reminded of this policy and further action will be taken if necessary. <a href="#">To find out more click this link.</a>`,
          isOpen: false
        }
      ]
    },
    {
      category: 'Joining énergie Fitness',
      isOpen: false,
      questions: [
        {
          question: 'How do I sign up?',
          answer: `It's really quick and easy to join énergie Fitness. You can join online via our website or directly at any of our gyms.`,
          isOpen: false
        },
        {
          question: 'How old do I need to be to join?',
          answer: 'You need to be at least 16 years old to join énergie Fitness.',
          isOpen: false
        },
        {
          question: 'Can I come and visit the gym before joining?',
          answer: `Yes, our new gyms are open to view 2 weeks prior to their official opening. Open gyms can be visited during their opening hours. Just ring the bell and come say hi! One of our team will be delighted to give you a tour.`,
          isOpen: false
        },
        {
          question: 'Can I delay my membership start date?',
          answer: 'Yes you can. This is an option within join process.',
          isOpen: false
        },
        {
          question: 'I have a disability, can I still join?',
          answer: `Absolutely! Please get in touch with your chosen gym and one of the team will be in touch to discuss access arrangements before you arrive for your first visit.`,
          isOpen: false
        }
      ]
    },
    {
      category: 'Inside the Gym',
      isOpen: false,
      questions: [
        {
          question: 'How do I book a class?',
          answer: 'You can book classes via our Member Area.',
          isOpen: false
        },
        {
          question: 'How do I cancel a class booking?',
          answer: `You can cancel classes via our Member Area. If you cancel your membership you'll lose all your member benefits. To submit a cancellation request please fill in the form on your Membership page in your Member Area and someone from your club will be in contact with you shortly.`,
          isOpen: false
        },
        {
          question: 'How do I book a session with a Personal Trainer?',
          answer: 'You can book a session with one of our expert personal trainers by contacting them directly at your gym.',
          isOpen: false
        },
        {
          question: 'What happens if i miss a class?',
          answer: 'Some gyms operate a non-attendance policy, whereby repeated no-shows will result in a short booking ban.',
          isOpen: false
        },
        {
          question: 'Will I be shown how to use the gym equipment?',
          answer: `It's up to you! We appreciate that some members may already be clued up on how to use the equipment, however we do offer a Member Onboarding induction for new members to help those who would like a little guidance. Our staff and personal trainers are always on hand to answer any questions too!`,
          isOpen: false
        },
        {
          question: 'Where can I shower?',
          answer: 'Most of our gyms have showers. Please check the gym page on our website for more information.',
          isOpen: false
        },
        {
          question: 'Are there changing facilities and lockers?',
          answer: 'All our gyms have changing facilities and lockers.',
          isOpen: false
        },
        {
          question: 'Can I leave my stuff in lockers overnight?',
          answer: `Please don't leave anything behind in these lockers. They get a little bit stinky, and anything that's left behind will probably end up in the bin`,
          isOpen: false
        },
        {
          question: 'Can I park for free?',
          answer: 'Some of our gyms offer free parking while others offer restricted parking or no parking at all. Please check the gym page on our website for more information.',
          isOpen: false
        },
        {
          question: 'Is there free wi-fi in the gym?',
          answer: 'Most of our gyms have free wifi. Please check the gym page on our website for more information.',
          isOpen: false
        }
      ]
    },
    {
      category: 'Discounts & Promotions',
      isOpen: false,
      questions: [
        {
          question: 'How do I use a discount/promotion?',
          answer: 'Promo codes can be entered when you join online, just after you have selected your membership type, and before you enter your personal details.',
          isOpen: false
        },
        {
          question: "Why doesn't my offer code work?",
          answer: 'Offer codes do expire. Some offers are specific to gyms. Please check the gym page to check for the the latest offers.',
          isOpen: false
        },
        {
          question: 'Do you offer NHS discount?',
          answer: 'Some gyms offer discounts for NHS staff. Please get in touch with the team directly for more information.',
          isOpen: false
        },
        {
          question: 'Can I get a student discount?',
          answer: 'Some gyms offer discounts for Students. Please get in touch with the team directly for more information.',
          isOpen: false
        },
        {
          question: 'Are there any group or corporate discounts available?',
          answer: 'Some gyms offer discounts for Corporate memberships. Please get in touch with the team directly for more information.',
          isOpen: false
        },
        {
          question: 'Do I get anything for referring a friend or family member?',
          answer: `Working out is better together! If you're already a member, you can recommend a friend to énergie Fitness and if they join us, we'll reward you both with a £10/€10 voucher of your choice. All gift cards are automatically sent out as soon as your friend signs up and makes their first payment. There's no limit to how many people you can refer or how many gifts you can earn. Visit here for more details`,
          isOpen: false
        }
      ]
    },
    {
      category: 'Membership Info',
      isOpen: false,
      questions: [
        {
          question: 'Where can I find the terms and conditions?',
          answer: `To read the terms and conditions of your énergie Fitness gym membership, simply <a href="#">click this link</a>. If you have any questions regarding your membership, please contact your gym directly.`,
          isOpen: false
        },
        {
          question: "I've signed up to a gym that hasn't opened yet, can I still use my membership?",
          answer: 'Unfortunately not; until your gym is open, your membership will not be active.',
          isOpen: false
        },
        {
          question: 'What is a fixed term membership?',
          answer: `A fixed term membership is a membership for a set period of time – e.g. a 12-month fixed term membership is a membership that starts from the moment of purchase and ends 12 months later. To purchase this membership you will make a one-off payment upfront for the entire membership cost. This often saves you money in the long run and allows for better budgeting as the money has come out upfront.`,
          isOpen: false
        },
        {
          question: 'Can I restart an old membership?',
          answer: 'Yes, you can re-join here. Please note, you may still need to pay a joining fee if you are a returning member.',
          isOpen: false
        },
        {
          question: 'How can I make changes to my membership?',
          answer: 'You can change your membership package at any time by speaking directly to the team in your gym.',
          isOpen: false
        },
        {
          question: 'Are group exercise classes included?',
          answer: 'Group exercise classes are always included in Wow and Epic Memberships.',
          isOpen: false
        },
        {
          question: 'How many times can i visit?',
          answer: 'You can visit as much or as little as you like',
          isOpen: false
        },
        {
          question: 'Can I bring a guest?',
          answer: `This depends on your gym and membership package. Normally you can bring a guest for free with a Wow or Epic membership. Please check the gym page for details.`,
          isOpen: false
        },
        {
          question: 'Can I upgrade or downgrade my membership?',
          answer: 'You can change your membership package at any time by speaking directly to the team in your gym.',
          isOpen: false
        },
        {
          question: 'Can I manage my membership online?',
          answer: 'You can manage your membership and account via our Member Portal.',
          isOpen: false
        },
        {
          question: "I haven't used the gym, how can I get a refund?",
          answer: 'We do not provide refunds for unused memberships.',
          isOpen: false
        }
      ]
    },
    {
      category: 'Freezing or Cancelling',
      isOpen: false,
      questions: [
        {
          question: 'How do I cancel my membership?',
          answer: `If you cancel your membership you'll lose all your member benefits. You can cancel your membership for some gyms via the Member Area and submitting a form or by speaking directly to the team in your gym.`,
          isOpen: false
        },
        {
          question: 'What does freezing a membership mean?',
          answer: `Whether you're jetting off on holiday, recovering from an illness or injury or you're just too busy, we understand that sometimes you just need to take a break! Freezing your membership will pause your membership until you are ready to return.`,
          isOpen: false
        },
        {
          question: 'How do I freeze/unfreeze my membership?',
          answer: `To submit a freeze request please fill in the form on your My Membership page and someone from your club will be in contact with you shortly.
          <br><br>
          You can also freeze and unfreeze your membership by speaking to a member of the team directly.
          <br><br>
          Please note, if you freeze within 5 working days of your monthly payment being due, we may not be able to stop the direct debit, payment may still be taken and will not be refunded. You will be asked to pay a pro-rata portion of your monthly membership when you unfreeze so you can use the gym again straight away.`,
          isOpen: false
        }
      ]
    },
    {
      category: 'Payments',
      isOpen: false,
      questions: [
        {
          question: 'Why am I being asked to pay before the gym has opened?',
          answer: `This is to secure your membership at the reduced early bird price. Your payment will hold your membership for you, and you won't be charged again until one month after the gym opens.`,
          isOpen: false
        },
        {
          question: 'Why has my membership fee gone up?',
          answer: 'Occasionally our membership fees increase. This might be as you come to the end of a special offer period, or it might be a price increase to allow us to continue offering the top notch kit and facilities. Please contact your gym directly for more details.',
          isOpen: false
        },
        {
          question: 'What happens if one of my payments fails?',
          answer: `If a payment fails, we attempt to recollect it again a few days later. Please note, we do charge a £20 admin fee to do this. If the second attempt also fails, your membership is terminated.`,
          isOpen: false
        },
        {
          question: 'When will my first payment be taken?',
          answer: 'Your first payment is taken right away. Subsequent payments are taken on the same date each month thereafter.',
          isOpen: false
        }
      ]
    },
    {
      category: 'Other Useful Info',
      isOpen: false,
      questions: [
        {
          question: 'Why do I need to agree to the health declaration?',
          answer: `We ask all members to do this to make sure everyone's safe. when using the gym. If you have any questions you should speak to your doctor.`,
          isOpen: false
        },
        {
          question: 'Is my personal information secure?',
          answer: `Yes! We operate to the highest security levels and take the management of our member information very seriously. To find out more, take a look at our <a href="#">privacy statement</a>.`,
          isOpen: false
        },
        {
          question: 'I have forgotten something at the gym, what should I do?',
          answer: `The fastest and easiest way to retrieve lost property is to head back to the gym and speak to a member of staff. Alternatively, you can get in touch directly with your gym by using the form on this page.`,
          isOpen: false
        },
        {
          question: 'How do I make a complaint?',
          answer: `Whilst we hope that there won't be anything to cause you to complain, we understand that occasionally there might be issues that need to be addressed. You can make a complaint through the contact form on this page.`,
          isOpen: false
        }
      ]
    }
  ];

  constructor() { }

  ngOnInit(): void {
    // Generate years from current year down to 100 years ago
    const currentYear = new Date().getFullYear();
    for (let i = currentYear; i >= currentYear - 100; i--) {
      this.years.push(i);
    }
  }

  // Toggle main accordion category
  toggleAccordion(index: number): void {
    this.faqItems[index].isOpen = !this.faqItems[index].isOpen;
  }

  // Toggle individual question
  toggleQuestion(categoryIndex: number, question: Question): void {
    question.isOpen = !question.isOpen;
  }

  // Handle form submission
  onSubmit(form: NgForm): void {
    if (form.valid) {
      console.log('Form submitted:', this.formData);
      
      // Here you would typically send the data to your backend
      // Example: this.contactService.submitForm(this.formData).subscribe(...)
      
      // Show success message or navigate
      alert('Thank you for contacting us! We will get back to you shortly.');
      
      // Reset form
      form.reset();
      this.resetFormData();
    } else {
      alert('Please fill in all required fields.');
    }
  }

  // Reset form data to initial state
  private resetFormData(): void {
    this.formData = {
      gym: '',
      hearAbout: '',
      title: '',
      gender: '',
      firstName: '',
      lastName: '',
      day: '',
      month: '',
      year: '',
      email: '',
      postcode: '',
      phone: '',
      message: '',
      emailConsent: false,
      textConsent: false,
      phoneConsent: false,
      isMember: false
    };
  }
}