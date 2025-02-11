"use client";
import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    quote:
      "Always reliable and on time! Their exceptional service has streamlined our operations. Highly recommended!",
    author: "Jane Doe",
    company: "ABC Manufacturing",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80",
  },
  {
    id: 2,
    quote:
      "The best service we've ever experienced. They truly understand our needs!",
    author: "John Smith",
    company: "XYZ Tech",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80",
  },
  {
    id: 3,
    quote:
      "Outstanding results every single time. A game-changer for our business!",
    author: "Sarah Johnson",
    company: "123 Industries",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80",
  },
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const currentTestimonial = testimonials[currentIndex];
  const otherImages = testimonials
    .filter((_, index) => index !== currentIndex)
    .map((t) => t.image);

  return (
    <div className="h-full bg-gray-50 flex items-center justify-center px-4 py-40">
      <div className="max-w-4xl mx-auto relative">
        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 bg-white rounded-full p-2 shadow-lg hover:bg-gray-50 transition-colors"
          aria-label="Previous testimonial"
        >
          <ChevronLeft className="w-6 h-6 text-gray-600" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 bg-white rounded-full p-2 shadow-lg hover:bg-gray-50 transition-colors"
          aria-label="Next testimonial"
        >
          <ChevronRight className="w-6 h-6 text-gray-600" />
        </button>

        <div className="text-center">
          {/* Quote Icon */}
          <div className="flex justify-center mb-6">
            <Quote className="w-12 h-12 text-red-600 transform rotate-180" />
          </div>

          {/* Testimonial Quote */}
          <blockquote className="text-3xl font-medium text-gray-900 mb-8">
            "{currentTestimonial.quote}"
          </blockquote>

          {/* Author Info */}
          <div className="flex items-center justify-center mb-8">
            <img
              src={currentTestimonial.image}
              alt={currentTestimonial.author}
              className="w-16 h-16 rounded-full object-cover border-2 border-white shadow-lg"
            />
            <div className="ml-4 text-left">
              <div className="font-semibold text-gray-900">
                —{currentTestimonial.author}
              </div>
              <div className="text-gray-600">{currentTestimonial.company}</div>
            </div>
          </div>

          {/* Other Profile Images */}
          <div className="flex justify-center gap-4">
            {otherImages.map((image, index) => (
              <img
                key={index}
                src={image}
                alt="Other testimonial"
                className="w-12 h-12 rounded-full object-cover opacity-50"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
