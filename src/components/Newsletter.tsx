
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
          className="w-full px-4 py-3 rounded-lg bg-white border border-accent-soft focus:outline-none focus:ring-2 focus:ring-accent transition-all duration-300"
        />
        <Button
          type="submit"
          className="w-full bg-accent text-white hover:bg-accent/90 transition-all duration-300 rounded-lg py-3"
        >
          Subscribe Now
        </Button>
      </form>
    </div>
  );
};

export default Newsletter;
