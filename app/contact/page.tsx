"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  Linkedin,
  Github,
  Send,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import Section from "@/components/section";
import SectionHeading from "@/components/section-heading";
import { sendContactEmail } from "@/app/actions/contact";

export default function ContactPage() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(formData: FormData) {
    setIsSubmitting(true);
    setErrorMessage("");

    try {
      console.log("Submitting contact form...");
      const result = await sendContactEmail(formData);
      console.log("Contact form submission result:", result);

      if (result.success) {
        setIsSuccess(true);

        if (result.development) {
          toast({
            title: "Message received (Development Mode)",
            description:
              "In production, this would send an email to sdmahatheer123@gmail.com",
            variant: "default",
          });
        } else {
          toast({
            title: "Message sent successfully!",
            description:
              "Thank you for your message. I'll get back to you soon.",
            variant: "default",
          });
        }
      } else {
        throw new Error(result.error || "Failed to send message");
      }
    } catch (error: any) {
      console.error("Error in contact form submission:", error);
      setErrorMessage(
        error.message ||
          "There was a problem sending your message. Please try again."
      );
      toast({
        title: "Error sending message",
        description:
          "There was a problem processing your request. Please try contacting me directly at sdmahatheer123@gmail.com",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <Section className="pt-32 md:pt-40" id="contact">
      <SectionHeading
        title="Contact Me"
        subtitle="Get in touch for collaborations, questions, or just to say hello"
        center
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-bold mb-6">Let's Talk</h3>
          <p className="text-muted-foreground mb-8">
            I'm always open to discussing new projects, creative ideas, or
            opportunities to be part of your vision.
          </p>

          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="bg-primary/10 p-3 rounded-full">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h4 className="font-medium">Email</h4>
                <a
                  href="mailto:sdmahatheer123@gmail.com"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  sdmahatheer123@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="bg-primary/10 p-3 rounded-full">
                <Phone className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h4 className="font-medium">Phone</h4>
                <a
                  href="tel:+917993604374"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  +91 7993604374
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="bg-primary/10 p-3 rounded-full">
                <Linkedin className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h4 className="font-medium">LinkedIn</h4>
                <a
                  href="www.linkedin.com/in/mahatheersyed"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  linkedin.com/in/mahatheersyed
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="bg-primary/10 p-3 rounded-full">
                <Github className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h4 className="font-medium">GitHub</h4>
                <a
                  href="https://github.com/MahatheerSyed/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  github.com/MahatheerSyed/
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          {isSuccess ? (
            <div className="bg-background rounded-lg p-8 text-center card-shadow h-full flex flex-col items-center justify-center">
              <CheckCircle className="h-16 w-16 text-green-500 mb-6" />
              <h3 className="text-2xl font-bold mb-4">Message Received!</h3>
              <p className="text-muted-foreground mb-6">
                Thank you for reaching out. I'll get back to you as soon as
                possible.
              </p>
              <Button onClick={() => setIsSuccess(false)}>
                Send Another Message
              </Button>
            </div>
          ) : (
            <form
              action={handleSubmit}
              className="bg-background rounded-lg p-8 card-shadow"
            >
              <div className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-2"
                  >
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Your name"
                    required
                    className="w-full"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-2"
                  >
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Your email address"
                    required
                    className="w-full"
                  />
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium mb-2"
                  >
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    placeholder="What is this regarding?"
                    required
                    className="w-full"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium mb-2"
                  >
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Your message"
                    required
                    className="w-full min-h-[150px]"
                  />
                </div>

                {errorMessage && (
                  <div className="flex items-start gap-2 text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/30 p-3 rounded-md text-sm">
                    <AlertCircle className="h-5 w-5 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium">
                        There was a problem sending your message
                      </p>
                      <p>{errorMessage}</p>
                      <p className="mt-1">
                        Please try contacting me directly at{" "}
                        <a
                          href="mailto:sdmahatheer123@gmail.com"
                          className="underline hover:text-amber-700 dark:hover:text-amber-300"
                        >
                          sdmahatheer123@gmail.com
                        </a>
                      </p>
                    </div>
                  </div>
                )}

                <Button
                  type="submit"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-4 w-4" /> Send Message
                    </>
                  )}
                </Button>
              </div>
            </form>
          )}
        </motion.div>
      </div>
    </Section>
  );
}
