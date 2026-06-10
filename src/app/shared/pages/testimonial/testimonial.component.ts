import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.scss']
})
export class TestimonialComponent implements OnInit {

  constructor() { }

 currentIndex = 0;

  testimonials = [

    {
      image: '/assets/boy IMG.jpg',
      name: 'Amit Verma',
      role: 'Marketing Head',
      text: 'Our business leads improved after working with them. Their digital strategy and execution were practical, clear, and result-focused.'
    },

    {
      image: '/assets/male2IMG.jpg',
      name: 'Rahul Sharma',
      role: 'Business Owner',
      text: 'The team delivered our website exactly as we envisioned. Their professionalism, communication, and attention to detail made the entire process smooth and stress-free.'
    },

    {
      image: '/assets/female 1IMG.jpg',
      name: 'Priya Mehta',
      role: 'Startup Founder',
      text: 'They helped us build a clean and modern digital presence. The support was quick, friendly, and very professional throughout the project.'
    },

    {
      image: '/assets/girl IMG.jpg',
      name: 'Neha Kapoor',
      role: 'Business Consultant',
      text: 'Excellent service and timely delivery. They understood our requirements properly and created a solution that matched our brand perfectly.'
    }

  ];

  ngOnInit(): void {

    setInterval(() => {

      this.currentIndex =
        (this.currentIndex + 1) % this.testimonials.length;

    }, 4000);

  }

}


