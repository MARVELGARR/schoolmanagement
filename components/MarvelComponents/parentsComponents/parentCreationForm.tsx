'use client'

import { zodResolver } from "@hookform/resolvers/zod"
import { Gender, Maritalstatus, Religion } from "@prisma/client"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Input } from "@/components/ui/input"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { cn } from "@/lib/utils"
import { format } from "date-fns"
import { CalendarIcon } from "lucide-react"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "@/components/ui/use-toast"
import UseCounter from "@/hooks/useCounter"
import FileUpload from "../fileUpload/fileUpload"

 
export const formSchema = z.object({
    gender: z.enum(['MALE', 'FEMALE', 'OTHERS']),
    middlename: z.string({
        required_error: "Middle Name is required",
      }).min(2, 
        { message: "middle name must be more that 2 characters" }).max(15, 
        { message: "middle name must not be more than 15 characters"}
    ),
    email : z.string({
        required_error: "Email is required",
    }).email(),
    phone: z.string().min(10, 
        { message: "phone must not be less than 10 characters"}).max(11,
        {message: "phone must not be greater than 11 characters"}
    ),
    yearJoined : z.date().min(new Date("1900-01-01"),
     { message: "Too old" }).max(new Date(), 
     { message: "Too young!" }),
    birthday: z.date().min(new Date("1900-01-01"),
        { message: "Too old" }).max(new Date(), 
        { message: "Too young!" }),
    address: z.string({
        required_error: "address  is required",
    }).min(10,{
        message: "Please enter a valid address"
    }),
    religion: z.enum([Religion.christain, Religion.judiasm, Religion.muslim]),

    images: z.string().optional(),
    socials: z.string().array().optional(),
    maritalstatus:z.enum([ Maritalstatus.single, Maritalstatus.married, Maritalstatus.complicated]),
    about: z.string()

})



const ParentForm = () => {

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
          middlename: "",
          gender: Gender.MALE,
          email: "",
          phone: "0",
          images: '',
          yearJoined: new Date,
          birthday: new Date,
          address: "",
          religion: Religion.christain,
          socials: [''],
          maritalstatus: Maritalstatus.single,
          about: "",
  
        }
    })

    async function onSubmit(values: z.infer<typeof formSchema>) {
        
        try{

            const NewParent = await fetch('/api/createParent', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(values)
            })
            if(NewParent.ok) {
                toast({
                    title: 'Success',
                    description: "Parent created successfully",
                    variant: "default"   
                })
                window.location.assign('/app')
            }
            else{
                toast({
                    title: 'Success',
                    description: "Parent created successfully",
                    variant: "destructive"   
                })
                console.error("Error creating student")
            }
        }
        catch(error){
            console.error("Error creating Parent", error)
        }
        console.log('sdsddsd', values)
    }

    const {handleIncrement, handleDecrement, count} = UseCounter(0, 0, 3)

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="gap-[2rem] bg-white w-full flex flex-col rounded-2xl">
                {count == 0 &&(<div className="flex flex-col   gap-[1rem]">

                    <FormField
                        control={form.control}
                        name="middlename"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>MiddleName</FormLabel>
                                <FormControl>
                                    <Input placeholder="Enter your MiddleName" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="gender"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Gender</FormLabel>
                                
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                    <FormControl>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Gender" />
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                        <SelectItem value={Gender.MALE}>{Gender.MALE}</SelectItem>
                                        <SelectItem value={Gender.FEMALE}>{Gender.FEMALE}</SelectItem>
                                        <SelectItem value={Gender.OTHERS}>{Gender.OTHERS}</SelectItem>
                                    </SelectContent>
                                </Select>
                                
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                    <Input type='email' placeholder="Enter your Email" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>)}
                { count == 1 && (<div className="flex flex-col  gap-[1rem]">

                    <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Phone</FormLabel>
                                <FormControl>
                                    <Input type='phone' placeholder="Enter your phone" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="birthday"
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
                                    disabled={(date) =>
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
                    <FormField
                        control={form.control}
                        name="yearJoined"
                        render={({ field }) => (
                            <FormItem className="flex flex-col">
                            <FormLabel>Date of Admission</FormLabel>
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
                                    disabled={(date) =>
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
                {count ==2 &&(<div className="flex flex-col  gap-[1rem]">

                    <FormField
                        control={form.control}
                        name="address"
                        render={({ field }) => (
                            <FormItem>
                            <FormLabel>Address</FormLabel>
                            <FormControl>
                                <Textarea
                                placeholder="Enter your address"
                                className="resize-none"
                                {...field}
                                />
                            </FormControl>
                            <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="religion"
                        render={({ field }) => (
                            <FormItem className="space-y-3">
                                <FormLabel>Tell us about your religion</FormLabel>
                                <FormControl>
                                    <RadioGroup
                                    onValueChange={field.onChange}
                                    defaultValue={field.value}
                                    className="flex flex-col space-y-1"
                                    >
                                        <FormItem className="flex items-center space-x-3 space-y-0">
                                            <FormControl>
                                                <RadioGroupItem value={Religion.christain} />
                                            </FormControl>
                                            <FormLabel className="font-normal">
                                                {Religion.christain}
                                            </FormLabel>
                                        </FormItem>
                                        <FormItem className="flex items-center space-x-3 space-y-0">
                                            <FormControl>
                                                <RadioGroupItem value={Religion.judiasm} />
                                            </FormControl>
                                            <FormLabel className="font-normal">
                                                {Religion.judiasm}
                                            </FormLabel>
                                        </FormItem>
                                        <FormItem className="flex items-center space-x-3 space-y-0">
                                            <FormControl>
                                            <RadioGroupItem value={Religion.muslim} />
                                            </FormControl>
                                            <FormLabel className="font-normal">{Religion.muslim}</FormLabel>
                                        </FormItem>
                                    </RadioGroup>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>)}
                {count ==3 &&(<div className="flex flex-col  gap-[1rem]">
                    
                    <FormField
                        control={form.control}
                        name="maritalstatus"
                        render={({ field }) => (
                            <FormItem className="space-y-3">
                                <FormLabel>Relationship status</FormLabel>
                                <FormControl>
                                    <RadioGroup
                                    onValueChange={field.onChange}
                                    defaultValue={field.value}
                                    className="flex flex-col space-y-1"
                                    >
                                        <FormItem className="flex items-center space-x-3 space-y-0">
                                            <FormControl>
                                                <RadioGroupItem value={Maritalstatus.single} />
                                            </FormControl>
                                            <FormLabel className="font-normal">
                                                {Maritalstatus.single}
                                            </FormLabel>
                                        </FormItem>
                                        <FormItem className="flex items-center space-x-3 space-y-0">
                                            <FormControl>
                                                <RadioGroupItem value={Maritalstatus.married} />
                                            </FormControl>
                                            <FormLabel className="font-normal">
                                                {Maritalstatus.married}
                                            </FormLabel>
                                        </FormItem>
                                        <FormItem className="flex items-center space-x-3 space-y-0">
                                            <FormControl>
                                            <RadioGroupItem value={Maritalstatus.complicated} />
                                            </FormControl>
                                            <FormLabel className="font-normal">{Maritalstatus.complicated}</FormLabel>
                                        </FormItem>
                                    </RadioGroup>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="images"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Upload your image</FormLabel>
                                <FormControl className="w-full border-2">
                                    <FileUpload
                                        value={field.value || ''}
                                        onChange={field.onChange}
                                        endpoint={"serverImage"}
                                    />
                                </FormControl>

                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="about"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>About</FormLabel>
                                <Textarea
                                placeholder="Tell us about yourself"
                                className="resize-none"
                                {...field}
                                />
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>)}
                <div className="w-full flex justify-between items-center">
                    <Button type='button' onClick={()=>handleDecrement()} className="">Back</Button>
                    <Button type='button' onClick={()=>handleIncrement()} className="">Next</Button>
                </div>
                <Button className="" type="submit">Submit</Button>
            </form>
        </Form>
    );
}
 
export default ParentForm;