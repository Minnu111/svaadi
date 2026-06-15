import React from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  phone: z.string().min(10, { message: "Please enter a valid phone number." }),
  guests: z.string({ required_error: "Please select number of guests." }),
  date: z.date({ required_error: "A date is required." }),
  time: z.string({ required_error: "Please select a time." }),
  requests: z.string().optional(),
});

export function Reservation() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      requests: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast({
      title: "Reservation Requested",
      description: "We will contact you shortly to confirm your table.",
      className: "bg-primary text-primary-foreground border-none",
    });
    form.reset();
  }

  return (
    <section id="reservation" className="py-24 md:py-32 bg-background relative overflow-hidden perspective-[1500px]">
      <div className="absolute inset-0 w-full h-full opacity-30 pointer-events-none bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/20 via-background to-background animate-[shimmer_15s_infinite_alternate]" />
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -50, rotateY: -10, z: -100 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0, z: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="bg-card/50 backdrop-blur-md p-8 md:p-12 border border-border/50 shadow-2xl rounded-sm transform-style-3d hover:-translate-y-1 transition-transform duration-500"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-[1px] bg-primary" />
              <span className="tracking-[0.2em] uppercase text-sm text-primary font-medium">Join Us</span>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
              Reserve Your Table
            </h2>
            <p className="text-muted-foreground text-lg mb-12 max-w-md">
              Experience the pinnacle of South Indian fine dining. For parties larger than 10 or private events, please contact us directly.
            </p>

            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 transform-style-3d">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem className="transition-transform focus-within:-translate-y-1 focus-within:z-10 duration-300">
                        <FormLabel className="uppercase tracking-widest text-xs text-muted-foreground">Full Name</FormLabel>
                        <FormControl>
                          <Input placeholder="John Doe" className="border-border bg-transparent focus-visible:ring-primary rounded-none h-12 shadow-sm focus-visible:shadow-[0_5px_15px_rgba(201,168,76,0.1)] transition-all" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem className="transition-transform focus-within:-translate-y-1 focus-within:z-10 duration-300">
                        <FormLabel className="uppercase tracking-widest text-xs text-muted-foreground">Phone Number</FormLabel>
                        <FormControl>
                          <Input placeholder="+91 98765 43210" className="border-border bg-transparent focus-visible:ring-primary rounded-none h-12 shadow-sm focus-visible:shadow-[0_5px_15px_rgba(201,168,76,0.1)] transition-all" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <FormField
                    control={form.control}
                    name="guests"
                    render={({ field }) => (
                      <FormItem className="transition-transform focus-within:-translate-y-1 focus-within:z-10 duration-300">
                        <FormLabel className="uppercase tracking-widest text-xs text-muted-foreground">Guests</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="border-border bg-transparent focus-visible:ring-primary rounded-none h-12 shadow-sm focus-visible:shadow-[0_5px_15px_rgba(201,168,76,0.1)] transition-all">
                              <SelectValue placeholder="Guests" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent className="rounded-none border-border">
                            {[1,2,3,4,5,6,7,8,9,10].map(n => (
                              <SelectItem key={n} value={n.toString()}>{n} {n===1?'Guest':'Guests'}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="date"
                    render={({ field }) => (
                      <FormItem className="flex flex-col justify-end transition-transform focus-within:-translate-y-1 focus-within:z-10 duration-300">
                        <FormLabel className="uppercase tracking-widest text-xs text-muted-foreground mb-3">Date</FormLabel>
                        <Popover>
                          <PopoverTrigger asChild>
                            <FormControl>
                              <Button
                                variant={"outline"}
                                className={cn(
                                  "w-full h-12 rounded-none border-border bg-transparent hover:bg-muted text-left font-normal shadow-sm focus-visible:shadow-[0_5px_15px_rgba(201,168,76,0.1)] transition-all",
                                  !field.value && "text-muted-foreground"
                                )}
                              >
                                {field.value ? (
                                  format(field.value, "PPP")
                                ) : (
                                  <span>Pick a date</span>
                                )}
                                <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                              </Button>
                            </FormControl>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0" align="start">
                            <Calendar
                              mode="single"
                              selected={field.value}
                              onSelect={field.onChange}
                              disabled={(date) =>
                                date < new Date() || date < new Date("1900-01-01")
                              }
                              initialFocus
                            />
                          </PopoverContent>
                        </Popover>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="time"
                    render={({ field }) => (
                      <FormItem className="transition-transform focus-within:-translate-y-1 focus-within:z-10 duration-300">
                        <FormLabel className="uppercase tracking-widest text-xs text-muted-foreground">Time</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="border-border bg-transparent focus-visible:ring-primary rounded-none h-12 shadow-sm focus-visible:shadow-[0_5px_15px_rgba(201,168,76,0.1)] transition-all">
                              <SelectValue placeholder="Select Time" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent className="rounded-none border-border max-h-[200px]">
                            {["19:00", "19:30", "20:00", "20:30", "21:00", "21:30", "22:00"].map(t => (
                              <SelectItem key={t} value={t}>{t}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="requests"
                  render={({ field }) => (
                    <FormItem className="transition-transform focus-within:-translate-y-1 focus-within:z-10 duration-300">
                      <FormLabel className="uppercase tracking-widest text-xs text-muted-foreground">Special Requests</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Dietary requirements, special occasions, etc." 
                          className="resize-none border-border bg-transparent focus-visible:ring-primary rounded-none min-h-[100px] shadow-sm focus-visible:shadow-[0_5px_15px_rgba(201,168,76,0.1)] transition-all"
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button 
                  type="submit" 
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-serif tracking-widest uppercase rounded-none h-14 mt-4 shadow-[0_5px_20px_rgba(201,168,76,0.2)] hover:shadow-[0_10px_30px_rgba(201,168,76,0.4)] hover:-translate-y-1 transition-all duration-300"
                >
                  Request Reservation
                </Button>
              </form>
            </Form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95, z: -50 }}
            whileInView={{ opacity: 1, scale: 1, z: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="relative h-[600px] hidden lg:block hover:scale-[1.02] transition-transform duration-700 shadow-2xl"
          >
            <img 
              src="/interior-1.png" 
              alt="Restaurant Interior" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 border-[10px] border-background mix-blend-overlay pointer-events-none" />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
