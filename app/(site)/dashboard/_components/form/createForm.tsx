
import * as z from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "@/components/ui/button"
import { format } from "date-fns"
import {  CalendarIcon } from "lucide-react"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { Input } from "@/components/ui/input"
import { toast } from "@/components/ui/use-toast"
import { cn } from "@/lib/utils"
import { Calendar } from "@/components/ui/calendar"
import UseCounter from "@/hooks/useCounter"



const formSchema = z.object({
    firstname: z.string().min(2, {
        message: "First name must be at least 2 characters.",
    }).max(15, {
        message: "firstname must be less than 15 characters"
    }),
    lastname: z.string().min(2, {
        message: "last name must be at least 2 characters.",
    }).max(15, {
        message: " lastname must be less than 15 characters"
    }),
    nickname: z.string().min(2, {
      message: "Username must be at least 2 characters.",
    }).max(10, {
        message: "nickname must be less than 10 characters.",
    }).optional(),
    date: z.date({
        required_error: "Please select a date and time",
        invalid_type_error: "That's not a date!",
    }),
    gender: z.string().min(2, {
        message: "Age must be at least 2 characters.",
    }).max(6, {
        message: "Not more than 6 characters",
    }),
    phone: z.string().min(6,{
        message: "Phone must be at least 6 characters."
    }),
    marital_status : z.enum(["Single", "Married", "Divorced", "Widowed"]),
    address : z.string().optional()
})

const CreateTeachersForm = () => {

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            firstname: "",
            lastname: "",
            nickname: "",
            address: "",
            gender: undefined,
            marital_status: "Single",
            phone: "123456",
            date: new Date(),
        },
    })

    function onSubmit(values: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        toast({
            title: "You submitted the following values:",
            description: (
              <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
                <code className="text-white">{JSON.stringify(values.date, null, 2)}</code>
              </pre>
            ),
        })
        console.log(values)
    }

    const {count, handleIncrement, handleDecrement} = UseCounter(0, 0, 1)

    return (
        <div className="w-2xl shadow-xl p-6 border-2">

            <Form {...form} >
                <form onSubmit={form.handleSubmit(onSubmit)} className=" flex w-[20rem] flex-col gap-2">
                    <div className="flex flex-col">
                        <div className="">

                            { count == 0 && (<div className="w-full">

                                <FormField
                                control={form.control}
                                name="firstname"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>FirstName</FormLabel>
                                        <FormControl>
                                            <Input placeholder="FirstName" {...field} />
                                        </FormControl>
                                        <FormDescription>
                                            
                                        </FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                                />
                                <FormField
                                control={form.control}
                                name="lastname"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>LastName</FormLabel>
                                        <FormControl>
                                            <Input placeholder="LastName" {...field} />
                                        </FormControl>
                                        <FormDescription>

                                        </FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                                />
                                <FormField
                                control={form.control}
                                name="nickname"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Nickname</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Nickname" {...field} />
                                        </FormControl>
                                        <FormDescription>

                                        </FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                                />
                                <FormField
                                control={form.control}
                                name="address"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Address</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Address" {...field} />
                                        </FormControl>
                                        <FormDescription>

                                        </FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                                />
                            </div>)}
                            { count == 1 && (<div className="w-full">
                                
                                <FormField
                                control={form.control}
                                name="gender"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Gender</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Geneder" {...field} />
                                        </FormControl>
                                        <FormDescription>

                                        </FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                                />
                                <FormField
                                control={form.control}
                                name="phone"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Phone</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Phone" {...field} />
                                        </FormControl>
                                        <FormDescription>

                                        </FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                                />
                                <FormField
                                control={form.control}
                                name="marital_status"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Relationship</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Relationship" {...field} />
                                        </FormControl>
                                        <FormDescription>

                                        </FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                                />
                                <FormField
                                control={form.control}
                                name="date"
                                render={({ field }) => (
                                    <FormItem className="flex flex-col">
                                        <FormLabel>Date of birth</FormLabel>
                                        
                                        <Popover>
                                            <PopoverTrigger asChild>
                                            <FormControl>
                                                <Button
                                                variant={"outline"}
                                                className={cn(
                                                    "w-[240px] pl-3 text-left font-normal",
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
                                                disabled={(date: Date) =>
                                                date > new Date() || date < new Date("1900-01-01")
                                                }
                                                initialFocus
                                            />
                                            </PopoverContent>
                                        </Popover>
                                        <FormDescription>
                                            Your date of birth is used to calculate your age.
                                        </FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                                />
                            </div>)}
                        </div>
                        <div className="flex justify-between items-center relative pb-10 pt-10">
                            { count > 0 &&(<Button className="absolute left-0" type='button' onClick={handleDecrement}>Back</Button>)}
                            {count < 1 &&(<Button className="absolute right-0 " type="button" onClick={handleIncrement}>Next</Button>)}
                        </div>
                    </div>
                    {count >0 && (<Button type="submit">Submit</Button>)}
                </form>
            </Form>
        </div>
    );
}
 
export default CreateTeachersForm;