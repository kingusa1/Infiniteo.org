
'use server';

import * as z from 'zod';

// This schema should be identical to the one in ContactForm.tsx
// Or ideally, share it from a common location.
const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  company: z.string().min(2, "Company name must be at least 2 characters."),
  email: z.string().email("Please enter a valid email address."),
  phone: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters.").max(500, "Message must not exceed 500 characters."),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;

export async function handleContactSubmission(
  data: ContactFormValues
): Promise<{ success: boolean; message: string }> {
  // Server-side validation (optional if you trust client-side, but good practice)
  const validation = contactFormSchema.safeParse(data);
  if (!validation.success) {
    // This case should ideally not be hit if client-side validation is working
    console.error("Server-side validation failed:", validation.error.flatten().fieldErrors);
    return { success: false, message: "Invalid data received. Please try again." };
  }

  const validatedData = validation.data;

  // **HERE IS WHERE YOU WOULD INTEGRATE WITH YOUR BACKEND**
  // For example, send an email, save to Firebase Firestore, etc.
  // For now, we will just log it to the server console.
  // You can view these logs in the terminal where you run `npm run dev`.
  console.log("--- New Contact Form Submission ---");
  console.log("Name:", validatedData.name);
  console.log("Company:", validatedData.company);
  console.log("Email:", validatedData.email);
  console.log("Phone:", validatedData.phone || "N/A");
  console.log("Message:", validatedData.message);
  console.log("Timestamp:", new Date().toISOString());
  console.log("-----------------------------------");

  // Simulate some processing time
  await new Promise(resolve => setTimeout(resolve, 1000));

  // This message will be shown to the user in a toast.
  return {
    success: true,
    message: "Message received and logged on the server. In a real system, this would be sent to us for review.",
  };
}
