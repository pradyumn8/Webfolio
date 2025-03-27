import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React, { useState } from "react";

export default function Contact() {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");
    const formData = new FormData(event.target);

    formData.append("access_key", "fa9eeaed-7836-45e4-9c24-e273867d43e9"); // Replace with your real Web3Forms key

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form submitted successfully!");
      event.target.reset();
    } else {
      console.log("Error:", data);
      setResult(data.message || "Something went wrong.");
    }
  };

  return (
    <div className="overflow-x-hidden">
      <div className="relative mb-8">
        <h1
          className="flex gap-4 items-center text-[1.85rem] sm:text-[2.75rem] md:text-[3rem] 
            lg:text-[3rem] leading-[56px] md:leading-[67px] lg:leading-[90px] 
            tracking-[15px] mx-auto w-fit font-extrabold about-h1"
          style={{ background: "hsl(222.2 84% 4.9%)" }}
        >
          CONTACT
          <span className="text-tubeLight-effect font-extrabold">ME</span>
        </h1>
        <span className="absolute w-full h-1 top-7 md:top-8 lg:top-11 z-[-1] bg-slate-200"></span>
      </div>

      <form onSubmit={onSubmit} className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <Label htmlFor="name" className="text-xl">Your Name</Label>
          <Input
            id="name"
            name="name"
            placeholder="Your Name"
            required
          />
        </div>

        <div className="flex flex-col gap-2">
          <Label htmlFor="email" className="text-xl">Email</Label>
          <Input
            id="email"
            type="email"
            name="email"
            placeholder="Email"
            required
          />
        </div>

        <div className="flex flex-col gap-2">
          <Label htmlFor="message" className="text-xl">Message</Label>
          <textarea
            id="message"
            name="message"
            placeholder="Your Message"
            required
            className="min-h-[120px] rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          />
        </div>

        <div className="flex justify-end">
          <Button type="submit" className="w-full sm:w-52">SEND MESSAGE</Button>
        </div>
      </form>

      <div className="text-center mt-4 text-sm text-muted-foreground">{result}</div>
    </div>
  );
}
