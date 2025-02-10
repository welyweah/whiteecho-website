
import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Newsletter = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          type="email"
          placeholder="Enter your email"
          className="w-full px-4 py-3 rounded-lg bg-white border border-primary-soft focus:outline-none focus:ring-2 focus:ring-primary-soft transition-all duration-300"
        />
        <Button
          type="submit"
          className="w-full bg-black text-white hover:bg-gray-900 transition-all duration-300 rounded-lg py-3"
        >
          Subscribe Now
        </Button>
      </form>
    </div>
  );
};

export default Newsletter;
